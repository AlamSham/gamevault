import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Copyright Policy — GameVault APK",
  description: "DMCA copyright compliance policy for GameVault APK.",
  alternates: { canonical: "https://gamevaultinfo.com/dmca" },
};

export default function DmcaPage() {
  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem", maxWidth: 800 }}>
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>DMCA Policy</span>
      </nav>

      <div style={{ margin: "2rem 0" }}>
        <h1>⚖️ DMCA Copyright Policy</h1>
        <p style={{ marginTop: "1rem", lineHeight: 1.8 }}>
          GameVault APK respects the intellectual property rights of software developers and copyright holders. If you believe your copyrighted material is hosted without permission, please email a formal DMCA takedown notice to:
        </p>
        <div style={{ background: "var(--bg-card)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)", marginTop: "1.5rem" }}>
          <p><strong>Copyright Email:</strong> dmca@gamevaultinfo.com</p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--text-tertiary)" }}>We process valid DMCA requests within 24-48 business hours.</p>
        </div>
      </div>
    </div>
  );
}
