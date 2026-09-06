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

const proseSections = [
  homepageCopy.goals,
  homepageCopy.plan,
  homepageCopy.moreThanANumber,
  homepageCopy.why,
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
          <a
            href={homepageCopy.cta.href}
            className="inline-flex min-h-12 items-center rounded-sm bg-accent px-4 text-base text-paper hover:bg-accent-hover"
          >
            {homepageCopy.cta.label}
          </a>
        </p>
      </section>

      {proseSections.map((section) => (
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
            {homepageCopy.process.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {homepageCopy.process.body}
          </p>
          <ul className="mt-10 grid max-w-3xl gap-8">
            {homepageCopy.process.items.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {homepageCopy.situations.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {homepageCopy.situations.body}
          </p>
          <ul className="mt-10 grid gap-0 sm:grid-cols-2">
            {homepageCopy.situations.items.map((item) => (
              <li key={item.href} className="border-t border-rule py-6 sm:pr-8">
                <Link href={item.href} className="group block">
                  <h3 className="font-display text-xl tracking-tight text-ink group-hover:text-accent sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {homepageCopy.closing.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {homepageCopy.closing.body}
          </p>
          <p className="mt-8">
            <a
              href={homepageCopy.cta.href}
              className="inline-flex min-h-12 items-center rounded-sm bg-accent px-4 text-base text-paper hover:bg-accent-hover"
            >
              {homepageCopy.cta.label}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
