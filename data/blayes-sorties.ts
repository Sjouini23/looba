import { GuessPrompt, VisualCard } from "@/types/game";

export const blayesSortiesCards: VisualCard[] = [
  { id: "p1", title: "Sidi Bou sunset walk", subtitle: "White-blue mood + photos obligatoires", category: "beach-core", tags: ["date-core", "sunset", "classy"], vibeLabel: "Carte postale", icon: "🌊", gradient: "from-sky-400 to-blue-600", accent: "places" },
  { id: "p2", title: "La Marsa café terrasse", subtitle: "9a3da chill, vue et stories", category: "cafes", tags: ["chill", "group-friendly", "late-night"], vibeLabel: "Yemchi", icon: "☕", gradient: "from-cyan-400 to-teal-500", accent: "places" },
  { id: "p3", title: "Lac rooftop night", subtitle: "Looks + lights + musique", category: "rooftops", tags: ["classy", "loud", "date-core"], vibeLabel: "Mriguel", icon: "🌃", gradient: "from-indigo-500 to-fuchsia-500", accent: "places" },
  { id: "p4", title: "Ariana 9ahwa cosy", subtitle: "Simple, friendly, long talks", category: "cafes", tags: ["family", "chill", "group-friendly"], vibeLabel: "Comfort", icon: "🫖", gradient: "from-amber-400 to-orange-500", accent: "places" },
  { id: "p5", title: "Hammamet beach day", subtitle: "Sif, musique, bambalouni break", category: "summer", tags: ["summer", "beach-core", "group-friendly"], vibeLabel: "Sif fi tounes", icon: "🏖️", gradient: "from-cyan-300 to-emerald-400", accent: "places" },
  { id: "p6", title: "Nabeul weekend stroll", subtitle: "Souk vibes et chill", category: "city-core", tags: ["weekend", "family", "city-core"], vibeLabel: "Weekend easy", icon: "🧺", gradient: "from-yellow-400 to-orange-400", accent: "places" },
  { id: "p7", title: "Sousse marina night", subtitle: "Late-night, groupe, energy", category: "night-out", tags: ["late-night", "loud", "group-friendly"], vibeLabel: "Vibe lila", icon: "✨", gradient: "from-purple-500 to-pink-500", accent: "places" },
  { id: "p8", title: "Centre-ville Tunis walk", subtitle: "Urban chaos + culture", category: "city-core", tags: ["city-core", "nostalgie", "loud"], vibeLabel: "Chaotic cute", icon: "🚶", gradient: "from-rose-400 to-red-500", accent: "places" }
];

export const blayesGuessPrompts: GuessPrompt[] = [
  { id: "pg1", text: "L groupe bech y5tar anéhy sortie ce soir?", type: "pick-one", options: ["Sidi Bou", "La Marsa", "Lac rooftop", "9ahwa quartier"] },
  { id: "pg2", text: "Blassa hedhi chic walla juste hype?", type: "pick-one", options: ["Chic", "Mriguel", "Hype", "La le"] },
  { id: "pg3", text: "Yemchi l date walla le?", type: "pick-one", options: ["Date-core", "Avec les amis", "Famille", "No vibe"] },
  { id: "pg4", text: "Weekend vibe score?", type: "predict-score", cardId: "p5" }
];
