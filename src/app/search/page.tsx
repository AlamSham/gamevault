"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchGames } from "@/data/games";
import GameCard from "@/components/GameCard";
import { Search } from "lucide-react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchGames(query);

  return (
    <div>
      <div style={{ margin: "2rem 0 3rem" }}>
        <h1 style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
          <Search size={28} /> Search Results for &quot;{query}&quot;
        </h1>
        <p style={{ marginTop: "0.25rem" }}>
          Found {results.length} games matching your keyword.
        </p>
      </div>

      {results.length > 0 ? (
        <div className="games-grid">
          {results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "4rem 0" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
          <h3>No games found for &quot;{query}&quot;</h3>
          <p style={{ marginTop: "0.5rem" }}>
            Try searching for generic terms like {`"Subway"`}, {`"Fire"`}, {`"Racing"`}, {`"Strategy"`}, {`"Cricket"`}, or {`"Minecraft"`}.
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem" }}>
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span>Search</span>
      </nav>

      <Suspense fallback={<p style={{ color: "var(--text-tertiary)", marginTop: "2rem" }}>Loading search results...</p>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
