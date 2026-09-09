import type { LearnArticle } from "../learn";

/**
 * Authority article #9.
 * Primary intent: pick the right exercises for your goals
 * Thesis: matching lifts to real goals is hard; most apps fake it with tags
 * and templates. IOFitness is built to do that matching for you. Reader sets
 * the goal; the app picks the lifts. SAID is why the match matters.
 */
export const exerciseSelectionArticle: LearnArticle = {
  slug: "pick-the-right-exercises-for-your-goals",
  title: "Pick the Right Exercises for Your Goals",
  description:
    "Matching exercises to real goals is confusing. Most apps slap a goal tag on a template. IOFitness is built to choose the lifts so your sessions serve the life you want.",
  date: "2026-09-06",
  dateModified: "2026-09-09",
  job: "system_capability",
  body: [
    {
      type: "p",
      text: "You want to ski hard in February. Or pick up your grandkids without thinking twice. Or get past the shoulder that keeps wrecking pressing. Or look better in a swimsuit. Those are goals. The lifts in your week only help if they serve them.",
    },
    {
      type: "p",
      text: "That match is harder than it looks. Most fitness apps skip it. They stick a goal checkbox on a template, or shuffle an exercise menu until the session looks full. You get squat, bench, row, curls, and no clear line from those lifts to the life you actually want.",
    },
    {
      type: "callout",
      text: "Short version: you set the goal. IOFitness picks the lifts. The app turns your outcome into the qualities the week needs, then fills each session from a deep exercise bank built for sport, athletics, later-life training, and injury-aware options.",
    },

    { type: "h2", text: "Why this is confusing on your own" },
    {
      type: "p",
      text: "Staring at a giant exercise menu and asking \"what should I do today?\" usually gets you a busy week that does not move the thing you care about. Ski legs, grandkid strength, a quieter shoulder, and muscle where you care how you look each need different work.",
    },
    {
      type: "p",
      text: "A body-part split can sketch a session. It cannot tell you which squat keeps ski legs progressing when your knee complains, or whether today's press should build muscle or protect a cranky shoulder. Someone has to own that decision every time the session gets filled. In IOFitness, that someone is the app.",
    },

    { type: "h2", text: "What IOFitness does instead" },
    {
      type: "p",
      text: "You bring the goal, the sport, the schedule, the equipment, and anything that hurts. IOFitness chooses the lifts.",
    },
    {
      type: "p",
      text: "The product sits on a deep exercise bank: hundreds of movements already mapped to the qualities they train, the equipment they need, and how hard they are on specific joints. Goals are broken down past a single checkbox. Weekend sport, general athleticism, later-life strength and balance, and injury-aware progressions all change which lifts belong in the week.",
    },
    {
      type: "p",
      text: "Then the app shapes the days. Each slot in a session is there because it serves a quality your goal still needs. IOFitness fills those slots from the bank, keeps comparable lifts long enough to progress, and swaps when your joint, gym, or goal says the old tool no longer fits.",
    },

    { type: "h2", text: "SAID, without the textbook" },
    {
      type: "p",
      text: "Coaches shorten this to SAID: specific adaptation to imposed demands. Plain version: you get better at what you train.",
    },
    {
      type: "p",
      text: "Long easy sets build staying power. Heavy, clean work builds force. A stance, a hinge, a single-leg pattern, or a press you can actually load will move those qualities. A random hard workout can leave you tired and still miss the demand your goal needed.",
    },
    {
      type: "p",
      text: "That is why exercise choice matters so much [1]. An app that only changes the weight on yesterday's menu is barely choosing at all.",
    },

    { type: "h2", text: "How the app picks" },
    {
      type: "p",
      text: "IOFitness reads the outcome you set, turns it into the qualities and patterns the week must train, then fills each session slot from the bank for that quality. It respects equipment, joint tolerance, and skill under fatigue. It prefers a lift you can repeat and progress. When the goal, the joint, or the gym says the old tool is wrong, it swaps the lift and keeps the job.",
    },
    {
      type: "p",
      text: "You do not run that process in the parking lot. Your job is to train the session and tell the truth about what hurt, what you had available, and what you actually finished.",
    },

    { type: "h2", text: "Example: ski legs, cranky knee, busy rack" },
    {
      type: "p",
      text: "Goal: ski hard in eight weeks. The week still needs hard lower-body strength. Last month the plan used a back squat. This week the knee hates the bottom position, and the squat rack is taken.",
    },
    {
      type: "example",
      title: "Same goal, different tool",
      body: [
        "IOFitness keeps the outcome: stronger, more durable legs for skiing",
        "It keeps the job: hard bilateral or split lower-body strength",
        "It does not force a deep back squat because a template says so",
        "It does not hand you a random leg circuit with no progression target",
        "It picks a workable tool from the bank: high-box squat, leg press in a quiet range, or a split squat you can own",
        "It logs that exact version so the next session can progress it",
        "It only reopens the original squat range when the knee and the week allow it",
      ],
    },
    {
      type: "p",
      text: "You still trained for skiing. The app changed the tool, not the goal. More on that case lives in [how to train with a limitation](/learn/how-to-train-with-a-limitation).",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Matching exercises to goals is confusing for a reason. IOFitness is built to do that matching for you: a deep exercise bank, goals broken down in detail, and sessions shaped so the lifts impose the demands your outcome needs. You set the goal. The app picks. Then you show up and train.",
    },
    {
      type: "p",
      text: "For the broader \"is this actually personalized?\" test, see [does your fitness app actually personalize anything](/learn/do-fitness-apps-actually-personalize-workouts). If the harder problem is still the goal itself, start with [how to set goals that match real timelines](/learn/how-to-set-goals-that-match-real-timelines). If you are not training yet, begin with [start a training habit](/learn/start-a-training-habit).",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Kassiano exercise-variation systematic review",
      citation:
        "Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES. Does varying resistance exercises promote superior muscle hypertrophy and strength gains? A systematic review. J Strength Cond Res. 2022;36(6):1753-1762.",
      url: "https://doi.org/10.1519/JSC.0000000000004258",
      note: "Finds that systematic exercise variation can influence hypertrophy and strength adaptations, while excessive or random variation may blunt gains. Used to support deliberate, goal-serving swaps over novelty shuffling, and to underline that exercise selection is a high-impact programming decision.",
    },
  ],
};
