"use client";

import { gameRegistry } from "@/data/gameRegistry";
import Link from "next/link";
import { useState } from "react";

const tabs = ["All", "Rate", "Guess", "Category", "Draw", "Story"] as const;

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
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${activeTab === tab ? "bg-[#0f4c81] text-white" : "bg-white text-[#0f4c81] hover:bg-[#dbeafe]"}`}
          >
            {tab === "All" ? "Kol chay" : tab}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((game) => (
          <article key={game.id} className="card-pop p-4 transition hover:-translate-y-1">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#0f4c81]">{game.name}</h3>
              <span className="rounded-full bg-[#fef3c7] px-2 py-0.5 text-xs text-amber-700">{game.mood}</span>
            </div>
            <p className="mb-3 text-sm text-slate-600">{game.description}</p>
            <div className="mb-4 flex gap-2 text-xs text-slate-500">
              <span>{game.category}</span>
              <span>•</span>
              <span>{game.durationSec}s</span>
            </div>
            {game.playable ? (
              <Link className="rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#0f4c81] px-3 py-2 text-sm font-semibold text-white" href={`/room/${roomCode}/game/${game.id}`}>
                Yalla nal3bou
              </Link>
            ) : (
              <span className="rounded-xl border border-dashed border-slate-300 px-3 py-2 text-xs text-slate-500">Bientôt</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
