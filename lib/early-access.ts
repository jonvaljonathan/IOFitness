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

export async function saveEarlyAccessSignup(
  signup: EarlyAccessSignup,
): Promise<{ persisted: boolean }> {
  const webhookUrl = process.env.EARLY_ACCESS_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signup),
    });

    if (!response.ok) {
      throw new Error(`Early access webhook failed with ${response.status}`);
    }

    return { persisted: true };
  }

  console.info("[early-access] signup received, persistence not connected", {
    email: signup.email,
    hasGoal: Boolean(signup.goal),
    receivedAt: signup.receivedAt,
  });

  return { persisted: false };
}
