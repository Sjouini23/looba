import { CategoryRushRound, RateItItem } from "@/types/game";

export const categoryRushRounds: CategoryRushRound[] = [
  {
    id: "tn-foods",
    pack: "Tunisian Everyday Pack",
    prompt: "Name Tunisian foods you might crave after midnight",
    answers: ["lablebi", "mlewi", "fricassé", "bambalouni", "brik", "ojja", "makroudh", "chapati"]
  },
  {
    id: "cafe-things",
    pack: "Food & Cafés Pack",
    prompt: "Things found in a café",
    answers: ["espresso", "tea", "sugar", "chairs", "menu", "waiter", "croissant", "wifi"]
  },
  {
    id: "beach-day",
    pack: "Generic Party Pack",
    prompt: "Beach trip essentials",
    answers: ["towel", "sunscreen", "water", "hat", "flip flops", "umbrella", "snacks", "speaker"]
  },
  {
    id: "house-items",
    pack: "Tunisian Everyday Pack",
    prompt: "Things in a Tunisian house",
    answers: ["zrabi", "couscous pot", "mint tea", "balcony", "tv", "sofa", "olive oil", "dates"]
  },
  {
    id: "wedding",
    pack: "Tunisian Everyday Pack",
    prompt: "Wedding things",
    answers: ["henna", "music", "dancing", "photos", "cake", "dress", "rings", "zokra"]
  },
  {
    id: "breakfast",
    pack: "Generic Party Pack",
    prompt: "Breakfast foods",
    answers: ["eggs", "toast", "cereal", "yogurt", "fruit", "coffee", "pancakes", "oats"]
  },
  {
    id: "travel-items",
    pack: "Generic Party Pack",
    prompt: "Travel items",
    answers: ["passport", "tickets", "charger", "headphones", "toothbrush", "bag", "wallet", "sunglasses"]
  },
  {
    id: "movie-genres",
    pack: "Generic Party Pack",
    prompt: "Movie genres",
    answers: ["comedy", "horror", "romance", "drama", "thriller", "sci-fi", "action", "documentary"]
  }
];

export const rateItItems: RateItItem[] = [
  {
    id: "fit-night",
    pack: "Outfits & Vibes Pack",
    title: "All-black rooftop outfit with silver accessories",
    subtitle: "Night out with friends in spring breeze",
    kind: "outfit"
  },
  {
    id: "food-lablebi",
    pack: "Food & Cafés Pack",
    title: "Late-night spicy lablebi bowl",
    subtitle: "Extra harissa, olive oil shine, lemon on side",
    kind: "food"
  },
  {
    id: "cafe-corner",
    pack: "Food & Cafés Pack",
    title: "Sunny corner café with old-school tiles",
    subtitle: "Perfect for gossip + mint tea",
    kind: "cafe"
  },
  {
    id: "vibe-beach",
    pack: "Tunisian Everyday Pack",
    title: "Sunset beach walk then bambalouni stop",
    subtitle: "Golden hour + chaotic group selfies",
    kind: "vibe"
  }
];
