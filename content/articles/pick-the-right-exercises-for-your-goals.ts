import type { LearnArticle } from "../learn";

/**
 * Authority article #9.
 * Primary intent: pick the right exercises for your goals
 * Thesis: start from the outcome you want — ski, grandkids, injury capacity,
 * bathing-suit confidence — then choose lifts that build the qualities that
 * outcome needs. Name the job, pick the tool, filter by equipment/tolerance/
 * skill/progression. This is the selection logic IOFitness is built
 * around.
 */
export const exerciseSelectionArticle: LearnArticle = {
  slug: "pick-the-right-exercises-for-your-goals",
  title: "Pick the Right Exercises for Your Goals",
  description:
    "Start from the outcome you want — ski season, picking up grandkids, rebuilding after a setback, looking better in a swimsuit — then pick lifts that build the qualities that goal needs. Do not start from a random exercise menu.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "You do not want a prettier workout PDF. You want to ski hard in February, pick up your grandkids without thinking twice, get past that shoulder that keeps derailing pressing, or look better in a swimsuit. Those are goals. Exercises are just tools for getting there.",
    },
    {
      type: "p",
      text: "Most apps skip that step. They stick a goal tag on a template, or shuffle an exercise bank until the session looks full. You get squat, bench, row, curls — and no clear line from those lifts to the life you actually want.",
    },
    {
      type: "callout",
      text: "Short version: start from the outcome. Translate it into qualities you need. Pick the hardest honest lifts that build those qualities with the equipment and joints you have today. Keep them long enough to improve. Swap when the goal, the joint, or the gym demands it.",
    },

    { type: "h2", text: "Start from the outcome, not the exercise list" },
    {
      type: "p",
      text: "\"What exercise should I do?\" is the wrong first question. Ask what you want to become able to do.",
    },
    {
      type: "ul",
      items: [
        "Ski or hike without your legs quitting on day two",
        "Pick up kids or groceries without guessing and hoping",
        "Rebuild capacity after a setback instead of parking that quality forever",
        "Add muscle and shape where you care about how you look",
        "Stay useful in a weekend sport without arriving wrecked",
      ],
    },
    {
      type: "p",
      text: "Each outcome needs specific qualities: single-leg strength, hinging power, pressing capacity, muscle in the right places, conditioning that leaves something in the tank. The plan should choose exercises because they serve those qualities — not because they look like a standard gym day.",
    },

    { type: "h2", text: "Translate the goal into jobs, then pick tools" },
    {
      type: "p",
      text: "Once you know the outcome, break it into jobs for the week.",
    },
    {
      type: "p",
      text: "Want stronger legs for skiing? You need hard lower-body strength, single-leg control, and enough conditioning that powder days do not bury you. Want to look better in a swimsuit? You need progressive muscle work in the places that matter, not random machine circuits. Want to get over a pressing limitation? You need a pressing version you can load and improve, not a permanent ban on upper-body training.",
    },
    {
      type: "p",
      text: "Only after you name the job do you pick the lift. Barbell deadlift, Romanian deadlift, kettlebell hinge, cable pull-through — different tools, same family of work. Choosing among them comes second.",
    },

    { type: "h2", text: "Use this selection stack" },
    {
      type: "p",
      text: "Choose in this order. Do not reverse it.",
    },
    {
      type: "ol",
      items: [
        "Outcome: what do you want to become able to do?",
        "Job: what quality or pattern must this part of the session train for that outcome?",
        "Equipment: what can you actually use today?",
        "Tolerance: what can you load without wrecking tomorrow?",
        "Skill: can you own the positions under fatigue?",
        "Progression: what is the clear next step from last time?",
        "Variety: do you need a fresh variation, or would a change erase useful comparison?",
      ],
    },
    {
      type: "p",
      text: "If you start with a bank of 400 exercises and sprinkle them into the week, you are working backwards. If the app never leaves the original list after onboarding, it is not choosing for your goals at all.",
    },

    { type: "h2", text: "A body-part split is not a goal" },
    {
      type: "p",
      text: "\"Chest and tris,\" \"leg day,\" or \"compound then accessories\" can sketch a session. They do not tell you which squat keeps ski legs progressing when your knee complains. They do not tell you whether today's press should build muscle or protect a cranky shoulder. They do not tell you when to keep the same lift so progression stays readable.",
    },
    {
      type: "p",
      text: "Those decisions separate a goal-driven plan from a checklist. A real system answers them every time it fills the session.",
    },

    { type: "h2", text: "Keep the lift until a swap earns its place" },
    {
      type: "p",
      text: "Change the exercise when the new version still serves the goal, or when the old version stops working. Do not change for novelty. If you never repeat a lift long enough to improve it, variety turns into noise [1].",
    },
    {
      type: "p",
      text: "A good plan stays boring on purpose for a while. Same outcome. Same job. Same or closely comparable lift. Clear progression. Then it swaps when the goal, the joint, or the equipment demands it.",
    },
    {
      type: "p",
      text: "When you cannot add weight on that repeated lift, progress the other levers that still count. That problem is covered in [progressive overload without adding weight](/learn/progressive-overload-without-adding-weight).",
    },

    { type: "h2", text: "When the usual lift is a bad idea, keep the goal" },
    {
      type: "p",
      text: "A sore shoulder, angry knee, missing barbell, or hotel dumbbell rack should not delete the quality your goal still needs. Search for the hardest honest version of the same job.",
    },
    {
      type: "ul",
      items: [
        "Keep the quality the outcome needs: pressing, hinging, single-leg strength, muscle where it matters",
        "Change the setup: grip, range, machine vs free weight, bilateral vs split",
        "Progress that workable version",
        "Climb back toward the original lift when the next sessions say you can",
      ],
    },
    {
      type: "p",
      text: "That is [training with a limitation](/learn/how-to-train-with-a-limitation), not \"wait until everything feels perfect.\" A system that only knows how to remove exercises is not serving your goals. It is quitting on them.",
    },

    { type: "h2", text: "Worked example: ski legs with a cranky knee" },
    {
      type: "p",
      text: "Goal: ski hard in eight weeks. The week needs a hard lower-body strength exposure. Last month you used a back squat. This week your knee hates the bottom position, and the squat rack is busy.",
    },
    {
      type: "example",
      title: "Same goal, better tool for today",
      body: [
        "Keep the outcome: stronger, more durable legs for skiing",
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
      text: "You still trained for skiing. You changed the tool, not the goal. That is selection.",
    },

    { type: "h2", text: "How a good plan chooses exercises" },
    {
      type: "p",
      text: "IOFitness is built around that selection logic: start from what you want to become able to do, turn that into weekly jobs, then pick lifts you can actually progress.",
    },
    {
      type: "ol",
      items: [
        "Anchor the plan to real outcomes, not a generic split label",
        "Fill each part of the session by the quality that outcome needs",
        "Resolve equipment and limitations in the open",
        "Prefer a comparable lift so progression still means something",
        "Swap when the goal, the joint, or the equipment demands it",
        "Keep progressing the version you can own",
      ],
    },
    {
      type: "p",
      text: "That is deeper than a personalized PDF. It is also deeper than an algorithm that only changes the weight on the same menu. If you want a broader product test, use [does your fitness app actually personalize anything](/learn/do-fitness-apps-actually-personalize-workouts).",
    },

    {
      type: "p",
      text: "If you are still stuck at \"I do not even know where to start,\" build the habit first. That New Year case is covered in [start a training habit](/learn/start-a-training-habit). Come back to finer exercise matching once you are already someone who trains.",
    },
    {
      type: "p",
      text: "If the harder problem is the goal itself — too many outcomes, too little time, timelines that fight biology — start with [how to set goals that match real timelines](/learn/how-to-set-goals-that-match-real-timelines) before you refine the exercise menu.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Pick exercises for the life you want, not for a prettier template. Start from the outcome. Translate it into jobs. Choose the hardest honest tools you can progress. Keep them until a swap earns its place. If you cannot say how a lift serves the goal, you have not picked the right exercise yet.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Kassiano exercise-variation systematic review",
      citation:
        "Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES. Does varying resistance exercises promote superior muscle hypertrophy and strength gains? A systematic review. J Strength Cond Res. 2022;36(6):1753-1762.",
      url: "https://doi.org/10.1519/JSC.0000000000004258",
      note: "Finds that systematic exercise variation can influence hypertrophy and strength adaptations, while excessive or random variation may blunt gains. Used to support deliberate, goal-serving swaps over novelty shuffling.",
    },
  ],
};
