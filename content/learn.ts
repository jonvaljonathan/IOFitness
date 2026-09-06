import { appPersonalizationArticle } from "./articles/do-fitness-apps-actually-personalize-workouts";
import { liftingWithSportsArticle } from "./articles/how-to-combine-lifting-with-sports";
import { twoGoalsArticle } from "./articles/how-to-train-for-two-goals-at-once";
import { returnToTrainingArticle } from "./articles/how-to-return-to-training-after-time-off";
import { trainWithLimitationArticle } from "./articles/how-to-train-with-a-limitation";
import { exerciseSelectionArticle } from "./articles/pick-the-right-exercises-for-your-goals";
import { progressiveOverloadArticle } from "./articles/progressive-overload-without-adding-weight";
import { trainingHabitArticle } from "./articles/start-a-training-habit";
import { adaptiveTrainingArticle } from "./articles/what-is-adaptive-training";
import { missedWorkoutArticle } from "./articles/what-to-do-when-you-miss-a-workout";
import { shrinkingWeekArticle } from "./articles/when-your-week-shrinks";
import { muscleSurplusArticle } from "./articles/why-building-muscle-usually-needs-a-calorie-surplus";
import { buildingMuscleExpectationsArticle } from "./articles/what-to-expect-when-youre-building-muscle";
import { deficitTrainingArticle } from "./articles/how-training-changes-when-youre-in-a-deficit";
import { losingFatExpectationsArticle } from "./articles/what-to-expect-when-youre-losing-fat";
import { muscleFatCompeteArticle } from "./articles/when-building-muscle-and-losing-fat-compete";
import { consistencyAfterMotivationArticle } from "./articles/how-to-stay-consistent-after-motivation-drops";
import { followPlanBeforeChangingArticle } from "./articles/how-long-to-follow-a-plan-before-you-change-it";
import { goalsMatchTimelinesArticle } from "./articles/how-to-set-goals-that-match-real-timelines";

export type ArticleSource = {
  id: string;
  label: string;
  citation: string;
  url?: string;
  note?: string;
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "example"; title: string; body: string[] }
  | { type: "callout"; text: string };

export type LearnArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified: string;
  body: ArticleBlock[];
  sources: ArticleSource[];
};

export const learnCopy = {
  heading: "IOFitness Learn",
  intro:
    "Practical guides to getting stronger, fitter, more athletic and more capable, covering training, progression, consistency, recovery and physical development.",
  empty:
    "Published guides will appear here as new articles ship.",
} as const;

export const learnArticles: LearnArticle[] = [
  missedWorkoutArticle,
  twoGoalsArticle,
  adaptiveTrainingArticle,
  progressiveOverloadArticle,
  returnToTrainingArticle,
  liftingWithSportsArticle,
  trainWithLimitationArticle,
  appPersonalizationArticle,
  exerciseSelectionArticle,
  shrinkingWeekArticle,
  trainingHabitArticle,
  muscleSurplusArticle,
  buildingMuscleExpectationsArticle,
  deficitTrainingArticle,
  losingFatExpectationsArticle,
  muscleFatCompeteArticle,
  consistencyAfterMotivationArticle,
  followPlanBeforeChangingArticle,
  goalsMatchTimelinesArticle,
];

export function getLearnArticles(): LearnArticle[] {
  return [...learnArticles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return learnArticles.find((article) => article.slug === slug);
}
