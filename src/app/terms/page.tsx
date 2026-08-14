import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — GameVault APK",
  description: "Terms of service and usage policy for GameVault APK.",
  alternates: { canonical: "https://gamevaultinfo.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem", maxWidth: 800 }}>
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>Terms of Service</span>
      </nav>

      <div style={{ margin: "2rem 0" }}>
        <h1>📜 Terms of Service</h1>
        <p style={{ marginTop: "1rem", lineHeight: 1.8 }}>
          By accessing and downloading files from GameVault APK, you agree to comply with our fair-use terms. All files provided are intended for personal Android device installation and testing purposes.
        </p>
      </div>
    </div>
  );
}
