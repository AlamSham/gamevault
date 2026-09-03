import { redirect, permanentRedirect } from "next/navigation";

interface GameIndexPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function GameIndexPage({ searchParams }: GameIndexPageProps) {
  const { id } = await searchParams;

  if (id) {
    // 301 Permanent Redirect for /game?id=xxx -> /game/xxx
    permanentRedirect(`/game/${encodeURIComponent(id)}`);
  }

  // Fallback redirect to homepage if no id is provided
  redirect("/");
}
