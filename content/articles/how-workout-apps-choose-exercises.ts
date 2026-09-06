import type { LearnArticle } from "../learn";

/**
 * Authority article #9.
 * Primary intent: how workout apps choose exercises
 * Thesis: good selection is a system — job, movement pattern, equipment,
 * tolerance, progression tier, variety — not "compound then accessories."
 * Most apps hide a thin menu behind personalized language.
 */
export const exerciseSelectionArticle: LearnArticle = {
  slug: "how-workout-apps-choose-exercises",
  title: "How Workout Apps Choose Exercises (and Why Most Get It Wrong)",
  description:
    "A good exercise choice answers what job that place in the session needs, what you can load today, and what should progress next. Most apps either freeze a fixed list or shuffle randomly. Here is the decision system behind a better pick.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "Open a workout app and you get a list: squat, bench, row, some curls, maybe a plank. It looks decided. Usually it is not. Either the same template was waiting for everyone with your goal tag, or the app shuffled a big exercise bank until the session looked full.",
    },
    {
      type: "p",
      text: "Neither is how a good coach picks lifts. A coach asks what quality this part of the session is supposed to train, what equipment and joints you have today, what you did last time, and what the next honest step is. That is selection. Everything else is menu design.",
    },
    {
      type: "callout",
      text: "Short version: an exercise should earn its place by doing a job. Start from the job, then filter by equipment, joint tolerance, skill, and progression. Random variety and frozen templates both fail that test. If an app cannot explain why this lift is here, it probably cannot swap it intelligently either.",
    },

    { type: "h2", text: "The real question is not \"what exercise?\"" },
    {
      type: "p",
      text: "The real question is: what is this place in the session trying to do?",
    },
    {
      type: "p",
      text: "Maybe it needs a lower-body hinge. Maybe it needs vertical pulling. Maybe it needs an easy single-leg pattern because your knee is irritable. Maybe it needs a hard pressing progression because that is the quality you are chasing this block.",
    },
    {
      type: "p",
      text: "Once you know the job, many exercises can fill it. Barbell deadlift, Romanian deadlift, hip hinge with a kettlebell, cable pull-through — different tools, same family of work. Choosing among them is secondary. Naming the job comes first.",
    },

    { type: "h2", text: "A sane selection stack" },
    {
      type: "p",
      text: "Think of exercise choice as a short stack of filters, not a vibe.",
    },
    {
      type: "ol",
      items: [
        "Job: what quality or pattern does this part of the session need?",
        "Equipment: what can you actually use today?",
        "Tolerance: what can you load without turning tomorrow into damage control?",
        "Skill and readiness: can you own the positions under fatigue?",
        "Progression: is there a clear next step from last time?",
        "Variety: do you need a fresh variation, or would changing now erase useful comparison?",
      ],
    },
    {
      type: "p",
      text: "That order matters. Apps that start with \"here are 400 exercises\" and sprinkle them into the week are working backwards. Apps that never leave the original list are not selecting at all after onboarding.",
    },

    { type: "h2", text: "Why \"compound then accessories\" is not enough" },
    {
      type: "p",
      text: "Consumer advice often stops at: pick a squat, a hinge, a push, a pull, then add accessories. As a rough session shape, fine. As a selection system, thin.",
    },
    {
      type: "p",
      text: "It does not tell you which squat when your knee is cranky. It does not tell you whether today's press should be a strength exposure or a hypertrophy exposure. It does not tell you when to keep the same lift so progression stays readable, or when a swap protects the week. Those are the decisions that separate a plan from a checklist.",
    },

    { type: "h2", text: "Variation is a tool, not a personality trait" },
    {
      type: "p",
      text: "Changing exercises can help when the new version still trains the thing you care about, or when the old version is no longer tolerable. Changing for novelty can also blunt progress if you never repeat anything long enough to improve it [1].",
    },
    {
      type: "p",
      text: "So a good system is boring on purpose for a while. Same job. Same or closely comparable lift. Clear progression. Then a deliberate swap when the job, the joint, or the equipment demands it — not because the algorithm got restless.",
    },
    {
      type: "p",
      text: "When you cannot add weight on that repeated lift, progression still has other levers. That problem is covered in [progressive overload without adding weight](/learn/progressive-overload-without-adding-weight).",
    },

    { type: "h2", text: "What should happen when the usual lift is a bad idea" },
    {
      type: "p",
      text: "A sore shoulder, angry knee, missing barbell, or hotel dumbbell rack should not blank that part of the session. It should trigger a search for the hardest honest version of the same job.",
    },
    {
      type: "ul",
      items: [
        "Keep the quality: pressing, hinging, single-leg strength, whatever that place in the session was for",
        "Change the setup: grip, range, machine vs free weight, bilateral vs split",
        "Keep progressing that workable version",
        "Climb back toward the original lift when the evidence says you can",
      ],
    },
    {
      type: "p",
      text: "That is [training with a limitation](/learn/how-to-train-with-a-limitation), not \"delete upper body until you feel perfect.\" An app that only knows how to remove exercises is not selecting. It is surrendering.",
    },

    { type: "h2", text: "Worked example: a hard lower-body day" },
    {
      type: "p",
      text: "The week needs a hard lower-body strength exposure. Last month that was a back squat. This week your knee hates the bottom position, and the gym's squat rack is busy anyway.",
    },
    {
      type: "example",
      title: "Same job, better pick for today",
      body: [
        "Job stays: hard bilateral or split lower-body strength",
        "Reject: keep forcing deep back squat because the template says so",
        "Also reject: random \"leg burnout\" circuit with no progression target",
        "Better options: high-box squat, leg press in a pain-free range, or rear-foot-elevated split squat if you can own it",
        "Log the version you used so next session can progress that exact setup",
        "Only later reopen the original squat range when the knee and the week allow it",
      ],
    },
    {
      type: "p",
      text: "Notice what did not change: the week still got a serious lower-body dose. What changed was the tool. That is selection doing its job.",
    },

    { type: "h2", text: "How to judge an app's exercise logic" },
    {
      type: "ol",
      items: [
        "Can it say what job a lift is doing in the session?",
        "If equipment changes, does the job survive with a new tool?",
        "If a joint complains, does it find a workable version or just delete the pattern?",
        "Does it keep enough repetition for progression to mean something?",
        "When it swaps, can you tell why the new lift belongs there?",
      ],
    },
    {
      type: "p",
      text: "If you want a broader product test beyond exercise choice, use [does your fitness app actually personalize anything](/learn/do-fitness-apps-actually-personalize-workouts).",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful plan should fill each part of the session by job, resolve equipment and constraints in plain sight, and keep progression comparable until a swap is actually earned.",
    },
    {
      type: "p",
      text: "IOFitness is being designed around that kind of selection. The intended model uses what each part of the session is there to do, plus movement needs, equipment, limitations, and progression history, to choose the next lift — not a fixed list with your name on it, and not a random shuffle dressed up as AI.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Exercises are tools for jobs. Good selection names the job first, then filters by equipment, tolerance, skill, and progression. Most apps either freeze the menu or scramble it. Ask why a lift is in the session. If nobody can answer, including the app, you do not have a selection system yet.",
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
