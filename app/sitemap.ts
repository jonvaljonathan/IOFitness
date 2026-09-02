import type { MetadataRoute } from "next";
import { getLearnArticles } from "@/content/learn";
import { absoluteUrl, publishedRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = publishedRoutes.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }));

  const articleRoutes = getLearnArticles().map((article) => ({
    url: absoluteUrl(`/learn/${article.slug}`),
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
