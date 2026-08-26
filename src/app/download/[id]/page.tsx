import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getGameById, getApkMirrorUrl } from "@/data/games";
import DownloadTimer from "@/components/DownloadTimer";
import { ShieldCheck, ArrowLeft, Server } from "lucide-react";

interface DownloadPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ version?: string }>;
}

export async function generateMetadata({ params, searchParams }: DownloadPageProps): Promise<Metadata> {
  const { id } = await params;
  const { version } = await searchParams;
  const game = getGameById(id);

  if (!game) {
    return { title: "Game Download Not Found | GameVault APK" };
  }

  const activeVersion = version || game.version;
  const title = `Download ${game.name} APK v${activeVersion} ${version ? "(Previous Release)" : "(Latest Version)"} — GameVault`;
  const description = `Get ${game.name} APK v${activeVersion} for Android. 100% verified safe and malware free download on GameVault.`;
  const url = `https://gamevaultinfo.com/download/${game.id}${version ? `?version=${version}` : ""}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function DownloadPage({ params, searchParams }: DownloadPageProps) {
  const { id } = await params;
  const { version } = await searchParams;
  const game = getGameById(id);

  if (!game) {
    notFound();
  }

  const isOlderVersion = Boolean(version && version !== game.version);
  const olderVersionObj = game.olderVersions?.find((ov) => ov.version === version);
  const activeVersion = version || game.version;
  const activeSize = olderVersionObj ? olderVersionObj.size : game.size;

  // Download routing:
  // 1. Custom downloadUrl if specified (owned/hosted file)
  // 2. Direct internal API route (/api/download) delivering verified APK stream
  // 3. APKMirror & Play Store as reliable non-blocked backups
  const apkMirrorUrl = getApkMirrorUrl(game, activeVersion);
  const directApiUrl = `/api/download?id=${game.id}${version ? `&version=${encodeURIComponent(version)}` : ""}`;
  const customOrDriveUrl = olderVersionObj?.downloadUrl || game.downloadUrl || directApiUrl;

  return (
    <div className="container" style={{ padding: "3rem 1.5rem", maxWidth: 800 }}>
      <Link href={`/game/${game.id}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: "2rem" }}>
        <ArrowLeft size={16} /> Back to {game.name} Details
      </Link>

      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-xl)", padding: "2.5rem", textAlign: "center" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{game.icon || "🎮"}</div>

        <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
          Downloading {game.name} APK v{activeVersion}
        </h1>

        {isOlderVersion ? (
          <span className="game-card-category" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: "1rem", backgroundColor: "rgba(0, 212, 255, 0.2)", color: "var(--accent-blue)" }}>
            <Server size={14} /> Previous Release Version
          </span>
        ) : (
          <span className="game-card-category" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: "1rem", backgroundColor: "rgba(0, 255, 136, 0.2)", color: "var(--accent-green)" }}>
            🔥 Latest Release (Verified Original APK)
          </span>
        )}

        <p style={{ color: "var(--text-tertiary)", marginBottom: "2rem" }}>
          File Size: <strong>{activeSize}</strong> | Developer: <strong>{game.developer}</strong>
        </p>

        <DownloadTimer
          downloadUrl={customOrDriveUrl}
          apkMirrorUrl={apkMirrorUrl}
          playStoreUrl={game.playStoreUrl}
          version={activeVersion}
          gameName={game.name}
          isOlderVersion={isOlderVersion}
        />

        <div className="badge-verified" style={{ margin: "1.5rem auto 0" }}>
          <ShieldCheck size={16} /> 100% Virus & Malware Free Verified by GameVault Security
        </div>
      </div>

      {/* INSTALLATION STEPS */}
      <div style={{ marginTop: "3rem", background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-xl)", padding: "2rem" }}>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "1.5rem" }}>📲 How to Install {game.name} v{activeVersion} APK</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {game.installSteps.map((step, idx) => (
            <div key={idx} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--accent-green-dim)", color: "var(--accent-green)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>
                {idx + 1}
              </div>
              <div>
                <h4 style={{ color: "var(--text-primary)", fontSize: "1rem", marginBottom: 2 }}>{step.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
