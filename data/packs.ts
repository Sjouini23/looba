import { GuessPrompt, VisualCard } from "@/types/game";
import { mediaGuessPrompts, mediaTounsiCards } from "@/data/media-tounsi";
import { meklaGuessPrompts, meklaTounsiaCards } from "@/data/mekla-tounsia";
import { blayesGuessPrompts, blayesSortiesCards } from "@/data/blayes-sorties";
import { vibesGuessPrompts, vibesTounsiCards } from "@/data/vibes-tounsi";

export const allVisualCards: VisualCard[] = [
  ...mediaTounsiCards,
  ...meklaTounsiaCards,
  ...blayesSortiesCards,
  ...vibesTounsiCards
];

export const dragRateDecks = {
  "Rate les séries tounsia": mediaTounsiCards.filter((card) => card.category === "series" || card.category === "tv-programs"),
  "Rate l mekla tounsia": meklaTounsiaCards,
  "Rate les sorties": blayesSortiesCards,
  "Rate l vibes": vibesTounsiCards
};

export const allGuessPrompts: GuessPrompt[] = [...mediaGuessPrompts, ...meklaGuessPrompts, ...blayesGuessPrompts, ...vibesGuessPrompts];
