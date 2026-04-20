import { ChaosCategory } from "@/types/game";

export const initials = (name: string) =>
  name
    .split(" ")
    .map((chunk) => chunk[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const normalize = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const evaluateChaos = (entries: string[], category: ChaosCategory) => {
  const answerSet = new Set(category.acceptedAnswers.map(normalize));
  const uniqueEntries = [...new Set(entries.map(normalize).filter(Boolean))];
  const matched = uniqueEntries.filter((entry) => answerSet.has(entry));
  return { uniqueEntries, matched };
};

export const average = (values: number[]) => Number((values.reduce((a, b) => a + b, 0) / values.length).toFixed(1));

export const seededGroupChoices = <T>(options: T[], pivot = 0): T[] => [
  options[(pivot + 1) % options.length],
  options[(pivot + 2) % options.length],
  options[(pivot + 2) % options.length],
  options[(pivot + 3) % options.length],
  options[(pivot + 1) % options.length]
];
