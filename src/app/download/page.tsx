import { redirect, permanentRedirect } from "next/navigation";

interface DownloadIndexPageProps {
  searchParams: Promise<{ id?: string; version?: string }>;
}

export default async function DownloadIndexPage({ searchParams }: DownloadIndexPageProps) {
  const { id, version } = await searchParams;

  if (id) {
    const targetUrl = version
      ? `/download/${encodeURIComponent(id)}?version=${encodeURIComponent(version)}`
      : `/download/${encodeURIComponent(id)}`;
    permanentRedirect(targetUrl);
  }

  redirect("/");
}
