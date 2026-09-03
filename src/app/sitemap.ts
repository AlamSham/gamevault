import { MetadataRoute } from "next";
import { GAMES } from "@/data/games";
import { CATEGORIES } from "@/data/categories";
import { BLOG_POSTS } from "@/data/blogs";

function parseSafeDate(dateStr: string, fallback: Date): Date {
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? fallback : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gamevaultinfo.com";

  // Use fixed dates for static pages — update these when content actually changes
  const SITE_LAUNCH_DATE = new Date("2026-01-15");
  const LAST_CONTENT_UPDATE = new Date("2026-08-26");

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/dmca`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.4 },
  ];

  // Game detail routes — these are the HIGH VALUE pages with rich content
  // ONLY include game detail pages — NOT download/older version pages
  // Download pages are thin content (just a timer) and waste crawl budget
  const gameRoutes: MetadataRoute.Sitemap = GAMES.map((game) => ({
    url: `${baseUrl}/game/${game.id}`,
    lastModified: parseSafeDate(game.lastUpdated, LAST_CONTENT_UPDATE),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.id}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Blog detail routes — use each blog's published date
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: parseSafeDate(blog.date, LAST_CONTENT_UPDATE),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // NOTE: Download pages (/download/*) and older version pages are intentionally
  // EXCLUDED from sitemap. They are thin content (just a countdown timer + button)
  // and were wasting Google's crawl budget. With 1,050 pages "Discovered but not
  // indexed", we need to focus crawl budget on high-value game detail pages.

  return [
    ...staticRoutes,
    ...gameRoutes,
    ...categoryRoutes,
    ...blogRoutes,
  ];
}

