import { GameMeta } from "@/types/game";

export const gameRegistry: GameMeta[] = [
  {
    id: "category-rush",
    name: "Category Rush",
    category: "Guess",
    description: "Type rapid-fire answers before the clock runs out.",
    durationSec: 45,
    mood: "competitive",
    playable: true
  },
  {
    id: "rate-it",
    name: "Rate It",
    category: "Rate",
    description: "Score the vibe, then see if your taste matches the group.",
    durationSec: 35,
    mood: "social",
    playable: true
  },
  {
    id: "Sketch Relay",
    name: "Sketch Relay",
    category: "Draw",
    description: "Pass the drawing and hope the final guess survives.",
    durationSec: 60,
    mood: "chaotic",
    playable: false
  },
  {
    id: "Story Stack",
    name: "Story Stack",
    category: "Story",
    description: "Build absurd short stories sentence by sentence.",
    durationSec: 75,
    mood: "social",
    playable: false
  }
];
