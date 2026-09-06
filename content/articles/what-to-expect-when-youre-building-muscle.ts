import type { LearnArticle } from "../learn";

/**
 * Expectations cluster.
 * Primary intent: what to expect when building muscle
 * Thesis: muscle growth is real but slower than social media implies. Early
 * weeks often show skill and pump more than lasting size. Visible change takes
 * months of progressive training, enough food, and consistency.
 */
export const buildingMuscleExpectationsArticle: LearnArticle = {
  slug: "what-to-expect-when-youre-building-muscle",
  title: "What to Expect When You're Building Muscle",
  description:
    "Muscle can grow at any training age, but visible change usually takes months. Early progress is often skill and confidence. Plan for enough food, progressive work, and weeks you can repeat.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "People start a muscle-building block hoping for proof fast. Better pumps in week one. Tighter sleeves in week three. A different body by the end of the month. Some early changes are real. Most of the lasting ones are slower than the internet makes them look.",
    },
    {
      type: "p",
      text: "If you know what to expect, you are less likely to scrap a good plan in week five. Muscle growth rewards people who show up long enough for quiet progress to accumulate.",
    },
    {
      type: "callout",
      text: "Short version: expect skill and confidence first, measurable size later. Beginners often move faster than advanced trainees. Give a matched plan months, not days. Eat for the goal, keep the week repeatable, and judge the block by trend, not one photo.",
    },

    { type: "h2", text: "What usually shows up first" },
    {
      type: "ul",
      items: [
        "Lifts feel less awkward",
        "You can add reps or load on familiar work",
        "Muscles look fuller after sessions",
        "Clothes fit differently in small ways before the mirror drama arrives",
      ],
    },
    {
      type: "p",
      text: "Those signs matter. They are not the same thing as a finished physique change. A pump is temporary. Technique gains can arrive before tissue gains. Strength can rise partly because you got better at the movement.",
    },

    { type: "h2", text: "What takes longer" },
    {
      type: "p",
      text: "Meaningful hypertrophy usually shows across months of progressive training, not across a single enthusiastic fortnight. Beginners and returners often see faster change than people who have already trained hard for years. The more advanced you are, the smaller and slower the next layer of muscle tends to be [1].",
    },
    {
      type: "p",
      text: "A practical way to think about it:",
    },
    {
      type: "ul",
      items: [
        "First 2 to 4 weeks: learn the work, settle recovery, confirm you can stick to the week",
        "Around 6 to 12 weeks: better chance of noticeable change if training and food match the goal",
        "Multiple months: where most honest \"I look different\" stories live",
      ],
    },
    {
      type: "p",
      text: "Those ranges are coaching judgment informed by how hypertrophy adaptations accumulate, not a guarantee that every person crosses the same line on the same day.",
    },

    { type: "h2", text: "The conditions that make the timeline real" },
    {
      type: "p",
      text: "A calendar alone does not build muscle. The block needs enough hard training, enough recovery, and usually enough food. If you want the growth goal without the surplus conversation, read [why building muscle usually needs a calorie surplus](/learn/why-building-muscle-usually-needs-a-calorie-surplus).",
    },
    {
      type: "ol",
      items: [
        "Progressive work on the muscles you care about",
        "A week you can repeat more often than you miss",
        "Enough protein and total energy to support the goal",
        "Patience measured in months",
      ],
    },
    {
      type: "p",
      text: "Miss those, and the timeline stretches. People often call that a broken program when the real issue was an unmatched lifestyle.",
    },

    { type: "h2", text: "A realistic example" },
    {
      type: "example",
      title: "A first hypertrophy block",
      body: [
        "Primary goal: add muscle over a winter block",
        "Training: three or four lifting days with progressive main work",
        "Food: modest surplus, protein kept steady",
        "Weeks 1 to 3: sessions feel clearer, some loads move up, little lasting size yet",
        "Weeks 6 to 10: arms, shoulders, or legs start looking different in normal lighting",
        "Wrong move: scrap the plan in week four because the mirror is still subtle",
        "Right move: keep showing up while the trend is intact",
      ],
    },

    { type: "h2", text: "How to judge progress without panicking" },
    {
      type: "ul",
      items: [
        "Are key lifts improving over weeks?",
        "Is body weight drifting in the intended direction?",
        "Do monthly photos or clothing fit change more than daily mirror checks?",
        "Are you still completing most sessions?",
      ],
    },
    {
      type: "p",
      text: "If the answer is yes, stay the course. If you want more detail on when to change a plan, see [how long to follow a plan before you change it](/learn/how-long-to-follow-a-plan-before-you-change-it).",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful hypertrophy plan should make the timeline honest from day one. It should push progressive work, support the food demand of the goal, and keep the week repeatable enough that months of training can actually happen.",
    },
    {
      type: "p",
      text: "IOFitness is built around that kind of expectation setting. The intended model is not to promise fast transformation copy. It is to match the plan to a real muscle-building block and help you keep going long enough for the work to matter.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Building muscle is slower than highlight reels suggest and more available than cynics claim. Expect early skill and confidence, then months of accumulated training and food that match the goal. Show up long enough for the quiet changes to add up.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Schoenfeld hypertrophy evidence overview context",
      citation:
        "Schoenfeld BJ. The mechanisms of muscle hypertrophy and their application to resistance training. J Strength Cond Res. 2010;24(10):2857-2872.",
      url: "https://doi.org/10.1519/JSC.0b013e3181e840f3",
      note: "Foundational review of hypertrophy mechanisms and training applications. Used to support the broader point that hypertrophy is an accumulated adaptation to progressive resistance training, not an overnight change, without treating the paper as a precise week-by-week timetable for every trainee.",
    },
  ],
};
