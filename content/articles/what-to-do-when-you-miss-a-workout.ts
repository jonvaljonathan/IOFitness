import type { LearnArticle } from "../learn";

/**
 * Authority article #1.
 * Primary intent: what to do when you miss a workout
 * Thesis: decide from training state, not only calendar state.
 */
export const missedWorkoutArticle: LearnArticle = {
  slug: "what-to-do-when-you-miss-a-workout",
  title: "What Should Actually Happen to Your Plan When You Miss a Workout",
  description:
    "Missed a workout? Decide whether to skip, shift, preserve sequence, or reprogram based on what you actually trained, not only the calendar.",
  date: "2026-09-03",
  dateModified: "2026-09-04",
  body: [
    {
      type: "p",
      text: "If you miss a workout, the useful question is not how to punish yourself for it. The useful question is what training should happen next, given what you actually completed.",
    },
    {
      type: "p",
      text: "Most advice stops at the calendar. Skip it. Make it up tomorrow. Slide the whole week forward. Do not double up. That advice is often sensible as far as it goes, and the last point especially matters. Stacking two full hard sessions because you feel behind is a common way to raise fatigue, lower session quality, and make the rest of the week harder to recover from [1][2].",
    },
    {
      type: "p",
      text: "It still misses the programming problem. Your plan is a sequence of training exposures: lower-body strength, upper-body work, hard conditioning, skill practice, easier recovery work. When one of those exposures does not happen, your training state changes even if the printed calendar still looks tidy.",
    },
    {
      type: "callout",
      text: "Short version: decide from training state, not only calendar state. Ask what you completed, what important exposure you missed, how much fatigue you still carry, and whether fitting the missed work back in would create an unreasonable pile-up.",
    },

    { type: "h2", text: "Calendar state is not training state" },
    {
      type: "p",
      text: "Calendar state is what the plan assigned to a day: Lower A on Monday, Conditioning on Tuesday, Upper on Wednesday. Training state is what you actually did, what you skipped, and what that means for the next useful session.",
    },
    {
      type: "p",
      text: "Those two can diverge quickly. Imagine Monday's session is a heavy lower-body day that also includes the week's main squat progression. You miss Monday. On paper, Tuesday is still conditioning. In training terms, you have not yet given the week its main lower-body strength stimulus. Treating Tuesday as sacred because the calendar says so can leave the more important exposure unfinished.",
    },
    {
      type: "p",
      text: "This distinction is a programming principle, not the result of a trial titled \"people who miss Wednesday.\" Good programming manages stimuli, fatigue, and recovery over time. Periodization models describe that relationship as a cycle of stress, fatigue, recovery, and adaptation [3]. A missed session changes the stress that actually landed. The next decision should reflect that.",
    },

    { type: "h2", text: "What one missed workout usually costs" },
    {
      type: "p",
      text: "For most recreational trainees, one missed session is a small event physiologically. Reviews of short-term training stoppage suggest that strength is often fairly durable across interruptions shorter than about four weeks, while highly specific qualities and some endurance markers can drift sooner [4][5]. That is reassuring. It also does not mean the week should ignore the miss.",
    },
    {
      type: "p",
      text: "The cost of a miss is usually more about which hard exposures you lose than about immediate detraining. If your plan only gives lower-body strength two meaningful exposures a week, missing one of them is a bigger programming problem than missing an accessory session that repeats later. Frequency recommendations for resistance training exist because repeated exposure matters for continued progress [6]. Missing the only hard lower day in a week is different from missing a second upper accessory day.",
    },
    {
      type: "p",
      text: "So the first job is classification: what did the missed session actually contribute?",
    },
    {
      type: "ul",
      items: [
        "A primary strength or skill session that carries progression",
        "A hard conditioning exposure that is hard to replace later in the week",
        "A supporting session that repeats soon anyway",
        "An easier recovery or mobility session whose main job was readiness",
      ],
    },

    { type: "h2", text: "A practical decision framework" },
    {
      type: "p",
      text: "Work through these questions in order. They are meant to be usable between meetings, not to simulate a lab.",
    },
    {
      type: "ol",
      items: [
        "What did I actually complete this week so far?",
        "What important exposure did I miss: heavy lower work, pressing, hard intervals, sport practice, or something else?",
        "How much time has passed, and how recovered do I feel now?",
        "What is already coming next on the plan?",
        "Does the missed session carry progression or skill state that the week still needs?",
        "Can I fit any of it back in without creating an unreasonable concentration of fatigue?",
        "Given that, is continuing, shifting, preserving sequence, or reprogramming the better choice?",
      ],
    },
    {
      type: "p",
      text: "If the missed session was supporting work and the next planned session still covers your main weekly needs, continuing is often enough. If the missed session was the week's main progression session and you still have room later, shifting or reprogramming is usually better than pretending nothing changed.",
    },

    { type: "h2", text: "Four reasonable options" },

    { type: "h3", text: "1. Skip the missed session and continue" },
    {
      type: "p",
      text: "This is the right default when the missed work is not unique in the week, when you are short on recovery, or when the next session already covers the same quality soon. Example: you miss Thursday's optional conditioning, and Saturday already includes a harder conditioning bout. Continuing protects the rest of the plan.",
    },
    {
      type: "p",
      text: "It is also the right call when illness, poor sleep, or accumulating soreness caused the miss. In that case, catching up often means stacking stress onto a system that already asked for less.",
    },

    { type: "h3", text: "2. Shift the remaining schedule" },
    {
      type: "p",
      text: "Sliding remaining sessions one day can work when the week is sparse, the sessions are similar in cost, and the shift does not collide with sport, travel, or another hard day. It works poorly when the week already has incompatible hard sessions lined up. A blanket +1 day rule treats dates as the plan. It does not ask whether the new order still fits the training you still need to do.",
    },

    { type: "h3", text: "3. Preserve the planned training sequence" },
    {
      type: "p",
      text: "Sometimes the order of sessions matters more than the dates. A heavy lower day before a hard interval day may be intentional. If you miss the lower day, preserving sequence can mean doing the lower session next and delaying the intervals, rather than doing intervals first because that was tomorrow's label. Sequence preservation is about stimulus order and readiness, not about keeping Monday sacred.",
    },

    { type: "h3", text: "4. Reprogram the remaining week" },
    {
      type: "p",
      text: "Reprogramming means rebuilding the rest of the week from current training state. Keep the highest-priority exposures that still fit. Shorten or combine only when both pieces stay high quality. Drop the lowest-value work. This is usually the best option when one miss would otherwise force two hard qualities onto the same day, or when several sessions have already gone missing.",
    },
    {
      type: "p",
      text: "Reprogramming is a coaching decision. There is no single trial that tells you the one correct rearrangement for every plan. The principle is straightforward: prioritize unfinished weekly stimuli, manage fatigue, and protect the sessions that carry progression.",
    },

    { type: "h2", text: "Why automatically doubling full sessions is a bad default" },
    {
      type: "p",
      text: "Doubling feels fair. You missed Monday, so Monday plus Tuesday happens on Tuesday. Fairness is not a recovery variable. Two full hard sessions in one day raise local and systemic fatigue. That can reduce the quality of the second session and may make the rest of the week harder to recover from [1][2][3].",
    },
    {
      type: "p",
      text: "If the two sessions tax the same tissue or quality, the problem is obvious: heavy squats and hard running intervals both load the lower body. Concurrent-training research is useful here as a caution about quality and spacing, not as a direct trial of \"missed Monday, doubled Tuesday.\" Hard aerobic work close to strength work can impair strength-endurance performance when recovery between bouts is short [1][2]. Even when the sessions look different on paper, finishing both can still leave you under-recovered for whatever comes next. That last point is a programming judgment based on fatigue management, not a single study outcome [3].",
    },
    {
      type: "p",
      text: "A shortened substitute can be reasonable. Keeping the two most important lifts from the missed day, or a short conditioning piece, is different from running two complete sessions back to back. The question is whether the combined day still leaves you able to train well afterward.",
    },

    {
      type: "h2",
      text: "A week where sliding everything one day makes the plan worse",
    },
    {
      type: "p",
      text: "Assume Saturday recreational sport is the highest-priority event of the week, and the athlete missed Monday's heavy lower-body session.",
    },
    {
      type: "example",
      title: "Original planned week",
      body: [
        "Monday: Heavy lower-body strength, including the week's main squat progression",
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
      text: "The mechanical response is a true +1-day shift of the remaining gym sessions. Monday's work moves to Tuesday, Tuesday's work to Wednesday, Wednesday's to Thursday, and Thursday's to Friday. Saturday sport stays put.",
    },
    {
      type: "example",
      title: "Mechanical shifted week",
      body: [
        "Monday: Missed",
        "Tuesday: Heavy lower-body strength (from Monday)",
        "Wednesday: Easy aerobic work and mobility (from Tuesday)",
        "Thursday: Upper-body strength (from Wednesday)",
        "Friday: Hard conditioning intervals (from Thursday)",
        "Saturday: Recreational sport",
        "Sunday: Off",
      ],
    },
    {
      type: "p",
      text: "That shift creates an obvious programming conflict. Hard lower-body strength now lands on Tuesday, and hard conditioning lands on Friday, the day before the week's priority event. The original plan left Friday empty so Saturday sport could start fresh. The shifted plan puts a hard interval day immediately before it. From a training-state view, that is a poor trade: you recovered the calendar labels, then compromised the session that mattered most.",
    },
    {
      type: "p",
      text: "One coherent reprogrammed week, with Saturday sport as the non-negotiable priority:",
    },
    {
      type: "example",
      title: "Reprogrammed week",
      body: [
        "Monday: Missed",
        "Tuesday: Heavy lower-body strength, including the squat progression",
        "Wednesday: Upper-body strength",
        "Thursday: Easy aerobic work and mobility",
        "Friday: Off",
        "Saturday: Recreational sport",
        "Sunday: Off",
      ],
    },
    {
      type: "p",
      text: "What changed, and why: the missed squat progression moves to Tuesday while there is still room for it. Upper-body work stays midweek. Hard intervals are dropped for this week rather than parked on Friday. Easy work moves to Thursday so the athlete arrives at Saturday with fresher legs. That is programming judgment: protect the priority event, keep the unfinished strength stimulus, and let the lowest-value hard session wait.",
    },
    {
      type: "p",
      text: "The point is not that shifting is never useful. The point is that dates are not the plan. Priority and fatigue are.",
    },

    { type: "h2", text: "When the miss is several workouts, not one" },
    {
      type: "p",
      text: "One missed session is usually a local edit. Several missed sessions are a rebuild. If the gap stretches into weeks, the problem becomes [how to return to training after time off](/learn/how-to-return-to-training-after-time-off): the old plan remains useful history, but current capacity and tolerance need to be re-checked before the previous weekly dose returns.",
    },
    {
      type: "p",
      text: "After a few days off, the main risks are restarting too hard and trying to repay the whole calendar. Strength often holds up better than people expect across short interruptions, but readiness, coordination, and tolerance for hard volume can still feel off when you return [4][5]. After longer gaps, endurance qualities and recently acquired fitness can decline more noticeably [4][5].",
    },
    {
      type: "p",
      text: "A better approach after multiple misses:",
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
      text: "Maintenance research is useful here as a principle, not as a prescription for every missed Wednesday. When people reduce training frequency or volume but keep relative intensity high, strength can be preserved far better than total stoppage would suggest [7][8]. That supports a practical rule: after disruption, protect a few high-quality exposures instead of cramming every skipped label back into the week.",
    },

    { type: "h2", text: "How to choose quickly" },
    {
      type: "ul",
      items: [
        "Missed supporting work, next hard day still intact: continue",
        "Missed a key progression session, and you have a low-cost day later: shift or insert that exposure",
        "Missed work would collide with another hard quality or with sport: reprogram",
        "Missed work because you are run down: continue with the next sensible session, or reduce it",
        "Missed most of the week: rebuild from priorities, do not repay the calendar",
      ],
    },
    {
      type: "p",
      text: "If you need one sentence: finish the week's most important unfinished training without stacking so much fatigue that the remaining sessions suffer.",
    },

    { type: "h2", text: "What this means for adaptive training" },
    {
      type: "p",
      text: "A plan that only knows what day it is will keep handing you Tuesday's workout after a missed Monday. A plan that knows what you completed can ask a better question: given the exposures still missing and the fatigue already present, what should the next session be?",
    },
    {
      type: "p",
      text: "That is one reason an [adaptive training](/learn/what-is-adaptive-training) system should treat completed training as ground truth. The calendar is a proposal. The log is what happened. IOFitness is built around that idea: programs should update from real training state when life moves sessions around. The same allocation problem shows up when [two goals are competing for the same week](/learn/how-to-train-for-two-goals-at-once). If the whole week is smaller up front, that is a compression problem rather than a single missed day: [when your week shrinks](/learn/when-your-week-shrinks). The decision framework above still stands on its own if you program with a notebook.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Missing a workout is ordinary. Making the next decision from dates alone is optional. Look at what you trained, what the week still needs, and whether fitting the miss back in would help or just concentrate fatigue. Skip, shift, preserve sequence, or reprogram. Choose the option that leaves the rest of the week trainable.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "NSCA / concurrent fatigue",
      citation:
        "Panissa VLG, Greco CC, Ribeiro N, Julio UF, Tricoli V, Franchini E. Concurrent Training and the Acute Interference Effect on Strength: Reviewing the Relevant Variables. Strength Cond J. 2022;44(3):46-57.",
      url: "https://journals.lww.com/nsca-scj/fulltext/2022/06000/concurrent_training_and_the_acute_interference.5.aspx",
      note: "Supports acute interference and recovery-spacing concerns when hard aerobic work precedes or sits close to strength work. Used for quality/fatigue caution, not as a direct trial of missed-workout doubling.",
    },
    {
      id: "2",
      label: "Concurrent training recovery intervals",
      citation:
        "Wang T, Bo S. Optimizing concurrent training programs: A review on factors that enhance muscle strength. Medicine (Baltimore). 2024;103(52):e41055.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11688070/",
      note: "Supports separating costly modalities and allowing adequate recovery when both quality and adaptation matter. Used for sequencing principles, not as proof that one miss ruins several later days.",
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
      note: "Classic review: strength often relatively durable across short interruptions; some specific and endurance qualities change sooner.",
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
      note: "Used for frequency and progressive overload principles in healthy adults, not as a direct trial of missed workouts. Currier BS is first author; Phillips SM is senior/last author.",
    },
    {
      id: "7",
      label: "Minimal dose to maintain performance",
      citation:
        "Spiering BA, Mujika I, Sharp MA, Foulis SA. Maintaining Physical Performance: The Minimal Dose of Exercise Needed to Preserve Endurance and Strength Over Time. J Strength Cond Res. 2021;35(5):1449-1458.",
      url: "https://doi.org/10.1519/JSC.0000000000003964",
      note: "Programming principle: reduced frequency or volume can preserve much of strength/endurance if intensity remains high.",
    },
    {
      id: "8",
      label: "Reduced training frequency and strength",
      citation:
        "Graves JE, Pollock ML, Leggett SH, Braith RW, Carpenter DM, Colvin LB. Effect of reduced training frequency on muscular strength. Int J Sports Med. 1988;9(5):316-319.",
      url: "https://doi.org/10.1055/s-2007-1025031",
      note: "Early evidence that cutting frequency is less damaging than stopping when the remaining work stays hard.",
    },
  ],
};
