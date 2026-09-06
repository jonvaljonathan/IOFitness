import type { LearnArticle } from "../learn";

/**
 * Authority article #10.
 * Primary intent: how to cut a training week down without breaking progression
 * Thesis: when the week shrinks, compress the plan you already have — protect
 * the highest-value work, shrink or cut the rest, do not swap in a totally
 * different 3-day program and pretend the progression carried over.
 */
export const shrinkingWeekArticle: LearnArticle = {
  slug: "when-your-week-shrinks",
  title: "When Your Week Shrinks: How to Cut a Plan Down Without Breaking It",
  description:
    "When life turns a 5-day plan into a 3-day week, do not throw the program out. Protect the highest-value work, shrink or cut the rest, and keep progression comparable. A shorter week is a compression problem, not a new-identity problem.",
  date: "2026-09-06",
  dateModified: "2026-09-06",
  body: [
    {
      type: "p",
      text: "You had five training days on the calendar. Then work exploded, a kid got sick, travel ate Thursday, and suddenly you have three. Most advice at that point hands you a brand-new \"busy professional\" split like the old plan never existed.",
    },
    {
      type: "p",
      text: "That is the wrong move if the old plan was working. You do not need a new identity. You need a compressed version of the same plan: keep the work that carries progression, shrink what you can, cut what you must, and make next week able to resume without a full restart.",
    },
    {
      type: "callout",
      text: "Short version: when the week shrinks, protect the highest-value sessions and exercises first. Cut fluff before you cut the lifts that were actually progressing. Keep enough sameness that you can still compare sessions. Do not repay the missed days by cramming five days of fatigue into three.",
    },

    { type: "h2", text: "This is different from missing one workout" },
    {
      type: "p",
      text: "Missing Monday and still having a normal week left is one problem. Knowing up front that the whole week only has three training windows is another.",
    },
    {
      type: "p",
      text: "A single miss is about what to do with one exposure. A shrunk week is about re-budgeting the whole plan before you start. The missed-session rules in [what should happen when you miss a workout](/learn/what-to-do-when-you-miss-a-workout) still help. They just are not enough by themselves when the container got smaller.",
    },

    { type: "h2", text: "Rank the week before you cut it" },
    {
      type: "p",
      text: "Open the plan and mark each session or lift with one of three labels.",
    },
    {
      type: "ul",
      items: [
        "Protect: the work that was carrying your main goal or your clearest progression",
        "Shrink: useful work that can live as fewer sets, a shorter session piece, or a simpler variation",
        "Cut: accessories, extras, and \"nice if I have time\" pieces that do not decide the block",
      ],
    },
    {
      type: "p",
      text: "If everything feels protected, you have not ranked anything. Primary goal work comes first. Secondary goals get a maintenance dose if the week can hold it, not equal billing. That same priority logic shows up in [training for two goals at once](/learn/how-to-train-for-two-goals-at-once).",
    },

    { type: "h2", text: "Compression rules that usually work" },
    {
      type: "ol",
      items: [
        "Keep the main lifts or main qualities from the original plan when you can",
        "Reduce sets before you invent a totally different exercise menu",
        "Prefer full-body or upper/lower shapes when five specialized days no longer fit",
        "Leave enough recovery that the three days are still trainable",
        "Do not \"make up\" the two lost days by turning every session into a death march",
      ],
    },
    {
      type: "p",
      text: "Strength and muscle are more sensitive to whether hard work still happens than to whether the old calendar art survived. Shorter or lower-volume periods can still maintain a lot of what you built if intensity and some key exposures stay present [1][2]. That is permission to compress. It is not permission to randomize.",
    },

    { type: "h2", text: "What about the 30-minute day?" },
    {
      type: "p",
      text: "A short session cannot honestly hold a long session's content. Stop pretending it can.",
    },
    {
      type: "p",
      text: "In thirty minutes, keep one or two high-value patterns, enough warm-up to own them, and a small amount of supporting work if time remains. Drop the circuit that exists to make the workout feel complete. A short day that progresses a main lift beats a rushed tour of everything you skipped.",
    },
    {
      type: "p",
      text: "If load jumps are unavailable in that compressed day, progress the levers that still count. That is the same idea as [progressive overload without adding weight](/learn/progressive-overload-without-adding-weight).",
    },

    { type: "h2", text: "Worked example: five days become three" },
    {
      type: "p",
      text: "Original week: Push / Pull / Legs / Upper / Easy conditioning. Main goal is getting stronger on squat and bench. Soccer on Saturday stays on the calendar.",
    },
    {
      type: "example",
      title: "Compressed to three days",
      body: [
        "Day 1: squat focus, one secondary lower pattern, one easy core or carry",
        "Day 2: bench focus, one row, one optional press accessory if time allows",
        "Day 3: hinge or second lower exposure, pull variation, short conditioning only if soccer was light",
        "Cut: extra arm day fluff, redundant accessories, and the idea of \"catching up\" Friday",
        "Protect: squat and bench progression, plus enough pulling to keep the week balanced",
        "If soccer was ugly: shrink Day 3 lower-body volume instead of proving toughness",
      ],
    },
    {
      type: "p",
      text: "Why this shape: the athlete can still compare squat and bench to last week. The plan did not become a random hotel workout. Soccer still counts as load. That is compression with a memory.",
    },
    {
      type: "h3",
      text: "If the squeezed week went fine",
    },
    {
      type: "p",
      text: "Main lifts moved, soreness stayed manageable, and you could train the next sessions as planned. Keep this compressed template while the constraint lasts. When days reopen, add back accessories and secondary volume before you invent a brand-new program.",
    },
    {
      type: "h3",
      text: "If the squeezed week buried you",
    },
    {
      type: "p",
      text: "You \"protected\" too much and basically did five days of hard work in three. Next compressed week needs fewer hard sets, more cuts, or a simpler third day. A plan that looks complete on paper and wrecks the weekend failed the actual test.",
    },

    { type: "h2", text: "Travel weeks and weird gyms" },
    {
      type: "p",
      text: "Same rules. Rank the jobs first. Then pick the best available tools. A leg press and a dumbbell floor press can keep a block alive. A totally new workout-of-the-day every hotel stop usually cannot.",
    },
    {
      type: "p",
      text: "If one body part limits the travel options, find a workable version of that job instead of deleting the quality. That case is covered in [how to train with a limitation](/learn/how-to-train-with-a-limitation).",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A useful plan should notice that the week got smaller and compress on purpose: keep priority work, reduce secondary volume, preserve enough continuity to progress, and avoid catch-up stacking.",
    },
    {
      type: "p",
      text: "IOFitness is built around that kind of decision: when time or days shrink, cut from the bottom of the priority list — do not hand someone an unrelated starter template and call it adaptation. If you still do not have a habit to compress, start with [start a training habit](/learn/start-a-training-habit). If the week is available but motivation is quiet, use [how to stay consistent after motivation drops](/learn/how-to-stay-consistent-after-motivation-drops).",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "A smaller week is a budgeting problem. Protect the work that carries your goal. Shrink what can live smaller. Cut what does not decide the block. Keep the sessions comparable enough to learn from. Do not repay the calendar. When life opens back up, expand the same plan instead of starting over.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Bickel reduced-volume maintenance in older and younger adults",
      citation:
        "Bickel CS, Cross JM, Bamman MM. Exercise dosing to retain resistance training adaptations in young and older adults. Med Sci Sports Exerc. 2011;43(7):1177-1187.",
      url: "https://doi.org/10.1249/MSS.0b013e318207cda8",
      note: "Showed that markedly reduced training frequency/volume could help maintain much of the strength and muscle gained in a prior training phase, with age-related differences in how well adaptations were retained. Used to support intelligent compression and maintenance dosing, not as a prescription to always cut to the study's exact schedule.",
    },
    {
      id: "2",
      label: "Spiering minimum-dose review for warfighters",
      citation:
        "Spiering BA, Mujika I, Sharp MA, Foulis SA. Maintaining physical performance: the minimal dose of exercise needed to preserve endurance and strength over time. J Strength Cond Res. 2021;35(5):1449-1458.",
      url: "https://doi.org/10.1519/JSC.0000000000003964",
      note: "Reviews evidence that relatively low doses of well-chosen training can preserve endurance and strength for meaningful periods. Used to support the idea that a compressed week can still protect key qualities if priority work remains, not as a claim that minimal dose equals maximal progress.",
    },
  ],
};
