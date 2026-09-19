import Link from "next/link";
import Image from "next/image";
import { Game } from "@/data/types";
import { Star, Download } from "lucide-react";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="game-card" role="article" aria-label={`${game.name} — ${game.category} game, rated ${game.rating}/5, size ${game.size}`}>
      <div className="game-card-image">
        <div className="game-icon-wrapper">
          <Image
            src={`/images/games/${game.id}.webp`}
            alt={`${game.name} official icon`}
            width={96}
            height={96}
            className="game-icon-img"
            loading="lazy"
            unoptimized
          />
        </div>
        <span className="game-card-category">{game.category}</span>
      </div>

      <div className="game-card-body">
        <h3 className="game-card-title">{game.name}</h3>

        <div className="game-card-meta">
          <div className="game-card-rating">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <span>{game.rating}</span>
          </div>
          <span className="game-card-size">{game.size}</span>
        </div>

        <Link href={`/game/${game.id}`} prefetch={false} className="game-card-download">
          <Download size={14} /> Download APK
        </Link>
      </div>
    </div>
  );
}

