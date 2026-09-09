import type { LearnArticle } from "../learn";

/**
 * Authority article: adaptive training.
 * Thesis: adaptive means the future plan changes from evidence. Personalization
 * alone is not enough. You set the goal; the app picks exercises and shapes
 * days as capacity, schedule, and constraints shift.
 */
export const adaptiveTrainingArticle: LearnArticle = {
  slug: "what-is-adaptive-training",
  title: "What Is Adaptive Training?",
  description:
    "Your body changes. Good training changes with it. Adaptive training means the plan keeps updating from evidence, not starting over every Monday.",
  date: "2026-09-04",
  dateModified: "2026-09-09",
  job: "system_capability",
  body: [
    {
      type: "p",
      text: "Adaptive training means your plan changes when your body or your week changes.",
    },
    {
      type: "p",
      text: "Not a new program from scratch every Monday. Not the same three workouts forever while life moves on. A plan that still aims at your goal, and adjusts the work when something real shifts.",
    },
    {
      type: "callout",
      text: "Short version: you set the goal. The app picks the exercises and shapes the days. When capacity, schedule, or a joint changes, the prescription should change with it.",
    },

    { type: "h2", text: "Why static plans fall behind" },
    {
      type: "p",
      text: "A static plan assumes a steady version of you: same joints, same sleep, same schedule, same equipment.",
    },
    {
      type: "p",
      text: "That version does not last.",
    },
    {
      type: "p",
      text: "You sleep poorly for a week. Your knee flares after a long walk. Work runs late and you only have thirty minutes. You travel and the gym is a hotel room. The goal is still the goal. The session that made sense last month may not make sense today.",
    },
    {
      type: "p",
      text: "If the plan ignores that, you either force a bad fit or skip. Neither teaches the plan anything.",
    },

    { type: "h2", text: "Personalization is not the same as adaptation" },
    {
      type: "p",
      text: "A program can be highly personalized at the start and still be static afterward.",
    },
    {
      type: "p",
      text: "Imagine an app asks for age, goal, equipment, experience, and schedule, then generates a twelve-week plan. That is personalized programming. It may be a good plan. But if nothing changes when you get stronger faster than expected, miss Tuesday, add Saturday soccer, lose a training day, stall on a lift, or change equipment, the plan is not meaningfully adaptive after generation.",
    },
    {
      type: "p",
      text: "The reverse is also true. Adaptation without good personalization can stay shallow. A generic plan that lowers today's intensity because readiness looks low is adapting something. It may still know very little about your goals, sport demands, or what needs to be developed versus maintained.",
    },
    {
      type: "p",
      text: "So personalization answers, \"What plan should we start with?\" Adaptation answers, \"What should the plan do next, given what has happened?\" A strong system needs both. They are not synonyms. That gap is the heart of [whether fitness apps actually personalize](/learn/do-fitness-apps-actually-personalize-workouts).",
    },

    { type: "h2", text: "What actually changes" },
    {
      type: "p",
      text: "Adaptive training is not vibes. It is specific adjustments to the work [1][2].",
    },
    {
      type: "ul",
      items: [
        "Load and volume. When you are recovering or short on time, intensity and set count come down. When you are ready, they climb again. Progressive overload still applies. The slope just flexes.",
        "Exercise choice. If a movement aggravates a joint, a related option that keeps the same training quality can take its place. You should not have to invent that swap yourself mid-session.",
        "Session shape. A busy day might mean a shorter main block, not a cancelled week. The plan still points at the goal. The day fits the calendar you actually have.",
        "Rehab and constraints. If you are working around an injury, cleared tasks and current capacity should open or close options over time. The plan that knew you were early in recovery should know when you are further along.",
      ],
    },
    {
      type: "p",
      text: "Those are the same ideas behind [a plan that knows what you can do today](/learn/your-plan-should-know-what-you-can-do-today). Adaptive training is that idea applied across weeks, not only inside one workout.",
    },

    { type: "h2", text: "What the system needs to see" },
    {
      type: "p",
      text: "Good adjustments respond to a signal. Coaches have long changed the next session from how the last one went and how ready you feel today [1][2]. Useful evidence can include completed and missed workouts, actual loads and reps, how hard it felt, schedule changes, sport outside the gym, available equipment, and known limitations [2][3].",
    },
    {
      type: "p",
      text: "Sleep scores and wearables can add context. They should not become automatic commands. A system should be able to explain why it is changing the plan. If it cannot name a relevant signal, the change is hard to trust.",
    },

    { type: "h2", text: "What adaptive is not" },
    {
      type: "p",
      text: "It is not guessing what you want because you clicked a goal checkbox once.",
    },
    {
      type: "p",
      text: "It is not regenerating a brand-new program every time you miss a session.",
    },
    {
      type: "p",
      text: "It is not dumping the hard work on you: reading the room, rewriting the day, picking replacements, and hoping you got the programming right.",
    },
    {
      type: "p",
      text: "You bring the signal. What hurts. What cleared. How long you have. Where you are training. The system should turn that into the next session.",
    },

    { type: "h2", text: "How IOFitness uses this" },
    {
      type: "p",
      text: "You set the goal and the constraints. IOFitness picks the exercises and shapes the days.",
    },
    {
      type: "p",
      text: "We keep a deep bank of exercises sorted by what they ask your body to do, what gear they need, and how they treat specific joints. Sport, later-life strength, muscle, and injury-aware training do not want the same week. Goals go deeper than one checkbox, so the days fill from that bank instead of a generic template.",
    },
    {
      type: "p",
      text: "When you adapt for time, place, or a body check, those choices feed the next prescription instead of vanishing into a one-off edit. Missed weeks, cleared rehab tasks, and progression history matter for what comes next, not only for today's log [4].",
    },
    {
      type: "p",
      text: "That is adaptive training in practice: same destination, honest updates along the way. Exercise choice is covered in [the right exercises for your goals](/learn/pick-the-right-exercises-for-your-goals). Compressing a busy week is covered in [when your week shrinks](/learn/when-your-week-shrinks).",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Adaptive training means the future program changes in response to evidence about you. Personalization gets the starting point closer. Adaptation keeps the plan honest after reality intervenes. Judge a system by what it can observe, what it is allowed to change, and whether those changes still serve the long-term goal. The word \"adaptive\" by itself tells you almost nothing. The feedback loop tells you much more.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Greig autoregulation review",
      citation:
        "Greig L, Stephens Hemingway BH, Aspe RR, Cooper K, Comfort P, Swinton PA. Autoregulation in resistance training: addressing the inconsistencies. Sports Med. 2020;50(11):1873-1887.",
      url: "https://doi.org/10.1007/s40279-020-01330-8",
      note: "Defines autoregulation as adjusting training from measured performance or perceived capability. Closest established scientific framing for adaptive training in apps.",
    },
    {
      id: "2",
      label: "Helms monitoring and regulation review",
      citation:
        "Helms ER, Kwan K, Sousa CA, Cronin JB, Storey AG, Zourdos MC. Methods for regulating and monitoring resistance training. J Hum Kinet. 2020;74:23-42.",
      url: "https://doi.org/10.2478/hukin-2020-0011",
      note: "Reviews practical autoregulation and monitoring methods. Supports signal-tied adjustments.",
    },
    {
      id: "3",
      label: "Helms RIR-based RPE",
      citation:
        "Helms ER, Cronin J, Storey A, Zourdos MC. Application of the repetitions in reserve-based rating of perceived exertion scale for resistance training. Strength Cond J. 2016;38(4):42-49.",
      url: "https://doi.org/10.1519/SSC.0000000000000218",
      note: "Practical reference for effort-based autoregulation as one example of a training signal.",
    },
    {
      id: "4",
      label: "NSCA periodization concepts",
      citation:
        "NSCA. Central Concepts Related to Periodization. Kinetic Select.",
      url: "https://www.nsca.com/education/articles/kinetic-select/central-concepts-related-to-periodization/",
      note: "Stimulus-fatigue-recovery-adaptation framing for why longer-term structure still matters when short-term adjustments are available.",
    },
  ],
};
