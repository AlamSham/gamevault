import Link from "next/link";
import { Game } from "@/data/types";
import { Star, Download } from "lucide-react";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="game-card">
      <div className="game-card-image">
        <div
          className="game-icon-placeholder"
          style={{ backgroundColor: game.iconColor || "var(--bg-tertiary)" }}
        >
          {game.icon || "🎮"}
        </div>
        <span className="game-card-category">{game.category}</span>
      </div>

      <div className="game-card-body">
        <h3 className="game-card-title">{game.name}</h3>

        <div className="game-card-meta">
          <div className="game-card-rating">
            <Star size={14} fill="#ffd700" color="#ffd700" />
            <span>{game.rating}</span>
          </div>
          <span className="game-card-size">{game.size}</span>
        </div>

        <Link href={`/game/${game.id}`} className="game-card-download">
          <Download size={14} /> Download APK
        </Link>
      </div>
    </div>
  );
}
