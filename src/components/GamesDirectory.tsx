"use client";

import { useState, useMemo } from "react";
import { Game } from "@/data/types";
import { Category } from "@/data/types";
import GameCard from "./GameCard";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

interface GamesDirectoryProps {
  games: Game[];
  categories: Category[];
}

const ALPHABETS = ["ALL", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "#"];

export default function GamesDirectory({ games, categories }: GamesDirectoryProps) {
  const [selectedLetter, setSelectedLetter] = useState<string>("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"popularity" | "name" | "rating" | "size">("popularity");

  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = game.name.toLowerCase().includes(q);
          const matchDev = game.developer.toLowerCase().includes(q);
          const matchCategory = game.category.toLowerCase().includes(q);
          if (!matchName && !matchDev && !matchCategory) return false;
        }

        // Category filter
        if (selectedCategory !== "ALL" && game.category !== selectedCategory) {
          return false;
        }

        // Alphabet filter
        if (selectedLetter !== "ALL") {
          const firstChar = game.name.trim().charAt(0).toUpperCase();
          if (selectedLetter === "#") {
            if (/[A-Z]/.test(firstChar)) return false;
          } else {
            if (firstChar !== selectedLetter) return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === "rating") {
          return b.rating - a.rating;
        }
        if (sortBy === "size") {
          const parseSize = (s: string) => {
            const num = parseFloat(s) || 0;
            return s.toUpperCase().includes("GB") ? num * 1024 : num;
          };
          return parseSize(b.size) - parseSize(a.size);
        }
        // default popularity by downloads
        const parseDownloads = (d: string) => {
          const num = parseFloat(d) || 0;
          if (d.includes("B")) return num * 1000;
          if (d.includes("M")) return num;
          if (d.includes("K")) return num / 1000;
          return num;
        };
        return parseDownloads(b.downloads) - parseDownloads(a.downloads);
      });
  }, [games, selectedLetter, selectedCategory, searchQuery, sortBy]);

  return (
    <div style={{ marginTop: "1.5rem" }}>
      {/* SEARCH & CONTROLS BAR */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--bg-card)",
          padding: "1.25rem",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-color)",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ position: "relative", flex: "1 1 280px", maxWidth: 450 }}>
          <Search
            size={18}
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-tertiary)",
            }}
          />
          <input
            type="text"
            placeholder="Search within directory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px 10px 40px",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-color)",
              background: "var(--bg-primary)",
              color: "var(--text-primary)",
              fontSize: "0.95rem",
              outline: "none",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            <SlidersHorizontal size={16} /> Sort by:
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "popularity" | "name" | "rating" | "size")}
            style={{
              padding: "8px 14px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-color)",
              background: "var(--bg-primary)",
              color: "var(--text-primary)",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            <option value="popularity">Most Popular (Downloads)</option>
            <option value="name">Alphabetical (A-Z)</option>
            <option value="rating">Top Rated (Stars)</option>
            <option value="size">File Size (Largest First)</option>
          </select>
        </div>
      </div>

      {/* ALPHABETICAL FILTER BAR */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          background: "var(--bg-card)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-color)",
          marginBottom: "1.5rem",
        }}
      >
        {ALPHABETS.map((letter) => {
          const isActive = selectedLetter === letter;
          return (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              style={{
                minWidth: 32,
                height: 32,
                padding: "0 8px",
                borderRadius: "var(--radius-sm)",
                border: isActive ? "1px solid var(--accent-green)" : "1px solid var(--border-color)",
                background: isActive ? "var(--accent-green)" : "var(--bg-primary)",
                color: isActive ? "#000000" : "var(--text-primary)",
                fontWeight: isActive ? 700 : 500,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* CATEGORY FILTER PILLS */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "8px",
          marginBottom: "1.5rem",
          scrollbarWidth: "none",
        }}
      >
        <button
          onClick={() => setSelectedCategory("ALL")}
          style={{
            padding: "6px 14px",
            borderRadius: "var(--radius-full)",
            border: selectedCategory === "ALL" ? "1px solid var(--accent-green)" : "1px solid var(--border-color)",
            background: selectedCategory === "ALL" ? "var(--accent-green)" : "var(--bg-card)",
            color: selectedCategory === "ALL" ? "#000000" : "var(--text-secondary)",
            fontWeight: 600,
            fontSize: "0.85rem",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          All Categories ({games.length})
        </button>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = games.filter((g) => g.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                border: isActive ? "1px solid var(--accent-green)" : "1px solid var(--border-color)",
                background: isActive ? "var(--accent-green)" : "var(--bg-card)",
                color: isActive ? "#000000" : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "0.85rem",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              {cat.icon} {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* RESULTS COUNT & STATUS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
          color: "var(--text-tertiary)",
          fontSize: "0.9rem",
        }}
      >
        <span>
          Showing <strong style={{ color: "var(--text-primary)" }}>{filteredGames.length}</strong> of {games.length} games
          {selectedLetter !== "ALL" && ` starting with "${selectedLetter}"`}
          {selectedCategory !== "ALL" && ` in ${selectedCategory}`}
        </span>
        {(selectedLetter !== "ALL" || selectedCategory !== "ALL" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedLetter("ALL");
              setSelectedCategory("ALL");
              setSearchQuery("");
            }}
            style={{
              background: "none",
              border: "none",
              color: "var(--accent-green)",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* GAMES GRID */}
      {filteredGames.length > 0 ? (
        <div className="games-grid">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "4rem 1rem",
            background: "var(--bg-card)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-color)",
          }}
        >
          <Sparkles size={36} color="var(--accent-green)" style={{ marginBottom: "1rem" }} />
          <h3>No games found matching your filters</h3>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Try selecting a different letter or clearing your search query.
          </p>
          <button
            onClick={() => {
              setSelectedLetter("ALL");
              setSelectedCategory("ALL");
              setSearchQuery("");
            }}
            style={{
              marginTop: "1.25rem",
              background: "var(--accent-green)",
              color: "#000",
              fontWeight: 700,
              padding: "8px 20px",
              borderRadius: "var(--radius-lg)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Show All Games
          </button>
        </div>
      )}
    </div>
  );
}
