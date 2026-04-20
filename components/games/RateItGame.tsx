"use client";

import { Timer } from "@/components/Timer";
import { rateItItems } from "@/data/packs";
import { scoreRateIt } from "@/lib/utils";
import { useMemo, useState } from "react";

const mockGroupRatings = [8, 7, 6, 9, 7, 8, 6, 7];

export function RateItGame() {
  const item = rateItItems[0];
  const [rating, setRating] = useState(7);
  const [done, setDone] = useState(false);

  const result = useMemo(() => scoreRateIt(rating, mockGroupRatings), [rating]);

  if (done) {
    return (
      <section className="card space-y-4 p-5">
        <h2 className="text-xl font-semibold">Rate It Results</h2>
        <p className="text-sm text-slate-300">{item.title}</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-cyan-500/10 p-3">
            <p className="text-xs text-cyan-200">Your rating</p>
            <p className="text-2xl font-semibold">{rating}/10</p>
          </div>
          <div className="rounded-xl bg-violet-500/10 p-3">
            <p className="text-xs text-violet-200">Group average</p>
            <p className="text-2xl font-semibold">{result.avg}/10</p>
          </div>
          <div className="rounded-xl bg-emerald-500/10 p-3">
            <p className="text-xs text-emerald-200">Points won</p>
            <p className="text-2xl font-semibold">{result.points} pts</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-slate-300">Group distribution</p>
          {Array.from({ length: 10 }).map((_, i) => {
            const score = i + 1;
            const count = mockGroupRatings.filter((x) => x === score).length;
            return (
              <div key={score} className="flex items-center gap-2 text-xs">
                <span className="w-8 text-slate-400">{score}</span>
                <div className="h-2 flex-1 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" style={{ width: `${count * 12.5}%` }} />
                </div>
                <span className="w-6 text-slate-300">{count}</span>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <Timer seconds={35} onDone={() => setDone(true)} />
      <article className="card p-5">
        <p className="text-xs uppercase tracking-wider text-violet-300">{item.pack}</p>
        <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
        <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-300">Your rating: {rating}/10</p>
          <input
            className="mt-3 w-full accent-violet-400"
            type="range"
            min={1}
            max={10}
            value={rating}
            onChange={(event) => setRating(Number(event.target.value))}
          />
          <div className="mt-2 flex justify-between text-xs text-slate-400">
            <span>Not for me</span>
            <span>Obsessed</span>
          </div>
        </div>
        <button onClick={() => setDone(true)} className="mt-4 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-medium">
          Lock rating
        </button>
      </article>
    </section>
  );
}
