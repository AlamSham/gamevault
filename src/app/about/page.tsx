import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — GameVault APK",
  description: "Learn about GameVault APK, your trusted platform for safe, verified Android game downloads.",
  alternates: { canonical: "https://gamevaultinfo.com/about" },
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem", maxWidth: 800 }}>
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>About Us</span>
      </nav>

      <div style={{ margin: "2rem 0" }}>
        <h1>ℹ️ About GameVault APK</h1>
        <p style={{ marginTop: "1rem", lineHeight: 1.8 }}>
          GameVault APK is a premier mobile gaming portal dedicated to providing Android gamers with 100% safe, verified, and high-speed APK file downloads.
        </p>

        <h2 style={{ marginTop: "2rem", fontSize: "1.3rem" }}>🛡️ Our Safety Commitment</h2>
        <p style={{ marginTop: "0.5rem", lineHeight: 1.8 }}>
          Every APK file available on GameVault undergoes rigorous antivirus scanning and digital signature checks against official Google Play Store releases. We guarantee no malware, spyware, or modified malicious packages.
        </p>
      </div>
    </div>
  );
}
