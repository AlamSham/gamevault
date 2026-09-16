import type { Metadata } from "next";
import Link from "next/link";
import { GAMES } from "@/data/games";
import { CATEGORIES } from "@/data/categories";
import GamesDirectory from "@/components/GamesDirectory";
import JsonLd from "@/components/JsonLd";
import { ShieldCheck, Library } from "lucide-react";

export const metadata: Metadata = {
  title: "All Android Games & Apps A-Z Directory (2026) | GameVault APK",
  description:
    `Explore the complete A-Z catalog of ${GAMES.length}+ verified safe Android APK downloads. Fast direct download links, malware-free guarantee, historical versions & system requirements.`,
  alternates: {
    canonical: "https://gamevaultinfo.com/all-games",
  },
  openGraph: {
    title: "All Android Games & Apps A-Z Directory (2026) | GameVault APK",
    description:
      `Explore the complete A-Z catalog of ${GAMES.length}+ verified safe Android APK downloads. Free high-speed direct downloads, malware-free guarantee.`,
    url: "https://gamevaultinfo.com/all-games",
    siteName: "GameVault APK",
    images: [
      {
        url: "https://gamevaultinfo.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GameVault APK All Games Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Android Games & Apps A-Z Directory (2026)",
    description: `Browse ${GAMES.length}+ verified safe Android game APKs with direct downloads.`,
    images: ["https://gamevaultinfo.com/images/og-image.jpg"],
  },
};

export default function AllGamesPage() {
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
        name: "All Games A-Z",
        item: "https://gamevaultinfo.com/all-games",
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Complete Android Games & Apps Directory",
    numberOfItems: GAMES.length,
    itemListElement: GAMES.slice(0, 50).map((game, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: game.name,
      url: `https://gamevaultinfo.com/game/${game.id}`,
    })),
  };

  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem" }}>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />

      {/* BREADCRUMB */}
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>All Games A-Z Directory</span>
      </nav>

      {/* HEADER HERO */}
      <div style={{ margin: "2rem 0 1.5rem" }}>
        <div className="badge-verified" style={{ width: "fit-content", marginBottom: "0.75rem" }}>
          <ShieldCheck size={16} /> 100% Virus-Free & Signature Verified Catalog
        </div>
        <h1 style={{ fontSize: "2.2rem", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <Library size={32} color="var(--accent-green)" /> Complete Android Games &amp; Apps Directory
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginTop: "0.5rem", maxWidth: 850, lineHeight: 1.7 }}>
          Browse our entire library of <strong>{GAMES.length} verified Android games and utility apps</strong>. Filter alphabetically from A to Z, discover trending titles, or sort by downloads, rating, and file size. All APK binaries are verified against malware and provide clean direct download servers.
        </p>
      </div>

      {/* DIRECTORY COMPONENT */}
      <GamesDirectory games={GAMES} categories={CATEGORIES} />

      {/* SEO GUIDE & TRUST CONTENT */}
      <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border-color)", paddingTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
          🛡️ Why Download Android APKs from GameVault?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "1.25rem" }}>
          <div style={{ background: "var(--bg-card)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)" }}>
            <h3 style={{ fontSize: "1.1rem", color: "var(--accent-green)", marginBottom: "0.5rem" }}>
              ✓ Triple-Engine Malware Verification
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Every APK installer listed in this directory undergoes multi-engine hash verification (VirusTotal, Play Protect SHA-256 signature match) before indexing. Zero bundled adware, spyware, or modified trojans.
            </p>
          </div>

          <div style={{ background: "var(--bg-card)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)" }}>
            <h3 style={{ fontSize: "1.1rem", color: "var(--accent-blue)", marginBottom: "0.5rem" }}>
              ⚡ High-Speed Direct Download Mirrors
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Unlike third-party sites loaded with aggressive survey popups and slow throttling, GameVault delivers direct clean download links with transparent file sizes and zero deceptive buttons.
            </p>
          </div>

          <div style={{ background: "var(--bg-card)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)" }}>
            <h3 style={{ fontSize: "1.1rem", color: "var(--accent-yellow)", marginBottom: "0.5rem" }}>
              📦 Complete Historical Version Archive
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Experiencing frame lag or crashes with the latest game patch on an older phone? Access verified previous release versions for all popular games with system requirements for Android 5.0 through Android 15.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
