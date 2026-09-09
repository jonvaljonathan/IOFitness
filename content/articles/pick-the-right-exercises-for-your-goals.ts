import type { LearnArticle } from "../learn";

/**
 * Authority article #9.
 * Primary intent: the right exercises for your goals
 * Thesis: if you want ski season or grandkids strength, the week has to train
 * those demands. Most apps fake the match. IOFitness picks the exercises.
 * "You get out what you put in" earns its place later, not in the open.
 */
export const exerciseSelectionArticle: LearnArticle = {
  slug: "pick-the-right-exercises-for-your-goals",
  title: "The Right Exercises for Your Goals",
  description:
    "If you want to ski hard or pick up your grandkids, your training week has to prepare you for those things. Most apps fill a generic template. IOFitness is built to pick the exercises that match your goals.",
  date: "2026-09-06",
  dateModified: "2026-09-09",
  job: "system_capability",
  body: [
    {
      type: "p",
      text: "You want to ski hard in February. Or pick up your grandkids without guessing. Or keep a shoulder from wrecking the rest of your upper-body work.",
    },
    {
      type: "p",
      text: "Those are real goals. The week only helps if the exercises in it prepare you for them. Sweating through a random circuit is not the same thing.",
    },
    {
      type: "callout",
      text: "Short version: you set the goal. IOFitness picks the exercises. The session should look a little like the life you care about, not like a generic template.",
    },

    { type: "h2", text: "You get out what you put in" },
    {
      type: "p",
      text: "That line is older than any app. Your body gets better at the work you actually do [1][2]. Train the wrong thing and you can still finish tired.",
    },
    {
      type: "p",
      text: "So ask a plain question. What does the goal ask your body to do? Then train that.",
    },

    { type: "h2", text: "Life demand, plain exercise" },
    {
      type: "p",
      text: "Most people never make that link. They want a result and hope \"working out\" covers it.",
    },
    {
      type: "p",
      text: "Want to pick up your grandkids? You need to get something like forty pounds off the ground, stand up with it, and keep your balance. We can train that. Practice picking weight up off the floor, carrying it, and standing tall. Nothing fancy. That is the job.",
    },
    {
      type: "p",
      text: "Getting ready for skiing? Stretching alone will not do it. Going down the mountain asks your legs to sit and hold under load, over and over. Sitting in a goblet squat with a kettlebell in your hands is a lot closer to that than another polite stretch on the floor.",
    },
    {
      type: "p",
      text: "Weekend disc golf, golf, or anything that asks you to hold a shape and turn? You need to hold through your middle and rotate without falling apart. If the week never trains holding and turning, the course will teach you the hard way.",
    },
    {
      type: "p",
      text: "You do not need a jargon chart for this. You need an honest picture of the demand, then exercises that look a little like that demand.",
    },
    {
      type: "p",
      text: "Coaches sometimes call that idea SAID: specific adaptation to imposed demands. Same point as you get out what you put in. The acronym is optional. The match is not [1][2].",
    },

    { type: "h2", text: "Why most plans miss it" },
    {
      type: "p",
      text: "That match is hard when you are staring at a giant exercise menu. Sport, later-life strength, muscle, and injury-aware training do not want the same week. A chest-and-arms day can fill time. It cannot decide whether today should teach you to pick weight off the ground, sit and hold for ski legs, or keep training while a shoulder stays quiet.",
    },
    {
      type: "p",
      text: "Most fitness apps skip the match. They stick a goal checkbox on a template, or shuffle movements until the day looks full. You get busy. You do not get closer to grandkids, ski season, or the sport that asked you to hold and turn.",
    },

    { type: "h2", text: "What IOFitness does" },
    {
      type: "p",
      text: "You bring the goal, the sport, the schedule, the equipment, and anything that hurts. IOFitness picks the exercises.",
    },
    {
      type: "p",
      text: "We keep a deep bank of exercises already sorted by what they ask your body to do, what gear they need, and how they treat specific joints. Goals go deeper than one checkbox. Weekend sport, general athleticism, later-life strength and balance, and injury-aware options all change which exercises show up in your week.",
    },
    {
      type: "p",
      text: "Then the app builds the days around those demands. It keeps comparable work long enough to improve, and swaps when your joint, gym, or goal says the old option no longer fits [3].",
    },

    { type: "h2", text: "How the app picks the exercises" },
    {
      type: "p",
      text: "IOFitness reads the life you said you want, figures out what the week must train for that life, and fills each session from the bank. It respects your equipment, what your joints will tolerate, and whether you can own the movement when you get tired. When the goal, the joint, or the gym says the old option is wrong, it changes the exercise and keeps the job.",
    },
    {
      type: "p",
      text: "You do not have to become the programmer. Show up, do the work, and tell the truth about what hurt, what you had available, and what you finished.",
    },

    { type: "h2", text: "Example: ski legs, cranky knee, busy rack" },
    {
      type: "p",
      text: "Goal: ski hard in eight weeks. The week still needs legs that can sit and hold under load. Last month the plan used a back squat. This week the knee hates the bottom position, and the squat rack is taken.",
    },
    {
      type: "example",
      title: "Same goal, different exercise",
      body: [
        "IOFitness keeps the goal: stronger legs for skiing",
        "It keeps the demand: sit, hold, and drive under load",
        "It does not force a deep back squat because a template says so",
        "It does not swap in more stretching and call it ski prep",
        "It picks something you can do: goblet squat, high-box squat, leg press in a quiet range, or a split squat you own",
        "It remembers that exact version so the next session can improve it",
        "It only brings back the deeper squat when the knee and the week allow it",
      ],
    },
    {
      type: "p",
      text: "You still trained for skiing. The app changed the exercise, not the goal. More on training around a limitation is in [how to train with a limitation](/learn/how-to-train-with-a-limitation).",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "If you want to pick forty pounds off the ground, sit and hold for ski legs, or hold and turn through your middle, the week should train those things. You get out what you put in. IOFitness is built to pick the exercises that match. You set the goal. The app picks the exercises. Then you show up and train.",
    },
    {
      type: "p",
      text: "For the broader question of whether an app is actually personalized, see [does your fitness app actually personalize anything](/learn/do-fitness-apps-actually-personalize-workouts). If the harder problem is still the goal itself, start with [how to set goals that match real timelines](/learn/how-to-set-goals-that-match-real-timelines). If you are not training yet, begin with [start a training habit](/learn/start-a-training-habit).",
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
      note: "Narrative review on training specificity and transfer for athletes. Used to support matching training demands to the life you want, not busy generic work.",
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
