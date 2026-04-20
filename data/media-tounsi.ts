import { GuessPrompt, VisualCard } from "@/types/game";

export const mediaTounsiCards: VisualCard[] = [
  { id: "m1", title: "Choufli Hal", subtitle: "Sitcom culte, répliques fi kol dar", category: "series", tags: ["nostalgie", "ramadan", "cultissime"], vibeLabel: "Iconic walla le?", era: "2000s", reaction: "Nostalgie pure", icon: "📺", gradient: "from-fuchsia-500 to-indigo-500", accent: "media" },
  { id: "m2", title: "Nouba", subtitle: "Ambiance artistique, débat garanti", category: "series", tags: ["drama", "ciné", "moderne"], vibeLabel: "Mouch normal", era: "2019+", icon: "🎬", gradient: "from-violet-500 to-sky-500", accent: "media" },
  { id: "m3", title: "El Foundou", subtitle: "Ramadan classic, famille vibe", category: "series", tags: ["ramadan", "famille", "classic"], vibeLabel: "Ramadan classic", icon: "🌙", gradient: "from-rose-500 to-purple-500", accent: "media" },
  { id: "m4", title: "L'émission Andi Mankollek", subtitle: "Talk show li ykhalik t9oul ya hasra", category: "tv-programs", tags: ["tv", "debate", "iconique"], vibeLabel: "Mahboul ama yemchi", icon: "🎤", gradient: "from-cyan-500 to-blue-600", accent: "media" },
  { id: "m5", title: "Lotfi Bouchnak", subtitle: "Voix tounsia iconique", category: "singers", tags: ["tarab", "legend", "live"], vibeLabel: "Top tier", era: "legend", icon: "🎼", gradient: "from-amber-500 to-orange-500", accent: "media" },
  { id: "m6", title: "Balti", subtitle: "Rap populaire, sing-along fi voiture", category: "singers", tags: ["rap", "street", "summer"], vibeLabel: "Vibe lila", icon: "🚗", gradient: "from-orange-500 to-pink-500", accent: "media" },
  { id: "m7", title: "Dhafer L'Abidine", subtitle: "Star power, présence écran", category: "actors", tags: ["actor", "charisma", "ramadan"], vibeLabel: "Cultissime", icon: "🕶️", gradient: "from-blue-500 to-violet-500", accent: "media" },
  { id: "m8", title: "Hedi Zaiem", subtitle: "Présentateur qu'on reconnaît direct", category: "presenters", tags: ["tv", "host", "prime-time"], vibeLabel: "Iconic média", icon: "🎙️", gradient: "from-sky-500 to-fuchsia-500", accent: "media" },
  { id: "m9", title: "Sonia Dahmani (style plateau)", subtitle: "Débat, énergie, punchlines", category: "iconic-media", tags: ["plateau", "debate", "energy"], vibeLabel: "Jawou débat", icon: "⚡", gradient: "from-emerald-500 to-cyan-500", accent: "media" },
  { id: "m10", title: "Feuilleton ramadan li ychadd l dar", subtitle: "Koll chhar ramadan discussion", category: "tv-programs", tags: ["ramadan", "family", "hot-topic"], vibeLabel: "Tout le monde regarde", icon: "🍿", gradient: "from-red-500 to-orange-500", accent: "media" }
];

export const mediaGuessPrompts: GuessPrompt[] = [
  { id: "mg1", text: "L groupe bech ya3ti 9adeh l série Choufli Hal ?", type: "predict-score", cardId: "m1" },
  { id: "mg2", text: "Anéhy chanteur bech te5ou akther vote?", type: "pick-one", options: ["Balti", "Lotfi Bouchnak", "Saber Rebai", "Latifa Arfaoui"] },
  { id: "mg3", text: "Chnowa akther programme TV iconic?", type: "pick-one", options: ["Talk-show soirée", "Jeu TV nostalgie", "Feuilleton ramadan", "Caméra cachée"] },
  { id: "mg4", text: "Hadha nostalgie walla overrated?", type: "pick-one", options: ["Nostalgie pure", "Yemchi", "Overrated", "Ma n3rfouch"] }
];
