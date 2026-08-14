import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — GameVault APK",
  description: "Get in touch with the GameVault APK support team.",
  alternates: { canonical: "https://gamevaultinfo.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem", maxWidth: 800 }}>
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span style={{ color: "var(--text-primary)" }}>Contact Us</span>
      </nav>

      <div style={{ margin: "2rem 0" }}>
        <h1>📬 Contact Us</h1>
        <p style={{ marginTop: "1rem", lineHeight: 1.8 }}>
          Have questions, feedback, or need help with a game download? Feel free to reach out to our support team at:
        </p>
        <div style={{ background: "var(--bg-card)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)", marginTop: "1.5rem" }}>
          <p><strong>Email:</strong> support@gamevaultinfo.com</p>
          <p><strong>Response Time:</strong> Within 24 hours</p>
        </div>
      </div>
    </div>
  );
}
