import type { LearnArticle } from "../learn";

/**
 * Authority article #8.
 * Primary intent: do fitness apps actually personalize workouts
 * Thesis: most "personalized" apps answer onboarding questions once, then hand
 * you a template. Run a concrete test: selection vs load, two goals, missed
 * week, remembered constraints. Judge the product by what it can change later.
 */
export const appPersonalizationArticle: LearnArticle = {
  slug: "do-fitness-apps-actually-personalize-workouts",
  title: "Does Your Fitness App Personalize Your Workouts?",
  description:
    "Most fitness apps ask good onboarding questions and still hand you a template. Run a four-question test: does it change exercise selection, handle two goals, survive a missed week, and remember a constraint you told it once?",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "You fill out the quiz. Age, goal, days per week, equipment, maybe a sore knee. The app says your plan is personalized. Two weeks later it still feels like everyone else's split with your name on the PDF.",
    },
    {
      type: "p",
      text: "That gap is the whole problem. Asking questions is not the same as adapting the plan. A useful product should change what happens next when reality shows up: a missed week, a second goal, a joint that will not cooperate, a schedule that shrinks.",
    },
    {
      type: "callout",
      text: "Short version: do not trust the word personalized. Run four tests. Does it change exercise selection, or only the weight? Can it hold two goals without pretending they are one? Does the plan survive a messy week? Does it remember a constraint you told it once? If the answer is mostly no, you bought a questionnaire wrapped around a template.",
    },

    { type: "h2", text: "Personalization and adaptation are different jobs" },
    {
      type: "p",
      text: "Personalization is the starting guess. Adaptation is what happens after you train, miss, travel, hurt something, or change your mind.",
    },
    {
      type: "p",
      text: "An app can be good at the first and useless at the second. It can also tweak today's load forever and never touch the bigger structure: which exercises show up, how the week is arranged, or what gets protected when life gets loud. That distinction is the heart of [what adaptive training actually means](/learn/what-is-adaptive-training).",
    },
    {
      type: "p",
      text: "So stop asking whether the marketing says personalized. Ask what the system is allowed to change after day one.",
    },

    { type: "h2", text: "A four-question test you can run this week" },
    {
      type: "p",
      text: "You do not need a lab. You need a few honest experiments inside the product you already have, or inside a free trial.",
    },

    { type: "h3", text: "1. Does it change exercise selection, or only load?" },
    {
      type: "p",
      text: "Tell it you cannot overhead press. Or that you have no barbell this week. Or that one knee hates deep lunges.",
    },
    {
      type: "p",
      text: "If the app only lowers the weight on the same lift, that is shallow. If it swaps to a version that still trains the quality you needed — a different press, a different squat pattern, a machine that leaves the joint quiet — that is real selection. Exercise choice is one of the highest-leverage decisions in a program [1]. An app that cannot change the lift is not personalizing much that matters.",
    },
    {
      type: "p",
      text: "How to pick the right exercises for your goals is covered in [pick the right exercises for your goals](/learn/pick-the-right-exercises-for-your-goals).",
    },

    { type: "h3", text: "2. Can it hold two goals without collapsing them?" },
    {
      type: "p",
      text: "Say you want muscle and still want to be useful in Saturday soccer. Or strength and a race. Or general fitness and not getting wrecked before a hike.",
    },
    {
      type: "p",
      text: "A weak app picks one goal and ignores the other. Or it dumps both into a mushy \"hybrid\" week with no priority. A better app asks which goal is primary, keeps a real maintenance dose for the second, and places hard work where the week can absorb it. That allocation problem is the whole point of [training for two goals at once](/learn/how-to-train-for-two-goals-at-once).",
    },

    { type: "h3", text: "3. Does the plan survive a missed week?" },
    {
      type: "p",
      text: "Skip two or three sessions on purpose in a trial, or look at what the app did the last time life got busy.",
    },
    {
      type: "p",
      text: "If it just resumes the printed calendar like nothing happened, it is a tracker with a schedule. If it asks what you missed, what still matters this week, and whether stacking catch-up would wreck the remaining days, it is doing programming. The decision rules for that are in [what should happen when you miss a workout](/learn/what-to-do-when-you-miss-a-workout).",
    },
    {
      type: "p",
      text: "A longer gap is a harder version of the same idea. Coming back after time off needs more than \"start at 60%.\" That case is covered in [how to return to training after time off](/learn/how-to-return-to-training-after-time-off).",
    },

    { type: "h3", text: "4. Does it remember a constraint you told it once?" },
    {
      type: "p",
      text: "Tell the app your left shoulder hates wide-grip pressing. Use the swap it gives you. Come back next week.",
    },
    {
      type: "p",
      text: "If the same bad press returns as if you never said anything, the onboarding was theater. A useful system keeps that constraint until you clear it, and it should still progress the quality the press was there to build. That is the same logic as [training with a limitation](/learn/how-to-train-with-a-limitation).",
    },

    { type: "h2", text: "What usually fails the test" },
    {
      type: "ul",
      items: [
        "Pretty onboarding, identical 4-day bro split underneath",
        "Load autoregulation only: today's weight moves, the exercise menu never does",
        "Chat that sounds smart and still cannot rewrite next week's structure",
        "Injury toggles that delete half the program instead of finding a workable version",
        "\"Adaptive\" that means a random new workout every day with no progression memory",
      ],
    },
    {
      type: "p",
      text: "None of that makes an app evil. It just means the product is doing less than the marketing promised. Autoregulating load can still be useful [2][3]. It is not the same job as rebuilding the plan when goals, constraints, or attendance change.",
    },

    { type: "h2", text: "A fair scorecard" },
    {
      type: "example",
      title: "Score the app you are using",
      body: [
        "Selection: can it change the lift, not only the load?",
        "Goals: can it protect a primary goal and maintain a second one?",
        "Misses: after a messy week, does next week change on purpose?",
        "Memory: does a constraint stick without you re-entering it every session?",
        "Honesty: does the product admit what it cannot do yet?",
      ],
    },
    {
      type: "p",
      text: "Four yes answers is rare. Two solid yes answers with clear limits is already better than most of the category. Zero yes answers means you are paying for logging and vibes.",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful training system should start from your situation, then keep updating from evidence: what you completed, what flared up, what the week can hold, and what the long-term goal still needs.",
    },
    {
      type: "p",
      text: "IOFitness is built to go past a starting questionnaire. When the evidence says the old plan is no longer honest, exercise selection, the week, and the next block should be allowed to change.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "\"Personalized\" is a claim. The test is what changes after you start. If an app cannot swap the wrong lift, hold two goals, survive a missed week, or remember a constraint, it is mostly a template with a quiz. Judge products by the feedback loop, not the onboarding screens.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Kassiano exercise-variation systematic review",
      citation:
        "Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES. Does varying resistance exercises promote superior muscle hypertrophy and strength gains? A systematic review. J Strength Cond Res. 2022;36(6):1753-1762.",
      url: "https://doi.org/10.1519/JSC.0000000000004258",
      note: "Finds that systematic exercise variation can influence hypertrophy and strength adaptations, while excessive or random variation may blunt gains. Used to support the claim that exercise selection is a high-leverage programming decision, not to claim any specific app implements variation well.",
    },
    {
      id: "2",
      label: "Helms methods for regulating resistance training",
      citation:
        "Helms ER, Kwan K, Sousa CA, Cronin JB, Storey AG, Zourdos MC. Methods for regulating and monitoring resistance training. J Hum Kinet. 2020;74:23-42.",
      url: "https://doi.org/10.2478/hukin-2020-0011",
      note: "Reviews practical autoregulation and monitoring methods. Used to acknowledge that load/effort adjustments can be useful without equating them to full-program personalization.",
    },
    {
      id: "3",
      label: "Shattock and Tee autoregulation comparison",
      citation:
        "Shattock K, Tee JC. Autoregulation in resistance training: a comparison of subjective versus objective methods. J Strength Cond Res. 2022;36(3):641-648.",
      url: "https://doi.org/10.1519/JSC.0000000000003530",
      note: "Compares subjective and objective autoregulation approaches. Used to support signal-based load adjustment as one valid layer of adaptation, not as proof that load tweaks equal deep personalization.",
    },
  ],
};
