import type { LearnArticle } from "../learn";

/**
 * Expectations cluster.
 * Primary intent: when building muscle and losing fat compete
 * Thesis: both can happen slowly for some people, but maximizing both at once
 * is usually a fantasy. Pick a primary. Let the other get a maintenance role.
 */
export const muscleFatCompeteArticle: LearnArticle = {
  slug: "when-building-muscle-and-losing-fat-compete",
  title: "When Building Muscle and Losing Fat Compete",
  description:
    "You can sometimes gain some muscle while losing some fat, especially as a beginner or returner. Maximizing both at once is usually the wrong promise. Pick a primary goal and give the other a supporting role.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "\"I want to build muscle and lose fat\" is the most common goal pair in the gym, and the easiest one to set up badly. People want the surplus outcomes and the deficit outcomes in one month, then feel betrayed when the body refuses to run both processes at full speed.",
    },
    {
      type: "p",
      text: "The honest version is narrower. Some muscle gain during fat loss can happen, especially early on or after time away. That does not mean you should expect a bulk and a cut to finish together at elite speed.",
    },
    {
      type: "callout",
      text: "Short version: pick a primary. If fat loss is primary, accept slower muscle growth. If muscle is primary, accept that fat loss is not the main project. Beginners and returners get more overlap. Advanced trainees get less.",
    },

    { type: "h2", text: "Why the goals pull against each other" },
    {
      type: "p",
      text: "Building muscle is usually supported by enough food and progressive training. Losing fat needs a calorie deficit. Those are different energy conditions. You can thread a middle path for a while. You cannot endlessly maximize both.",
    },
    {
      type: "p",
      text: "That is the same allocation logic as [how to train for two goals at once](/learn/how-to-train-for-two-goals-at-once), applied to body composition: one goal gets the best resources, the other stays alive.",
    },

    { type: "h2", text: "Who gets more overlap" },
    {
      type: "ul",
      items: [
        "New lifters",
        "People returning after time off",
        "People with more body fat to lose",
        "People whose previous routine was inconsistent or underdosed",
      ],
    },
    {
      type: "p",
      text: "In those cases, better training and enough protein can improve body composition even without a perfect surplus. That is useful. It is also temporary advantage, not a permanent law.",
    },

    { type: "h2", text: "Who needs a cleaner primary" },
    {
      type: "p",
      text: "If you have already trained seriously for years and you are fairly lean, the free overlap shrinks. Want clearer muscle gain? You usually need the conditions in [why building muscle usually needs a calorie surplus](/learn/why-building-muscle-usually-needs-a-calorie-surplus). Want clearer fat loss? You need a deficit and the expectations in [what to expect when you're losing fat](/learn/what-to-expect-when-youre-losing-fat).",
    },

    { type: "h2", text: "How to choose for this block" },
    {
      type: "ol",
      items: [
        "Ask which outcome would make the next eight to twelve weeks a success",
        "Make that outcome primary",
        "Give the other outcome a maintenance role, not equal billing",
        "Match food to the primary",
        "Review after enough weeks, not after one emotional weigh-in",
      ],
    },
    {
      type: "example",
      title: "Two honest block choices",
      body: [
        "Primary fat loss: modest deficit, keep lifting, accept limited size gains",
        "Primary muscle: modest surplus, keep steps and food quality sane, accept that fat loss waits",
        "False choice: \"get shredded and much bigger by next month\" with no primary",
        "Better sentence: \"For this block, fat loss is primary. Muscle just needs to hang on.\"",
      ],
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful plan should refuse the fake double-max promise. It should ask for a primary body-composition goal, set training and intake accordingly, and keep the secondary goal from being abandoned completely.",
    },
    {
      type: "p",
      text: "IOFitness is built around that kind of priority call. The intended model is not to pretend every goal can be maximized together. It is to make the tradeoff explicit so the week has a point.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Muscle and fat loss can overlap a little. They compete when you try to maximize both. Pick the primary for this block, eat for it, train for it, and let the other goal ride in the passenger seat.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Barakat body-recomposition review",
      citation:
        "Barakat C, Pearson J, Escalante G, Campbell B, De Souza EO. Body recomposition: can trained individuals build muscle and lose fat at the same time? Strength Cond J. 2020;42(5):7-21.",
      url: "https://doi.org/10.1519/SSC.0000000000000584",
      note: "Reviews evidence and practical conditions under which simultaneous fat loss and muscle gain may occur, with more favorable odds in less-trained or higher-fat individuals and more constraint in lean, well-trained people. Used to support pick-a-primary framing rather than a promise of maximized dual outcomes for everyone.",
    },
  ],
};
