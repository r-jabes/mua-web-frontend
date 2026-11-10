import type { MetadataRoute } from "next";
import { newsArticles } from "@/content/news";
import { publicRoutes, SITE_URL } from "@/lib/site";

const sitemapExcluded = new Set([
  "/business/corporate-health-insurance",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = publicRoutes
    .filter((path) => !sitemapExcluded.has(path))
    .map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));

  const articleEntries: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...articleEntries];
}
