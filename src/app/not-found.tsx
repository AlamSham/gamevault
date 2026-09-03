import Link from "next/link";
import type { Metadata } from "next";
import { Home, Search, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | GameVault APK",
  description: "The page you are looking for does not exist. Browse 200+ safe, verified Android game APK downloads on GameVault.",
};

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "6rem 1.5rem", textAlign: "center", maxWidth: 640 }}>
      <div style={{ fontSize: "6rem", marginBottom: "1rem", lineHeight: 1 }}>🎮</div>

      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem" }}>
        4<span className="highlight">0</span>4
      </h1>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-secondary)" }}>
        Oops! This page doesn&apos;t exist
      </h2>

      <p style={{ marginBottom: "2.5rem", maxWidth: 460, margin: "0 auto 2.5rem" }}>
        The game or page you&apos;re looking for may have been removed, renamed, or is temporarily unavailable.
        Try searching or go back to the homepage.
      </p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link
          href="/"
          className="game-card-download"
          style={{
            height: 48,
            padding: "0 28px",
            borderRadius: "var(--radius-lg)",
            fontSize: "0.95rem",
            maxWidth: 220,
          }}
        >
          <Home size={18} /> Go to Homepage
        </Link>

        <Link
          href="/category/action"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            height: 48,
            padding: "0 28px",
            borderRadius: "var(--radius-lg)",
            fontSize: "0.95rem",
            background: "var(--bg-tertiary)",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          <Search size={18} /> Browse Games
        </Link>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.85rem",
            color: "var(--text-tertiary)",
          }}
        >
          <ArrowLeft size={14} /> Back to GameVault APK
        </Link>
      </div>
    </div>
  );
}
