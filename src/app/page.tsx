import Link from "next/link";
import GameCard from "@/components/GameCard";
import JsonLd from "@/components/JsonLd";
import { getTrendingGames, getFeaturedGames, GAMES } from "@/data/games";
import { CATEGORIES } from "@/data/categories";
import { BLOG_POSTS } from "@/data/blogs";
import { ShieldCheck, Flame, Sparkles, BookOpen, Search } from "lucide-react";

export default function HomePage() {
  const trendingGames = getTrendingGames(10);
  const featuredGames = getFeaturedGames(12);
  const recentBlogs = BLOG_POSTS.slice(0, 3);

  // ItemList schema for Google carousel rich snippet
  const trendingListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Trending Android Games 2026",
    numberOfItems: trendingGames.length,
    itemListElement: trendingGames.map((game, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: game.name,
      url: `https://gamevaultinfo.com/game/${game.id}`,
    })),
  };

  return (
    <div>
      <JsonLd data={trendingListSchema} />
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">
            <ShieldCheck size={16} /> 100% Safe & Verified APK Downloads
          </div>

          <h1>
            Download Free <span className="highlight">Android Games</span> APK
          </h1>

          <p>
            Explore 200+ top rated Android games. Safe, virus-free APK files with direct high-speed download links.
          </p>

          <form action="/search" method="GET" className="hero-search">
            <span className="search-icon"><Search size={20} /></span>
            <input
              type="text"
              name="q"
              placeholder="Search game name (e.g. Subway Surfers, Free Fire)..."
              required
            />
            <button type="submit">Search</button>
          </form>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">{GAMES.length}+</div>
              <div className="stat-label">Verified Games</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Virus-Free Checked</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <span className="icon">🎮</span>
              <h2>Browse By Category</h2>
            </div>
          </div>

          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} href={`/category/${cat.id}`} className="category-card">
                <div className="cat-icon">{cat.icon}</div>
                <div className="cat-name">{cat.name}</div>
                <div className="cat-count">{cat.count} Games</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING GAMES SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <Flame color="#ff6b35" size={24} />
              <h2>Trending Games 2026</h2>
            </div>
            <Link href="/category/action" className="section-link">
              View All Games →
            </Link>
          </div>

          <div className="games-grid">
            {trendingGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* TOP RATED GAMES */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <Sparkles color="#00ff88" size={24} />
              <h2>Top Rated & Popular Games</h2>
            </div>
          </div>

          <div className="games-grid">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* RECENT BLOGS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <BookOpen color="#00d4ff" size={24} />
              <h2>Latest Guides & Top 10 Lists</h2>
            </div>
            <Link href="/blog" className="section-link">
              Read All Articles →
            </Link>
          </div>

          <div className="games-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="game-card" style={{ padding: "var(--spacing-lg)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{blog.icon}</div>
                <span className="game-card-category" style={{ position: "static", marginBottom: "0.5rem", width: "fit-content" }}>
                  {blog.category}
                </span>
                <h3 className="game-card-title" style={{ whiteSpace: "normal", fontSize: "1.1rem" }}>
                  {blog.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", margin: "0.5rem 0 1rem" }}>
                  {blog.excerpt}
                </p>
                <Link href={`/blog/${blog.id}`} className="game-card-download" style={{ marginTop: "auto" }}>
                  Read Article
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
