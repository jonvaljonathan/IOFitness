import type { Metadata } from "next";
import Link from "next/link";
import { getLearnArticles, learnCopy } from "@/content/learn";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: learnCopy.heading },
  description: learnCopy.intro,
  alternates: {
    canonical: absoluteUrl("/learn"),
  },
  openGraph: {
    title: `${learnCopy.heading} — IOFitness`,
    description: learnCopy.intro,
    url: absoluteUrl("/learn"),
    type: "website",
  },
};

export default function LearnPage() {
  const articles = getLearnArticles();

  return (
    <main id="main" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
        {learnCopy.heading}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{learnCopy.intro}</p>

      {articles.length === 0 ? (
        <p className="mt-12 max-w-2xl text-base leading-7 text-muted">{learnCopy.empty}</p>
      ) : (
        <ul className="mt-12 grid gap-8">
          {articles.map((article) => (
            <li key={article.slug} className="border-t border-rule pt-8">
              <article>
                <h2 className="font-display text-2xl tracking-tight">
                  <Link href={`/learn/${article.slug}`} className="hover:text-accent">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  {article.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
