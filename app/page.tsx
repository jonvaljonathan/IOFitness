import Link from "next/link";
import { homepageCopy } from "@/content/homepage";
import { absoluteUrl, siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

const sections = [
  homepageCopy.goals,
  homepageCopy.plan,
  homepageCopy.moreThanANumber,
  homepageCopy.why,
  homepageCopy.examples,
] as const;

export default function Home() {
  return (
    <main id="main">
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <p className="text-sm tracking-[0.18em] text-muted uppercase">
          {siteConfig.name}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
          {homepageCopy.hero.heading}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          {homepageCopy.hero.product}
        </p>
        <p className="mt-10">
          <Link
            href={homepageCopy.closing.ctaHref}
            className="inline-flex min-h-12 items-center rounded-sm bg-accent px-4 text-base text-paper hover:bg-accent-hover"
          >
            {homepageCopy.closing.cta}
          </Link>
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.heading} className="border-t border-rule">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
            <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {section.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{section.body}</p>
          </div>
        </section>
      ))}

      <section className="border-t border-rule">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {homepageCopy.closing.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {homepageCopy.closing.body}
          </p>
          <p className="mt-8">
            <Link
              href={homepageCopy.closing.ctaHref}
              className="inline-flex min-h-12 items-center rounded-sm border border-rule bg-field px-4 text-base text-ink hover:border-accent"
            >
              {homepageCopy.closing.cta}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
