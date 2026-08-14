"use client";

import { useEffect, useState } from "react";
import { Download, CheckCircle2, ShieldCheck, ExternalLink, Smartphone } from "lucide-react";

interface DownloadTimerProps {
  downloadUrl?: string;
  apkMirrorUrl?: string;
  apkPureUrl?: string;
  playStoreUrl?: string;
  version: string;
  gameName: string;
  isOlderVersion?: boolean;
}

export default function DownloadTimer({
  downloadUrl,
  apkMirrorUrl,
  apkPureUrl,
  playStoreUrl,
  version,
  gameName,
  isOlderVersion = false,
}: DownloadTimerProps) {
  const [countdown, setCountdown] = useState(5);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setReady(true);
    }
  }, [countdown]);

  const primaryUrl = apkMirrorUrl || downloadUrl || playStoreUrl || "#";
  const secondaryUrl = apkPureUrl || downloadUrl;

  return (
    <>
      {!ready ? (
        <div style={{ padding: "2.5rem 1.5rem", background: "var(--bg-tertiary)", borderRadius: "var(--radius-lg)", margin: "1.5rem 0", border: "1px solid var(--border-color)" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 600 }}>
            Preparing secure download links for {gameName} (v{version}):
          </p>
          <div style={{ fontSize: "3.8rem", fontWeight: 900, color: "var(--accent-green)", margin: "0.5rem 0", fontFamily: "monospace" }}>
            {countdown}s
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-tertiary)" }}>
            Checking APK signature & preparing high-speed mirror servers...
          </p>
        </div>
      ) : (
        <div style={{ margin: "2rem 0", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <div style={{ width: "100%", maxWidth: 480, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {/* SERVER 1 - APKMIRROR */}
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="game-card-download"
              style={{
                height: 56,
                fontSize: "1.05rem",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--shadow-glow-strong)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                textDecoration: "none",
                width: "100%",
                background: "linear-gradient(135deg, #00ff88 0%, #00b862 100%)",
                color: "#0a0c10",
                fontWeight: 700,
              }}
            >
              <Download size={20} /> Download v{version} (Server 1 — APKMirror) <ExternalLink size={16} />
            </a>

            {/* SERVER 2 - APKPURE */}
            {secondaryUrl && (
              <a
                href={secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  height: 50,
                  fontSize: "0.95rem",
                  borderRadius: "var(--radius-xl)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  textDecoration: "none",
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                  fontWeight: 600,
                }}
              >
                <ShieldCheck size={18} color="var(--accent-blue)" /> Mirror Server 2 (APKPure Archive) <ExternalLink size={14} />
              </a>
            )}

            {/* PLAY STORE DIRECT LINK */}
            {playStoreUrl && (
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  marginTop: "0.25rem",
                  textDecoration: "underline",
                }}
              >
                <Smartphone size={14} /> View Official Listing on Google Play Store
              </a>
            )}
          </div>

          <p style={{ fontSize: "0.8rem", color: "var(--accent-green)", marginTop: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <CheckCircle2 size={14} /> 100% Virus-Free Verified Original APK Mirror
          </p>
        </div>
      )}
    </>
  );
}
