"use client";

import { Timer } from "@/components/Timer";
import { categoryChaosTounsi } from "@/data/category-chaos-tounsi";
import { evaluateChaos } from "@/lib/utils";
import { useMemo, useState } from "react";

export function CategoryChaosGame() {
  const [roundIndex, setRoundIndex] = useState(0);
  const round = categoryChaosTounsi[roundIndex];
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const result = useMemo(() => evaluateChaos(answers, round), [answers, round]);

  const addEntry = () => {
    if (!input.trim()) return;
    setAnswers((prev) => [...prev, input]);
    setInput("");
  };

  if (done) {
    return (
      <section className="card space-y-4 p-5">
        <h2 className="text-xl font-bold text-[#0f4c81]">Category Chaos Reveal</h2>
        <p className="text-sm text-slate-600">{round.prompt}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-emerald-100 p-3">
            <p className="text-xs text-emerald-700">Matches acceptés</p>
            <p className="text-lg font-bold text-emerald-900">{result.matched.length}</p>
            <p className="text-xs text-emerald-800">{result.matched.join(" • ") || "Mazel ma fama chay"}</p>
          </div>
          <div className="rounded-2xl bg-sky-100 p-3">
            <p className="text-xs text-sky-700">Bank tounsia</p>
            <p className="text-xs text-slate-700">{round.acceptedAnswers.slice(0, 10).join(" • ")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <Timer key={round.id} seconds={50} onDone={() => setDone(true)} />
      <article className="card p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#0f4c81]">{round.pack}</p>
        <h2 className="mt-1 text-xl font-bold text-[#0f4c81]">{round.prompt}</h2>
        <p className="mt-1 text-sm text-slate-600">Kteb barcha réponses, Arabizi/French yetsamm7ou ❤️</p>
        <button
          onClick={() => {
            const next = (roundIndex + 1) % categoryChaosTounsi.length;
            setRoundIndex(next);
            setAnswers([]);
            setInput("");
            setDone(false);
          }}
          className="mt-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-[#0f4c81]"
        >
          Category jdida
        </button>
        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && addEntry()}
            className="w-full rounded-2xl border border-sky-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400"
            placeholder="ex: mlewi / lablebi / brik..."
          />
          <button onClick={addEntry} className="rounded-2xl bg-[#0f4c81] px-4 py-2 text-sm font-semibold text-white">
            Zid
          </button>
          <button onClick={() => setDone(true)} className="rounded-2xl border border-[#0f4c81]/20 px-4 py-2 text-sm text-[#0f4c81]">
            Reveal
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {answers.map((answer, idx) => (
            <span key={`${answer}-${idx}`} className="rounded-full bg-[#0f4c81]/10 px-2 py-1 text-xs text-[#0f4c81]">
              {answer}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
