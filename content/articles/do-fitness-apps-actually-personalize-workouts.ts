import type { LearnArticle } from "../learn";

/**
 * Authority article: do fitness apps actually personalize.
 * Thesis: most "personalized" apps answer onboarding once, then hand you a
 * template. Real personalization changes selection, day shape, and memory.
 * You set the goal; the app picks exercises and shapes days.
 */
export const appPersonalizationArticle: LearnArticle = {
  slug: "do-fitness-apps-actually-personalize-workouts",
  title: "Does Your Fitness App Actually Personalize Anything?",
  description:
    "Most fitness apps ask good onboarding questions and still hand you a template. Here's how to tell real personalization from a quiz that never updates.",
  date: "2026-09-06",
  dateModified: "2026-09-09",
  job: "system_capability",
  body: [
    {
      type: "p",
      text: "You fill out the quiz. Age, goal, days per week, equipment, maybe a sore knee. The app says your plan is personalized. Two weeks later it still feels like everyone else's split with your name on the PDF.",
    },
    {
      type: "p",
      text: "That gap is the whole problem. Asking questions is not the same as shaping the work from your capacity, schedule, and constraints as they change.",
    },
    {
      type: "callout",
      text: "Short version: do not trust the word personalized. Ask what changes after day one. You set the goal. The app should pick the exercises and shape the days. If it mostly hands you a template, the quiz was theater.",
    },

    { type: "h2", text: "What \"personalized\" usually means" },
    {
      type: "p",
      text: "In marketing, personalized often means you answered onboarding questions, the app stored those answers, and the workouts reference your goal label.",
    },
    {
      type: "p",
      text: "That is filtering. It is not the same as changing the work when your knee flares, your week shrinks, or you travel. If nothing updates, the personalization was a one-time sort, not an ongoing coach.",
    },
    {
      type: "p",
      text: "Personalization is the starting guess. Adaptation is what happens after you train, miss, travel, hurt something, or change your mind. That distinction is the heart of [what adaptive training actually means](/learn/what-is-adaptive-training).",
    },

    { type: "h2", text: "Questions that separate the two" },
    {
      type: "p",
      text: "You do not need a lab. You need a few honest experiments inside the product you already have, or inside a free trial.",
    },

    { type: "h3", text: "Does the goal change the exercises, or only the title?" },
    {
      type: "p",
      text: "If \"get stronger\" and \"move better for sport\" produce the same main movements with different labels, the goal was decoration. Exercise choice is one of the high-impact decisions in a program [1]. An app that cannot change the lift is not personalizing much that matters.",
    },
    {
      type: "p",
      text: "How to pick the right exercises for your goals is covered in [the right exercises for your goals](/learn/pick-the-right-exercises-for-your-goals).",
    },

    { type: "h3", text: "Does capacity show up in the prescription?" },
    {
      type: "p",
      text: "A plan that knows what you can do today should not jump to the hardest version of a pattern before you have the joint capacity and control underneath it. See [your plan should know what you can do today](/learn/your-plan-should-know-what-you-can-do-today).",
    },

    { type: "h3", text: "Can the day reshape without throwing the program away?" },
    {
      type: "p",
      text: "Shorter time, different place, a body check. Real personalization adjusts the session. Fake personalization makes you skip or freestyle. Missed weeks are another version of the same test: does next week change on purpose, or pretend nothing happened?",
    },

    { type: "h3", text: "Who picks the exercises?" },
    {
      type: "p",
      text: "You should set the goal and the constraints. The app should pick the exercises and shape the days. If the product trains you to become the programmer, it outsourced the hard part.",
    },

    { type: "h3", text: "Does feedback stick?" },
    {
      type: "p",
      text: "Tell it you cannot overhead press. Or that one knee hates deep lunges. If the same bad option returns as if you never said anything, the onboarding was theater. A useful system keeps that constraint until you clear it, and it should still progress the quality the movement was there to build [2][3].",
    },

    { type: "h2", text: "What good personalization feels like" },
    {
      type: "p",
      text: "You open the day and it already accounts for what you told it.",
    },
    {
      type: "p",
      text: "You have forty minutes, not sixty. The session is shorter, not truncated mid-block.",
    },
    {
      type: "p",
      text: "You are training at home this week. The movements still hit the qualities you need, with the kit you have.",
    },
    {
      type: "p",
      text: "Your elbow is irritable. Related options stay in the plan. The angry ones drop out until capacity improves.",
    },
    {
      type: "p",
      text: "You are not rewriting the program in your head before you start.",
    },

    { type: "h2", text: "What usually fails the test" },
    {
      type: "ul",
      items: [
        "Pretty onboarding, identical four-day bro split underneath",
        "Load tweaks only: today's weight moves, the exercise menu never does",
        "Chat that sounds smart and still cannot rewrite next week's structure",
        "Injury toggles that delete half the program instead of finding a workable version",
        "\"Adaptive\" that means a random new workout every day with no progression memory",
      ],
    },
    {
      type: "p",
      text: "None of that makes an app evil. It just means the product is doing less than the marketing promised. Autoregulating load can still be useful [2][3]. It is not the same job as rebuilding the plan when goals, constraints, or attendance change.",
    },

    { type: "h2", text: "Where IOFitness sits" },
    {
      type: "p",
      text: "You set the goal. IOFitness picks the exercises and shapes the days.",
    },
    {
      type: "p",
      text: "We keep a deep bank of exercises already sorted by demand, equipment, and how they treat specific joints. Sport, seniors, muscle, and injury-aware training change which options show up. Onboarding and the coach collect injuries, sports, schedule, equipment, and philosophy so the first program is not a generic split.",
    },
    {
      type: "p",
      text: "After that, adaptations and progression keep the plan honest as your week and your body change. If an app only personalizes once, you will feel it the first time life refuses to match the template.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "\"Personalized\" is a claim. The test is what changes after you start. If an app cannot swap the wrong exercise, hold real constraints, survive a messy week, or remember what you told it, it is mostly a template with a quiz. Judge products by the feedback loop, not the onboarding screens.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Kassiano exercise-variation systematic review",
      citation:
        "Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES. Does varying resistance exercises promote superior muscle hypertrophy and strength gains? A systematic review. J Strength Cond Res. 2022;36(6):1753-1762.",
      url: "https://doi.org/10.1519/JSC.0000000000004258",
      note: "Supports that exercise selection is a high-leverage programming decision.",
    },
    {
      id: "2",
      label: "Helms methods for regulating resistance training",
      citation:
        "Helms ER, Kwan K, Sousa CA, Cronin JB, Storey AG, Zourdos MC. Methods for regulating and monitoring resistance training. J Hum Kinet. 2020;74:23-42.",
      url: "https://doi.org/10.2478/hukin-2020-0011",
      note: "Reviews practical autoregulation. Used to acknowledge load/effort adjustments as one useful layer without equating them to full-program personalization.",
    },
    {
      id: "3",
      label: "Shattock and Tee autoregulation comparison",
      citation:
        "Shattock K, Tee JC. Autoregulation in resistance training: a comparison of subjective versus objective methods. J Strength Cond Res. 2022;36(3):641-648.",
      url: "https://doi.org/10.1519/JSC.0000000000003530",
      note: "Supports signal-based load adjustment as one valid layer of adaptation.",
    },
  ],
};
