import { Player } from "@/types/game";

export const initials = (name: string) =>
  name
    .split(" ")
    .map((chunk) => chunk[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const normalize = (value: string) => value.trim().toLowerCase();

export const scoreCategoryRush = (submitted: string[], bank: string[]) => {
  const acceptedSet = new Set(bank.map(normalize));
  const cleaned = [...new Set(submitted.map(normalize).filter(Boolean))];
  const correct = cleaned.filter((answer) => acceptedSet.has(answer));
  const points = correct.length * 3 + cleaned.length;
  return { cleaned, correct, points };
};

export const scoreRateIt = (playerRating: number, groupRatings: number[]) => {
  const avg = Number((groupRatings.reduce((a, b) => a + b, 0) / groupRatings.length).toFixed(1));
  const distance = Math.abs(playerRating - avg);
  const points = Math.max(1, 12 - Math.round(distance * 2));
  return { avg, points, distance };
};

export const sortedLeaderboard = (players: Player[]) => [...players].sort((a, b) => b.score - a.score);
