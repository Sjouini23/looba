export type GameCategory = "Guess" | "Rate" | "Draw" | "Story";

export interface Player {
  id: string;
  name: string;
  isHost?: boolean;
  ready?: boolean;
  score: number;
  badge?: string;
}

export interface GameMeta {
  id: string;
  name: string;
  category: GameCategory;
  description: string;
  durationSec: number;
  mood: "competitive" | "chaotic" | "social";
  playable: boolean;
}

export interface CategoryRushRound {
  id: string;
  pack: string;
  prompt: string;
  answers: string[];
}

export interface RateItItem {
  id: string;
  pack: string;
  title: string;
  subtitle: string;
  kind: "outfit" | "food" | "cafe" | "vibe";
}
