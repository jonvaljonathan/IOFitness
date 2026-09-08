import type { ReactNode } from "react";

type ProductPhoneProps = {
  children: ReactNode;
  /** Accessible name for the preview as a whole */
  label: string;
  className?: string;
};

/**
 * Quiet matte phone chrome for product UI plates.
 * No glow, no photography, no floating badges — paper + thin rule only.
 */
export function ProductPhone({ children, label, className = "" }: ProductPhoneProps) {
  return (
    <figure
      aria-label={label}
      className={`mx-auto w-[min(100%,17.5rem)] sm:w-[19rem] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-rule bg-field shadow-none">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[0.65rem] tracking-wide text-muted">
          <span>9:41</span>
          <span className="flex items-center gap-1" aria-hidden="true">
            <span className="inline-block h-1.5 w-3 rounded-sm bg-muted/50" />
            <span className="inline-block h-2 w-3 rounded-sm border border-muted/60" />
          </span>
        </div>
        <div className="min-h-[28rem] bg-paper sm:min-h-[30rem]">{children}</div>
        {/* Home indicator */}
        <div className="flex justify-center bg-paper pb-2 pt-1" aria-hidden="true">
          <span className="h-1 w-24 rounded-full bg-rule" />
        </div>
      </div>
    </figure>
  );
}
