"use server";

import {
  isValidEmail,
  parseEarlyAccessForm,
  saveEarlyAccessSignup,
} from "@/lib/early-access";

export type EarlyAccessState = {
  status: "idle" | "ok" | "invalid-email" | "error";
};

export async function submitEarlyAccess(
  _previous: EarlyAccessState,
  formData: FormData,
): Promise<EarlyAccessState> {
  const { email, goal } = parseEarlyAccessForm(formData);

  if (!isValidEmail(email)) {
    return { status: "invalid-email" };
  }

  try {
    await saveEarlyAccessSignup({
      email,
      goal,
      receivedAt: new Date().toISOString(),
    });
  } catch {
    console.error("[early-access] failed to save signup");
    return { status: "error" };
  }

  return { status: "ok" };
}
