import type { LearnArticle } from "../learn";

/**
 * Expectations cluster.
 * Primary intent: stay consistent after motivation drops
 * Thesis: motivation starts the streak; systems and smaller doses keep it.
 * After the excitement dies, the job is still to show up and come back tomorrow.
 */
export const consistencyAfterMotivationArticle: LearnArticle = {
  slug: "how-to-stay-consistent-after-motivation-drops",
  title: "How to Stay Consistent After Motivation Drops",
  description:
    "Motivation gets you started. Consistency keeps you there after the excitement fades. Shrink the session if you must, keep the week recognizable, and protect the habit of coming back tomorrow.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "Motivation is great for week one. It is a weak long-term plan. Sooner or later the novelty fades, work gets heavy, sleep gets short, and the workout stops feeling like a movie montage.",
    },
    {
      type: "p",
      text: "That is not failure. That is the normal middle of a habit. The people who change are usually the ones who keep a smaller, plainer version of the plan alive after the excitement drops.",
    },
    {
      type: "callout",
      text: "Short version: when motivation falls, lower the friction, not the identity. Keep a session shape you can still do. Show up. Leave able to come back tomorrow. Perfect energy is optional. Repeatable weeks are not.",
    },

    { type: "h2", text: "Motivation is a starter motor" },
    {
      type: "p",
      text: "Use it to set the week, learn the lifts, and get the first streak going. Do not build the whole plan on the assumption that you will always feel ready. The habit article already makes that case for day one: [start a training habit](/learn/start-a-training-habit).",
    },
    {
      type: "p",
      text: "After motivation drops, the question changes from \"What is the best program?\" to \"What version of training can I still complete this week?\"",
    },

    { type: "h2", text: "Shrink the session before you scrap the plan" },
    {
      type: "ul",
      items: [
        "Keep the main lifts or main patterns",
        "Cut extras first",
        "Shorten the session instead of canceling it",
        "Use the same days when you can so the week still feels familiar",
      ],
    },
    {
      type: "p",
      text: "A compressed week is still the plan. A dramatic restart is usually ego. For structural compression, use [when your week shrinks](/learn/when-your-week-shrinks). For a missed day, use [what to do when you miss a workout](/learn/what-to-do-when-you-miss-a-workout).",
    },

    { type: "h2", text: "Make showing up easier" },
    {
      type: "ol",
      items: [
        "Decide the next session before you leave the current one",
        "Pack the bag or clear the space in advance",
        "Keep a minimum session definition: for example, two main lifts and leave",
        "Train at the time of day you actually protect, not the time you romanticize",
      ],
    },
    {
      type: "p",
      text: "Consistency loves boring logistics. If every session needs a fresh emotional speech, the habit is still too fragile.",
    },

    { type: "h2", text: "What counts as a win in a low-motivation week" },
    {
      type: "example",
      title: "A week that still counts",
      body: [
        "You planned four days and felt flat by Wednesday",
        "You kept two full sessions and one minimum session",
        "You did not invent a new program on Thursday night",
        "You left Friday already knowing Monday's opener",
        "Result: the streak survived, even if the week was not pretty",
      ],
    },
    {
      type: "p",
      text: "That is the standard. Not cinematic. Continuable.",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful plan should expect motivation to fade and still leave you a workable version of the week. It should protect the habit with minimum sessions, clear defaults, and no need to rebuild your identity every time energy dips.",
    },
    {
      type: "p",
      text: "IOFitness is built around that kind of durability. The intended model is not to rely on endless hype. It is to keep the next session obvious and doable when motivation is quiet.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "After motivation drops, keep the habit small enough to survive. Show up. Cut fluff before you cut the whole plan. Come back tomorrow. That is how ordinary weeks become a real training life.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Lally habit-formation study",
      citation:
        "Lally P, van Jaarsveld CHM, Potts HWW, Wardle J. How are habits formed: Modelling habit formation in the real world. Eur J Soc Psychol. 2010;40(6):998-1009.",
      url: "https://doi.org/10.1002/ejsp.674",
      note: "Shows habit automaticity builds with repetition over time at different rates. Used to support continuity and repeated context over waiting for motivation to return.",
    },
  ],
};
