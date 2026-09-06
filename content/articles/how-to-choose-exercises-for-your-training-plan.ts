import type { LearnArticle } from "../learn";

/**
 * Authority article #9.
 * Primary intent: how to choose exercises for a training plan
 * Thesis: name the job first, then choose the tool. A real plan fills each
 * part of the session by quality needed, equipment, tolerance, skill, and
 * progression — not a frozen template or a random shuffle. This is the
 * selection logic IOFitness is being designed around.
 */
export const exerciseSelectionArticle: LearnArticle = {
  slug: "how-to-choose-exercises-for-your-training-plan",
  title: "How to Choose Exercises for Your Training Plan",
  description:
    "Name the job first, then choose the lift. Filter by equipment, joint tolerance, skill, and progression. Do not freeze a template or shuffle an exercise bank and call it programming.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "Most workout apps do not choose exercises. They either paste the same template onto everyone with your goal tag, or they shuffle a giant exercise bank until the session looks full. The list looks decided. The decision was never real.",
    },
    {
      type: "p",
      text: "A good plan does the opposite. It names what each part of the session must train, then picks the hardest honest tool you can use today. That is how you choose exercises. It is also how IOFitness is being designed to choose them.",
    },
    {
      type: "callout",
      text: "Short version: name the job, then choose the tool. Filter by equipment, joint tolerance, skill, and progression. Keep the same lift long enough to improve it. Swap on purpose when the job, the joint, or the equipment demands it — not because a menu got bored.",
    },

    { type: "h2", text: "Stop asking \"what exercise?\"" },
    {
      type: "p",
      text: "Ask: what must this part of the session train?",
    },
    {
      type: "p",
      text: "Maybe it needs a lower-body hinge. Maybe it needs vertical pulling. Maybe it needs an easy single-leg pattern because your knee is irritable. Maybe it needs a hard pressing progression because that is the quality you are chasing this block.",
    },
    {
      type: "p",
      text: "Once you name the job, many lifts can do it. Barbell deadlift, Romanian deadlift, kettlebell hinge, cable pull-through — different tools, same family of work. Choosing among them comes second. Naming the job comes first.",
    },

    { type: "h2", text: "Use this selection stack" },
    {
      type: "p",
      text: "Choose in this order. Do not reverse it.",
    },
    {
      type: "ol",
      items: [
        "Job: what quality or pattern must this part of the session train?",
        "Equipment: what can you actually use today?",
        "Tolerance: what can you load without wrecking tomorrow?",
        "Skill: can you own the positions under fatigue?",
        "Progression: what is the clear next step from last time?",
        "Variety: do you need a fresh variation, or would a change erase useful comparison?",
      ],
    },
    {
      type: "p",
      text: "If you start with a bank of 400 exercises and sprinkle them into the week, you are working backwards. If you never leave the original list after onboarding, you are not choosing at all.",
    },

    { type: "h2", text: "\"Compound then accessories\" is not a system" },
    {
      type: "p",
      text: "\"Pick a squat, a hinge, a push, a pull, then add accessories\" can sketch a session. It cannot choose the right squat when your knee complains. It cannot decide whether today's press should chase strength or muscle. It cannot tell you when to keep the same lift so progression stays readable, or when a swap protects the week.",
    },
    {
      type: "p",
      text: "Those decisions separate a plan from a checklist. A real system answers them every time it fills the session.",
    },

    { type: "h2", text: "Keep the lift until a swap earns its place" },
    {
      type: "p",
      text: "Change the exercise when the new version still trains the quality you need, or when the old version stops working. Do not change for novelty. If you never repeat a lift long enough to improve it, variety turns into noise [1].",
    },
    {
      type: "p",
      text: "A good plan stays boring on purpose for a while. Same job. Same or closely comparable lift. Clear progression. Then it swaps when the job, the joint, or the equipment demands it.",
    },
    {
      type: "p",
      text: "When you cannot add weight on that repeated lift, progress the other levers that still count. That problem is covered in [progressive overload without adding weight](/learn/progressive-overload-without-adding-weight).",
    },

    { type: "h2", text: "When the usual lift is a bad idea, keep the job" },
    {
      type: "p",
      text: "A sore shoulder, angry knee, missing barbell, or hotel dumbbell rack should not blank that part of the session. Search for the hardest honest version of the same job.",
    },
    {
      type: "ul",
      items: [
        "Keep the quality: pressing, hinging, single-leg strength — whatever that place in the session was for",
        "Change the setup: grip, range, machine vs free weight, bilateral vs split",
        "Progress that workable version",
        "Climb back toward the original lift when the next sessions say you can",
      ],
    },
    {
      type: "p",
      text: "That is [training with a limitation](/learn/how-to-train-with-a-limitation), not \"delete upper body until you feel perfect.\" A system that only knows how to remove exercises is not choosing. It is quitting.",
    },

    { type: "h2", text: "Worked example: choose the lower-body tool" },
    {
      type: "p",
      text: "The week needs a hard lower-body strength exposure. Last month you used a back squat. This week your knee hates the bottom position, and the squat rack is busy.",
    },
    {
      type: "example",
      title: "Same job, better tool for today",
      body: [
        "Keep the job: hard bilateral or split lower-body strength",
        "Reject: force a deep back squat because the template says so",
        "Also reject: a random \"leg burnout\" circuit with no progression target",
        "Choose: high-box squat, leg press in a pain-free range, or rear-foot-elevated split squat if you can own it",
        "Log the exact version so next session can progress that setup",
        "Only later reopen the original squat range when the knee and the week allow it",
      ],
    },
    {
      type: "p",
      text: "The week still got a serious lower-body dose. You changed the tool, not the job. That is selection.",
    },

    { type: "h2", text: "How IOFitness should choose" },
    {
      type: "p",
      text: "This stack is not a vague ideal. It is the selection logic IOFitness is being designed around.",
    },
    {
      type: "ol",
      items: [
        "Fill each part of the session by the quality it must train",
        "Resolve equipment and limitations in the open, instead of pretending the original lift still fits",
        "Prefer a comparable lift so progression still means something",
        "Swap when the job, the joint, or the equipment demands it",
        "Keep progressing the version you can actually own",
      ],
    },
    {
      type: "p",
      text: "That is deeper than a personalized PDF. It is also deeper than an algorithm that only changes the weight on the same menu. If you want a broader product test, use [does your fitness app actually personalize anything](/learn/do-fitness-apps-actually-personalize-workouts).",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Name the job. Choose the tool. Filter by equipment, tolerance, skill, and progression. Keep the lift until a swap earns its place. Do not freeze a template, and do not shuffle a catalog. If you cannot say why a lift belongs in the session, you have not chosen it yet.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Kassiano exercise-variation systematic review",
      citation:
        "Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES. Does varying resistance exercises promote superior muscle hypertrophy and strength gains? A systematic review. J Strength Cond Res. 2022;36(6):1753-1762.",
      url: "https://doi.org/10.1519/JSC.0000000000004258",
      note: "Finds that systematic exercise variation can influence hypertrophy and strength adaptations, while excessive or random variation may blunt gains. Used to support deliberate, job-matched swaps over novelty shuffling.",
    },
  ],
};
