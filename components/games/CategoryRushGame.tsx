"use client";

import { Timer } from "@/components/Timer";
import { categoryRushRounds } from "@/data/packs";
import { scoreCategoryRush } from "@/lib/utils";
import { useMemo, useState } from "react";

export function CategoryRushGame() {
  const round = categoryRushRounds[0];
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const result = useMemo(() => scoreCategoryRush(answers, round.answers), [answers, round.answers]);

  const submitWord = () => {
    const value = input.trim();
    if (!value) return;
    setAnswers((prev) => [...prev, value]);
    setInput("");
  };

  if (done) {
    return (
      <section className="card space-y-4 p-5">
        <h2 className="text-xl font-semibold">Category Rush Results</h2>
        <p className="text-sm text-slate-300">Prompt: {round.prompt}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-emerald-500/10 p-3">
            <p className="text-xs text-emerald-200">Correct answers</p>
            <p className="mt-1 text-lg font-semibold">{result.correct.length}</p>
            <p className="text-xs text-slate-300">{result.correct.join(", ") || "No matches yet"}</p>
          </div>
          <div className="rounded-xl bg-violet-500/10 p-3">
            <p className="text-xs text-violet-200">Round score</p>
            <p className="mt-1 text-lg font-semibold">{result.points} pts</p>
            <p className="text-xs text-slate-300">Unique entries score bonus points.</p>
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm text-slate-300">Answer bank reveal</p>
          <div className="flex flex-wrap gap-2">
            {round.answers.map((item) => (
              <span key={item} className={`rounded-full px-2 py-1 text-xs ${result.correct.includes(item.toLowerCase()) ? "bg-emerald-400/20 text-emerald-200" : "bg-white/10 text-slate-300"}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <Timer seconds={45} onDone={() => setDone(true)} />
      <article className="card p-5">
        <p className="text-xs uppercase tracking-wider text-cyan-300">{round.pack}</p>
        <h2 className="mt-1 text-xl font-semibold">{round.prompt}</h2>
        <p className="mt-2 text-sm text-slate-300">Type as many answers as possible. Hit enter every time.</p>
        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && submitWord()}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-violet-400"
            placeholder="Type answer..."
          />
          <button onClick={submitWord} className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium">
            Add
          </button>
          <button onClick={() => setDone(true)} className="rounded-xl border border-white/20 px-4 py-2 text-sm">
            Submit
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {answers.map((answer, idx) => (
            <span key={`${answer}-${idx}`} className="rounded-full bg-white/10 px-2 py-1 text-xs">
              {answer}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
