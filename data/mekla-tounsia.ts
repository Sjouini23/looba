import { GuessPrompt, VisualCard } from "@/types/game";

export const meklaTounsiaCards: VisualCard[] = [
  { id: "f1", title: "Lablebi", subtitle: "Midnight hero, harissa + citron", category: "street-food", tags: ["lourd", "comfort", "winter"], vibeLabel: "Top wala mid?", icon: "🥣", gradient: "from-red-500 to-amber-500", accent: "food" },
  { id: "f2", title: "Mlewi Escalope", subtitle: "Street legend, sauce qui déborde", category: "street-food", tags: ["street", "classique", "lourd"], vibeLabel: "Mriguel", icon: "🌯", gradient: "from-orange-500 to-yellow-500", accent: "food" },
  { id: "f3", title: "Fricassé", subtitle: "Thon, hrissa, olive... combo tounsi", category: "street-food", tags: ["classique", "nostalgie", "9ahwa companion"], vibeLabel: "Cultissime", icon: "🥪", gradient: "from-rose-500 to-orange-500", accent: "food" },
  { id: "f4", title: "Brik à l'oeuf", subtitle: "Crunchy et dangereux fi ramadan", category: "homemade", tags: ["ramadan energy", "famille", "tradition"], vibeLabel: "Ramadan essential", icon: "🍳", gradient: "from-yellow-400 to-amber-600", accent: "food" },
  { id: "f5", title: "Kafteji", subtitle: "Sandwich li y9allab mood instantly", category: "street-food", tags: ["spicy", "street", "comfort food"], vibeLabel: "Yemchi barcha", icon: "🥙", gradient: "from-red-600 to-orange-600", accent: "food" },
  { id: "f6", title: "Bambalouni", subtitle: "Sweet beach stop incontournable", category: "desserts", tags: ["summer", "beach snack", "nostalgie"], vibeLabel: "Sif fi tounes", icon: "🍩", gradient: "from-amber-400 to-pink-400", accent: "food" },
  { id: "f7", title: "Makroudh", subtitle: "Dattes + semoule: classique 3ayla", category: "desserts", tags: ["family", "classic", "aid"], vibeLabel: "Dar jdoud energy", icon: "🍯", gradient: "from-amber-600 to-lime-600", accent: "food" },
  { id: "f8", title: "Ojja merguez", subtitle: "Plat rapide, caractère fort", category: "homemade", tags: ["lourd", "spicy", "dinner"], vibeLabel: "Mouch for everyone", icon: "🍅", gradient: "from-red-700 to-orange-500", accent: "food" },
  { id: "f9", title: "Thé à la menthe fi 9ahwa", subtitle: "Companion officiel m3a gossip", category: "cafe", tags: ["9ahwa companion", "chill", "social"], vibeLabel: "9a3da sbeh", icon: "🫖", gradient: "from-emerald-500 to-teal-500", accent: "food" },
  { id: "f10", title: "Boga Cidre", subtitle: "Snack nostalgie fi sortie", category: "drinks", tags: ["nostalgie", "summer", "snack"], vibeLabel: "Summer old-school", icon: "🥤", gradient: "from-lime-500 to-yellow-400", accent: "food" }
];

export const meklaGuessPrompts: GuessPrompt[] = [
  { id: "fg1", text: "Chnowa akther plat l groupe bech y7eb?", type: "pick-one", options: ["Lablebi", "Mlewi", "Fricassé", "Kafteji"] },
  { id: "fg2", text: "Hedhi te5ou 8+ walla le?", type: "predict-score", cardId: "f2" },
  { id: "fg3", text: "Anéhy mekla bech t9assem l opinions?", type: "pick-one", options: ["Ojja", "Lablebi", "Makroudh", "Brik"] },
  { id: "fg4", text: "Street food hedhi top tier walla just hype?", type: "pick-one", options: ["Top tier", "Mriguel", "Yemchi", "La le"] }
];
