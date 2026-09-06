import type { LearnArticle } from "../learn";

/**
 * Expectations cluster.
 * Primary intent: how training changes in a calorie deficit
 * Thesis: a deficit can support fat loss, but it changes recovery, progression
 * speed, and what you should expect from training. Protect the habit and the
 * lifts that matter. Do not expect a bulk-rate progression chart.
 */
export const deficitTrainingArticle: LearnArticle = {
  slug: "how-training-changes-when-youre-in-a-deficit",
  title: "How Training Changes When You're in a Deficit",
  description:
    "A calorie deficit can help fat loss, but it changes recovery and how fast you progress. Keep training, lower expectations for rapid PRs, and protect a week you can repeat.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "When people cut calories, they often keep the same training expectations. Same volume. Same PR schedule. Same \"I should feel explosive every session\" standard. Then recovery gets thinner, lifts get grumpier, and the plan feels broken.",
    },
    {
      type: "p",
      text: "The plan may be fine. The expectation was wrong. A deficit changes the conditions under which you train. Fat loss can still be the right goal. You just need to understand what training can do in that phase.",
    },
    {
      type: "callout",
      text: "Short version: in a deficit, training protects muscle, skill, and identity more than it chases peak performance. Keep showing up. Keep progressive work where you can. Expect slower PRs, higher fatigue sensitivity, and a bigger need for repeatable weeks.",
    },

    { type: "h2", text: "What a deficit is good at" },
    {
      type: "p",
      text: "A sustained calorie deficit is still the main driver of fat loss. Training helps you keep more muscle, keep moving well, and keep the habit alive while body weight trends down [1]. That is already a lot.",
    },
    {
      type: "p",
      text: "What training is less good at in a hard deficit is making you look and feel like you are in a peak gaining phase. Recovery bandwidth shrinks. Hunger and sleep can get noisier. The same weekly volume that felt productive in a surplus can feel like too much.",
    },

    { type: "h2", text: "What usually changes in the gym" },
    {
      type: "ul",
      items: [
        "Progress on lifts often slows",
        "Hard sets feel costlier",
        "Extra junk volume becomes less free",
        "Sleep, stress, and step count matter more",
        "Motivation can dip even when the plan is sensible",
      ],
    },
    {
      type: "p",
      text: "None of that means you stop lifting. It means you stop grading a cut by bulk-season standards. Keep the major patterns. Keep enough hard work to hold muscle. Leave more margin than your ego wants.",
    },

    { type: "h2", text: "What to protect" },
    {
      type: "ol",
      items: [
        "The habit of showing up",
        "A few progressive strength or muscle landmarks",
        "Protein intake and basic sleep",
        "A week shape you can repeat when energy is lower",
      ],
    },
    {
      type: "p",
      text: "If the week gets messy, compress on purpose rather than inventing punishment sessions. That problem is covered in [when your week shrinks](/learn/when-your-week-shrinks). If motivation falls, stay with the consistency basics in [how to stay consistent after motivation drops](/learn/how-to-stay-consistent-after-motivation-drops).",
    },

    { type: "h2", text: "A practical cut-week example" },
    {
      type: "example",
      title: "Same person, different phase expectations",
      body: [
        "Primary goal: lose fat over 10 to 12 weeks",
        "Training: three total-body days, maybe one short conditioning session",
        "Keep: squat or sit-to-stand pattern, hinge, push, pull",
        "Expect: some sessions feel flat; small load or rep wins still count",
        "Avoid: adding random finishers because the scale had a noisy day",
        "Success look: most weeks completed, strength roughly held or slowly improved, body weight trending down across months",
      ],
    },

    { type: "h2", text: "When the deficit is too aggressive" },
    {
      type: "p",
      text: "If every session is a fight, sleep is falling apart, strength is dropping fast, and you dread training, the cut may be too deep or the training may be too dense for the current intake. Ease one of those levers. A deficit that destroys the habit is not a good fat-loss plan. For timeline expectations, see [what to expect when you're losing fat](/learn/what-to-expect-when-youre-losing-fat).",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful deficit plan should lower the fantasy and keep the essentials. It should preserve enough training to protect muscle and skill, reduce unnecessary volume when recovery shrinks, and keep the week livable enough that you can continue.",
    },
    {
      type: "p",
      text: "IOFitness is built around that kind of phase awareness. The intended model is not to run the same progression logic forever regardless of goal. It is to recognize when fat loss is primary and adjust training stress so the plan still fits a real life in a deficit.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "In a deficit, come back tomorrow still beats chasing heroic sessions. Train enough to keep muscle and momentum. Expect slower performance progress. If the cut is wrecking the habit, the cut is too expensive.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Helms bodybuilding contest-prep review context",
      citation:
        "Helms ER, Aragon AA, Fitschen PJ. Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation. J Int Soc Sports Nutr. 2014;11:20.",
      url: "https://doi.org/10.1186/1550-2783-11-20",
      note: "Reviews nutrition and related practices for natural bodybuilding preparation, including the importance of resistance training and adequate protein while in a deficit. Used to support the practical point that training remains valuable in a fat-loss phase for retaining lean mass and structure, not as a claim that contest-prep methods are required for recreational fat loss.",
    },
  ],
};
