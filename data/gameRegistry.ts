import { GameMeta } from "@/types/game";

export const gameRegistry: GameMeta[] = [
  {
    id: "drag-rate",
    name: "Drag & Rate",
    category: "Rate",
    description: "Dragi w 7ot les cartes dans les tiers, ensuite reveal du groupe.",
    durationSec: 70,
    mood: "social",
    playable: true
  },
  {
    id: "guess-group",
    name: "Guess El Group",
    category: "Guess",
    description: "Chnowa l groupe bech y9oul? Predict puis compare.",
    durationSec: 45,
    mood: "debate",
    playable: true
  },
  {
    id: "category-chaos",
    name: "Category Chaos Tunisia",
    category: "Category",
    description: "Round rapide: kteb barcha réponses tounsia avant timer.",
    durationSec: 50,
    mood: "chaotic",
    playable: true
  },
  {
    id: "draw-soon",
    name: "Draw Relay",
    category: "Draw",
    description: "Version dessin collaborative, bientôt.",
    durationSec: 80,
    mood: "chaotic",
    playable: false
  },
  {
    id: "story-soon",
    name: "Story Jwou3",
    category: "Story",
    description: "Story game b style tounsi, bientôt.",
    durationSec: 75,
    mood: "social",
    playable: false
  }
];
