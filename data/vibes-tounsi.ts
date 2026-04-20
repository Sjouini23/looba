import { GuessPrompt, VisualCard } from "@/types/game";

export const vibesTounsiCards: VisualCard[] = [
  { id: "v1", title: "Casual café fit", subtitle: "Jean, sneakers, lunettes, clean", category: "outfits", tags: ["city-core", "chill", "daily"], vibeLabel: "Yemchi barcha", icon: "🧢", gradient: "from-cyan-300 to-blue-400", accent: "vibes" },
  { id: "v2", title: "Wedding guest summer", subtitle: "Coloré, classy, ready lil 3ers", category: "wedding", tags: ["classy", "summer", "family"], vibeLabel: "Top", icon: "💃", gradient: "from-rose-300 to-orange-400", accent: "vibes" },
  { id: "v3", title: "Rooftop dinner look", subtitle: "Minimal chic + gold details", category: "outfits", tags: ["date-core", "night", "style"], vibeLabel: "Mriguel", icon: "🌙", gradient: "from-violet-400 to-indigo-500", accent: "vibes" },
  { id: "v4", title: "Ramadan table vibe", subtitle: "Hrira, brik, dattes, famille", category: "ramadan", tags: ["ramadan", "family", "nostalgie"], vibeLabel: "Dar tounsia", icon: "🌙", gradient: "from-amber-300 to-red-400", accent: "vibes" },
  { id: "v5", title: "Dar jdoud salon", subtitle: "Tapis, napperon, TV en fond", category: "daily-life", tags: ["nostalgie", "home", "family"], vibeLabel: "Hadhika nostalgie", icon: "🛋️", gradient: "from-lime-300 to-emerald-400", accent: "vibes" },
  { id: "v6", title: "Beach picnic mood", subtitle: "Fruits, speaker, jeux de cartes", category: "beach-day", tags: ["summer", "group-friendly", "beach-core"], vibeLabel: "Sif fi tounes", icon: "🏝️", gradient: "from-sky-300 to-teal-400", accent: "vibes" },
  { id: "v7", title: "9a3da sbeh fi balcon", subtitle: "Thé, soleil, calme avant chaos", category: "daily-life", tags: ["calm", "morning", "home"], vibeLabel: "Normal behi", icon: "☀️", gradient: "from-yellow-300 to-orange-300", accent: "vibes" },
  { id: "v8", title: "Night drive fi Tunis", subtitle: "Music fort, route vide, drama", category: "night-drive", tags: ["late-night", "city-core", "friends"], vibeLabel: "Vibe lila", icon: "🚘", gradient: "from-fuchsia-400 to-purple-500", accent: "vibes" }
];

export const vibesGuessPrompts: GuessPrompt[] = [
  { id: "vg1", text: "L look hedha te5ou kam /10?", type: "predict-score", cardId: "v3" },
  { id: "vg2", text: "Hedha date vibe walla no?", type: "pick-one", options: ["Date-core", "M3a groupe", "Family only", "La le"] },
  { id: "vg3", text: "L groupe bech y7eb hedha walla y9oul mid?", type: "pick-one", options: ["Top", "Barcha behi", "Normal", "Mid"] },
  { id: "vg4", text: "Nostalgie réelle walla juste 3adi?", type: "pick-one", options: ["Nostalgie réelle", "Yemchi", "3adi", "No vibe"] }
];

export const dragLanes = ["Top", "Barcha behi", "Normal", "Mid", "La le"] as const;
