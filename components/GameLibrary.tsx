"use client";

import { gameRegistry } from "@/data/gameRegistry";
import Link from "next/link";
import { useState } from "react";

const tabs = ["All", "Guess", "Rate", "Draw", "Story"] as const;

export function GameLibrary({ roomCode }: { roomCode: string }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");
  const filtered = gameRegistry.filter((game) => (activeTab === "All" ? true : game.category === activeTab));

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-3 py-1 text-sm transition ${activeTab === tab ? "bg-violet-500 text-white" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((game) => (
          <article key={game.id} className="card p-4 transition hover:-translate-y-0.5 hover:border-violet-300/40">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{game.name}</h3>
              <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-xs text-cyan-200">{game.mood}</span>
            </div>
            <p className="mb-3 text-sm text-slate-300">{game.description}</p>
            <div className="mb-4 flex gap-2 text-xs text-slate-400">
              <span>{game.category}</span>
              <span>•</span>
              <span>{game.durationSec}s</span>
            </div>
            {game.playable ? (
              <Link className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20" href={`/room/${roomCode}/game/${game.id}`}>
                Play now
              </Link>
            ) : (
              <span className="rounded-lg border border-dashed border-white/20 px-3 py-2 text-xs text-slate-400">Coming soon</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
