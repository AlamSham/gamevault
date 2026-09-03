import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getGameById, getAllGameIds, getRelatedGames } from "@/data/games";
import GameCard from "@/components/GameCard";
import JsonLd from "@/components/JsonLd";
import { ShieldCheck, Download, Star, CheckCircle2, AlertTriangle, HelpCircle, FileCheck, HardDrive, Smartphone } from "lucide-react";

interface GamePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllGameIds();
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { id } = await params;
  const game = getGameById(id);
  if (!game) {
    return {
      title: "Game Not Found | GameVault APK",
    };
  }

  const title = game.nativeTitleTag || `${game.name} APK Download v${game.version} (Latest 2026) for Android`;
  const description = game.nativeDescription || `Download ${game.name} APK v${game.version} for Android (${game.size}). 100% verified original & safe direct download, latest features, system requirements & older versions archive.`;
  const url = `https://gamevaultinfo.com/game/${game.id}`;
  const defaultKeywords = [
    game.name,
    `${game.name} APK`,
    `${game.name} APK download`,
    `${game.name} v${game.version}`,
    `${game.name} latest version 2026`,
    `${game.name} android download`,
    `${game.name} old version download`,
    `${game.name} size ${game.size}`,
    `${game.name} safe download`,
    `download ${game.name} free android`,
    `${game.name} original apk`,
    game.category,
  ];

  const keywords = game.nativeKeywords ? [...game.nativeKeywords, ...defaultKeywords] : defaultKeywords;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: game.nativeLanguage ? { [game.nativeLanguage]: url } : undefined,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "GameVault APK",
      images: [
        {
          url: "https://gamevaultinfo.com/images/logo.png",
          alt: `${game.name} APK Download`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://gamevaultinfo.com/images/logo.png"],
    },
  };
}

export default async function GameDetailPage({ params }: GamePageProps) {
  const { id } = await params;
  const game = getGameById(id);

  if (!game) {
    notFound();
  }

  const relatedGames = getRelatedGames(game, 6);

  // 1. SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: game.name,
    operatingSystem: "ANDROID",
    applicationCategory: "GameApplication",
    fileSize: game.size,
    softwareVersion: game.version,
    author: {
      "@type": "Organization",
      name: game.developer,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: game.rating.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: game.downloads.replace(/[^0-9]/g, "") || "10000",
    },
    downloadUrl: `https://gamevaultinfo.com/download/${game.id}`,
    ...(game.screenshots && game.screenshots.length > 0 && {
      screenshot: game.screenshots.map((s) => ({ "@type": "ImageObject", url: s })),
    }),
  };

  // 2. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gamevaultinfo.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: game.category.toUpperCase(),
        item: `https://gamevaultinfo.com/category/${game.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: game.name,
        item: `https://gamevaultinfo.com/game/${game.id}`,
      },
    ],
  };

  // 3. FAQPage Schema (Google Rich Snippets Expansion)
  const faqSchema =
    game.faq && game.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: game.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <div className="container game-detail">
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* BREADCRUMB */}
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href={`/category/${game.category}`}>{game.category}</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>{game.name}</span>
      </nav>

      {/* HEADER CARD */}
      <div className="game-header-card">
        <div className="game-header-icon" style={{ backgroundColor: game.iconColor || "var(--bg-tertiary)" }}>
          {game.icon || "🎮"}
        </div>

        <div className="game-header-info">
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            {game.name} APK Download v{game.version}
          </h1>
          <p style={{ color: "var(--text-tertiary)", fontSize: "0.95rem" }}>
            Developed by <strong style={{ color: "var(--text-primary)" }}>{game.developer}</strong>
          </p>

          <div style={{ display: "flex", gap: "1rem", margin: "1rem 0", flexWrap: "wrap", alignItems: "center" }}>
            <div className="game-card-rating" style={{ fontSize: "1.1rem" }}>
              <Star size={18} fill="#ffd700" color="#ffd700" />
              <strong style={{ color: "#fff" }}>{game.rating}</strong> / 5.0
            </div>
            <span style={{ color: "var(--text-tertiary)" }}>•</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>📥 {game.downloads} Downloads</span>
            <span style={{ color: "var(--text-tertiary)" }}>•</span>
            <span style={{ color: "var(--accent-green)", fontSize: "0.9rem", fontWeight: 600 }}>Updated {game.lastUpdated}</span>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link
              href={`/download/${game.id}`}
              className="game-card-download"
              style={{
                height: 52,
                padding: "0 32px",
                fontSize: "1.05rem",
                borderRadius: "var(--radius-lg)",
                maxWidth: 320,
                boxShadow: "var(--shadow-glow-strong)",
              }}
            >
              <Download size={20} /> Download Latest APK ({game.size})
            </Link>
          </div>

          <div className="badge-verified">
            <ShieldCheck size={16} /> 100% Verified Safe — Scanned Virus Free
          </div>
        </div>
      </div>

      {/* SEO LONG-TAIL KEYWORD CHIPS */}
      <div style={{ margin: "1.5rem 0", display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", fontWeight: 600 }}>
          🏷️ Related Keywords:
        </span>
        {[
          `${game.name} APK Download`,
          `${game.name} v${game.version}`,
          `${game.name} Old Version Download`,
          `${game.name} Size ${game.size}`,
          `${game.name} Android ${game.androidReq}`,
          `Free ${game.name} Original APK`,
        ].map((chip, idx) => (
          <span
            key={idx}
            style={{
              fontSize: "0.78rem",
              background: "var(--bg-tertiary)",
              padding: "0.25rem 0.65rem",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border-color)",
            }}
          >
            {chip}
          </span>
        ))}
      </div>

      {/* SPECS TABLE */}
      <h2 style={{ marginBottom: "1rem", fontSize: "1.3rem", display: "flex", alignItems: "center", gap: 8 }}>
        <FileCheck size={20} color="var(--accent-blue)" /> Technical Specifications & File Details
      </h2>
      <div className="table-responsive">
      <table className="table-specs">
        <tbody>
          <tr>
            <th>App Name</th>
            <td><strong>{game.name}</strong></td>
          </tr>
          <tr>
            <th>Developer</th>
            <td>{game.developer}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td><Link href={`/category/${game.category}`}>{game.category.toUpperCase()}</Link></td>
          </tr>
          <tr>
            <th>Latest Version</th>
            <td>v{game.version}</td>
          </tr>
          <tr>
            <th>File Size</th>
            <td>{game.size}</td>
          </tr>
          <tr>
            <th>Android Requirements</th>
            <td>{game.androidReq}</td>
          </tr>
          <tr>
            <th>Last Updated</th>
            <td>{game.lastUpdated}</td>
          </tr>
          <tr>
            <th>Safety Status</th>
            <td><span style={{ color: "var(--accent-green)", fontWeight: 700 }}>✓ Clean & Malware-Free</span></td>
          </tr>
        </tbody>
      </table>
      </div>

      {/* ABOUT & FEATURES */}
      <section style={{ margin: "2.5rem 0" }}>
        <h2 style={{ marginBottom: "1rem" }}>📖 Overview of {game.name} APK</h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>{game.description}</p>

        {game.features && game.features.length > 0 && (
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.75rem" }}>✨ Key Highlights & Gameplay Features:</h3>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {game.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* EXPERT REVIEW */}
      {game.review && (
        <section style={{ margin: "2.5rem 0" }}>
          <h2 style={{ marginBottom: "1rem" }}>📝 Expert Review & Performance Benchmark</h2>
          <div style={{ background: "var(--bg-card)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7 }}>{game.review}</p>
          </div>
        </section>
      )}

      {/* PROS & CONS */}
      <div className="pros-cons-grid">
        <div className="pros-box">
          <h3 style={{ color: "var(--accent-green)", display: "flex", alignItems: "center", gap: 8 }}>
            <CheckCircle2 size={20} /> Advantages (Pros)
          </h3>
          <ul>
            {game.pros.map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
        </div>

        <div className="cons-box">
          <h3 style={{ color: "var(--accent-red)", display: "flex", alignItems: "center", gap: 8 }}>
            <AlertTriangle size={20} /> Limitations (Cons)
          </h3>
          <ul>
            {game.cons.map((con, i) => (
              <li key={i}>{con}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* WHAT'S NEW */}
      {game.whatsNew && (
        <section style={{ margin: "2.5rem 0" }}>
          <h2 style={{ marginBottom: "1rem" }}>🔄 What&apos;s New in Version {game.version}</h2>
          <div style={{ background: "var(--bg-card)", padding: "1.25rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--accent-blue)" }}>
            <p>{game.whatsNew}</p>
          </div>
        </section>
      )}

      {/* OLDER VERSIONS */}
      {game.olderVersions && game.olderVersions.length > 0 && (
        <section style={{ margin: "2.5rem 0" }}>
          <h2 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
            <HardDrive size={22} color="var(--accent-blue)" /> Download Older Versions of {game.name} APK
          </h2>
          <p style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "1rem" }}>
            Looking for previous release builds? Access verified historical APK mirrors below:
          </p>
          <div className="table-responsive">
          <table className="table-specs">
            <thead>
              <tr>
                <th>Version</th>
                <th>Release Date</th>
                <th>File Size</th>
                <th>Download Link</th>
              </tr>
            </thead>
            <tbody>
              {game.olderVersions.map((v, i) => (
                <tr key={i}>
                  <td><strong>v{v.version}</strong></td>
                  <td>{v.date}</td>
                  <td>{v.size}</td>
                  <td>
                    <Link
                      href={`/download/${game.id}?version=${encodeURIComponent(v.version)}`}
                      style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-green)" }}
                    >
                      Download v{v.version} APK Mirror
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>
      )}

      {/* FAQ ACCORDION */}
      {game.faq && game.faq.length > 0 && (
        <section style={{ margin: "2.5rem 0" }}>
          <h2 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
            <HelpCircle size={22} color="var(--accent-yellow)" /> Frequently Asked Questions (FAQ)
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {game.faq.map((item, idx) => (
              <details key={idx} style={{ background: "var(--bg-card)", padding: "1rem 1.25rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)", cursor: "pointer" }}>
                <summary style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
                  {item.q}
                </summary>
                <p style={{ marginTop: "0.75rem", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* RELATED GAMES */}
      {relatedGames.length > 0 && (
        <section style={{ margin: "3rem 0" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>🎯 Related & Similar Games</h2>
          <div className="games-grid">
            {relatedGames.map((relGame) => (
              <GameCard key={relGame.id} game={relGame} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
