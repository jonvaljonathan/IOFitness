import { twoGoalsArticle } from "./articles/how-to-train-for-two-goals-at-once";
import { adaptiveTrainingArticle } from "./articles/what-is-adaptive-training";
import { missedWorkoutArticle } from "./articles/what-to-do-when-you-miss-a-workout";

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
    "Guides will live here as they are written. Nothing is published yet.",
} as const;

export const learnArticles: LearnArticle[] = [
  missedWorkoutArticle,
  twoGoalsArticle,
  adaptiveTrainingArticle,
];

export function getLearnArticles(): LearnArticle[] {
  return [...learnArticles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return learnArticles.find((article) => article.slug === slug);
}
