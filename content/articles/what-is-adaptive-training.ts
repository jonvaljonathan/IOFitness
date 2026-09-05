import type { LearnArticle } from "../learn";

/**
 * Authority article #3.
 * Primary intent: what is adaptive training
 * Thesis: adaptive training changes the future program in response to evidence,
 * and products that use the word "adaptive" often do so at very different depths.
 */
export const adaptiveTrainingArticle: LearnArticle = {
  slug: "what-is-adaptive-training",
  title: "What Is Adaptive Training?",
  description:
    "Adaptive training is training that changes the future program in response to evidence about the athlete. Personalization alone is not enough, and more change is not automatically better.",
  date: "2026-09-04",
  dateModified: "2026-09-04",
  body: [
    {
      type: "p",
      text: "Adaptive training is training in which the future program changes in response to evidence about the athlete. That evidence might be completed sessions, missed sessions, performance, schedule changes, available equipment, sport demands, or a shift in goals. The useful idea is simple: the plan is not finished when it is first generated. It keeps updating as reality shows up.",
    },
    {
      type: "p",
      text: "That definition is broader than any one app feature. Fitness companies use \"adaptive\" for many different things. Some change the weight on a lift. Some swap today's workout. Some reshuffle a week after you miss sessions. Some claim to revise the larger training strategy. Those are not the same depth of adaptation.",
    },
    {
      type: "callout",
      text: "Short version: a personalized plan is built for you. An adaptive plan keeps changing because of what you actually do. The hard questions are what the system can observe, what it is allowed to change, how quickly it responds, and whether it still protects the long-term goal while making those changes.",
    },

    { type: "h2", text: "Personalization is not the same as adaptation" },
    {
      type: "p",
      text: "A program can be highly personalized at the start and still be static afterward.",
    },
    {
      type: "p",
      text: "Imagine an app asks for age, goal, equipment, experience, and schedule, then generates a 12-week plan. That is personalized programming. It may be a good plan. But if nothing changes when the athlete gets stronger faster than expected, misses Tuesday, adds Saturday soccer, loses a training day, stalls on a lift, or changes equipment, the plan is not meaningfully adaptive after generation.",
    },
    {
      type: "p",
      text: "The reverse is also true. Adaptation without good personalization can stay shallow. A generic plan that lowers today's intensity because readiness looks low is adapting something. It may still know very little about the person's goals, sport demands, or what qualities need to be developed versus maintained.",
    },
    {
      type: "p",
      text: "So personalization answers, \"What plan should we start with?\" Adaptation answers, \"What should the plan do next, given what has happened?\" A strong system needs both. They are not synonyms.",
    },

    { type: "h2", text: "Adaptive training needs a feedback loop" },
    {
      type: "p",
      text: "In coaching and sports science, the closest established idea is autoregulation: adjusting training from measured performance or perceived readiness to perform [1][2]. Autoregulation can happen inside a session, between sessions, or across a longer program [1]. That research does not hand consumers a single official definition of \"adaptive training\" for fitness apps. It does support the core principle: good adjustments respond to a signal.",
    },
    {
      type: "p",
      text: "Useful evidence can include:",
    },
    {
      type: "ul",
      items: [
        "Completed workouts and missed workouts",
        "Actual loads, reps, pace, power, or duration",
        "RPE, RIR, or other effort ratings [2][3]",
        "Training consistency and recent progression history",
        "Schedule changes, travel, or fewer available days",
        "Sport participation and other physical demands outside the gym",
        "Available equipment and known limitations",
        "Changes in goal priority",
      ],
    },
    {
      type: "p",
      text: "Readiness and recovery metrics need more caution. Sleep scores, HRV, soreness ratings, and wearable summaries can provide context. They should not automatically become commands. A system should be able to explain why it is changing the plan. If it cannot identify a relevant signal behind the adjustment, the change is difficult to justify.",
    },

    { type: "h2", text: "A practical framework: levels of adaptation" },
    {
      type: "p",
      text: "There does not appear to be a settled scientific taxonomy that every fitness product uses for \"adaptive training.\" The levels below are a practical framework proposed by IOFitness for judging how deep the adaptation actually goes. They are informed by coaching practice and by research on autoregulation, progression, and training-load management [1][2][4]. They are not an official consensus scale.",
    },
    {
      type: "p",
      text: "Levels 0 and 1 are useful reference points. In this framework, ongoing adaptation begins at Level 2, when new evidence starts changing future prescriptions.",
    },

    { type: "h3", text: "Level 0: Static plan" },
    {
      type: "p",
      text: "The plan does not change in response to new evidence about the athlete. It may still include planned progression, deload weeks, changing rep ranges, or predefined phases. Those changes were decided in advance. A template that raises squat load from 100 lb to 105 lb to 110 lb across three weeks because the spreadsheet already said so is still static in this sense. PDFs, fixed templates, and locked calendars sit here. They can still be useful. They are not adaptive.",
    },

    { type: "h3", text: "Level 1: Personalized starting plan" },
    {
      type: "p",
      text: "Inputs shape the initial program. After that, the plan mostly runs as generated, including any progression that was written into it up front. This is common and often valuable. It is a better starting point than a generic PDF. By itself, it is still not ongoing adaptation.",
    },

    { type: "h3", text: "Level 2: Parameter adaptation" },
    {
      type: "p",
      text: "The basic structure stays familiar, but numbers change because of what the athlete actually did: load, pace, reps, intensity, or difficulty. Strength apps that raise weight after repeated successful sets, or endurance tools that recalibrate intensity from recent performance, often live here [2][6][7][8]. That is also where decisions like [progressive overload without adding weight](/learn/progressive-overload-without-adding-weight) live: more quality reps at the same load, a small jump when earned, or holding the prescription when conditions do not support a change.",
    },

    { type: "h3", text: "Level 3: Session adaptation" },
    {
      type: "p",
      text: "The system can change the content of the session itself: exercise selection, volume, duration, substitutions, or which muscles get trained. The feedback loop reaches what the workout contains, not only the numbers on a fixed template [2][7].",
    },

    { type: "h3", text: "Level 4: Schedule and sequence adaptation" },
    {
      type: "p",
      text: "The system can reason about a disrupted week. Missed workouts, travel, added sport, or fewer training days change which future sessions are recommended, and in what order, rather than merely sliding calendar labels. This is where [what to do when you miss a workout](/learn/what-to-do-when-you-miss-a-workout) stops being a user improvisation problem and becomes a programming problem [5][6]. A longer layoff raises the same issue at a larger scale: [returning to training after time off](/learn/how-to-return-to-training-after-time-off) means the old plan is still useful history, but current capacity has to be re-estimated from new sessions.",
    },

    { type: "h3", text: "Level 5: Program adaptation" },
    {
      type: "p",
      text: "The system can alter the larger training strategy: goal allocation, weekly dose, progression model, exercise emphasis, block structure, or which qualities are being developed versus maintained. This is the deepest level in this framework. It matters when someone is [training for two goals at once](/learn/how-to-train-for-two-goals-at-once) and the week has to keep reallocating limited recovery.",
    },
    {
      type: "p",
      text: "A product can sit between levels or combine capabilities from several of them. The point of the framework is not to crown winners. It is to stop treating the word \"adaptive\" as if it meant one thing.",
    },

    { type: "h2", text: "Three examples that make the levels concrete" },
    {
      type: "example",
      title: "Example A: you beat the target reps twice",
      body: [
        "Preplanned/static plan: follows the progression that was already written, whether you barely hit the target or exceeded it easily",
        "Parameter-adaptive plan: changes the next load or target because of what you actually did",
        "Deeper adaptation: also checks whether that faster progress should change nearby sessions, weekly dose, or the current block emphasis",
      ],
    },
    {
      type: "example",
      title: "Example B: Monday lower-body session is missed",
      body: [
        "Calendar system: serves Tuesday anyway, or slides Monday onto Tuesday",
        "Schedule-adaptive system: asks what exposure was missed, what remains, and whether fitting it back in would stack fatigue badly",
        "Program-adaptive system: may also revise later priorities if the miss changes what the week can still accomplish",
      ],
    },
    {
      type: "example",
      title: "Example C: you want muscle and still play weekend field sport",
      body: [
        "Simple personalization: chooses a muscle-building template",
        "Better adaptation: tracks which goal is primary, which athletic qualities need maintenance, and how match day changes the fatigue budget",
        "Weak adaptation: grows gym volume while quietly deleting the speed or power work the sport still needs",
        "Deeper adaptation: treats Saturday sport as an anchor session and changes Monday's lower-body dose when the match was easy versus brutal; see [how to combine lifting with a weekend sport](/learn/how-to-combine-lifting-with-sports)",
      ],
    },
    {
      type: "p",
      text: "Current products already show how differently \"adaptive\" can behave. TrainerRoad's Adaptive Training monitors workout performance and can swap upcoming structured cycling workouts as fitness and schedule change; its documentation states that it changes which future workouts the plan recommends, not the internals of individual workouts [5]. Stryd Adaptive Training recalibrates running prescription from Critical Power and can alter schedule, phases, and return logic when fitness or circumstances change [6]. Fitbod generates future strength sessions, including exercise selection, sets, reps, and loads, from logged history and recovery estimates [7]. Those are real forms of adaptation. They are not identical forms.",
    },

    { type: "h2", text: "More adaptation is not automatically better" },
    {
      type: "p",
      text: "Constant change is not the same thing as intelligent coaching.",
    },
    {
      type: "p",
      text: "A system can overreact. It can treat one unusually poor workout as more informative than it is. It can chase wearable noise. It can swap exercises so often that progression becomes hard to judge. It can protect short-term comfort while quietly abandoning the quality the block was supposed to develop. Autoregulation research is useful here as a reminder that adjustments should be tied to relevant performance or readiness signals, not to restlessness [1][2][8].",
    },

    { type: "h2", text: "Stability and responsiveness both matter" },
    {
      type: "p",
      text: "Good adaptive training needs both responsiveness and stability. Responsiveness means the plan can change when the evidence warrants it: a repeated miss, a clear stall, a new sport day, faster-than-expected progress. Stability means enough of the program stays continuous for progression, comparison, and learning. If the exercises, doses, and priorities keep flipping, you cannot tell whether the athlete adapted poorly or the plan never stayed still long enough to work.",
    },
    {
      type: "p",
      text: "That tradeoff is why deeper adaptation is not a score to maximize. A Level 2 system that progresses load cleanly can outperform a noisier Level 3 system that invents a new session every day. The useful question is not \"how much does it change?\" It is \"does it change the right parts, for a clear reason, without destroying the thread of progression?\"",
    },

    { type: "h2", text: "What adaptive training is not" },
    {
      type: "ul",
      items: [
        "Not random workout generation",
        "Not an AI chatbot inventing a new session every day with no memory of the plan",
        "Not personalization alone",
        "Not changing something merely because a wearable number moved",
        "Not constant novelty",
        "Not synonymous with machine learning",
      ],
    },
    {
      type: "p",
      text: "That last point matters. A rules-based system can be adaptive if it observes outcomes and changes future programming for clear reasons. Machine learning can power adaptation. \"Uses AI\" and \"adapts training\" are still different claims.",
    },

    { type: "h2", text: "A quick test: does this app really adapt?" },
    {
      type: "p",
      text: "When an app says it is adaptive, ask what happens if:",
    },
    {
      type: "ol",
      items: [
        "You miss two workouts",
        "You progress much faster than expected",
        "Your training days change mid-block",
        "You add a sport or hard recreational session",
        "You stop progressing on a main lift or key workout",
        "Your goal priority changes",
      ],
    },
    {
      type: "p",
      text: "Then ask the decisive follow-up: does the app only modify today's workout, or does it update the future program? A product that only tweaks today's difficulty may still be useful. It is not doing the same job as a system that can revise sequence, weekly dose, or goal allocation when the evidence changes.",
    },
    {
      type: "p",
      text: "That consumer test also points to a related question for later: whether an app is truly personalizing the plan, or only dressing a generic template in onboarding answers. Personalization and adaptation should be judged separately.",
    },

    { type: "h2", text: "What this means for IOFitness" },
    {
      type: "p",
      text: "IOFitness is being designed around the deeper end of this framework. The intended model is not only to generate a starting plan, and not only to nudge today's numbers. It is to use what someone actually did, plus their goals, activities, limitations, and progression history, to decide what training should do next.",
    },
    {
      type: "p",
      text: "That includes problems already covered in this Learn series: reprogramming after a missed session, and allocating a week when more than one goal is active. Those are not cosmetic features. They are tests of whether the system can adapt the future program while protecting the point of the training.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Adaptive training means the future program changes in response to evidence about the athlete. Personalization gets the starting point closer. Adaptation keeps the plan honest after reality intervenes. Judge a system by what it can observe, what it is allowed to change, how quickly it responds, and whether those changes still serve the long-term goal. The word \"adaptive\" by itself tells you almost nothing. The feedback loop and the depth of change tell you much more.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Greig autoregulation review",
      citation:
        "Greig L, Stephens Hemingway BH, Aspe RR, Cooper K, Comfort P, Swinton PA. Autoregulation in resistance training: addressing the inconsistencies. Sports Med. 2020;50(11):1873-1887.",
      url: "https://doi.org/10.1007/s40279-020-01330-8",
      note: "Defines autoregulation as adjusting training from measured performance or perceived capability, across within-session, between-session, and longer program timescales. Used as the closest established scientific framing, not as a consumer taxonomy of adaptive apps.",
    },
    {
      id: "2",
      label: "Helms monitoring and regulation review",
      citation:
        "Helms ER, Kwan K, Sousa CA, Cronin JB, Storey AG, Zourdos MC. Methods for regulating and monitoring resistance training. J Hum Kinet. 2020;74:23-42.",
      url: "https://doi.org/10.2478/hukin-2020-0011",
      note: "Reviews practical autoregulation and monitoring methods such as velocity, RIR-based RPE, and performance-based load progression. Supports the idea that useful adjustments are tied to measurable signals. Also available via PMC7706636.",
    },
    {
      id: "3",
      label: "Helms RIR-based RPE",
      citation:
        "Helms ER, Cronin J, Storey A, Zourdos MC. Application of the repetitions in reserve-based rating of perceived exertion scale for resistance training. Strength Cond J. 2016;38(4):42-49.",
      url: "https://doi.org/10.1519/SSC.0000000000000218",
      note: "Practical reference for effort-based autoregulation using repetitions in reserve. Used as an example of a training signal, not as proof that any one app implements it well.",
    },
    {
      id: "4",
      label: "NSCA periodization concepts",
      citation:
        "NSCA. Central Concepts Related to Periodization. Kinetic Select.",
      url: "https://www.nsca.com/education/articles/kinetic-select/central-concepts-related-to-periodization/",
      note: "Stimulus-fatigue-recovery-adaptation framing for why longer-term program structure still matters even when short-term adjustments are available.",
    },
    {
      id: "5",
      label: "TrainerRoad Adaptive Training overview",
      citation:
        "TrainerRoad. Adaptive Training Overview. TrainerRoad Support.",
      url: "https://support.trainerroad.com/hc/en-us/articles/4404060687387-Adaptive-Training-Overview",
      note: "Vendor documentation: Adaptive Training monitors workout performance and can change upcoming plan workouts as fitness and schedule change. It swaps future recommended workouts rather than modifying the internals of individual workouts. Used as an example of future-workout / schedule-plan adaptation.",
    },
    {
      id: "6",
      label: "Stryd Adaptive Training documentation",
      citation:
        "Stryd. Stryd Adaptive Training How To. Stryd Help Center.",
      url: "https://help.stryd.com/en/articles/12580285-stryd-adaptive-training-how-to",
      note: "Vendor documentation: Adaptive Training recalibrates running prescription from Critical Power and can adjust schedule, phases, and return logic after interruptions. Used for parameter/fitness recalibration and schedule-responsive planning, not as evidence of rewriting a session's exercise list mid-workout.",
    },
    {
      id: "7",
      label: "Fitbod algorithm documentation",
      citation:
        "Fitbod. How Fitbod Generates Your Personalized Workouts: Meet The Fitbod Algorithm. Fitbod Blog.",
      url: "https://fitbod.me/blog/fitbod-algorithm/",
      note: "Vendor documentation: Fitbod selects exercises and recommends sets, reps, and loads from training history, recovery estimates, goals, and equipment. Used as an example of session- and parameter-level strength adaptation.",
    },
    {
      id: "8",
      label: "Shattock and Tee autoregulation comparison",
      citation:
        "Shattock K, Tee JC. Autoregulation in resistance training: a comparison of subjective versus objective methods. J Strength Cond Res. 2022;36(3):641-648.",
      url: "https://doi.org/10.1519/JSC.0000000000003530",
      note: "Compares subjective and objective autoregulation methods. Used to support the broader point that multiple valid signals exist and that adjustments should be signal-tied, not to endorse one commercial implementation. Online ahead of print dated 2020; journal issue listed as 2022;36(3).",
    },
  ],
};
