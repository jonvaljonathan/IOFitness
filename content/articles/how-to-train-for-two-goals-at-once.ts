import type { LearnArticle } from "../learn";

/**
 * Authority article #2.
 * Primary intent: how to train for two goals at once
 * Thesis: allocate by priority, shared work, conflict, and maintenance dose.
 */
export const twoGoalsArticle: LearnArticle = {
  slug: "how-to-train-for-two-goals-at-once",
  title: "How to Train for Two Goals at Once",
  description:
    "You can train for two goals at once, but only if you decide what gets pushed, what gets maintained, and how much fatigue each goal is allowed to create.",
  date: "2026-09-04",
  dateModified: "2026-09-04",
  body: [
    {
      type: "p",
      text: "Most people do not have one clean fitness goal. They want more muscle and better conditioning. More strength and a faster 5K. A bigger squat and enough speed left for weekend sport. The advice they usually get is to pick one. That advice is tidy. It is also often wrong for how real training lives look.",
    },
    {
      type: "p",
      text: "The better question is not whether two goals can coexist. It is how much training each goal should receive, what work serves both, where the goals collide, and which one takes priority when time or recovery runs out.",
    },
    {
      type: "callout",
      text: "Short version: you can train more than one quality at a time. You cannot push every quality maximally at once. Good programming decides what is being developed, what is being maintained, and how fatigue is budgeted across the week.",
    },

    { type: "h2", text: "Two goals share a limited budget" },
    {
      type: "p",
      text: "Training time, recovery capacity, joint tolerance, and attention are limited. Every hard session spends from that budget. Two goals can sit in the same week, but they still compete for the same resources.",
    },
    {
      type: "p",
      text: "That does not mean every combination causes classic interference. Interference is a specific finding from concurrent-training research: adding endurance work to a strength program can reduce some strength, power, or hypertrophy adaptations compared with strength training alone, depending on how the work is arranged [1][2][3]. Recreational athletes often face a broader problem first: too many hard qualities stacked into too little recovery, whether or not the lab label fits.",
    },
    {
      type: "p",
      text: "So start with allocation, not with a slogan. If both goals matter this month, one of them usually needs to be primary. The other can still progress, or it may need to be held with a smaller dose. Pretending they are equal often means both get an incomplete stimulus and too much leftover fatigue.",
    },

    { type: "h2", text: "Some work helps both goals" },
    {
      type: "p",
      text: "Not every session is a zero-sum trade. Lower-body strength work can support hypertrophy and also transfer to sprint and jump performance in many trainees [4][5]. That matters for the person who wants to add muscle without becoming slower. The squat progression is not only a bodybuilding tool. It can also be part of the athletic foundation, as long as speed and power are not abandoned entirely.",
    },
    {
      type: "p",
      text: "Basic aerobic conditioning can support work capacity and recovery between harder efforts, which may help both gym progress and sport readiness. That is a programming inference from how those qualities are used, not a claim that easy cardio magically builds muscle. Low-cost aerobic work and high-cost interval work are not interchangeable here. One can support the week. The other can consume it.",
    },
    {
      type: "p",
      text: "This is why combining two full plans is usually a bad default. Two plans assume every quality needs a maximal dedicated dose. A better plan asks which exposures are unique to each goal and which exposures do double duty.",
    },
    {
      type: "ul",
      items: [
        "Shared: heavy or hard lower-body strength that feeds both muscle gain and athletic force production",
        "Shared: some aerobic work that improves conditioning without wrecking the next lift",
        "Unique to muscle gain: enough weekly hard sets, progressive loading, and enough food to grow",
        "Unique to sport readiness: sprinting, jumping, change-of-direction work, and actual sport practice",
      ],
    },

    { type: "h2", text: "Where the tradeoffs actually show up" },
    {
      type: "p",
      text: "Concurrent-training research is most useful when you treat it as a map of risk factors, not as a verdict that hybrid training is doomed.",
    },
    {
      type: "p",
      text: "Updated meta-analyses suggest that maximal strength and hypertrophy are often more compatible with aerobic training than older commentary implied, while explosive strength is more vulnerable, especially when endurance and strength are done in the same session [2]. In already-trained people, lower-body strength gains can also suffer when endurance is bolted onto the same session rather than spaced apart [3]. Older meta-analytic work found larger interference when endurance volume and frequency climb, and when running rather than cycling is the endurance mode [1].",
    },
    {
      type: "p",
      text: "That evidence does not say a recreational athlete cannot build muscle while staying athletic. It says the cost rises when hard endurance work is dense, frequent, poorly spaced, or parked on top of the sessions that were supposed to develop strength or power. The research finding is about average adaptation under concurrent loading. The programming judgment is what to protect in a real week.",
    },
    {
      type: "p",
      text: "Session order and spacing matter for quality as well as for adaptation. Hard aerobic work close to strength work can reduce the quality of the strength bout [6][7]. Within a session, a resistance-then-endurance order has been associated with better lower-body strength outcomes than the reverse in prolonged concurrent programs [8]. None of that proves one universal template. It does support a practical rule: protect the session that carries the week's priority.",
    },
    {
      type: "p",
      text: "For a recreational field-sport athlete trying to add muscle, the common collision looks like this: high gym volume for hypertrophy, plus hard conditioning, plus sprint or plyometric work, plus a weekend match. Any one of those can be useful. All of them at once, at high cost, is how both goals get watered down [12].",
    },

    { type: "h2", text: "Primary goal, secondary goal, maintenance dose" },
    {
      type: "p",
      text: "Priority is the missing piece in most train-for-everything advice.",
    },
    {
      type: "ul",
      items: [
        "Primary goal: gets the freshest sessions, more weekly volume, and first claim on progression",
        "Secondary goal: still trained on purpose, but with less volume and less right to disrupt the primary work",
        "Maintenance dose: enough hard stimulus to hold a quality without trying to improve it right now",
      ],
    },
    {
      type: "p",
      text: "Maintenance is not the same as neglect. Reviews of reduced training suggest that strength and some endurance qualities can be preserved for weeks to months with fairly large cuts in frequency or volume if intensity stays high [9]. That is one reason a secondary athletic quality does not always need a full second program. It may need a small number of high-quality exposures.",
    },
    {
      type: "p",
      text: "Example. A 36-year-old recreational Gaelic football player wants to add muscle in the off-season while staying fast enough and durable enough for the sport he actually plays. If hypertrophy is primary, the week should clearly develop muscle. Speed, power, and change-of-direction work do not disappear. They get a maintenance or modest-development dose, placed so they do not trash the lifting that is supposed to drive the main goal.",
    },
    {
      type: "p",
      text: "A generic hypertrophy plan that deletes sprinting and jumping may grow tissue while making him less prepared for football. A plan that chases every athletic quality at bodybuilding volume may leave him sore, under-recovered, and not much bigger. The useful middle is explicit priority: muscle gain is being pushed, athletic qualities are being protected, and fatigue is not allowed to erase either side of that bargain.",
    },

    { type: "h2", text: "Emphasis should change over time" },
    {
      type: "p",
      text: "Two goals do not need the same weighting forever. Off-season can bias toward muscle and general strength. As competitive play increases, more of the week may need to protect speed, freshness, and match performance. That is ordinary periodization logic: stress, fatigue, recovery, and adaptation are managed over time, not only inside one week [10].",
    },
    {
      type: "p",
      text: "A simple way to use that without turning the plan into a textbook:",
    },
    {
      type: "ol",
      items: [
        "Choose an emphasis block of several weeks where one goal is clearly primary",
        "Keep a maintenance dose for the qualities you cannot afford to lose",
        "When the season, race, or life calendar changes, rewrite the priority instead of stacking another full plan on top",
      ],
    },
    {
      type: "p",
      text: "Resistance-training guidelines for healthy adults still support regular progressive loading across the week [11]. They do not require every quality to receive a maximal dose in every block. A person can keep lifting year-round while changing what the lifting is for: growth in one phase, freshness and force retention in another.",
    },

    { type: "h2", text: "A week where priority decides the schedule" },
    {
      type: "p",
      text: "Take the same 36-year-old Gaelic football player. Hypertrophy is primary this block. Saturday match play is non-negotiable. He can train hard on three other days and do a lighter fourth day if recovery allows.",
    },
    {
      type: "example",
      title: "Example week: muscle gain primary, sport readiness protected",
      body: [
        "Monday: Lower-body strength and hypertrophy focus, including the main squat or hinge progression",
        "Tuesday: Off or easy aerobic work only",
        "Wednesday: Upper-body strength and hypertrophy, plus a short low-volume sprint or jump primer early if legs feel fresh",
        "Thursday: Off from hard lower-body loading",
        "Friday: Short power and change-of-direction session, then stop. No exhaustion work",
        "Saturday: Match / sport",
        "Sunday: Optional easy movement. No hard lifting",
      ],
    },
    {
      type: "p",
      text: "Why this shape: Monday gets fresh legs for the main muscle-building lower session. Hard lower-body work is kept away from Friday and Saturday so match speed is not paid for with leftover squat fatigue. Friday keeps a small high-quality dose of the athletic qualities the gym plan would otherwise erase. Wednesday carries upper-body progress without competing as directly with match-day lower-body freshness. This is programming judgment informed by concurrent-training spacing and transfer evidence, not a universal athlete template [2][3][4][6][12].",
    },
    {
      type: "p",
      text: "Notice what the week does not do. It does not run a full second athletic program beside a full hypertrophy program. It does not place the hardest lower-body fatigue on the doorstep of match day. It does not treat Saturday sport as optional accessory work. The sport is part of the training load, so the gym has to negotiate with it.",
    },
    {
      type: "p",
      text: "If he only has three available days outside the match, the week compresses. Keep Monday lower-body hypertrophy, keep one upper-body session, and keep a short Friday power primer or fold a few jumps and accelerations into the warm-up before Monday lifting. The first thing to drop is extra conditioning volume that is not specific to the sport. The last things to drop are the primary hypertrophy stimulus and the smallest effective dose of speed or power. That compression problem deserves its own guide later. The point here is the rule: when the week shrinks, protect the primary goal and the minimum athletic exposures that make the secondary goal real.",
    },

    { type: "h2", text: "A practical decision process" },
    {
      type: "ol",
      items: [
        "Name the two goals in training language, not mood language: more muscle, stronger squat, better repeat sprints, faster 10K, and so on",
        "Choose the primary goal for this block of weeks",
        "List the training that helps both goals",
        "List the training unique to each goal",
        "Mark the collisions: same-session fatigue, dense lower-body days, long endurance next to hard lifting, hard lifting next to match day",
        "Count the real weekly days and recovery you have, including sport practice",
        "Decide what gets protected when a day disappears or the week goes sideways",
      ],
    },
    {
      type: "p",
      text: "If you need the idea in one sentence: train multiple qualities if you must, but decide which ones are being pushed, which ones are being maintained, and how much fatigue each is allowed to create.",
    },
    {
      type: "p",
      text: "Missed sessions make this sharper. Once a week is already carrying two goals, a missed lower-body day is not just a blank calendar square. It changes what still needs to get done before the next match or hard session. That is the same [training-state logic as deciding what to do when you miss a workout](/learn/what-to-do-when-you-miss-a-workout).",
    },

    { type: "h2", text: "What this means for adaptive programming" },
    {
      type: "p",
      text: "A generic muscle-building plan knows the selected goal. It does not automatically know that you also need to remain capable of accelerating, changing direction, or showing up for Saturday sport with usable legs. A more complete system has to account for the activities you still need to perform and allocate training accordingly.",
    },
    {
      type: "p",
      text: "That is one reason adaptive programming matters. The plan should know which goal is primary this block, which qualities are on maintenance, and what soft constraints like match day or travel do to the week's fatigue budget. IOFitness is being built around that kind of allocation problem. The framework above still works with a notebook if you are honest about priority.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Training for two goals at once is normal. Maximizing both at once is not. Use shared work where it exists, separate or reorder the hard collisions, give the primary goal the freshest progressive work, and keep the secondary goal alive with a real maintenance dose. Rewrite the priority when the season changes. That is how both goals stay in the plan without turning the week into a pile-up.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Wilson concurrent-training meta-analysis",
      citation:
        "Wilson JM, Marin PJ, Rhea MR, Wilson SMC, Loenneke JP, Anderson JC. Concurrent training: a meta-analysis examining interference of aerobic and resistance exercises. J Strength Cond Res. 2012;26(8):2293-2307.",
      url: "https://doi.org/10.1519/JSC.0b013e31823a3e2d",
      note: "Found interference risk rises with endurance frequency and duration, and more with running than cycling. Used for dose and modality caution, not as proof that every hybrid plan fails.",
    },
    {
      id: "2",
      label: "Schumann concurrent compatibility meta-analysis",
      citation:
        "Schumann M, Feuerbacher JF, Sünkeler M, Freitag N, Rønnestad BR, Doma K, Lundberg TR. Compatibility of concurrent aerobic and strength training for skeletal muscle size and function: an updated systematic review and meta-analysis. Sports Med. 2022;52(3):601-612.",
      url: "https://doi.org/10.1007/s40279-021-01587-7",
      note: "Reports little average compromise for hypertrophy and maximal strength, with clearer attenuation of explosive strength, especially in same-session designs.",
    },
    {
      id: "3",
      label: "Petré trained-status concurrent meta-analysis",
      citation:
        "Petré H, Hemmingsson E, Rosdahl H, Psilander N. Development of maximal dynamic strength during concurrent resistance and endurance training in untrained, moderately trained, and trained individuals: a systematic review and meta-analysis. Sports Med. 2021;51(5):991-1010.",
      url: "https://doi.org/10.1007/s40279-021-01426-9",
      note: "Lower-body strength interference was clearest in trained people when endurance and resistance were done in the same session, not when sessions were separated.",
    },
    {
      id: "4",
      label: "Seitz strength-to-sprint transfer",
      citation:
        "Seitz LB, Reyes A, Tran TT, Saez de Villarreal E, Haff GG. Increases in lower-body strength transfer positively to sprint performance: a systematic review with meta-analysis. Sports Med. 2014;44(12):1693-1702.",
      url: "https://doi.org/10.1007/s40279-014-0227-1",
      note: "Supports the claim that lower-body strength development can transfer to sprint performance. Used for shared-adaptation logic, not as a prescription for any one football plan.",
    },
    {
      id: "5",
      label: "Suchomel muscular strength and performance",
      citation:
        "Suchomel TJ, Nimphius S, Stone MH. The importance of muscular strength in athletic performance. Sports Med. 2016;46(10):1419-1449.",
      url: "https://doi.org/10.1007/s40279-016-0486-0",
      note: "Broader review on why strength supports many athletic qualities. Used to justify shared lower-body strength work, not to promise sport-specific transfer in every case.",
    },
    {
      id: "6",
      label: "Panissa acute interference review",
      citation:
        "Panissa VLG, Greco CC, Ribeiro N, Julio UF, Tricoli V, Franchini E. Concurrent training and the acute interference effect on strength: reviewing the relevant variables. Strength Cond J. 2022;44(3):46-57.",
      url: "https://journals.lww.com/nsca-scj/fulltext/2022/06000/concurrent_training_and_the_acute_interference.5.aspx",
      note: "Supports acute quality and recovery-spacing concerns when hard aerobic work sits close to strength work.",
    },
    {
      id: "7",
      label: "Wang and Bo concurrent programming review",
      citation:
        "Wang T, Bo S. Optimizing concurrent training programs: a review on factors that enhance muscle strength. Medicine (Baltimore). 2024;103(52):e41055.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11688070/",
      note: "Narrative review of sequencing, recovery, and programming factors that influence strength outcomes during concurrent training.",
    },
    {
      id: "8",
      label: "Eddens intra-session order meta-analysis",
      citation:
        "Eddens L, van Someren K, Howatson G. The Role of Intra-Session Exercise Sequence in the Interference Effect: A Systematic Review with Meta-Analysis. Sports Med. 2018;48(1):177-188.",
      url: "https://doi.org/10.1007/s40279-017-0784-1",
      note: "Supports resistance-before-endurance ordering for lower-body dynamic strength when both modes are trained in one session. Less decisive for hypertrophy and aerobic outcomes.",
    },
    {
      id: "9",
      label: "Spiering minimal dose to maintain performance",
      citation:
        "Spiering BA, Mujika I, Sharp MA, Foulis SA. Maintaining physical performance: the minimal dose of exercise needed to preserve endurance and strength over time. J Strength Cond Res. 2021;35(5):1449-1458.",
      url: "https://doi.org/10.1519/JSC.0000000000003964",
      note: "Used for the maintenance-dose idea: frequency and volume can often fall substantially if intensity remains high. Not a direct trial of two-goal sport weeks.",
    },
    {
      id: "10",
      label: "NSCA periodization concepts",
      citation:
        "NSCA. Central Concepts Related to Periodization. Kinetic Select.",
      url: "https://www.nsca.com/education/articles/kinetic-select/central-concepts-related-to-periodization/",
      note: "Stimulus-fatigue-recovery-adaptation framing for changing emphasis across a season or training block.",
    },
    {
      id: "11",
      label: "ACSM 2026 resistance training position stand",
      citation:
        "Currier BS, D'Souza AC, Fiatarone Singh MA, Lowisz CV, Rawson ES, Schoenfeld BJ, Smith-Ryan AE, Steen JP, Thomas GA, Triplett NT, Washington TA, Werner TJ, Phillips SM. American College of Sports Medicine Position Stand. Resistance Training Prescription for Muscle Function, Hypertrophy, and Physical Performance in Healthy Adults: An Overview of Reviews. Med Sci Sports Exerc. 2026;58(4):851-872.",
      url: "https://doi.org/10.1249/MSS.0000000000003897",
      note: "Used for progressive resistance-training frequency and overload principles in healthy adults. Currier BS is first author; Phillips SM is senior/last author.",
    },
    {
      id: "12",
      label: "Team-sport concurrent training narrative review",
      citation:
        "Tundidor-Duque RM, Pareja-Blanco F, Drozd M, Pereira LA, Loturco I. Factors influencing the efficacy of concurrent training in team sports: a narrative review. J Hum Kinet. 2026;100:135-149.",
      url: "https://doi.org/10.5114/jhk/216685",
      note: "Team-sport oriented synthesis of session order, spacing, and endurance configuration. Used as supporting context for field-sport weekly design, not as a trial of Gaelic football athletes.",
    },
  ],
};
