import type { LearnArticle } from "../learn";

/**
 * Authority article #9.
 * Primary intent: the right exercises for your goals
 * Thesis: does your training build the life you want? You get out what you
 * put in (SAID). Matching exercises to real goals is hard; most apps fake it.
 * IOFitness picks the exercises from a deep bank shaped by those goals.
 * Reader sets the goal; the app picks the exercises.
 *
 * Tone target (sliders): warm coach over brochure; life over gym jargon;
 * folk truth first, then name the principle; soft product clarity.
 */
export const exerciseSelectionArticle: LearnArticle = {
  slug: "pick-the-right-exercises-for-your-goals",
  title: "The Right Exercises for Your Goals",
  description:
    "Does your training make the life you want to live? You get out what you put in. IOFitness is built to pick the exercises that match your goals, not fill a week from a generic menu.",
  date: "2026-09-06",
  dateModified: "2026-09-09",
  job: "system_capability",
  body: [
    {
      type: "p",
      text: "Does your training make the life you want to live?",
    },
    {
      type: "p",
      text: "Ski season. Picking up grandkids without guessing. A shoulder that stops derailing upper-body work. Feeling stronger in your own body. Those are lives people are trying to build. The week only helps if the exercises in it ask for the things that life needs.",
    },
    {
      type: "callout",
      text: "Short version: you get out what you put in. You set the goal. IOFitness picks the exercises so the week imposes the right demands, instead of looking busy on a generic template.",
    },

    { type: "h2", text: "You get out what you put in" },
    {
      type: "p",
      text: "That line is older than any app. Coaches also call it SAID: specific adaptation to imposed demands. Same idea. Your body adapts to the work you actually do [1][2].",
    },
    {
      type: "p",
      text: "Train long, sustainable efforts and you build staying power. Train heavy, clean force and you get better at producing force. Practice a stance, a hinge, a single-leg pattern, carrying, pressing, or balancing under fatigue, and those qualities move. Skip them, and wishing does not fill the gap.",
    },
    {
      type: "p",
      text: "So a hard week that does not match the goal is still the wrong week. Tired is not the same as trained for the life you want.",
    },

    { type: "h2", text: "Why most plans miss the life" },
    {
      type: "p",
      text: "Matching exercises to real goals is confusing on purpose. Sport, later-life strength, muscle, and injury-aware training do not want the same menu. A body-part split can sketch a session. It cannot decide which lower-body work keeps ski legs progressing when a knee is angry, or which upper-body work still builds you up when a shoulder is loud.",
    },
    {
      type: "p",
      text: "Most fitness apps skip that matching. They stick a goal checkbox on a template, or shuffle an exercise menu until the day looks full. You get a familiar circuit and no clear line from those movements to the life you said you wanted.",
    },

    { type: "h2", text: "What IOFitness does" },
    {
      type: "p",
      text: "You bring the goal, the sport, the schedule, the equipment, and anything that hurts. IOFitness picks the exercises.",
    },
    {
      type: "p",
      text: "The product sits on a deep exercise bank: hundreds of movements mapped to the qualities they train, the equipment they need, and how they load specific joints. Goals are broken down past a single checkbox. Weekend sport, general athleticism, later-life strength and balance, and injury-aware progressions all change which exercises belong in the week.",
    },
    {
      type: "p",
      text: "Then the app shapes the days. Each slot is there because it serves a quality your goal still needs. IOFitness fills those slots from the bank, keeps comparable work long enough to improve, and swaps when your joint, gym, or goal says the old option no longer fits [3].",
    },

    { type: "h2", text: "How the app picks the exercises" },
    {
      type: "p",
      text: "IOFitness reads the outcome you set, turns it into the qualities and patterns the week must train, then fills each session from the bank for that quality. It respects equipment, joint tolerance, and skill under fatigue. It prefers work you can repeat and progress. When the goal, the joint, or the gym says the old option is wrong, it changes the exercise and keeps the job.",
    },
    {
      type: "p",
      text: "You do not have to become the programmer. Your job is to train the session and tell the truth about what hurt, what you had available, and what you actually finished.",
    },

    { type: "h2", text: "Example: ski legs, cranky knee, busy rack" },
    {
      type: "p",
      text: "Goal: ski hard in eight weeks. The week still needs hard lower-body strength. Last month the plan used a back squat. This week the knee hates the bottom position, and the squat rack is taken.",
    },
    {
      type: "example",
      title: "Same goal, different exercise",
      body: [
        "IOFitness keeps the outcome: stronger, more durable legs for skiing",
        "It keeps the job: hard bilateral or split lower-body strength",
        "It does not force a deep back squat because a template says so",
        "It does not hand you a random leg circuit with no progression target",
        "It picks a workable option from the bank: high-box squat, leg press in a quiet range, or a split squat you can own",
        "It logs that exact version so the next session can progress it",
        "It only reopens the original squat range when the knee and the week allow it",
      ],
    },
    {
      type: "p",
      text: "You still trained for skiing. The app changed the exercise, not the goal. More on that case lives in [how to train with a limitation](/learn/how-to-train-with-a-limitation).",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Does your training make the life you want to live? You get out what you put in. IOFitness is built to pick the exercises that impose the demands your goal needs: a deep exercise bank, goals broken down in detail, and days shaped around that match. You set the goal. The app picks the exercises. Then you show up and train.",
    },
    {
      type: "p",
      text: "For the broader \"is this actually personalized?\" test, see [does your fitness app actually personalize anything](/learn/do-fitness-apps-actually-personalize-workouts). If the harder problem is still the goal itself, start with [how to set goals that match real timelines](/learn/how-to-set-goals-that-match-real-timelines). If you are not training yet, begin with [start a training habit](/learn/start-a-training-habit).",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Sale and MacDougall specificity review",
      citation:
        "Sale D, MacDougall D. Specificity in strength training: a review for the coach and athlete. Can J Appl Sport Sci. 1981;6(2):87-92.",
      url: "https://pubmed.ncbi.nlm.nih.gov/7016357/",
      note: "Classic coaching-facing review of specificity in strength training. Used to support the plain claim that adaptations follow the demands you actually train.",
    },
    {
      id: "2",
      label: "Stone et al. training-specificity narrative review",
      citation:
        "Stone MH, Hornsby WG, Suarez DG, Duca M, Pierce KC. Training specificity for athletes: emphasis on strength-power training: a narrative review. J Funct Morphol Kinesiol. 2022;7(4):102.",
      url: "https://doi.org/10.3390/jfmk7040102",
      note: "Narrative review on training specificity and transfer for athletes. Used to support matching training demands to the qualities the goal needs, not busy generic work.",
    },
    {
      id: "3",
      label: "Kassiano exercise-variation systematic review",
      citation:
        "Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES. Does varying resistance exercises promote superior muscle hypertrophy and strength gains? A systematic review. J Strength Cond Res. 2022;36(6):1753-1762.",
      url: "https://doi.org/10.1519/JSC.0000000000004258",
      note: "Finds that systematic exercise variation can influence hypertrophy and strength adaptations, while excessive or random variation may blunt gains. Used to support deliberate, goal-serving swaps over novelty shuffling.",
    },
  ],
};
