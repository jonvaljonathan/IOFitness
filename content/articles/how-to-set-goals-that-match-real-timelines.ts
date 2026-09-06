import type { LearnArticle } from "../learn";

/**
 * Expectations cluster.
 * Primary intent: set goals that match real timelines
 * Thesis: ambition is fine; mismatched clocks are not. Choose a primary goal,
 * match food and training to it, and give the block enough weeks to work.
 */
export const goalsMatchTimelinesArticle: LearnArticle = {
  slug: "how-to-set-goals-that-match-real-timelines",
  title: "How to Set Goals That Match Real Timelines",
  description:
    "Ambitious goals fail when the timeline is fantasy. Pick a primary outcome, match training and food to it, and give the block enough weeks for a real trend to show up.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "A lot of goals fail before training starts. Not because the person is weak, but because the goal asks for two seasons of physiology in two weeks of calendar. Build muscle, lose fat, get athletic, fix consistency, and look finished by a date that never had a chance.",
    },
    {
      type: "p",
      text: "Better goal-setting is less romantic and more mechanical. Pick the outcome that matters most now. Match the behaviors to it. Give it enough weeks. Then review.",
    },
    {
      type: "callout",
      text: "Short version: one primary goal, behaviors that match it, and a timeline long enough for a trend. Muscle usually needs months and enough food. Fat loss needs a payable deficit across weeks. Consistency needs sessions you can repeat. Do not stack incompatible clocks.",
    },

    { type: "h2", text: "Start with one primary" },
    {
      type: "p",
      text: "\"Build muscle and get lean and get explosive and never miss\" is a wish list. A block needs a primary. The rest become support roles or later projects. That is the same principle as [when building muscle and losing fat compete](/learn/when-building-muscle-and-losing-fat-compete) and [how to train for two goals at once](/learn/how-to-train-for-two-goals-at-once).",
    },
    {
      type: "ul",
      items: [
        "Primary: the outcome that would make this block a success",
        "Secondary: what you will protect without letting it take over",
        "Not now: what can wait until the next block",
      ],
    },

    { type: "h2", text: "Match the behaviors to the goal" },
    {
      type: "p",
      text: "If the primary is muscle, the block usually needs progressive training and enough food. If the primary is fat loss, the block needs a deficit you can sustain and training that protects muscle. If the primary is simply becoming someone who trains, the block needs easy show-up rules first.",
    },
    {
      type: "p",
      text: "Useful companions:",
    },
    {
      type: "ul",
      items: [
        "[Why building muscle usually needs a calorie surplus](/learn/why-building-muscle-usually-needs-a-calorie-surplus)",
        "[How training changes when you're in a deficit](/learn/how-training-changes-when-youre-in-a-deficit)",
        "[Start a training habit](/learn/start-a-training-habit)",
        "[Pick the right exercises for your goals](/learn/pick-the-right-exercises-for-your-goals)",
      ],
    },

    { type: "h2", text: "Give the goal a real clock" },
    {
      type: "example",
      title: "Same ambition, better timeline language",
      body: [
        "Weak: \"Get jacked and lean by next month\"",
        "Better: \"Lose fat for 10 to 12 weeks while keeping my lifts\"",
        "Weak: \"Add serious muscle before the trip in three weeks\"",
        "Better: \"Run a muscle-focused block for the next three months, then reassess\"",
        "Weak: \"Never miss a workout again starting Monday\"",
        "Better: \"Complete at least 80 percent of planned sessions for the next eight weeks\"",
      ],
    },
    {
      type: "p",
      text: "The better versions are still ambitious. They just stop lying about biology and logistics.",
    },

    { type: "h2", text: "Build in a review point" },
    {
      type: "p",
      text: "A goal without a checkpoint becomes either blind loyalty or random quitting. Decide in advance when you will review adherence, recovery, and trend. The judgment rules live in [how long to follow a plan before you change it](/learn/how-long-to-follow-a-plan-before-you-change-it).",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful planning system should force a primary goal, surface the behaviors that goal requires, and discourage impossible combo timelines. It should help you start in a way you can continue, then review with evidence.",
    },
    {
      type: "p",
      text: "IOFitness is built to help you choose a primary goal, match the plan to it, and stay with it long enough for the work to count — not collect every wish and pretend they fit one month.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Set goals your timeline can survive. One primary. Matching food and training. Enough weeks to create a trend. Ambition stays. Fantasy deadlines go.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Locke and Latham goal-setting theory review",
      citation:
        "Locke EA, Latham GP. Building a practically useful theory of goal setting and task motivation: a 35-year odyssey. Am Psychol. 2002;57(9):705-717.",
      url: "https://doi.org/10.1037/0003-066X.57.9.705",
      note: "Summarizes evidence that specific, challenging goals improve performance when commitment and feedback exist. Used to support clear primary goals and planned review points, not as exercise-physiology evidence for hypertrophy or fat-loss rates.",
    },
  ],
};
