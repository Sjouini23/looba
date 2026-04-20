export type GameCategory = "Rate" | "Guess" | "Category" | "Draw" | "Story";

export interface Player {
  id: string;
  name: string;
  isHost?: boolean;
  ready?: boolean;
  mood?: "🔥" | "😂" | "😌" | "🫖";
}

export interface GameMeta {
  id: string;
  name: string;
  category: GameCategory;
  description: string;
  durationSec: number;
  mood: "social" | "chaotic" | "debate";
  playable: boolean;
}

export interface VisualCard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  vibeLabel: string;
  era?: string;
  reaction?: string;
  icon: string;
  gradient: string;
  accent: "food" | "media" | "places" | "vibes";
}

export interface GuessPrompt {
  id: string;
  text: string;
  type: "pick-one" | "predict-score";
  options?: string[];
  cardId?: string;
}

export interface ChaosCategory {
  id: string;
  pack: string;
  prompt: string;
  acceptedAnswers: string[];
}
