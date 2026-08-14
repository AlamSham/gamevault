import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    "id": "action",
    "name": "Action",
    "icon": "⚔️",
    "description": "High-octane action games with intense gameplay and combat",
    "count": 35
  },
  {
    "id": "racing",
    "name": "Racing",
    "icon": "🏎️",
    "description": "Speed through tracks in the best racing games for Android",
    "count": 20
  },
  {
    "id": "puzzle",
    "name": "Puzzle",
    "icon": "🧩",
    "description": "Brain-teasing puzzle games to challenge your mind",
    "count": 25
  },
  {
    "id": "strategy",
    "name": "Strategy",
    "icon": "🏰",
    "description": "Build, plan, and conquer with strategy games",
    "count": 18
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
    "count": 30
  },
  {
    "id": "arcade",
    "name": "Arcade",
    "icon": "👾",
    "description": "Classic arcade-style games with endless fun",
    "count": 22
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
    "count": 10
  },
  {
    "id": "adventure",
    "name": "Adventure",
    "icon": "🗺️",
    "description": "Explore vast worlds in adventure games",
    "count": 15
  }
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id);
}