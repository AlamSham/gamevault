import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GameVault APK",
  description: "Privacy policy and data protection guidelines for GameVault APK visitors.",
  alternates: { canonical: "https://gamevaultinfo.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem", maxWidth: 800 }}>
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>Privacy Policy</span>
      </nav>

      <div style={{ margin: "2rem 0" }}>
        <h1>🔒 Privacy Policy</h1>
        <p style={{ marginTop: "1rem", lineHeight: 1.8 }}>
          Your privacy is important to us. GameVault APK does not collect personal user data, passwords, or device files. We use standard web analytics to measure page visits and site performance.
        </p>
      </div>
    </div>
  );
}
