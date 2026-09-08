/**
 * Marketing plate of the active workout timer — daily-use surface.
 */
export function TimerScreenPreview() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b-2 border-[#3f6b4a] bg-[rgba(63,107,74,0.15)] px-4 py-4 text-center">
        <div className="flex items-center justify-center gap-3 text-xs font-semibold text-ink">
          <span>Set 2 of 4</span>
          <span className="font-normal text-muted">28min left</span>
        </div>
        <p className="mt-2 font-sans text-5xl font-semibold leading-none tracking-tight text-ink">
          0:45
        </p>
        <p className="mt-2 font-sans text-base font-semibold tracking-wide text-ink">
          Front Squat
        </p>
      </div>

      <div className="flex-1 space-y-3 px-4 py-4">
        <div className="rounded-md border border-rule bg-field px-3 py-3">
          <p className="text-xs text-muted">Weight</p>
          <p className="mt-0.5 font-sans text-lg font-semibold text-ink">135 lb</p>
        </div>
        <div className="rounded-md border border-rule bg-field px-3 py-3">
          <p className="text-xs text-muted">Reps</p>
          <p className="mt-0.5 font-sans text-lg font-semibold text-ink">5</p>
        </div>
        <div className="mt-auto flex gap-2 pt-6">
          <span className="inline-flex flex-1 items-center justify-center rounded-sm border border-rule py-2.5 text-sm text-ink">
            Skip
          </span>
          <span className="inline-flex flex-1 items-center justify-center rounded-sm bg-accent py-2.5 text-sm text-paper">
            Log set
          </span>
        </div>
      </div>
    </div>
  );
}
