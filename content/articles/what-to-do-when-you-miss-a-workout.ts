import type { LearnArticle } from "../learn";

/**
 * Authority article: missed workout.
 * Thesis: decide from what you actually trained, not only the calendar.
 * Do not double up by default. Protect the week's priority work.
 */
export const missedWorkoutArticle: LearnArticle = {
  slug: "what-to-do-when-you-miss-a-workout",
  title: "What Should Actually Happen to Your Plan When You Miss a Workout",
  description:
    "Missed a workout? Do not punish yourself or stack two hard days. Decide from what you actually trained, what the week still needs, and what would wreck the rest of it.",
  date: "2026-09-03",
  dateModified: "2026-09-09",
  job: "reader_decision",
  body: [
    {
      type: "p",
      text: "You missed Monday. The useful question is not how to punish yourself for it. The useful question is what should happen next, given what you actually did.",
    },
    {
      type: "p",
      text: "Most advice stops at the calendar. Skip it. Make it up tomorrow. Slide the whole week forward. Do not double up. That last point especially matters. Stacking two full hard sessions because you feel behind is a common way to raise fatigue, lower session quality, and make the rest of the week harder to recover from [1][2].",
    },
    {
      type: "callout",
      text: "Short version: look at what you trained, what important work you missed, how recovered you feel, and whether fitting the miss back in would pile hard days on top of each other. Then skip, shift, keep the order, or rebuild the rest of the week.",
    },

    { type: "h2", text: "The calendar is a proposal. The log is what happened." },
    {
      type: "p",
      text: "The plan said Lower on Monday, Conditioning on Tuesday, Upper on Wednesday. That is a proposal. Training state is what you actually completed, what you skipped, and what that means for the next useful session.",
    },
    {
      type: "p",
      text: "Those two diverge fast. Monday was a heavy lower day with the week's main squat work. You miss Monday. On paper, Tuesday is still conditioning. In real terms, the week has not yet gotten its main lower-body strength work. Treating Tuesday as sacred because the calendar says so can leave the more important session unfinished.",
    },
    {
      type: "p",
      text: "Good programming manages hard work, fatigue, and recovery over time [3]. A missed session changes the stress that actually landed. The next decision should reflect that.",
    },

    { type: "h2", text: "What one miss usually costs" },
    {
      type: "p",
      text: "For most people, one missed session is a small event for the body. Strength often holds up across interruptions shorter than about four weeks. Highly specific qualities and some endurance markers can drift sooner [4][5]. That is reassuring. It does not mean the week should pretend nothing happened.",
    },
    {
      type: "p",
      text: "The cost is usually which hard work you lose, not instant detraining. If your plan only gives meaningful lower-body strength twice a week, missing one of those days is a bigger problem than missing an accessory session that repeats later [6].",
    },
    {
      type: "p",
      text: "So classify the miss:",
    },
    {
      type: "ul",
      items: [
        "A primary strength or skill session that carries progression",
        "Hard conditioning that is hard to replace later in the week",
        "Supporting work that repeats soon anyway",
        "An easier recovery session whose main job was readiness",
      ],
    },

    { type: "h2", text: "Four reasonable options" },

    { type: "h3", text: "1. Skip it and continue" },
    {
      type: "p",
      text: "Right default when the missed work is not unique in the week, when you are short on recovery, or when the next session already covers the same job soon. Example: you miss Thursday's optional conditioning, and Saturday already includes a harder conditioning bout.",
    },
    {
      type: "p",
      text: "Also the right call when illness, poor sleep, or accumulating soreness caused the miss. Catching up then means stacking stress onto a system that already asked for less.",
    },

    { type: "h3", text: "2. Shift the remaining schedule" },
    {
      type: "p",
      text: "Sliding remaining sessions one day can work when the week is sparse, the sessions are similar in cost, and the shift does not collide with sport, travel, or another hard day. A blanket +1 day rule treats dates as the plan. It does not ask whether the new order still fits.",
    },

    { type: "h3", text: "3. Keep the planned order" },
    {
      type: "p",
      text: "Sometimes the order of sessions matters more than the dates. A heavy lower day before a hard interval day may be intentional. If you miss the lower day, keeping order can mean doing the lower session next and delaying the intervals, rather than doing intervals first because that was tomorrow's label.",
    },

    { type: "h3", text: "4. Rebuild the rest of the week" },
    {
      type: "p",
      text: "Keep the highest-priority work that still fits. Shorten or combine only when both pieces stay high quality. Drop the lowest-value work. This is usually best when one miss would otherwise force two hard qualities onto the same day, or when several sessions have already gone missing.",
    },

    { type: "h2", text: "Why doubling full sessions is a bad default" },
    {
      type: "p",
      text: "Doubling feels fair. You missed Monday, so Monday plus Tuesday happens on Tuesday. Fairness is not a recovery variable. Two full hard sessions in one day raise fatigue, can reduce the quality of the second session, and may make the rest of the week harder to recover from [1][2][3].",
    },
    {
      type: "p",
      text: "If both sessions tax the same tissue, the problem is obvious: heavy squats and hard running intervals both load the legs. Hard aerobic work close to strength work can impair performance when recovery between bouts is short [1][2].",
    },
    {
      type: "p",
      text: "A shortened substitute can be reasonable. Keeping the two most important lifts from the missed day, or a short conditioning piece, is different from running two complete sessions back to back.",
    },

    { type: "h2", text: "When sliding everything one day makes the plan worse" },
    {
      type: "p",
      text: "Saturday recreational sport is the highest-priority event of the week. You missed Monday's heavy lower session.",
    },
    {
      type: "example",
      title: "Original planned week",
      body: [
        "Monday: Heavy lower-body strength, including the week's main squat work",
        "Tuesday: Easy aerobic work and mobility",
        "Wednesday: Upper-body strength",
        "Thursday: Hard conditioning intervals",
        "Friday: Off",
        "Saturday: Recreational sport (highest priority)",
        "Sunday: Off",
      ],
    },
    {
      type: "p",
      text: "A mechanical +1-day shift moves Monday's work to Tuesday, and parks Thursday's hard intervals on Friday, the day before sport. You recovered the calendar labels, then compromised the session that mattered most.",
    },
    {
      type: "example",
      title: "A better rebuild",
      body: [
        "Monday: Missed",
        "Tuesday: Heavy lower-body strength, including the squat work",
        "Wednesday: Upper-body strength",
        "Thursday: Easy aerobic work and mobility",
        "Friday: Off",
        "Saturday: Recreational sport",
        "Sunday: Off",
      ],
    },
    {
      type: "p",
      text: "The missed squat work moves to Tuesday while there is still room. Hard intervals drop for this week rather than land on Friday. Easy work moves to Thursday so you arrive at Saturday with fresher legs. Protect the priority event. Keep the unfinished strength work. Let the lowest-value hard session wait.",
    },

    { type: "h2", text: "When the miss is several workouts, not one" },
    {
      type: "p",
      text: "One missed session is usually a local edit. Several missed sessions are a rebuild. If the gap stretches into weeks, that becomes [how to return to training after time off](/learn/how-to-return-to-training-after-time-off).",
    },
    {
      type: "p",
      text: "After a few days off, the main risks are restarting too hard and trying to repay the whole calendar. Strength often holds up better than people expect across short interruptions, but readiness and tolerance for hard volume can still feel off [4][5].",
    },
    {
      type: "ul",
      items: [
        "Identify the smallest set of sessions that still covers your main weekly needs",
        "Keep intensity honest on the work you do, rather than inventing giant catch-up volume [7]",
        "Accept that some planned progression will wait a week",
        "Return with clean execution before chasing the last loads you hit",
      ],
    },
    {
      type: "p",
      text: "When people reduce frequency or volume but keep relative intensity high, strength can be preserved far better than total stoppage would suggest [7][8]. Protect a few high-quality sessions instead of cramming every skipped label back into the week.",
    },

    { type: "h2", text: "How to choose quickly" },
    {
      type: "ul",
      items: [
        "Missed supporting work, next hard day still intact: continue",
        "Missed a key progression session, and you have a low-cost day later: shift or insert that work",
        "Missed work would collide with another hard day or with sport: rebuild",
        "Missed work because you are run down: continue with the next sensible session, or reduce it",
        "Missed most of the week: rebuild from priorities, do not repay the calendar",
      ],
    },
    {
      type: "p",
      text: "If you need one sentence: finish the week's most important unfinished training without stacking so much fatigue that the remaining sessions suffer.",
    },

    { type: "h2", text: "What a smart plan should do here" },
    {
      type: "p",
      text: "A plan that only knows what day it is will keep handing you Tuesday's workout after a missed Monday. A plan that knows what you completed can ask a better question: given the work still missing and the fatigue already present, what should the next session be?",
    },
    {
      type: "p",
      text: "That is [adaptive training](/learn/what-is-adaptive-training) in practice. The calendar is a proposal. The log is what happened. IOFitness is built so the next session can update from real training state when life moves days around.",
    },
    {
      type: "p",
      text: "If the whole week is smaller up front, that is a compression problem rather than a single missed day: [when your week shrinks](/learn/when-your-week-shrinks).",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Missing a workout is ordinary. Making the next decision from dates alone is optional. Look at what you trained, what the week still needs, and whether fitting the miss back in would help or just concentrate fatigue. Skip, shift, keep the order, or rebuild. Choose the option that leaves the rest of the week trainable.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "NSCA / concurrent fatigue",
      citation:
        "Panissa VLG, Greco CC, Ribeiro N, Julio UF, Tricoli V, Franchini E. Concurrent Training and the Acute Interference Effect on Strength: Reviewing the Relevant Variables. Strength Cond J. 2022;44(3):46-57.",
      url: "https://journals.lww.com/nsca-scj/fulltext/2022/06000/concurrent_training_and_the_acute_interference.5.aspx",
      note: "Supports acute interference and recovery-spacing concerns. Used for quality/fatigue caution, not as a direct trial of missed-workout doubling.",
    },
    {
      id: "2",
      label: "Concurrent training recovery intervals",
      citation:
        "Wang T, Bo S. Optimizing concurrent training programs: A review on factors that enhance muscle strength. Medicine (Baltimore). 2024;103(52):e41055.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11688070/",
      note: "Supports separating costly modalities and allowing adequate recovery.",
    },
    {
      id: "3",
      label: "NSCA periodization concepts",
      citation:
        "NSCA. Central Concepts Related to Periodization. Kinetic Select.",
      url: "https://www.nsca.com/education/articles/kinetic-select/central-concepts-related-to-periodization/",
      note: "Stimulus-fatigue-recovery-adaptation framing for why completed stress, not the printed day, should guide the next session.",
    },
    {
      id: "4",
      label: "Mujika & Padilla short-term detraining",
      citation:
        "Mujika I, Padilla S. Detraining: loss of training-induced physiological and performance adaptations. Part I: short term insufficient training stimulus. Sports Med. 2000;30(2):79-87.",
      url: "https://doi.org/10.2165/00007256-200030020-00002",
      note: "Strength often relatively durable across short interruptions; some specific and endurance qualities change sooner.",
    },
    {
      id: "5",
      label: "Mujika & Padilla muscular detraining",
      citation:
        "Mujika I, Padilla S. Muscular characteristics of detraining in humans. Med Sci Sports Exerc. 2001;33(8):1297-1303.",
      url: "https://doi.org/10.1097/00005768-200108000-00009",
      note: "Supports cautious interpretation of short layoffs versus longer stoppages.",
    },
    {
      id: "6",
      label: "ACSM 2026 resistance training position stand",
      citation:
        "Currier BS, D'Souza AC, Fiatarone Singh MA, Lowisz CV, Rawson ES, Schoenfeld BJ, Smith-Ryan AE, Steen JP, Thomas GA, Triplett NT, Washington TA, Werner TJ, Phillips SM. American College of Sports Medicine Position Stand. Resistance Training Prescription for Muscle Function, Hypertrophy, and Physical Performance in Healthy Adults: An Overview of Reviews. Med Sci Sports Exerc. 2026;58(4):851-872.",
      url: "https://doi.org/10.1249/MSS.0000000000003897",
      note: "Used for frequency and progressive overload principles in healthy adults.",
    },
    {
      id: "7",
      label: "Minimal dose to maintain performance",
      citation:
        "Spiering BA, Mujika I, Sharp MA, Foulis SA. Maintaining Physical Performance: The Minimal Dose of Exercise Needed to Preserve Endurance and Strength Over Time. J Strength Cond Res. 2021;35(5):1449-1458.",
      url: "https://doi.org/10.1519/JSC.0000000000003964",
      note: "Reduced frequency or volume can preserve much of strength/endurance if intensity remains high.",
    },
    {
      id: "8",
      label: "Reduced training frequency and strength",
      citation:
        "Graves JE, Pollock ML, Leggett SH, Braith RW, Carpenter DM, Colvin LB. Effect of reduced training frequency on muscular strength. Int J Sports Med. 1988;9(5):316-319.",
      url: "https://doi.org/10.1055/s-2007-1025031",
      note: "Cutting frequency is less damaging than stopping when the remaining work stays hard.",
    },
  ],
};
