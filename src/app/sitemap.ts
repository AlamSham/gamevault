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

  // Fresh content timestamp for Googlebot crawl signal
  const CURRENT_DATE = new Date("2026-10-05T00:00:00.000Z");

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: CURRENT_DATE, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/all-games`, lastModified: CURRENT_DATE, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: CURRENT_DATE, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: CURRENT_DATE, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: CURRENT_DATE, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/dmca`, lastModified: CURRENT_DATE, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: CURRENT_DATE, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: CURRENT_DATE, changeFrequency: "monthly", priority: 0.4 },
  ];

  // Game detail routes — high value game pages
  const gameRoutes: MetadataRoute.Sitemap = GAMES.map((game) => ({
    url: `${baseUrl}/game/${game.id}`,
    lastModified: CURRENT_DATE,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.id}`,
    lastModified: CURRENT_DATE,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Blog detail routes — use each blog's published date or current
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: parseSafeDate(blog.date, CURRENT_DATE),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...gameRoutes,
    ...categoryRoutes,
    ...blogRoutes,
  ];
}

