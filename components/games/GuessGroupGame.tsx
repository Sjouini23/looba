"use client";

import { allGuessPrompts } from "@/data/packs";
import { seededGroupChoices } from "@/lib/utils";
import { useMemo, useState } from "react";

export function GuessGroupGame() {
  const [promptIndex, setPromptIndex] = useState(0);
  const prompt = allGuessPrompts[promptIndex];
  const [choice, setChoice] = useState<string>(prompt.options?.[0] ?? "7");
  const [done, setDone] = useState(false);

  const groupVotes = useMemo(() => {
    if (prompt.type === "pick-one" && prompt.options) {
      return seededGroupChoices(prompt.options, 0);
    }
    return ["7", "8", "8", "6", "7"];
  }, [prompt]);

  const mostPicked = useMemo(() => {
    const count = new Map<string, number>();
    groupVotes.forEach((vote) => count.set(vote, (count.get(vote) ?? 0) + 1));
    return [...count.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? groupVotes[0];
  }, [groupVotes]);

  if (done) {
    return (
      <section className="card space-y-4 p-5">
        <h2 className="text-xl font-bold text-[#0f4c81]">L groupe chnowa y9oul?</h2>
        <p className="text-sm text-slate-600">{prompt.text}</p>
        <div className="rounded-2xl bg-gradient-to-r from-cyan-100 to-orange-100 p-4">
          <p className="text-xs text-slate-600">Ton choix</p>
          <p className="text-lg font-bold text-[#0f4c81]">{choice}</p>
          <p className="mt-2 text-xs text-slate-600">Votes mock du groupe</p>
          <p className="text-sm font-semibold text-slate-700">{groupVotes.join(" • ")}</p>
          <p className="mt-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0f4c81] inline-block">Result dominant: {mostPicked}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="card p-5">
      <h2 className="text-xl font-bold text-[#0f4c81]">Guess El Group</h2>
      <p className="mt-1 text-sm text-slate-600">{prompt.text}</p>
      <button
        onClick={() => {
          const next = (promptIndex + 1) % allGuessPrompts.length;
          setPromptIndex(next);
          setChoice(allGuessPrompts[next].options?.[0] ?? "7");
          setDone(false);
        }}
        className="mt-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-[#0f4c81]"
      >
        Prompt jdid
      </button>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {(prompt.options ?? ["5", "6", "7", "8", "9"]).map((option) => (
          <button
            key={option}
            onClick={() => setChoice(option)}
            className={`rounded-2xl px-3 py-2 text-sm font-semibold transition ${choice === option ? "bg-[#0f4c81] text-white" : "bg-white text-[#0f4c81] hover:bg-[#e0f2fe]"}`}
          >
            {option}
          </button>
        ))}
      </div>

      <button onClick={() => setDone(true)} className="mt-4 rounded-2xl bg-gradient-to-r from-[#06b6d4] to-[#0f4c81] px-4 py-2 text-sm font-semibold text-white">
        Reveal votes
      </button>
    </section>
  );
}
