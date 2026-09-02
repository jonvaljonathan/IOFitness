import { EarlyAccessForm } from "@/components/early-access-form";
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
        <div id="early-access" className="mt-10 max-w-md scroll-mt-24">
          <p className="mb-3 text-sm text-muted">{homepageCopy.earlyAccess.body}</p>
          <EarlyAccessForm />
        </div>
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
          <div className="mt-8 max-w-md">
            <EarlyAccessForm id="early-access-close" />
          </div>
        </div>
      </section>
    </main>
  );
}
