import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LearnArticleJsonLd } from "@/components/json-ld";
import { getLearnArticle, getLearnArticles } from "@/content/learn";
import { absoluteUrl } from "@/lib/site";

type LearnArticleParams = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getLearnArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: LearnArticleParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getLearnArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: absoluteUrl(`/learn/${article.slug}`),
    },
    openGraph: {
      title: `${article.title} — IOFitness`,
      description: article.description,
      url: absoluteUrl(`/learn/${article.slug}`),
      siteName: "IOFitness",
      locale: "en_US",
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function LearnArticlePage({ params }: LearnArticleParams) {
  const { slug } = await params;
  const article = getLearnArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <LearnArticleJsonLd slug={article.slug} />
      <p className="text-sm text-muted">
        <Link href="/learn" className="hover:text-ink">
          Learn
        </Link>
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl">
        {article.title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">{article.description}</p>
    </main>
  );
}
