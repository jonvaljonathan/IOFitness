import type { LearnArticle } from "../learn";

/**
 * Expectations cluster.
 * Primary intent: how long to follow a plan before changing it
 * Thesis: most plans die from impatience, not from being wrong. Give a matched
 * plan enough weeks to produce a trend. Change when the evidence says so, not
 * when one session feels flat.
 */
export const followPlanBeforeChangingArticle: LearnArticle = {
  slug: "how-long-to-follow-a-plan-before-you-change-it",
  title: "How Long to Follow a Plan Before You Change It",
  description:
    "Most plans get abandoned too early. Give a matched plan enough weeks to show a trend. Change when adherence, recovery, or progress evidence says so — not after one flat session.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "A plan can be wrong. More often, it is unfinished. People change programs because week three felt boring, one lift stalled, or a friend started something new. Then they never stay with one setup long enough to learn whether it worked.",
    },
    {
      type: "p",
      text: "If you want better judgment, separate setup time from verdict time. First confirm you can follow the plan. Then look for a trend. Then decide.",
    },
    {
      type: "callout",
      text: "Short version: spend the first weeks proving adherence and technique. Use roughly 6 to 12 weeks, when the goal and conditions match, before calling the whole plan a failure. Change earlier if the plan is clearly unlivable or unsafe. Do not change just because motivation dipped.",
    },

    { type: "h2", text: "Week one is not a verdict" },
    {
      type: "p",
      text: "Early sessions teach the movements, expose schedule friction, and show whether the dose leaves you able to come back tomorrow. That is useful data. It is not enough data to condemn the whole block.",
    },
    {
      type: "p",
      text: "If the first week wrecks you, shrink the dose. That is an adjustment, not proof you need a brand-new identity. The habit logic still applies: [start a training habit](/learn/start-a-training-habit).",
    },

    { type: "h2", text: "A practical timeline for judgment" },
    {
      type: "ul",
      items: [
        "Weeks 1 to 2: can you show up, recover, and repeat the week?",
        "Weeks 3 to 4: are loads, reps, or session quality stabilizing?",
        "Weeks 6 to 12: is there a real trend toward the primary goal?",
      ],
    },
    {
      type: "p",
      text: "Muscle and fat-loss goals especially need that longer window. See [what to expect when you're building muscle](/learn/what-to-expect-when-youre-building-muscle) and [what to expect when you're losing fat](/learn/what-to-expect-when-youre-losing-fat).",
    },

    { type: "h2", text: "Change sooner when these are true" },
    {
      type: "ul",
      items: [
        "You cannot adhere to the schedule even after simplifying it",
        "Pain or recovery problems keep getting worse across sessions",
        "The plan ignores a fixed life constraint like weekend sport or travel",
        "The stated goal and the food conditions do not match",
      ],
    },
    {
      type: "p",
      text: "Those are structural mismatches. Staying loyal to a plan that cannot fit your life is not discipline. It is denial.",
    },

    { type: "h2", text: "Stay longer when these are true" },
    {
      type: "ul",
      items: [
        "You are completing most sessions",
        "Key lifts are stable or slowly improving",
        "The primary goal and intake still agree",
        "The only complaint is impatience or boredom",
      ],
    },
    {
      type: "example",
      title: "Impatience versus evidence",
      body: [
        "Impatience: \"I do not look different after 18 days, so I need a new program\"",
        "Evidence: \"I have completed 10 of 12 sessions, squat added reps twice, weight is trending with the goal\"",
        "Action under impatience: shop for novelty",
        "Action under evidence: keep going and reassess at a planned checkpoint",
      ],
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful plan should include checkpoints, not vibes. It should allow small adjustments early, protect enough continuity to create a trend, and only trigger a bigger rewrite when the evidence says the current setup cannot work.",
    },
    {
      type: "p",
      text: "IOFitness is built around that kind of patience with teeth: enough continuity for progress, without freezing a bad plan forever or reinventing the program every quiet Wednesday.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Follow a matched plan long enough to create a trend. Adjust early when life or recovery demands it. Do not confuse boredom with evidence. Most good plans look ordinary in the middle and obvious in hindsight.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Kiely periodization and planning perspective",
      citation:
        "Kiely J. Periodization paradigms in the 21st century: evidence-led or tradition-driven? Int J Sports Physiol Perform. 2012;7(3):242-250.",
      url: "https://doi.org/10.1123/ijspp.7.3.242",
      note: "Discusses planning, adaptation, and the limits of rigid tradition-driven periodization. Used to support evidence-guided continuity and planned evaluation rather than constant novelty-seeking or one-week verdicts.",
    },
  ],
};
