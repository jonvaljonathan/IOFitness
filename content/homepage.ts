export const homepageCopy = {
  hero: {
    heading: "Get better.",
    product:
      "IOFitness builds adaptive training around your goals, sports, limitations, and how you actually progress — so the plan keeps changing as you get better.",
  },
  earlyAccess: {
    body: "Leave your email if you want to hear when IOFitness is ready to try.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    goalLabel: "What do you want to get better at?",
    goalPlaceholder: "Optional",
    submit: "Request early access",
    consent:
      "We'll email you about IOFitness early access and product updates. Unsubscribe anytime.",
    success: "You are on the list. We will be in touch.",
    invalidEmail: "Please enter a valid email address.",
    error: "Something went wrong. Please try again.",
  },
  secondaryCta: {
    label: "Or browse the training guides",
    href: "/learn",
  },
  goals: {
    heading: "Goals are more complicated than simple categories",
    body: "Anyone who knows what they want their body to be capable of but doesn't know how to program the path there already has a goal. It is rarely one checkbox. Strength, endurance, skill, and the activities you care about usually sit together, and they do not move on the same schedule.",
  },
  plan: {
    heading: "A plan built around the individual",
    body: "IOFitness builds adaptive training around your goals, abilities, activities, limitations and progress. The work is personalized physical development: a plan that starts from your body and your aims, then keeps evolving as you get better.",
  },
  moreThanANumber: {
    heading: "Fitness is more than one number",
    body: "A single score cannot tell you whether you are becoming more capable. Strength, fitness, athleticism, and the ability to do the things you care about all count, and they count differently for different people.",
  },
  why: {
    heading: "Why we're building IOFitness",
    body: "Programming that path is hard to do well on your own. Generic plans do not account for your limitations, the activities you care about, or how you actually progress. We are building IOFitness so the plan can be specific to you, and so it can change when you change.",
  },
  process: {
    heading: "What the plan should decide next",
    body: "Adaptive training is not a prettier template. It is a set of decisions about what changes after real training shows up.",
    items: [
      {
        title: "Keep the goal, change the dose",
        body: "Missed sessions, hard weekends, and fatigue change what the next week can hold — not whether the goal still matters.",
      },
      {
        title: "Protect what has to stay fresh",
        body: "When two goals share a week, one gets the progressive work. The other gets a real maintenance dose.",
      },
      {
        title: "Swap the lift, keep the job",
        body: "A tender joint should change the exercise, not pause the whole plan. Progress the substitute from how the next sessions feel.",
      },
      {
        title: "Rebuild from current capacity",
        body: "After time off, keep familiar work and reduce uncertain volume until readiness is clear again.",
      },
    ],
  },
  situations: {
    heading: "If this is your training week",
    body: "Start with the guide that matches the decision in front of you.",
    items: [
      {
        title: "You missed a session",
        body: "What should actually happen to the plan next.",
        href: "/learn/what-to-do-when-you-miss-a-workout",
      },
      {
        title: "You are chasing two goals",
        body: "How to keep both alive without collapsing the week.",
        href: "/learn/how-to-train-for-two-goals-at-once",
      },
      {
        title: "Weekend sport owns Saturday",
        body: "How to lift around a fixed match or training day.",
        href: "/learn/how-to-combine-lifting-with-sports",
      },
      {
        title: "The next plate is not the point",
        body: "What still counts as progressive overload.",
        href: "/learn/progressive-overload-without-adding-weight",
      },
      {
        title: "You are coming back after time off",
        body: "How to restart without copying the old plan on day one.",
        href: "/learn/how-to-return-to-training-after-time-off",
      },
      {
        title: "You want the deeper model",
        body: "What adaptive training is — and what it is not.",
        href: "/learn/what-is-adaptive-training",
      },
    ],
  },
  closing: {
    heading: "Get early access",
    body: "If this is the kind of training you have been looking for, join the list. Or keep reading the guides while we build.",
    secondaryLabel: "Browse the guides",
    secondaryHref: "/learn",
  },
} as const;
