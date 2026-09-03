import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type EarlyAccessSignup = {
  email: string;
  goal?: string;
  receivedAt: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

function getServiceRoleKey(): string | undefined {
  // Prefer iofit's canonical .env.example name; accept the edge-function alias.
  return (
    process.env.SUPABASE_SERVICE_KEY?.trim() ||
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ||
    undefined
  );
}

function getSupabaseAdmin(): SupabaseClient {
  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  const serviceKey = getServiceRoleKey();

  if (!supabaseUrl || !serviceKey) {
    throw new Error("Supabase server credentials are not configured");
  }

  return createClient(supabaseUrl, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/**
 * Upsert by email. Re-submits update `updated_at` and refresh `goal` when
 * provided; an empty goal on a re-submit leaves the existing goal alone.
 */
export async function saveEarlyAccessSignup(
  signup: EarlyAccessSignup,
): Promise<{ persisted: boolean }> {
  const supabase = getSupabaseAdmin();

  const row: {
    email: string;
    goal?: string;
    updated_at: string;
  } = {
    email: signup.email,
    updated_at: signup.receivedAt,
  };

  if (signup.goal) {
    row.goal = signup.goal;
  }

  try {
    const { error } = await supabase.from("early_access_signups").upsert(row, {
      onConflict: "email",
      ignoreDuplicates: false,
    });

    if (error) {
      console.error("[early-access] persistence failed", {
        code: error.code,
      });
      throw new Error("Failed to persist early access signup");
    }
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Failed to persist early access signup"
    ) {
      throw error;
    }

    console.error("[early-access] persistence failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    throw new Error("Failed to persist early access signup");
  }

  return { persisted: true };
}
