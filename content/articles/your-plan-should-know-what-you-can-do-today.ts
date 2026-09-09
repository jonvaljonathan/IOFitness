import type { LearnArticle } from "../learn";

/**
 * Authority article: whole-picture progressive programming.
 * Thesis: a real goal (ski this winter) plus age, elbow, and an old knee is
 * one picture. Most apps hear the goal and jump to a hard template exercise.
 * IOFitness is built to know what you can do today, then progress in detail
 * toward the goal so you do not flame out.
 */
export const startWhereYouAreArticle: LearnArticle = {
  slug: "your-plan-should-know-what-you-can-do-today",
  title: "Your Plan Should Know What You Can Do Today",
  description:
    "You are 68, you have a cranky elbow and an old knee injury, and you want to ski this winter. A useful plan takes that whole picture, starts where you are, and progresses in detail. A generic ski template that jumps to a barbell back squat does not.",
  date: "2026-09-09",
  dateModified: "2026-09-09",
  job: "system_capability",
  body: [
    {
      type: "p",
      text: "You are 68. Your elbow has been bothering you. You have an old knee injury. You want to ski this winter.",
    },
    {
      type: "p",
      text: "That is not four separate forms. That is one person asking how to get there from here.",
    },
    {
      type: "callout",
      text: "Short version: a useful plan sees the whole picture, starts with what you can do today, and progresses toward the goal in steps you can own. A template that hears \"ski\" and throws a barbell back squat at you is guessing.",
    },

    { type: "h2", text: "The whole picture, not a goal checkbox" },
    {
      type: "p",
      text: "Ski season matters. So does the elbow. So does the knee. So does the fact that you are not twenty-two and coming off last year's race season.",
    },
    {
      type: "p",
      text: "A plan that only stores \"ski\" and your age is not building around you. It is labeling a template. The real inputs are what you can load today, what flares, what equipment you have, how many days you will actually train, and how far away winter is.",
    },
    {
      type: "p",
      text: "IOFitness is built to take that whole picture when it builds the week: goal, sports, schedule, equipment, and limitations together. Not a ski sticker on a generic lower-body day.",
    },

    { type: "h2", text: "Why people flame out on \"ski prep\"" },
    {
      type: "p",
      text: "A lot of apps hear the goal and jump straight to hard textbook exercises. Barbell back squat. Heavy lunges. Whatever looked like ski training on a content calendar.",
    },
    {
      type: "p",
      text: "They do not know if you can squat yet. They do not know if a TRX squat is still a challenge. They do not know whether your knee will tolerate depth, or whether your elbow will hate anything that forces a heavy grip this month.",
    },
    {
      type: "p",
      text: "So the first week feels heroic and the third week is quiet. Not because you lack grit. Because the plan skipped the steps between \"here\" and \"ski legs.\"",
    },

    { type: "h2", text: "Start where you are, then get detailed" },
    {
      type: "p",
      text: "Progressive training means the next exercise is earned. If you are rebuilding a squat pattern, you may need supported squats, shallower ranges, or machine options before a free barbell ever shows up. If pressing is limited, the plan should keep upper-body work alive with versions you can own, not delete your upper body or force the painful setup.",
    },
    {
      type: "p",
      text: "Detail matters here. \"Do some legs\" is not a plan. Which stance. Which range. Which tool. How hard. What happens when the knee is louder on Thursday than it was on Monday. That is the difference between a week that builds toward winter and a week that burns you out.",
    },
    {
      type: "p",
      text: "Matching the exercise to the goal still matters. Ski legs need sit-and-hold strength under load, not only stretching. That idea lives in [the right exercises for your goals](/learn/pick-the-right-exercises-for-your-goals). This article is the other half: the exercise has to fit the person holding the goal today.",
    },

    { type: "h2", text: "What IOFitness does with that person" },
    {
      type: "p",
      text: "You bring the ski goal, the elbow, the knee, the schedule, and the equipment. IOFitness builds the sessions from that picture.",
    },
    {
      type: "p",
      text: "It picks exercises you can progress from where you are. It keeps the qualities ski season needs in the week. It swaps tools when a joint complains instead of pretending the template is sacred. And it moves you along a progression over time, instead of handing you the top of the ladder on day one.",
    },
    {
      type: "p",
      text: "That is also why limitation training is not a permanent dodge. When a joint is loud, keep the job with a version you can load, and climb back when the next sessions say you can. More on that in [how to train with a limitation](/learn/how-to-train-with-a-limitation).",
    },

    { type: "h2", text: "Example: ski this winter, knee and elbow in the room" },
    {
      type: "p",
      text: "Same person. Goal is ski season. Knee does not love deep free squats yet. Elbow does not love heavy hanging grips this month.",
    },
    {
      type: "example",
      title: "Whole picture, workable week",
      body: [
        "Keep the goal: stronger, more durable legs for skiing",
        "Do not open with a barbell back squat just because a ski template likes it",
        "Start with a squat pattern you can own: TRX squat, goblet squat to a box, or leg press in a quiet range",
        "Progress that version until the next step is earned",
        "Keep upper-body work that does not pick a fight with the elbow",
        "Update when a session says the knee or elbow was louder than expected",
      ],
    },
    {
      type: "p",
      text: "You are still training for skiing. You are not pretending the injuries are not there. You are not jumping to a lift you have not earned.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "A real goal plus age, an elbow, and an old knee is one picture. Useful programming is detailed and progressive: it knows what you can do today, keeps the goal in view, and climbs in steps you can own. IOFitness is built to take that whole picture when it picks the exercises. You set the destination. The app starts from here.",
    },
    {
      type: "p",
      text: "If you want the broader test for fake personalization, see [does your fitness app actually personalize anything](/learn/do-fitness-apps-actually-personalize-workouts). If you are coming back after time off, start with [how to return to training after time off](/learn/how-to-return-to-training-after-time-off).",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Sale and MacDougall specificity review",
      citation:
        "Sale D, MacDougall D. Specificity in strength training: a review for the coach and athlete. Can J Appl Sport Sci. 1981;6(2):87-92.",
      url: "https://pubmed.ncbi.nlm.nih.gov/7016357/",
      note: "Supports training the demands the goal needs, while still starting from capacities the person actually has today.",
    },
    {
      id: "2",
      label: "Kassiano exercise-variation systematic review",
      citation:
        "Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES. Does varying resistance exercises promote superior muscle hypertrophy and strength gains? A systematic review. J Strength Cond Res. 2022;36(6):1753-1762.",
      url: "https://doi.org/10.1519/JSC.0000000000004258",
      note: "Supports deliberate exercise choice and progression rather than jumping to an advanced variation for novelty or template aesthetics.",
    },
  ],
};
