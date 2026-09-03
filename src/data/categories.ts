import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    "id": "action",
    "name": "Action",
    "icon": "⚔️",
    "description": "High-octane action games with intense gameplay and combat",
    "count": 65
  },
  {
    "id": "racing",
    "name": "Racing",
    "icon": "🏎️",
    "description": "Speed through tracks in the best racing games for Android",
    "count": 13
  },
  {
    "id": "puzzle",
    "name": "Puzzle",
    "icon": "🧩",
    "description": "Brain-teasing puzzle games to challenge your mind",
    "count": 27
  },
  {
    "id": "strategy",
    "name": "Strategy",
    "icon": "🏰",
    "description": "Build, plan, and conquer with strategy games",
    "count": 12
  },
  {
    "id": "sports",
    "name": "Sports",
    "icon": "⚽",
    "description": "Cricket, football, and more sports games",
    "count": 15
  },
  {
    "id": "casual",
    "name": "Casual",
    "icon": "🎯",
    "description": "Easy to play, hard to put down casual games",
    "count": 9
  },
  {
    "id": "arcade",
    "name": "Arcade",
    "icon": "👾",
    "description": "Classic arcade-style games with endless fun",
    "count": 29
  },
  {
    "id": "rpg",
    "name": "RPG",
    "icon": "🗡️",
    "description": "Epic role-playing games with deep storylines",
    "count": 12
  },
  {
    "id": "simulation",
    "name": "Simulation",
    "icon": "🌍",
    "description": "Simulate real-world experiences on your phone",
    "count": 20
  },
  {
    "id": "adventure",
    "name": "Adventure",
    "icon": "🗺️",
    "description": "Explore vast worlds in adventure games",
    "count": 9
  },
  {
    "id": "apps",
    "name": "Apps & Tools",
    "icon": "📱",
    "description": "Top banned, utility, video editing & photo apps for Android",
    "count": 20
  },
  {
    "id": "japan-kr",
    "name": "Japan & Korea Exclusives (日本・韓国)",
    "icon": "🌸",
    "description": "Top region-locked Japanese & Korean anime, gacha, and RPG games in native Japanese (日本語) and Korean (한국어)",
    "count": 10
  }
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id);
}