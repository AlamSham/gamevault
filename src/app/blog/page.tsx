import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Android Gaming Blog, News, Tips & Guides (English + हिंदी)",
  description: "Read the latest Android gaming guides, top 10 game lists, FPS boost tutorials, APK download guides in English and Hindi on GameVault APK.",
  alternates: { canonical: "https://gamevaultinfo.com/blog" },
};

export default function BlogListPage() {
  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem" }}>
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>Blog</span>
      </nav>

      <div style={{ margin: "2rem 0 3rem" }}>
        <h1>📝 Android Gaming Blog & Guides</h1>
        <p>Tips, tricks, top 10 lists, and APK download guides — English and Hindi.</p>
      </div>

      <div className="games-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
        {BLOG_POSTS.map((blog) => (
          <div key={blog.id} className="game-card" style={{ padding: "1.5rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{blog.icon}</div>
            <span className="game-card-category" style={{ position: "static", marginBottom: "0.5rem", width: "fit-content" }}>
              {blog.category}
            </span>
            <h2 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{blog.title}</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>{blog.excerpt}</p>
            <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: "1.25rem" }}>
              📅 {blog.date} • ⏱️ {blog.readTime}
            </div>
            <Link href={`/blog/${blog.id}`} className="game-card-download" style={{ marginTop: "auto" }}>
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}