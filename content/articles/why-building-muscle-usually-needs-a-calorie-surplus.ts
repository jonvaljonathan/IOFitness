import type { LearnArticle } from "../learn";

/**
 * Expectations cluster #3 (draft first).
 * Primary intent: why building muscle usually needs a calorie surplus
 * Thesis: people say they want muscle without planning to eat for it.
 * Progressive training matters, but growth usually needs enough energy.
 * Pick the goal honestly, then eat in a way that matches it.
 */
export const muscleSurplusArticle: LearnArticle = {
  slug: "why-building-muscle-usually-needs-a-calorie-surplus",
  title: "Why Building Muscle Usually Needs a Calorie Surplus",
  description:
    "If you want to build muscle, training alone is usually not enough. Progressive work needs enough food to support growth. Pick the goal honestly, then eat in a way that matches it.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "A lot of people say they want to build muscle. Fewer people are ready to eat like that is the goal. They keep training hard, keep protein decent, and keep waiting for their arms, legs, or shoulders to change while their average intake stays flat or low.",
    },
    {
      type: "p",
      text: "That gap creates a lot of quiet frustration. The plan may be fine. The recovery may be fine. The missing piece is often energy. Building tissue usually costs something. If you are not willing to provide it, the goal on paper and the goal in practice are different.",
    },
    {
      type: "callout",
      text: "Short version: progressive training tells muscle what to build. A calorie surplus usually helps give it the resources to do that. If you want visible growth, eat for growth. If you are not willing to eat in a surplus, choose a different primary goal for this block.",
    },

    { type: "h2", text: "Training is the signal. Food is part of the material." },
    {
      type: "p",
      text: "Lifting still matters. You need hard, progressive work to give muscle a reason to grow. Without that signal, more food mostly becomes stored energy.",
    },
    {
      type: "p",
      text: "But the signal is not the whole process. Building new tissue is metabolically expensive. Across resistance-training research, people who eat enough to support the work tend to gain more lean mass than people who underfuel the same ambition, especially once they are past the easiest beginner gains [1][2].",
    },
    {
      type: "p",
      text: "So the honest sequence looks like this: pick muscle as the primary goal, train in a way that can progress, eat enough to support that progress, and give it months rather than days. For the timeline side, see [what to expect when you're building muscle](/learn/what-to-expect-when-youre-building-muscle).",
    },

    { type: "h2", text: "What a surplus is in practice" },
    {
      type: "p",
      text: "A surplus does not mean eating with no brakes. It means your average intake sits high enough that body weight trends up slowly over weeks while training stays productive.",
    },
    {
      type: "ul",
      items: [
        "Weight drifts up gradually across weeks, not overnight",
        "Training performance has room to improve",
        "Hunger and recovery feel more workable than they did in a cut",
        "You are not trying to get leaner in the same block",
      ],
    },
    {
      type: "p",
      text: "If the scale never moves for a month, your lifts stall, and you feel flattened, you may be asking for hypertrophy while eating like maintenance or a cut. That is a goal conflict, not a mystery.",
    },

    { type: "h2", text: "Who can grow with less surplus" },
    {
      type: "p",
      text: "Some people can gain some muscle without a clear surplus, especially beginners, people returning after time off, and people carrying more body fat. That is one reason recomp stories exist. It is also why those stories get over-applied.",
    },
    {
      type: "p",
      text: "The more trained you are, and the leaner you are, the less free muscle you get while eating flat or cutting. At that point, if muscle is truly primary, a surplus stops being optional branding and starts being part of the plan. The shared-goal version of this problem is covered in [when building muscle and losing fat compete](/learn/when-building-muscle-and-losing-fat-compete).",
    },

    { type: "h2", text: "A common false start" },
    {
      type: "example",
      title: "Same gym work, different goal in practice",
      body: [
        "Stated goal: build muscle this winter",
        "Training: four solid lifting days, progressive where possible",
        "Intake: roughly maintenance, plus occasional low-appetite days",
        "Expectation: visible size in eight weeks with no weight gain",
        "Likely result: better skill and maybe some strength, less hypertrophy than hoped",
        "Better match: either eat in a modest surplus, or make fat loss / recomposition the honest primary for now",
      ],
    },
    {
      type: "p",
      text: "The workout did not fail. The goal and the intake never agreed.",
    },

    { type: "h2", text: "How to decide before the block starts" },
    {
      type: "ol",
      items: [
        "Say the primary outcome out loud: more muscle, lower fat, or performance",
        "If the answer is more muscle, ask whether you will accept a slow upward weight trend",
        "If the answer is no, do not label the block a hypertrophy block",
        "Set training, food, and timeline to match one primary",
        "Give the matched plan enough weeks before you call it broken",
      ],
    },
    {
      type: "p",
      text: "That last point matters. Surplus without consistency still underperforms. Consistency without enough food underperforms for growth. You need both. For the habit side, see [start a training habit](/learn/start-a-training-habit).",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful plan should not silently promise muscle while programming a cut. It should make the tradeoff visible: if hypertrophy is primary, intake and progression need to support growth. If fat loss is primary, expectations for size should drop.",
    },
    {
      type: "p",
      text: "IOFitness is built around that kind of honesty. The intended model is not to slap \"build muscle\" on a questionnaire and ignore whether the rest of the plan can support it. It is to match training, recovery demand, and goal priority so the block you chose is the block you are actually living.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "If you want to build muscle, train for it and usually eat for it. A surplus is not greed. It is often the condition that makes the goal real. If you will not eat in a surplus, pick a different primary goal for this season and stop expecting hypertrophy to appear on maintenance by force of will.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Slater energy availability and hypertrophy discussion",
      citation:
        "Slater GJ, Dieter BP, Marsh DJ, Helms ER, Shaw G, Iraki J. Is an energy surplus required to maximize skeletal muscle hypertrophy associated with resistance training? Front Nutr. 2019;6:131.",
      url: "https://doi.org/10.3389/fnut.2019.00131",
      note: "Reviews whether an energy surplus is required to maximize resistance-training hypertrophy and discusses contexts where surplus is more or less necessary. Used to support the practical claim that growth is usually better supported when intake is adequate to high, not as a claim that zero surplus ever produces any muscle.",
    },
    {
      id: "2",
      label: "Morton resistance training and protein review context",
      citation:
        "Morton RW, Murphy KT, McKellar SR, Schoenfeld BJ, Henselmans M, Helms E, Aragon AA, Devries MC, Banfield L, Krieger JW, Phillips SM. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med. 2018;52(6):376-384.",
      url: "https://doi.org/10.1136/bjsports-2017-097608",
      note: "Shows that protein and resistance training influence hypertrophy and strength outcomes, with diminishing returns at higher intakes. Used as supporting context that growth depends on training plus nutritional support, not training slogans alone.",
    },
  ],
};
