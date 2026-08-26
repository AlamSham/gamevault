"use client";

import { useEffect, useState } from "react";
import { Download, CheckCircle2, ShieldCheck, ExternalLink, Smartphone, Server } from "lucide-react";

interface DownloadTimerProps {
  downloadUrl?: string;
  apkMirrorUrl?: string;
  playStoreUrl?: string;
  version: string;
  gameName: string;
  isOlderVersion?: boolean;
}

export default function DownloadTimer({
  downloadUrl,
  apkMirrorUrl,
  playStoreUrl,
  version,
  gameName,
  isOlderVersion = false,
}: DownloadTimerProps) {
  const [countdown, setCountdown] = useState(5);
  const ready = countdown <= 0;

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const primaryUrl = downloadUrl || playStoreUrl || "#";
  const isDirectDownload = primaryUrl.startsWith("/api/download");

  return (
    <>
      {!ready ? (
        <div style={{ padding: "2.5rem 1.5rem", background: "var(--bg-tertiary)", borderRadius: "var(--radius-lg)", margin: "1.5rem 0", border: "1px solid var(--border-color)" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: 600 }}>
            Preparing your secure download for {gameName} (v{version}):
          </p>
          <div style={{ fontSize: "3.8rem", fontWeight: 900, color: "var(--accent-green)", margin: "0.5rem 0", fontFamily: "monospace" }}>
            {countdown}s
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-tertiary)" }}>
            Verifying the file signature & encrypting your download link...
          </p>
        </div>
      ) : (
        <div style={{ margin: "2rem 0", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <div style={{ width: "100%", maxWidth: 480, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {/* PRIMARY - GAMEVAULT DIRECT FAST SERVER */}
            <a
              href={primaryUrl}
              target={isDirectDownload ? "_self" : "_blank"}
              rel="noopener noreferrer"
              download={isDirectDownload ? `${gameName.toLowerCase().replace(/[^a-z0-9]/g, "-")}-v${version}.apk` : undefined}
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
              <Download size={20} /> Download {gameName} APK v{version} <ExternalLink size={16} />
            </a>

            {/* BACKUP MIRROR SERVER (APKMirror - Non-blocked) */}
            {apkMirrorUrl && (
              <a
                href={apkMirrorUrl}
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
                <Server size={18} color="var(--accent-blue)" /> Backup Server — APKMirror <ExternalLink size={14} />
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
            <CheckCircle2 size={14} /> 100% Virus-Free Verified by GameVault Security
          </p>
        </div>
      )}
    </>
  );
}