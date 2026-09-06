import type { LearnArticle } from "../learn";

/**
 * Expectations cluster.
 * Primary intent: what to expect when losing fat
 * Thesis: fat loss can start sooner than muscle growth shows, but it is still
 * a weeks-to-months process. The scale is noisy. Consistency beats crash cuts.
 */
export const losingFatExpectationsArticle: LearnArticle = {
  slug: "what-to-expect-when-youre-losing-fat",
  title: "What to Expect When You're Losing Fat",
  description:
    "Fat loss often shows sooner than muscle growth, but it still takes weeks to months. Expect a noisy scale, protect your training habit, and use a deficit you can sustain.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "Fat loss goals often come with deadline fantasy. Drop noticeable weight this week. Look different by the wedding, the vacation, the first warm day. Some early movement can happen. Durable change still takes longer than a hype cycle.",
    },
    {
      type: "p",
      text: "If you know what the process usually looks like, you are less likely to panic after a salty meal or throw away a workable deficit because one week on the scale looked boring.",
    },
    {
      type: "callout",
      text: "Short version: expect trend change across weeks, not a clean drop every morning. Keep protein and training in place. Use a deficit you can live with. Judge progress monthly more than daily. The habit of continuing matters more than a dramatic first week.",
    },

    { type: "h2", text: "What can change early" },
    {
      type: "ul",
      items: [
        "Appetite awareness improves once intake gets consistent",
        "Some people see quick scale movement from glycogen, gut content, and water",
        "Clothes may feel different before the mirror does",
        "Training feels more intentional when the week has a clear primary goal",
      ],
    },
    {
      type: "p",
      text: "Early scale drops can flatter you. Early stalls can scare you. Neither one is the whole story. Fat loss is better read as a multi-week trend under a repeatable routine.",
    },

    { type: "h2", text: "What takes longer" },
    {
      type: "p",
      text: "Meaningful body-fat change usually needs sustained energy deficit over weeks to months. Faster is not automatically better. Aggressive cuts often cost adherence, training quality, and muscle [1].",
    },
    {
      type: "ul",
      items: [
        "2 to 4 weeks: enough time to see whether the routine is livable",
        "4 to 8 weeks: clearer trend data if intake and steps stay consistent",
        "Multiple months: where most people earn the change they actually wanted",
      ],
    },
    {
      type: "p",
      text: "Those ranges are practical planning ranges, not a promise that every body loses at one speed.",
    },

    { type: "h2", text: "Why the scale is a noisy teammate" },
    {
      type: "p",
      text: "Sodium, stress, sleep, menstrual cycle, training inflammation, and meal timing can all bounce body weight around while fat loss is still happening. That is why one high weigh-in is weak evidence against a good plan.",
    },
    {
      type: "p",
      text: "Better checks:",
    },
    {
      type: "ul",
      items: [
        "Weekly average weight instead of one dramatic morning",
        "How clothes fit",
        "Whether training is still happening",
        "Whether the deficit still feels psychologically payable",
      ],
    },

    { type: "h2", text: "Training still matters here" },
    {
      type: "p",
      text: "The deficit drives fat loss. Training helps you keep muscle, keep capability, and keep the identity of someone who shows up. In a cut, that is a feature. Details on how gym expectations should change are in [how training changes when you're in a deficit](/learn/how-training-changes-when-youre-in-a-deficit).",
    },
    {
      type: "p",
      text: "If you are also hoping for rapid muscle growth in the same phase, read [when building muscle and losing fat compete](/learn/when-building-muscle-and-losing-fat-compete) before you set yourself up for a double disappointment.",
    },

    { type: "h2", text: "A realistic fat-loss block" },
    {
      type: "example",
      title: "What a steady cut can look like",
      body: [
        "Primary goal: lose fat across about three months",
        "Deficit: modest enough that training and life still function",
        "Training: three repeatable lifting days, daily walking as default activity",
        "Weeks 1 to 2: some scale noise, routine still forming",
        "Weeks 4 to 8: clearer downward trend if adherence held",
        "Wrong move: slash calories hard after one flat week",
        "Right move: keep showing up and review the trend on a longer window",
      ],
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful fat-loss plan should make the timeline calm and the week survivable. It should protect training enough to retain muscle, avoid macho deficits that destroy adherence, and help you keep going after the first burst of motivation.",
    },
    {
      type: "p",
      text: "IOFitness is being designed around that kind of sustainable phase. The intended model is not a crash challenge. It is a plan that can hold a fat-loss primary, keep training meaningful, and stay repeatable long enough to matter.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Fat loss rewards people who stay in the process long enough for weekly noise to stop mattering. Expect a trend, not a perfect morning scale. Keep training. Keep the deficit payable. Come back tomorrow.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Hall obesity and energy-balance perspective",
      citation:
        "Hall KD, Kahan S. Maintenance of lost weight and long-term management of obesity. Med Clin North Am. 2018;102(1):183-197.",
      url: "https://doi.org/10.1016/j.mcna.2017.08.012",
      note: "Discusses biological and behavioral challenges in losing fat and keeping it off, including why short-term extremes often fail long-term management. Used to support sustainable-deficit framing and multi-week evaluation, not as a prescription for any one weekly loss rate.",
    },
  ],
};
