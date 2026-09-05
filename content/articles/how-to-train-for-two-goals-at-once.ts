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
    "You can train for two goals at once if you decide which goal is primary, which work is shared, what needs a maintenance dose, and how fatigue gets spent across the week.",
  date: "2026-09-04",
  dateModified: "2026-09-05",
  body: [
    {
      type: "p",
      text: "Most people do not have one clean fitness goal. They want more muscle and better conditioning. More strength and a faster 5K. A bigger squat and enough speed left for weekend sport. The advice they usually get is to pick one. Sometimes that is the right call. Often it is too blunt for how people actually train.",
    },
    {
      type: "p",
      text: "The better question is not whether two goals can coexist. It is how much training each goal should get, which work serves both, where the goals collide, and which one takes priority when time or recovery runs out.",
    },
    {
      type: "callout",
      text: "Short version: you can train more than one quality at a time. You cannot push every quality hard at once. Good programming decides what is being developed, what is being maintained, and how fatigue is spent across the week.",
    },

    { type: "h2", text: "Two goals share a limited budget" },
    {
      type: "p",
      text: "Training time, recovery capacity, joint tolerance, and attention are limited. Every hard session spends from that budget. Two goals can sit in the same week, but they still compete for the same resources.",
    },
    {
      type: "p",
      text: "That does not mean every combination causes classic interference. Interference is a specific finding from concurrent-training research: adding endurance work to a strength program can reduce some strength, power, or hypertrophy adaptations compared with strength training alone, depending on how the work is arranged [1][2][3]. Recreational athletes often hit a simpler problem first. They stack too many hard qualities into too little recovery, whether or not the lab label fits.",
    },
    {
      type: "p",
      text: "So start with allocation. If both goals matter this month, one of them usually needs to be primary. The other can still improve, or it may need to be held with a smaller dose. Treating them as equal often leaves both undertrained and the week too expensive.",
    },

    { type: "h2", text: "Some work helps both goals" },
    {
      type: "p",
      text: "Not every session is a straight trade. Lower-body strength work can support hypertrophy and also transfer to sprint and jump performance in many trainees [4][5]. That matters for someone who wants to add muscle without getting slower. A squat progression can feed both muscle gain and athletic force production, as long as speed and power are not dropped completely.",
    },
    {
      type: "p",
      text: "Easy aerobic work can help work capacity and recovery between harder sessions. That may support both gym progress and sport readiness. That is a programming inference from how those qualities are used, not a claim that easy cardio builds muscle. Easy aerobic work and hard interval work are not the same thing here. One can fit under the week. The other can take the week over.",
    },
    {
      type: "p",
      text: "This is why gluing two full plans together is usually a poor default. Two plans assume every quality needs a maximal dedicated dose. A better plan asks which exposures are unique to each goal and which ones do useful work for both.",
    },
    {
      type: "ul",
      items: [
        "Shared: hard lower-body strength that feeds muscle gain and athletic force production",
        "Shared: some easy aerobic work that improves conditioning without wrecking the next lift",
        "Unique to muscle gain: enough weekly hard sets, progressive loading, and enough food to grow",
        "Unique to sport readiness: sprinting, jumping, change-of-direction work, and actual sport practice",
      ],
    },

    { type: "h2", text: "Where the tradeoffs show up" },
    {
      type: "p",
      text: "Concurrent-training research is most useful as a map of risk factors, not as a warning that hybrid training always fails.",
    },
    {
      type: "p",
      text: "Updated meta-analyses suggest that maximal strength and hypertrophy are often more compatible with aerobic training than older commentary implied. Explosive strength looks more vulnerable, especially when endurance and strength are done in the same session [2]. In already-trained people, lower-body strength gains can also suffer when endurance is added to the same session rather than spaced apart [3]. Older meta-analytic work found larger interference when endurance volume and frequency climb, and when running rather than cycling is the endurance mode [1].",
    },
    {
      type: "p",
      text: "That evidence does not say a recreational athlete cannot build muscle while staying athletic. It says the cost rises when hard endurance work is dense, frequent, poorly spaced, or parked on top of the sessions meant to develop strength or power. The research describes average adaptation under concurrent loading. Deciding what to protect in a given week is still a programming call.",
    },
    {
      type: "p",
      text: "Session order and spacing matter for quality as well as for adaptation. Hard aerobic work close to strength work can reduce the quality of the strength bout [6][7]. Within a session, a resistance-then-endurance order has been associated with better lower-body strength outcomes than the reverse in prolonged concurrent programs [8]. That does not create one universal template. It does support a practical rule: protect the session that carries the week's priority.",
    },
    {
      type: "p",
      text: "For a recreational field-sport athlete trying to add muscle, the usual collision looks like this: high gym volume for hypertrophy, hard conditioning, sprint or plyometric work, and a weekend match. Any one of those can be useful. All of them at once, at high cost, is how both goals get watered down [12].",
    },

    { type: "h2", text: "Primary goal, secondary goal, maintenance dose" },
    {
      type: "p",
      text: "Priority is the part most train-for-everything advice skips.",
    },
    {
      type: "ul",
      items: [
        "Primary goal: gets the freshest sessions, more weekly volume, and first claim on progression",
        "Secondary goal: still trained on purpose, but with less volume and less freedom to disrupt the primary work",
        "Maintenance dose: enough hard stimulus to hold a quality without trying to improve it right now",
      ],
    },
    {
      type: "p",
      text: "Maintenance is not neglect. Reviews of reduced training suggest that strength and some endurance qualities can be preserved for weeks to months with fairly large cuts in frequency or volume if intensity stays high [9]. That is one reason a secondary athletic quality does not always need a full second program. It may need a small number of high-quality exposures.",
    },
    {
      type: "p",
      text: "Take a 36-year-old recreational Gaelic football player who wants to add muscle in the off-season while staying fast enough for the sport he actually plays. If hypertrophy is primary, the week should clearly develop muscle. Speed, power, and change-of-direction work should not vanish. They get a maintenance dose, placed so they do not wreck the lifting meant to drive the main goal.",
    },
    {
      type: "p",
      text: "A conventional hypertrophy plan can answer \"gain muscle\" on paper while ignoring the qualities he still needs for football. Delete the sprinting and jumping, and the plan may grow tissue while making him less prepared for the game. Chase every athletic quality at bodybuilding volume, and he may end up sore, under-recovered, and not much bigger. The useful middle is explicit priority: muscle gain is being pushed, athletic qualities are being kept alive, and fatigue is not allowed to erase either side.",
    },

    { type: "h2", text: "Emphasis should change over time" },
    {
      type: "p",
      text: "Two goals do not need the same weighting forever. Off-season can lean toward muscle and general strength. As competitive play increases, more of the week may need to protect speed, freshness, and match performance. That is ordinary periodization logic: stress, fatigue, recovery, and adaptation are managed over time, not only inside one week [10].",
    },
    {
      type: "p",
      text: "A simple way to use that:",
    },
    {
      type: "ol",
      items: [
        "Choose an emphasis block of several weeks where one goal is clearly primary",
        "Keep a maintenance dose for the qualities you cannot afford to lose",
        "When the season, race, or calendar changes, rewrite the priority instead of stacking another full plan on top",
      ],
    },
    {
      type: "p",
      text: "Resistance-training guidelines for healthy adults still support regular progressive loading across the week [11]. They do not require every quality to get a maximal dose in every block. Someone can keep lifting year-round while changing what the lifting is for: growth in one phase, freshness and force retention in another.",
    },

    { type: "h2", text: "A week where priority decides the schedule" },
    {
      type: "p",
      text: "Use the same 36-year-old Gaelic football player. For this block, muscle gain is primary. Maintaining speed, power, and sport readiness is secondary. Saturday sport is fixed and important. He has three real training days available, plus an optional very-low-cost fourth exposure if recovery is good.",
    },
    {
      type: "example",
      title: "Example week: muscle gain primary, sport readiness protected",
      body: [
        "Monday: Short sprint and jump primer while fresh, then lower-body hypertrophy as the main session",
        "Tuesday: Optional easy aerobic work only, or full rest",
        "Wednesday: Upper-body hypertrophy",
        "Thursday: Second hypertrophy session, mostly lower-body or lower-dominant accessories",
        "Friday: Off from hard training",
        "Saturday: Match / sport",
        "Sunday: Easy movement only, or full rest",
      ],
    },
    {
      type: "p",
      text: "Why this shape: hypertrophy is visibly primary because the week contains two clear muscle-building days for the lower body plus one upper-body day. The athletic work sits on Monday as a short primer before lifting, while he is fresh and while there is still room before Saturday. Friday stays empty to give him a buffer before the match instead of adding another hard session. Tuesday's easy aerobic work is optional and cheap. It supports conditioning without competing with the main progression days.",
    },
    {
      type: "p",
      text: "This is a programming example, not a study result. Concurrent-training research supports the broad ideas that hard qualities compete for recovery, that explosive qualities can be more vulnerable under concurrent loading, and that strength work can transfer to sprint performance [2][3][4][6][12]. The exact days, the choice to put the athletic dose on Monday, and the decision to leave Friday empty are coaching judgment for this athlete and this priority.",
    },
    {
      type: "p",
      text: "If the week shrinks to only three total training exposures outside the match, drop the optional Tuesday first. Keep Monday's primer plus lower-body hypertrophy, Wednesday's upper-body work, and Thursday's second hypertrophy session. If one of those hard days has to go as well, Thursday is usually the first hard day to cut or shrink. Protect the freshest lower-body hypertrophy session, keep enough upper-body work to leave the week clearly muscle-focused, and keep a small athletic dose attached to Monday rather than inventing a separate power day later in the week. The longer version of that compression problem belongs in a later guide. The rule here is simple: when time disappears, protect the primary goal and the smallest athletic dose that still makes the secondary goal real.",
    },

    { type: "h2", text: "A practical decision process" },
    {
      type: "ol",
      items: [
        "Name the two goals in concrete training terms: more muscle, stronger squat, better repeat sprints, faster 10K, and so on",
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
      text: "In one sentence: if you train more than one quality, decide which ones are being pushed, which ones are being maintained, and how much fatigue each is allowed to create.",
    },
    {
      type: "p",
      text: "Missed sessions make the same problem sharper. Once a week is already carrying two goals, a missed lower-body day is not just a blank square on the calendar. It changes what still needs to get done before the next match or hard session. That is the same [training-state logic as deciding what to do when you miss a workout](/learn/what-to-do-when-you-miss-a-workout).",
    },

    { type: "h2", text: "What this means for adaptive programming" },
    {
      type: "p",
      text: "A generic muscle-building plan knows the selected goal. It does not automatically know that you also need to keep accelerating, changing direction, or arriving at Saturday sport with usable legs. A more complete system has to account for the activities you still need to perform and allocate training accordingly.",
    },
    {
      type: "p",
      text: "That is one reason [adaptive training](/learn/what-is-adaptive-training) matters. A useful plan should be able to hold a primary goal, keep secondary qualities alive with a maintenance dose, and adjust when match day, travel, or a missed session changes the week's fatigue budget. When the second goal is a fixed weekend sport, the same allocation problem becomes concrete scheduling: [how to combine lifting with a weekend sport](/learn/how-to-combine-lifting-with-sports). A sore shoulder or angry knee creates a related problem: keep training what still can progress, and swap the lifts that load the problem area for ones that still do the same job. That case is covered in [how to train around a limitation](/learn/how-to-train-around-a-limitation). IOFitness is being designed around that allocation problem. The framework above still works with a notebook if you are honest about priority.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Training for two goals at once is normal. Maximizing both at once is not. Use shared work where it exists, separate or reorder the hard collisions, give the primary goal the freshest progressive work, and keep the secondary goal alive with a real maintenance dose. Change the priority when the season changes. That is how both goals stay in the plan without the week collapsing under its own load.",
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
