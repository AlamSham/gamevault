import { MetadataRoute } from "next";
import { GAMES } from "@/data/games";
import { CATEGORIES } from "@/data/categories";
import { BLOG_POSTS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gamevaultinfo.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/dmca`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];

  // Game detail routes (Highest priority for game search traffic)
  const gameRoutes: MetadataRoute.Sitemap = GAMES.map((game) => ({
    url: `${baseUrl}/game/${game.id}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // Game download routes (Latest version)
  const downloadRoutes: MetadataRoute.Sitemap = GAMES.map((game) => ({
    url: `${baseUrl}/download/${game.id}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.85,
  }));

  // Older versions routes (Steals traffic for old version search queries)
  const olderVersionRoutes: MetadataRoute.Sitemap = GAMES.flatMap((game) =>
    (game.olderVersions || []).map((v) => ({
      url: `${baseUrl}/download/${game.id}?version=${encodeURIComponent(v.version)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    }))
  );

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Blog detail routes
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...gameRoutes,
    ...downloadRoutes,
    ...olderVersionRoutes,
    ...categoryRoutes,
    ...blogRoutes,
  ];
}
