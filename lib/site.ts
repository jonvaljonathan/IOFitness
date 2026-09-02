export const siteConfig = {
  name: "IOFitness",
  url: "https://io.fitness",
  title: "IOFitness — Adaptive Training to Help You Get Better",
  description:
    "IOFitness builds adaptive training around your goals, abilities, activities, limitations and progress, helping you get stronger, fitter, more athletic and more capable.",
  brandLine: "Get better.",
} as const;

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}

export const publishedRoutes = [
  { href: "/", title: "Home" },
  { href: "/learn", title: "Learn" },
] as const;

export const plannedRoutes = [
  {
    href: "/how-it-works",
    title: "How it works",
    notes: "Publish when the product explanation is ready. Do not ship an empty indexed page.",
  },
  {
    href: "/methodology",
    title: "Methodology",
    notes: "Publish when the training methodology article is ready. Do not ship an empty indexed page.",
  },
] as const;
