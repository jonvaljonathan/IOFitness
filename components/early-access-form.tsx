"use client";

import { useActionState } from "react";
import {
  submitEarlyAccess,
  type EarlyAccessState,
} from "@/app/actions/early-access";
import { homepageCopy } from "@/content/homepage";

const initialState: EarlyAccessState = { status: "idle" };

type EarlyAccessFormProps = {
  id?: string;
};

export function EarlyAccessForm({ id = "early-access" }: EarlyAccessFormProps) {
  const copy = homepageCopy.earlyAccess;
  const [state, action, pending] = useActionState(submitEarlyAccess, initialState);
  const isSuccess = state.status === "ok";
  const isInvalid = state.status === "invalid-email";
  const isError = state.status === "error";

  return (
    <div className="rounded-sm border border-rule bg-field p-5 sm:p-6">
      {isSuccess ? (
        <p className="text-base text-ink" role="status">
          {copy.success}
        </p>
      ) : (
        <form action={action} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-email`} className="text-sm text-muted">
              {copy.emailLabel}
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder={copy.emailPlaceholder}
              aria-invalid={isInvalid || undefined}
              aria-describedby={isInvalid ? `${id}-email-error` : undefined}
              className="min-h-12 w-full rounded-sm border border-rule bg-paper px-3 text-base text-ink outline-none placeholder:text-muted/70 focus:border-accent"
            />
            {isInvalid ? (
              <p id={`${id}-email-error`} className="text-sm text-accent" role="alert">
                {copy.invalidEmail}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-goal`} className="text-sm text-muted">
              {copy.goalLabel}
            </label>
            <input
              id={`${id}-goal`}
              name="goal"
              type="text"
              maxLength={500}
              placeholder={copy.goalPlaceholder}
              className="min-h-12 w-full rounded-sm border border-rule bg-paper px-3 text-base text-ink outline-none placeholder:text-muted/70 focus:border-accent"
            />
          </div>

          {isError ? (
            <p className="text-sm text-accent" role="alert">
              {copy.error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="min-h-12 w-full rounded-sm bg-accent px-4 text-base text-paper hover:bg-accent-hover disabled:opacity-70 sm:w-auto sm:self-start"
          >
            {pending ? "Sending…" : copy.submit}
          </button>

          <p className="text-xs leading-relaxed text-muted/80">{copy.consent}</p>
        </form>
      )}
    </div>
  );
}
