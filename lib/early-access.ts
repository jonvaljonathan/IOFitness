import { Resend, type ErrorResponse } from "resend";

export type EarlyAccessSignup = {
  email: string;
  goal?: string;
  receivedAt: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GOAL_PROPERTY_KEY = "early_access_goal";

let goalPropertyReady: Promise<void> | null = null;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value) && value.length <= 254;
}

export function parseEarlyAccessForm(formData: FormData): {
  email: string;
  goal?: string;
} {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const goal = String(formData.get("goal") ?? "").trim();

  return {
    email,
    goal: goal.length > 0 ? goal.slice(0, 500) : undefined,
  };
}

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return new Resend(apiKey);
}

function getEarlyAccessSegmentId(): string | undefined {
  const segmentId = process.env.RESEND_EARLY_ACCESS_SEGMENT_ID?.trim();
  return segmentId || undefined;
}

function logResendFailure(context: string, error: ErrorResponse): void {
  console.error(`[early-access] ${context}`, {
    name: error.name,
    statusCode: error.statusCode,
  });
}

function failPersistence(context: string, error: ErrorResponse): never {
  logResendFailure(context, error);
  throw new Error("Failed to persist early access signup");
}

function isNotFoundError(error: ErrorResponse | null | undefined): boolean {
  return error?.name === "not_found" || error?.statusCode === 404;
}

function isConflictOrDuplicateError(
  error: ErrorResponse | null | undefined,
): boolean {
  if (!error) {
    return false;
  }

  if (error.statusCode === 409 || error.statusCode === 422) {
    return true;
  }

  const message = error.message.toLowerCase();
  return (
    message.includes("already exists") ||
    message.includes("already exist") ||
    message.includes("already been") ||
    message.includes("already a member") ||
    message.includes("already in") ||
    message.includes("duplicate")
  );
}

async function ensureGoalProperty(resend: Resend): Promise<void> {
  if (!goalPropertyReady) {
    goalPropertyReady = (async () => {
      const listed = await resend.contactProperties.list();

      if (listed.error) {
        failPersistence("list contact properties", listed.error);
      }

      const exists = listed.data.data.some(
        (property) => property.key === GOAL_PROPERTY_KEY,
      );

      if (exists) {
        return;
      }

      const created = await resend.contactProperties.create({
        key: GOAL_PROPERTY_KEY,
        type: "string",
        fallbackValue: "",
      });

      if (created.error && !isConflictOrDuplicateError(created.error)) {
        failPersistence("create contact property", created.error);
      }
    })().catch((error) => {
      goalPropertyReady = null;
      throw error;
    });
  }

  await goalPropertyReady;
}

async function updateExistingContact(
  resend: Resend,
  email: string,
  goal: string | undefined,
  segmentId: string | undefined,
): Promise<void> {
  if (goal) {
    await ensureGoalProperty(resend);

    const updated = await resend.contacts.update({
      email,
      properties: {
        [GOAL_PROPERTY_KEY]: goal,
      },
    });

    if (updated.error) {
      failPersistence("update contact", updated.error);
    }
  }

  if (segmentId) {
    const added = await resend.contacts.segments.add({
      email,
      segmentId,
    });

    if (added.error && !isConflictOrDuplicateError(added.error)) {
      failPersistence("add contact to segment", added.error);
    }
  }
}

export async function saveEarlyAccessSignup(
  signup: EarlyAccessSignup,
): Promise<{ persisted: boolean }> {
  const resend = getResendClient();
  const segmentId = getEarlyAccessSegmentId();
  const properties = signup.goal
    ? { [GOAL_PROPERTY_KEY]: signup.goal }
    : undefined;

  if (properties) {
    await ensureGoalProperty(resend);
  }

  const existing = await resend.contacts.get({ email: signup.email });

  if (existing.data) {
    await updateExistingContact(
      resend,
      signup.email,
      signup.goal,
      segmentId,
    );
    return { persisted: true };
  }

  if (existing.error && !isNotFoundError(existing.error)) {
    failPersistence("get contact", existing.error);
  }

  const created = await resend.contacts.create({
    email: signup.email,
    unsubscribed: false,
    ...(properties ? { properties } : {}),
    ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
  });

  if (created.error) {
    if (!isConflictOrDuplicateError(created.error)) {
      failPersistence("create contact", created.error);
    }

    await updateExistingContact(
      resend,
      signup.email,
      signup.goal,
      segmentId,
    );
  }

  return { persisted: true };
}
