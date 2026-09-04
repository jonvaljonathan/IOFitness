import type { LearnArticle } from "../learn";

/**
 * Authority article #6.
 * Primary intent: how to combine lifting with weekend / fixed sport
 * Thesis: treat the sport day as an anchor session in the training week;
 * schedule gym work around its cost and value rather than bolting sport onto
 * a finished lifting plan.
 */
export const liftingWithSportsArticle: LearnArticle = {
  slug: "how-to-combine-lifting-with-sports",
  title: "How to Combine Lifting With a Weekend Sport",
  description:
    "If you lift during the week and play a fixed weekend sport, put the sport on the calendar first. Scale gym work around what the sport already costs and supplies, then adjust the next week from how hard that sport day actually was.",
  date: "2026-09-04",
  dateModified: "2026-09-04",
  body: [
    {
      type: "p",
      text: "If you lift three or four days a week and also play a hard sport on Saturday, the sport day belongs inside the training plan. It is not an optional add-on after the gym schedule is finished. A useful week starts with that fixed exposure, estimates what it already costs and supplies, then places strength, muscle, and athletic work around it.",
    },
    {
      type: "p",
      text: "That is different from the usual template. Most generic programs give you a hypertrophy split, maybe some conditioning, maybe some jumps, and leave Saturday soccer, Gaelic football, basketball, tennis, or hockey outside the plan. Then the athlete wonders why legs feel flat on match day, why Monday squats stall after a brutal weekend, or why the week feels like six hard days with no real recovery.",
    },
    {
      type: "callout",
      text: "Short version: put the fixed sport day on the calendar first. Decide how much that day matters. Estimate its lower-body, conditioning, contact, and duration cost. Keep the gym qualities the sport does not adequately train. Protect Saturday from unnecessary high-fatigue lower-body work when performance matters. Then change Monday's dose when Saturday was easy versus brutal.",
    },

    { type: "h2", text: "Treat the sport day as an anchor session" },
    {
      type: "p",
      text: "In a gym-only week, Monday and Thursday lower sessions are often interchangeable. In a sport week, Saturday may not move. Work, league fixtures, kids' schedules, and social sport all create anchors. The rest of the week has to negotiate around that day.",
    },
    {
      type: "p",
      text: "That does not mean Friday must always be complete rest. It means Friday should not accidentally become a large fatigue dose with little benefit relative to Saturday's priority. The programming question is not only \"How many days before sport should I train legs?\" It is: what qualities does the sport session already expose, how much fatigue does it create, which qualities still need dedicated development, and which gym sessions can sit around it without competing unnecessarily?",
    },
    {
      type: "p",
      text: "This is a concrete case of [training for two goals at once](/learn/how-to-train-for-two-goals-at-once). Muscle or strength may be primary. Sport readiness may be primary. Or both may matter enough that the week needs an explicit split rather than a pretend-equal stack.",
    },

    { type: "h2", text: "Sport priority changes the week" },
    {
      type: "h3",
      text: "Sport is the main performance goal",
    },
    {
      type: "p",
      text: "If Saturday match quality is what you care about most, the gym supports the sport. Protect sprint capacity, change-of-direction quality, and legs that feel reasonably fresh. Hard lower-body volume gets more constrained as the match approaches. Strength and muscle still matter, but they do not get unlimited claim on the fatigue budget.",
    },
    {
      type: "h3",
      text: "Gym development is primary, sport is still real",
    },
    {
      type: "p",
      text: "A 36-year-old who wants hypertrophy as the main goal and still plays hard Gaelic football every Saturday can tolerate more gym fatigue than an athlete preparing for a cup final. Saturday is not elite competition. It still counts. The hypertrophy plan cannot ignore sprint exposure, jumping, cutting, post-match fatigue, or lower-body recovery just because the sport is \"recreational.\"",
    },
    {
      type: "h3",
      text: "Both matter",
    },
    {
      type: "p",
      text: "This is the common IOFitness case. You want more muscle and a respectable Saturday. The week needs allocation, not denial. One quality usually still needs to be primary for the current block. The other gets a real dose without permission to wreck the first.",
    },

    { type: "h2", text: "Concurrent training does not automatically erase gym progress" },
    {
      type: "p",
      text: "Older commentary often treated endurance or sport plus lifting as a guaranteed strength and muscle killer. Newer evidence is more measured. An umbrella review of concurrent-training meta-analyses found that, in mostly recreationally trained people, concurrent programs improved aerobic capacity while strength, power, and hypertrophy outcomes remained comparable to resistance training alone on average [1]. Team-sport reviews likewise conclude that concurrent training can develop or maintain strength- and endurance-related qualities when session order, spacing, and endurance configuration are handled thoughtfully [2].",
    },
    {
      type: "p",
      text: "That does not mean every hybrid week is free. Explosive qualities look more vulnerable than maximal strength or hypertrophy in several analyses, especially when hard endurance and strength sit close together [3]. High endurance volume, dense scheduling, and same-session stacking raise the cost [2][3][4]. For a recreational athlete, the practical problem is often acute fatigue management and weekly placement more than an inevitable long-term molecular interference effect.",
    },
    {
      type: "p",
      text: "So hold both ideas at once. Concurrent training can work over months. Yesterday's hard leg session can still affect today's game. Those are different claims.",
    },

    { type: "h2", text: "Acute fatigue is the real scheduling problem" },
    {
      type: "p",
      text: "Team-sport match play can leave residual neuromuscular, perceptual, and biochemical disturbances into the following days. Markers do not all recover on the same clock. Jump, strength, sprint, soreness, and well-being can return at different rates, and some impairments have been observed around 48 to 72 hours after demanding match play in soccer research [5][6][7]. Playing actions matter: more short sprints and hard changes of direction have been linked to worse later soreness or jump decrements [7].",
    },
    {
      type: "p",
      text: "That evidence does not create a universal 48-hour or 72-hour rule for recreational athletes. Recovery depends on the sport, minutes played, intensity, collisions, sprint and cutting exposure, training status, the individual, and which outcome you care about [5][6]. A light 45-minute pickup game and a full competitive 90 minutes are not the same stimulus just because both happened on Saturday.",
    },
    {
      type: "p",
      text: "The useful takeaway is narrower: residual fatigue is real, it is uneven across markers, and it should change how aggressive the next lower-body gym dose is. It should not freeze the whole training week into permanent avoidance.",
    },

    { type: "h2", text: "There is no universal 48-hour rule" },
    {
      type: "p",
      text: "Search advice often says never train legs within 48 hours of a game. That rule collapses dose into a calendar slogan.",
    },
    {
      type: "p",
      text: "A high-fatigue lower session is not the same as a low-fatigue exposure just because both include squats. High-fatigue work looks like high volume, hard eccentric loading, sets near failure, or novel exercises that create disproportionate soreness. Low-fatigue work looks like short explosive priming, low-volume familiar strength work, and plenty of reps in reserve. Resistance-priming literature shows that carefully dosed low-volume strength or ballistic work can be compatible with later performance in some settings, and may even acutely support neuromuscular output in the following day or two [8]. That is not a green light to smash hypertrophy legs the evening before an important match.",
    },
    {
      type: "ul",
      items: [
        "Important sport day coming up: avoid large, unfamiliar, near-failure lower-body sessions immediately beforehand",
        "Modest familiar upper-body work, easy aerobic work, mobility, or a carefully dosed primer may fit",
        "A hypertrophy leg day and a low-volume primer are different interventions with different fatigue costs",
      ],
    },

    { type: "h2", text: "Sport load is not binary" },
    {
      type: "p",
      text: "\"Played soccer\" is not enough information. Estimate the session across a few dimensions rather than inventing a fake numerical score.",
    },
    {
      type: "ul",
      items: [
        "Lower-body mechanical cost: sprinting, jumping, landing, deceleration, cutting, eccentric braking",
        "Conditioning cost: sustained or repeated high-intensity work",
        "Contact or collision cost: rugby, hockey, football, and some soccer or basketball contexts",
        "Duration and playing time: 20 minutes is not 90 minutes",
        "Performance importance: casual recreation versus a match you actually care about",
      ],
    },
    {
      type: "p",
      text: "Tennis, pickleball, basketball, soccer, rugby, skiing, and hockey load people differently. Do not chase a universal sport-equivalence chart. Ask what this exposure did to the qualities and joints you need for the next gym session and the next sport day.",
    },

    { type: "h2", text: "Sport is stimulus and fatigue, not \"leg day\"" },
    {
      type: "p",
      text: "A common line says the sport counts as leg day. That is too crude.",
    },
    {
      type: "p",
      text: "A hard field sport can create major lower-body demand. It does not automatically provide the same adaptation as heavy squatting, dedicated hamstring strength work, calf loading, hypertrophy volume, or controlled eccentric training. Likewise, a lifting session does not replace sprinting, reactive movement, sport skill, or repeated directional changes. Training exposures can overlap without being interchangeable.",
    },
    {
      type: "p",
      text: "After Saturday, ask two questions. What did the sport already give you? What is still missing? Saturday may already cover a large conditioning and high-speed movement dose, which is why another hard conditioning session on Friday is often redundant. It may still leave maximal strength, hypertrophy, upper-body training, and structured posterior-chain work underdosed. Those belong elsewhere in the week.",
    },

    { type: "h2", text: "A practical way to place the week" },
    {
      type: "p",
      text: "The sequence below is IOFitness programming synthesis. It is not an established scientific model. Evidence supports pieces of it: concurrent qualities can advance together, residual sport fatigue is real and variable, and dose near competition matters. The exact eight-step weekly allocation is coaching judgment.",
    },
    {
      type: "ol",
      items: [
        "Anchor the sport: put the fixed sport session on the calendar first",
        "Decide its priority: primary performance day, shared priority, or secondary recreation",
        "Estimate its actual training cost across mechanical load, conditioning, contact, duration, and importance",
        "Identify what it already supplies: conditioning, acceleration, jumping, reactive movement, or skill",
        "Identify what it does not adequately supply: maximal strength, hypertrophy, upper body, structured posterior-chain work, or controlled power practice",
        "Place the highest-quality gym work where it can actually be performed well",
        "Protect the sport day from unnecessary fatigue when that day matters",
        "Adapt after the sport: use the real exposure and next-day response to set the following lower-body dose",
      ],
    },
    {
      type: "p",
      text: "A week fails this test when sport is glued onto an already full gym plan, every weekday is another meaningful hard exposure, lower-body soreness is routinely carried into sport, gym progression keeps failing after hard sport weekends, speed or power work is always done fatigued, sport demands never change the gym plan, or conditioning duplicates what the sport already supplies for no clear reason.",
    },

    { type: "h2", text: "Worked example: three gym days and Saturday Gaelic football" },
    {
      type: "p",
      text: "Athlete: 36 years old. Wants more muscle. Wants to stay fast enough for recreational Gaelic football. Plays Saturday. Has three realistic gym days. Sport matters, but it is not professional competition. Hypertrophy is the primary gym goal for this block. Sport readiness is a protected secondary goal.",
    },
    {
      type: "example",
      title: "Plausible week around Saturday sport",
      body: [
        "Saturday: Gaelic football",
        "Sunday: Easy movement or rest",
        "Monday: Short sprint or jump primer only if recovery from Saturday looks acceptable, then lower-body strength and hypertrophy as the main session",
        "Wednesday: Upper-body hypertrophy and strength",
        "Thursday: Second lower-support or full-body hypertrophy session with controlled volume because Saturday is approaching",
        "Friday: No major fatigue session; optional easy work only",
      ],
    },
    {
      type: "p",
      text: "Why this shape: Saturday is anchored first. Sunday absorbs some residual fatigue. Monday is far enough from the previous match, and early enough in the week, to carry the highest-quality lower-body developmental work if the athlete has recovered enough to train well. A short athletic primer can sit on Monday while he is relatively fresh, instead of inventing another hard plyometric day later. Wednesday uses the fact that fatigue is somewhat local: hard lower-body sport often leaves more room for upper-body training than for another heavy lower dose [9]. Thursday keeps a second hypertrophy exposure without turning the end of the week into another brutal eccentric lower day. Friday stays cheap so Saturday is not paying for unnecessary gym fatigue.",
    },
    {
      type: "p",
      text: "This is an illustration of allocation logic, not a scientifically optimal microcycle. If sport performance became primary, Monday lower volume would usually shrink and Thursday would become even more conservative. If the athlete only has two gym days, keep the best lower session and the upper session before inventing a third mediocre day. The longer problem of compressed weeks belongs in a later guide.",
    },

    { type: "h2", text: "Same template, different Saturday" },
    {
      type: "p",
      text: "The weekly outline can stay similar while Monday changes with sport evidence. That is the concrete link to [adaptive training](/learn/what-is-adaptive-training): the sport session is new information, not noise.",
    },
    {
      type: "h3",
      text: "Week A: lighter sport exposure",
    },
    {
      type: "p",
      text: "Saturday was about 45 minutes, moderate effort, limited sprinting and cutting, little lingering soreness by Monday. A normal lower session can fit: planned hard sets, ordinary progression targets, short athletic primer if speed or power still need practice.",
    },
    {
      type: "h3",
      text: "Week B: brutal sport exposure",
    },
    {
      type: "p",
      text: "Saturday was closer to 90 minutes, lots of accelerations and hard cuts, and soreness still interferes with clean lower-body work on Monday. Keep the session, but change the dose: fewer hard sets, more familiar exercises, less eccentric novelty, or shift emphasis toward upper body and lighter lower accessories. Do not interpret the temporary drop in squat performance as a long-term strength plateau. Recent sport load can alter Monday's output without rewriting the whole progression model. That distinction matters for [progressive overload without adding weight](/learn/progressive-overload-without-adding-weight): compare sessions under comparable conditions before deciding the plan failed.",
    },

    { type: "h2", text: "Day before, day after, and same-day training" },
    {
      type: "h3",
      text: "The day before sport",
    },
    {
      type: "p",
      text: "Do not treat \"never lift the day before a game\" as a law. Do treat a large, unfamiliar, near-failure lower-body session before an important sport day as poor allocation. Easy aerobic work, mobility, familiar upper-body training, or a low-volume primer are different options with different risk. If Saturday matters a lot, bias Friday toward low cost.",
    },
    {
      type: "h3",
      text: "The day after sport",
    },
    {
      type: "p",
      text: "There is no automatic \"recovery only\" rule. Ask how hard the sport was, how the athlete feels, what movement quality is available, and what the next important exposure is. Sometimes rest is right. Sometimes easy aerobic movement fits. Sometimes low-volume upper-body training is compatible with lower-body match recovery without being a recovery method in itself [9]. Sometimes a controlled gym session still makes sense. The decision follows the actual sport cost.",
    },
    {
      type: "h3",
      text: "Same-day lifting and sport",
    },
    {
      type: "p",
      text: "If both must happen on one day, do the session whose quality matters more while fresh. Separate them when you can. Concurrent-training sequence research is context-dependent and mostly speaks to long-term adaptation or same-session interference, not a universal hour gap for recreational weekend sport [1][2][4]. Practical rule: protect the priority session's quality, keep the second session shorter if needed, and avoid turning the day into two maximal fatigue doses.",
    },

    { type: "h2", text: "Consolidate hard days when the week is getting chopped up" },
    {
      type: "p",
      text: "A week with hard gym Monday, hard conditioning Tuesday, hard gym Wednesday, hard plyos Thursday, hard intervals Friday, and sport Saturday creates six meaningful exposures and almost no true lower-stress day. One useful scheduling principle is to combine compatible hard work so real easy days exist: a short sprint or jump dose before lifting on one gym day, strength and hypertrophy in the same session, easy aerobic work on a separate low day. That is not a law. It is a way to stop fragmenting recovery when the calendar is already carrying a fixed sport anchor.",
    },

    { type: "h2", text: "What adaptive programming should do with variable sport load" },
    {
      type: "p",
      text: "A static plan can say \"Monday = heavy lower\" every week. An adaptive plan should know that one Saturday was easy, one was brutal, one was cancelled, and one became a tournament with three games. Those should not automatically produce the same Monday prescription.",
    },
    {
      type: "p",
      text: "IOFitness is being designed around that kind of evidence. The intended model treats the fixed sport day as part of total weekly training, estimates what it already supplied and cost, places gym work around the remaining gaps, and updates the next lower-body dose from the actual weekend rather than from a frozen template.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Combining lifting with a weekend sport works best when the sport day is planned as an anchor session. Concurrent training can still build strength and muscle. Residual fatigue still changes what the next session should look like. Do not pretend sport is a complete leg day, and do not pretend it is free. Scale load, volume, and novelty around what the sport actually did. Protect important sport days from unnecessary high-fatigue lower-body work. Then let easy Saturdays and brutal Saturdays change Monday, instead of forcing one calendar onto every weekend.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Held concurrent-training umbrella review",
      citation:
        "Held S, Wolf L, Rappelt L, Bloch W, Donath L, Micke F, Geisler S, Isenmann E. Maximizing adaptations in concurrent training: an umbrella review of meta-analyses. Sports Med. 2026.",
      url: "https://doi.org/10.1007/s40279-026-02401-y",
      note: "Umbrella synthesis of concurrent-training meta-analyses in mostly recreationally trained people. Used for the claim that concurrent programs can improve aerobic capacity while average strength, power, and hypertrophy outcomes remain broadly comparable to resistance training alone. Not used as proof that every dense recreational sport week is free of tradeoffs, and elite data remain limited.",
    },
    {
      id: "2",
      label: "Tundidor-Duque team-sport concurrent review",
      citation:
        "Tundidor-Duque R, Pareja-Blanco F, Drozd M, Pereira LA, Loturco I. Factors influencing the efficacy of concurrent training in team sports: a narrative review. J Hum Kinet. 2026;100:135-149.",
      url: "https://doi.org/10.5114/jhk/216685",
      note: "Team-sport oriented narrative review emphasizing session order, inter-session recovery, and endurance configuration. Used to support the idea that concurrent training can work when programming variables are managed, especially the practical importance of spacing and sequencing rather than inevitable long-term failure.",
    },
    {
      id: "3",
      label: "Schumann concurrent compatibility meta-analysis",
      citation:
        "Schumann M, Feuerbacher JF, Sünkeler M, Freitag N, Rønnestad BR, Doma K, Lundberg TR. Compatibility of concurrent aerobic and strength training for skeletal muscle size and function: an updated systematic review and meta-analysis. Sports Med. 2022;52(3):601-612.",
      url: "https://doi.org/10.1007/s40279-021-01587-7",
      note: "Reports little average compromise for hypertrophy and maximal strength, with clearer attenuation of explosive strength, especially in same-session designs. Used to separate long-term compatibility from power-quality vulnerability.",
    },
    {
      id: "4",
      label: "Wilson concurrent-training meta-analysis",
      citation:
        "Wilson JM, Marin PJ, Rhea MR, Wilson SMC, Loenneke JP, Anderson JC. Concurrent training: a meta-analysis examining interference of aerobic and resistance exercises. J Strength Cond Res. 2012;26(8):2293-2307.",
      url: "https://doi.org/10.1519/JSC.0b013e31823a3e2d",
      note: "Classic meta-analysis showing interference risk rises with endurance frequency and duration, and more with running than cycling. Used as dose and modality caution, not as proof that every hybrid recreational plan fails.",
    },
    {
      id: "5",
      label: "Silva soccer match-fatigue meta-analysis",
      citation:
        "Silva JR, Rumpf MC, Hertzog M, Castagna C, Farooq A, Girard O, Hader K. Acute and residual soccer match-related fatigue: a systematic review and meta-analysis. Sports Med. 2018;48(3):539-583.",
      url: "https://doi.org/10.1007/s40279-017-0798-8",
      note: "Shows that several fatigue-related markers can remain disturbed around 72 hours after soccer match play, while recovery is marker-specific and not one-size-fits-all. Used for residual-fatigue nuance, not as a universal rule that every recreational athlete needs 72 hours off training.",
    },
    {
      id: "6",
      label: "Brownstein neuromuscular recovery after soccer",
      citation:
        "Brownstein CG, Dent JP, Parker P, Hicks KM, Howatson G, Goodall S, Thomas K. Etiology and recovery of neuromuscular fatigue following competitive soccer match-play. Front Physiol. 2017;8:831.",
      url: "https://doi.org/10.3389/fphys.2017.00831",
      note: "Competitive soccer match-play impaired voluntary force and related neuromuscular function, with substantial recovery over about 48 hours and some perceptual fatigue lasting longer. Used to illustrate asynchronous recovery rather than a single mandatory downtime.",
    },
    {
      id: "7",
      label: "Nedelec playing actions and recovery kinetics",
      citation:
        "Nedelec M, McCall A, Carling C, Legall F, Berthoin S, Dupont G. The influence of soccer playing actions on the recovery kinetics after a soccer match. J Strength Cond Res. 2014;28(6):1517-1523.",
      url: "https://doi.org/10.1519/JSC.0000000000000293",
      note: "Links short sprints and hard changes of direction during match play to later soreness and jump decrements. Used to support the claim that sport-load quality, not only \"played or not,\" changes recovery.",
    },
    {
      id: "8",
      label: "Harrison resistance-priming review",
      citation:
        "Harrison PW, James LP, McGuigan MR, Jenkins DG, Kelly VG. Resistance priming to enhance neuromuscular performance in sport: evidence, potential mechanisms and directions for future research. Sports Med. 2019;49(10):1499-1514.",
      url: "https://doi.org/10.1007/s40279-019-01136-3",
      note: "Reviews low-volume strength-power priming performed 1 to 48 hours before later performance. Used to challenge the idea that all training close to sport is automatically harmful, while keeping dose central. Not used to recommend heavy hypertrophy lower-body sessions before important games.",
    },
    {
      id: "9",
      label: "Sabag upper-body training after soccer",
      citation:
        "Sabag A, Lovell R, Walsh NP, Grantham N, Coutts AJ. Upper-body resistance training following soccer match play: compatible, complementary, or contraindicated? Int J Sports Physiol Perform. 2021;16(2):165-175.",
      url: "https://doi.org/10.1123/ijspp.2020-0291",
      note: "Narrative review concluding that low-volume upper-body resistance training the day after soccer is often compatible with recovery but not clearly recovery-enhancing. Used for local-versus-systemic fatigue nuance and day-after options, not as proof that upper-body work improves recovery.",
    },
  ],
};
