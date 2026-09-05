import type { LearnArticle } from "../learn";

/**
 * Authority article #7.
 * Primary intent: how to train around a body part / movement you cannot load normally
 * Thesis: a local limitation constrains some slots; keep developing the rest, substitute
 * by training intent, and update from tolerance evidence rather than pausing the whole plan.
 */
export const trainAroundLimitationArticle: LearnArticle = {
  slug: "how-to-train-around-a-limitation",
  title: "How to Train Around a Limitation Without Pausing Everything",
  description:
    "When one body part or movement will not tolerate normal loading, keep developing everything else. Substitute by training intent, protect the constrained tissue from unnecessary dose, and update the next sessions from tolerance evidence.",
  date: "2026-09-05",
  dateModified: "2026-09-05",
  body: [
    {
      type: "p",
      text: "A sore shoulder, angry knee, or irritable low back often gets treated like a reason to stop training. That is usually the wrong unit of analysis. A local limitation constrains some exercises, ranges, or loading strategies. It does not automatically erase the rest of your training goals.",
    },
    {
      type: "p",
      text: "The useful question is the same one that drives the rest of this Learn series: what should the training plan do next? When one slot is constrained, the plan should keep developing the qualities that are still available, replace the blocked work with a tolerable version of the same intent when possible, and use the next sessions as evidence rather than guessing from a diagnosis Google search.",
    },
    {
      type: "callout",
      text: "Short version: name the constrained pattern, keep training everything else, substitute by training intent instead of by exercise name, and let tolerance over the next day or two decide whether the constrained work can progress. Do not shut the whole program down because one lift is unavailable.",
    },

    { type: "h2", text: "This is a programming constraint, not a diagnosis" },
    {
      type: "p",
      text: "This article is about training decisions once a body part or movement will not tolerate the usual dose. It is not medical advice, injury diagnosis, rehab protocol design, or a claim that training replaces clinical care.",
    },
    {
      type: "p",
      text: "Get professional input when symptoms are sudden and severe, follow trauma, include numbness or weakness that is new, keep worsening across sessions, or leave you unsure whether loading is appropriate at all. The framework below assumes you are cleared to keep training in some form and need a better plan than \"rest everything until it feels perfect.\"",
    },
    {
      type: "p",
      text: "That distinction matters because search results for this problem often collapse into clinic marketing or app slogans about being \"injury-aware.\" Almost none answer the structural question: how do you keep developing the other 90% of the body, and how do you substitute without losing the training effect?",
    },

    { type: "h2", text: "A local limit is not a full layoff" },
    {
      type: "p",
      text: "Missing a week because life got busy and being unable to overhead press because the shoulder flares are different problems. One is a temporary absence from training. The other is a constrained slot inside an otherwise active week.",
    },
    {
      type: "p",
      text: "Full time off raises questions about detraining, re-entry dose, and how fast to climb back. That problem belongs in [how to return to training after time off](/learn/how-to-return-to-training-after-time-off). A local limitation raises a different set: which qualities are still trainable, which exercise slots need substitution, and what evidence would justify reintroducing the constrained pattern.",
    },
    {
      type: "p",
      text: "If you pause the whole plan every time one region is irritable, you create an artificial layoff on top of the local problem. That stacks two costs: lost progress elsewhere, and a larger re-entry problem later.",
    },

    { type: "h2", text: "Separate three decisions" },
    {
      type: "p",
      text: "Useful programming here usually needs three separate answers. Mixing them is how people either do nothing or keep hammering the same painful lift.",
    },
    {
      type: "ol",
      items: [
        "What is constrained: the joint, the pattern, the range, the load, the volume, the speed, or the surface?",
        "What is still fully available: other body regions, other patterns, other goals, conditioning, the opposite limb?",
        "What does the constrained slot still need: the same quality with a different stress profile, a temporary maintenance dose, or a true temporary omission?",
      ],
    },
    {
      type: "p",
      text: "A shoulder that hates end-range overhead pressing is not the same constraint as a shoulder that hates all pressing. A knee that dislikes deep loaded squats is not the same constraint as a knee that cannot tolerate any knee flexion under load. Precision here is programming hygiene, not pedantry.",
    },

    { type: "h2", text: "Substitute by training intent, not by exercise name" },
    {
      type: "p",
      text: "The common mistake is to ask, \"What is the alternative to bench press?\" The better question is, \"What training job was that slot doing?\"",
    },
    {
      type: "p",
      text: "A slot might be there for horizontal pressing strength, hypertrophy of the chest and triceps, upper-body loading density, or a specific sport transfer. Those jobs can often survive a change of implement, grip, range, or body position. They do not all survive an aimless swap to whatever machine is free.",
    },
    {
      type: "p",
      text: "Exercise variation research is useful here with a narrow reading. Systematic differences in exercise selection can change which adaptations you get, while random or excessive rotation can blunt progress [1]. That supports intent-matched substitution. It does not support constant novelty as a solution to pain.",
    },
    {
      type: "ul",
      items: [
        "Keep the pattern when possible: press, squat, hinge, pull, carry, locomote",
        "Change the stress profile: neutral grip, shorter range, landmine path, machine or cable support, slower eccentric, lower absolute load",
        "Keep the quality the week still needs: strength, hypertrophy, power, or work capacity",
        "Avoid fake substitutes that only look similar while deleting the intended stimulus",
      ],
    },
    {
      type: "p",
      text: "This is the same logic that shows up when you cannot add weight and need another progression lever: the next step has to preserve a comparable stimulus [progressive overload without adding weight](/learn/progressive-overload-without-adding-weight). A limitation just forces that choice earlier.",
    },

    { type: "h2", text: "Keep developing the other 90%" },
    {
      type: "p",
      text: "If the right shoulder is limited, the left shoulder, both hips, the trunk, the lower body, and conditioning capacity are not automatically on medical leave. The plan should still ask what can progress this week.",
    },
    {
      type: "p",
      text: "That is an allocation problem as much as a medical one. When one quality is temporarily expensive, other qualities may deserve more of the week's recoverable work. The same budgeting mindset used when [training for two goals at once](/learn/how-to-train-for-two-goals-at-once) applies here: spend fatigue where it still buys adaptation.",
    },
    {
      type: "example",
      title: "What usually still deserves dose",
      body: [
        "Unrelated regions and patterns that do not aggravate the constraint",
        "The opposite limb, when unilateral work is available and appropriate",
        "Conditioning modes that do not repeatedly irritate the limited tissue",
        "Technique, tempo, or range work that stays inside current tolerance",
        "Maintenance work for the constrained quality if a low-cost version exists",
      ],
    },
    {
      type: "p",
      text: "This is programming judgment, not a research-derived checklist. The point is to stop treating one constrained slot as permission to abandon every other stimulus.",
    },

    { type: "h2", text: "When the opposite side still matters" },
    {
      type: "p",
      text: "If one limb cannot train normally, training the other limb is not busywork. Unilateral resistance training can increase strength in the untrained contralateral limb, a phenomenon usually called cross-education [2]. During immobilization, training the free limb can also help attenuate strength and muscle-size loss in the immobilized limb compared with immobilization alone [3].",
    },
    {
      type: "p",
      text: "Those findings support keeping the healthy side working. They do not prove that contralateral training rehabilitates an injured joint, replaces clinical care, or restores sport-specific capacity by itself. Use them as a reason to keep trainable tissue training, not as a miracle workaround.",
    },

    { type: "h2", text: "Pain is information. It is not a simple on/off switch." },
    {
      type: "p",
      text: "\"Never train with pain\" and \"push through anything\" are both crude rules. In chronic musculoskeletal pain research, exercise protocols that allow some pain during therapeutic loading have not been shown to be inferior to pain-free protocols, and short-term pain outcomes can even favor allowing pain in some comparisons [4]. That evidence comes from clinical exercise settings with people already in care pathways. It is not a blank check for recreational athletes to chase flare-ups.",
    },
    {
      type: "p",
      text: "A practical training filter is narrower:",
    },
    {
      type: "ul",
      items: [
        "Mild, familiar discomfort that settles during or soon after the session can sometimes be compatible with continued loading",
        "Sharp, worsening, radiating, or next-day escalating symptoms are a reason to change the exercise, reduce the dose, or stop that slot",
        "If you cannot tell which category you are in, reduce complexity and seek professional input rather than guessing harder",
      ],
    },
    {
      type: "p",
      text: "Evidence and coaching judgment need to stay labeled. The literature says pain during some therapeutic exercise is not automatically a barrier to short-term improvement [4]. Your session still has to answer a simpler question: did this exposure leave the tissue more workable next time, or less?",
    },

    { type: "h2", text: "A practical way to rebuild the session" },
    {
      type: "p",
      text: "The sequence below is IOFitness programming synthesis. Evidence supports pieces of it: exercise selection changes the stimulus [1], contralateral training can preserve or transfer some capacity [2][3], and pain is not an absolute veto in every clinical exercise context [4]. The exact decision order is coaching judgment.",
    },
    {
      type: "ol",
      items: [
        "Name the constrained slot: which pattern, range, or loading mode is limited?",
        "Protect it from unnecessary high-cost versions of the same stress",
        "Keep every unaffected slot on a normal progression track",
        "Choose an intent-matched substitute when the quality still matters this block",
        "If no tolerable substitute exists, omit that slot temporarily rather than inventing junk volume",
        "Train the opposite limb when the constraint is unilateral and the healthy side is available",
        "Use the next 24 to 48 hours as evidence: better, same, or worse?",
        "Only then decide whether to progress, hold, regress, or reintroduce the original pattern",
      ],
    },
    {
      type: "p",
      text: "A week fails this test when one irritable body part deletes the entire program, the substitute no longer trains the intended quality, every session becomes random machine work with no progression target, or the original lift returns the moment pain drops to a 2 out of 10 with no intermediate steps.",
    },

    { type: "h2", text: "Worked example: pressing with an irritable shoulder" },
    {
      type: "p",
      text: "Athlete: 34 years old. Primary goal is upper-body muscle and general strength. Overhead pressing and wide-grip benching flare the right shoulder. Horizontal pulling, lower-body training, and conditioning feel fine. No red-flag symptoms. The current block still needs pressing work, not a full upper-body vacation.",
    },
    {
      type: "example",
      title: "Plausible adjusted week",
      body: [
        "Keep lower-body sessions unchanged",
        "Keep horizontal and vertical pulling if tolerated",
        "Replace painful overhead press with a landmine or neutral-grip press in a shorter range",
        "Replace painful flat barbell bench with neutral-grip dumbbell floor press or a machine press that does not provoke symptoms",
        "Keep left-arm unilateral pressing if right-arm options are limited",
        "Leave direct end-range overhead work out until tolerance improves",
        "Judge the next session from symptom response and pressing quality, not from nostalgia for the old lift",
      ],
    },
    {
      type: "p",
      text: "Why this shape: the constrained pattern is overhead and provocative pressing ranges, not \"all upper-body training.\" The week still develops lower body, pulling, and a pressing quality with a different stress profile. Progression can continue on the substitute if the stimulus remains comparable. That is more useful than waiting for the exact old lift to become available again.",
    },
    {
      type: "h3", text: "Branch A: the substitute lands cleanly" },
    {
      type: "p",
      text: "Symptoms stay stable or improve across two or three exposures, and the substitute still provides a hard, clean pressing stimulus. Keep progressing that version. Later, reintroduce fragments of the old pattern: longer range, different grip, then the original lift at a reduced dose.",
    },
    {
      type: "h3", text: "Branch B: the substitute still provokes" },
    {
      type: "p",
      text: "If even the lower-cost pressing options flare symptoms or degrade next-day function, the plan should change more than load. That may mean temporary omission of pressing, more emphasis on pulling and lower body, or professional assessment. Forcing \"some kind of press\" every session is still parameter stubbornness. A real limitation can change what session comes next.",
    },

    { type: "h2", text: "Reintroduce the constrained pattern on evidence" },
    {
      type: "p",
      text: "Getting pain-free in daily life is not the same as being ready for the old working sets. Reintroduction should look like a ladder, not a jump:",
    },
    {
      type: "ul",
      items: [
        "Restore the pattern with low cost: lighter load, shorter range, slower speed, or supported variation",
        "Confirm that two or three exposures leave symptoms and performance stable",
        "Restore volume before ego load",
        "Only then chase the old working weights or the original exercise",
      ],
    },
    {
      type: "p",
      text: "This is the same evidence logic used after time off and after a brutal sport weekend: the next prescription should answer to what the last exposure actually did [adaptive training](/learn/what-is-adaptive-training). A static plan either bans the lift forever or brings it back the moment the athlete feels optimistic. An adaptive plan can hold the substitute, test a partial return, and change course from the response.",
    },

    { type: "h2", text: "What adaptive programming should do with a limitation" },
    {
      type: "p",
      text: "A static template has two bad defaults: ignore the limitation and keep prescribing the same lift, or panic and replace the whole week with random \"safe\" exercises. Neither answers what the plan should do next.",
    },
    {
      type: "p",
      text: "An adaptive plan should treat the limitation as durable context until evidence says otherwise. That means remembering which pattern is constrained, choosing intent-matched substitutes, keeping unaffected work progressive, and using tolerance plus performance to decide whether the original slot can return.",
    },
    {
      type: "p",
      text: "IOFitness is being designed around that kind of constraint handling. The intended model treats limitations as inputs to exercise selection and weekly allocation, not as a reason to freeze the entire program or invent a new unrelated workout every day.",
    },

    { type: "h2", text: "Bottom line" },
    {
      type: "p",
      text: "Training around a limitation is still training. Name what is actually constrained. Keep developing everything else. Substitute by training intent when the quality still matters. Use the opposite limb when the problem is unilateral. Let tolerance evidence decide whether the constrained pattern can progress, hold, or wait. Do not confuse a local limit with a full layoff, and do not confuse staying active with repeatedly poking the same aggravated slot.",
    },
  ],
  sources: [
    {
      id: "1",
      label: "Kassiano exercise-variation systematic review",
      citation:
        "Kassiano W, Nunes JP, Costa B, Ribeiro AS, Schoenfeld BJ, Cyrino ES. Does varying resistance exercises promote superior muscle hypertrophy and strength gains? A systematic review. J Strength Cond Res. 2022;36(6):1753-1762.",
      url: "https://doi.org/10.1519/JSC.0000000000004258",
      note: "Finds that systematic exercise variation can influence hypertrophy and strength adaptations, while excessive or random variation may blunt gains. Used to support intent-matched substitution based on biomechanical job, not novelty for its own sake.",
    },
    {
      id: "2",
      label: "Manca cross-education meta-analysis",
      citation:
        "Manca A, Dragone D, Dvir Z, Deriu F. Cross-education of muscular strength following unilateral resistance training: a meta-analysis. Eur J Appl Physiol. 2017;117(11):2335-2354.",
      url: "https://doi.org/10.1007/s00421-017-3720-z",
      note: "Pooled estimate of about 12% contralateral strength gain after unilateral resistance training, with contraction-type differences and important risk-of-bias caveats. Used to support keeping the healthy limb training, not as proof of joint rehabilitation or full functional restoration.",
    },
    {
      id: "3",
      label: "Haggert cross-education during immobilization",
      citation:
        "Haggert M, Pearce AJ, Frazer AK, Rahman S, Kidgell DJ, Siddique U. Determining the effects of cross-education on muscle strength, thickness and cortical activation following limb immobilization: a systematic review and meta-analysis. J Sci Med. 2020;2(4).",
      url: "https://doi.org/10.37714/josam.v2i4.54",
      note: "Reports that training the free limb during immobilization attenuates losses in strength and muscle thickness of the immobilized limb relative to immobilization alone. Used for the \"opposite side still matters\" claim, not as a standalone rehab protocol.",
    },
    {
      id: "4",
      label: "Smith painful versus pain-free therapeutic exercise",
      citation:
        "Smith BE, Hendrick P, Smith TO, Bateman M, Moffatt F, Rathleff MS, Selfe J, Logan P. Should exercises be painful in the management of chronic musculoskeletal pain? A systematic review and meta-analysis. Br J Sports Med. 2017;51(23):1679-1687.",
      url: "https://doi.org/10.1136/bjsports-2016-097383",
      note: "In chronic musculoskeletal pain trials, protocols allowing pain during therapeutic exercise were not inferior to pain-free protocols and showed a small short-term pain benefit. Used only for the narrow claim that pain is not an absolute barrier in every exercise context. Not used as advice to train through acute injury, worsening neurological symptoms, or unexplained severe pain.",
    },
  ],
};
