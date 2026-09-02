import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

export type EarlyAccessSignup = {
  email: string;
  goal?: string;
  receivedAt: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let schemaReady: Promise<void> | null = null;

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

function getSql(): NeonQueryFunction<false, false> {
  const databaseUrl = process.env.DATABASE_URL?.trim();

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  return neon(databaseUrl);
}

async function ensureSchema(sql: NeonQueryFunction<false, false>): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS early_access_signups (
          id BIGSERIAL PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          goal TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }

  await schemaReady;
}

export async function saveEarlyAccessSignup(
  signup: EarlyAccessSignup,
): Promise<{ persisted: boolean }> {
  const sql = getSql();

  try {
    await ensureSchema(sql);

    await sql`
      INSERT INTO early_access_signups (email, goal, created_at, updated_at)
      VALUES (
        ${signup.email},
        ${signup.goal ?? null},
        ${signup.receivedAt}::timestamptz,
        ${signup.receivedAt}::timestamptz
      )
      ON CONFLICT (email) DO UPDATE SET
        goal = COALESCE(EXCLUDED.goal, early_access_signups.goal),
        updated_at = EXCLUDED.updated_at
    `;
  } catch (error) {
    console.error("[early-access] database persistence failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    throw new Error("Failed to persist early access signup");
  }

  return { persisted: true };
}
