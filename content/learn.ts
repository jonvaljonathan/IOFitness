export const learnCopy = {
  heading: "IOFitness Learn",
  intro:
    "Practical guides to getting stronger, fitter, more athletic and more capable, covering training, progression, consistency, recovery and physical development.",
  empty:
    "Guides will live here as they are written. Nothing is published yet.",
} as const;

export type LearnArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export const learnArticles: LearnArticle[] = [];

export function getLearnArticles(): LearnArticle[] {
  return [...learnArticles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return learnArticles.find((article) => article.slug === slug);
}
