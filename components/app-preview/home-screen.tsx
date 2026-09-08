/**
 * Marketing plate of the D1 home screen — mirrors iofit chrome, not live data.
 */
export function HomeScreenPreview() {
  return (
    <div className="flex h-full flex-col px-4 pb-3 pt-2">
      <p className="font-display text-[1.35rem] leading-none text-accent">IOFitness</p>
      <p className="mt-2 font-sans text-2xl font-semibold tracking-tight text-ink">Hey Jon</p>
      <p className="mt-1 text-sm leading-5 text-muted">Get better — from wherever you are.</p>

      <div className="mt-4 rounded-md border border-rule bg-field p-4">
        <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-accent uppercase">
          Next Up
        </p>
        <p className="mt-1 font-sans text-xl font-semibold leading-tight tracking-tight text-ink">
          Lower Body Strength
        </p>
        <p className="mt-1 text-sm text-muted">Week 2 · Workout 3 of 4</p>
        <div className="mt-3 flex gap-2">
          <span className="inline-flex flex-1 items-center justify-center rounded-sm bg-accent px-2 py-2.5 text-center text-sm text-paper">
            Start Workout
          </span>
          <span className="inline-flex items-center justify-center rounded-sm border border-rule px-3 py-2.5 text-sm text-ink">
            Skip
          </span>
        </div>
      </div>

      <div className="mt-3 rounded-md border border-rule bg-field p-3">
        <p className="font-sans text-sm font-semibold text-ink">Your Activity</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-muted">This week</span>
          <span className="flex flex-1 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full border border-rule bg-paper" />
            <span className="h-2.5 w-2.5 rounded-full border border-rule bg-paper" />
          </span>
          <span className="text-xs text-muted">2/4</span>
        </div>
        <div className="mt-3 flex justify-between border-t border-rule pt-3 text-center">
          <div className="flex-1">
            <p className="font-sans text-lg font-semibold text-ink">7</p>
            <p className="text-[0.65rem] text-muted">last 30 days</p>
          </div>
          <div className="w-px bg-rule" />
          <div className="flex-1">
            <p className="font-sans text-lg font-semibold text-ink">3</p>
            <p className="text-[0.65rem] text-muted">week streak</p>
          </div>
          <div className="w-px bg-rule" />
          <div className="flex-1">
            <p className="font-sans text-sm font-semibold text-ink">Yesterday</p>
            <p className="text-[0.65rem] text-muted">last workout</p>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-rule pt-2">
        <div className="flex justify-around text-[0.65rem] text-muted">
          <span className="font-semibold text-accent">Home</span>
          <span>Exercises</span>
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}
