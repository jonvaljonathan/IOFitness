/**
 * Marketing plate of Adapt / This hurt — product differentiator vs template apps.
 */
export function AdaptSheetPreview() {
  return (
    <div className="flex h-full flex-col bg-paper">
      <div className="flex-1 px-4 pt-3 opacity-40">
        <p className="text-xs tracking-[0.1em] text-muted uppercase">Set 2 of 3</p>
        <p className="mt-6 text-center font-sans text-4xl font-semibold text-ink">0:42</p>
        <p className="mt-2 text-center text-sm font-semibold tracking-wide text-ink">
          Romanian Deadlift
        </p>
      </div>

      <div className="rounded-t-2xl border border-rule border-b-0 bg-field px-4 pb-4 pt-3">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-rule" aria-hidden="true" />
        <p className="font-sans text-base font-semibold text-ink">This hurt</p>
        <p className="mt-1 text-sm leading-5 text-muted">
          Pick an easier option. We&apos;ll rebuild the next sessions from your choice.
        </p>

        <div className="mt-3 space-y-2">
          <div className="rounded-md border border-accent bg-accent/10 px-3 py-2.5">
            <p className="text-[0.65rem] font-semibold tracking-wide text-accent uppercase">
              Recommended
            </p>
            <p className="mt-0.5 font-sans text-sm font-semibold text-ink">Hip Hinge Hold</p>
            <p className="text-xs text-muted">Nearest easier hinge in your series</p>
          </div>
          <div className="rounded-md border border-rule bg-paper px-3 py-2.5">
            <p className="font-sans text-sm font-semibold text-ink">Wall Drill</p>
            <p className="text-xs text-muted">Pattern still intact, less load</p>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <span className="inline-flex flex-1 items-center justify-center rounded-sm bg-accent px-2 py-2.5 text-center text-sm text-paper">
            Use this
          </span>
          <span className="inline-flex items-center justify-center rounded-sm border border-rule px-3 py-2.5 text-sm text-ink">
            Keep going
          </span>
        </div>
      </div>
    </div>
  );
}
