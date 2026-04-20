"use client";

import { dragRateDecks } from "@/data/packs";
import { dragLanes } from "@/data/vibes-tounsi";
import { VisualCard } from "@/types/game";
import { useMemo, useState } from "react";

export function DragRateGame() {
  const deckNames = Object.keys(dragRateDecks);
  const [deckName, setDeckName] = useState(deckNames[0]);
  const baseDeck = dragRateDecks[deckName as keyof typeof dragRateDecks];
  const [cards, setCards] = useState(baseDeck);
  const [zones, setZones] = useState<Record<string, VisualCard[]>>(
    Object.fromEntries(dragLanes.map((lane) => [lane, []])) as Record<string, VisualCard[]>
  );
  const [done, setDone] = useState(false);

  const draggedFromPool = (id: string) => {
    const found = cards.find((card) => card.id === id);
    if (!found) return;
    setCards((prev) => prev.filter((card) => card.id !== id));
    return found;
  };

  const onDropLane = (lane: string, id: string) => {
    const fromPool = draggedFromPool(id);
    if (!fromPool) return;
    setZones((prev) => ({ ...prev, [lane]: [...prev[lane], fromPool] }));
  };

  const mockGroup = useMemo(
    () => ({
      Top: ["Fricassé", "Bambalouni"],
      "Barcha behi": ["Mlewi Escalope", "Brik à l'oeuf"],
      Normal: ["Ojja merguez"],
      Mid: ["Thé à la menthe fi 9ahwa"],
      "La le": ["Boga Cidre"]
    }),
    []
  );

  if (done) {
    return (
      <section className="card space-y-4 p-5">
        <h2 className="text-xl font-bold text-[#0f4c81]">Reveal Drag & Rate</h2>
        <p className="text-sm text-slate-600">Haka chnowa l groupe gal (mock): débat ouvert 👀</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {dragLanes.map((lane) => (
            <div key={lane} className="rounded-2xl bg-gradient-to-br from-white to-[#fef3c7] p-3">
              <p className="text-sm font-bold text-[#0f4c81]">{lane}</p>
              <p className="mt-1 text-xs text-slate-600">{mockGroup[lane as keyof typeof mockGroup].join(" • ")}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <article className="card p-5">
        <h2 className="text-xl font-bold text-[#0f4c81]">Drag & Rate — {deckName}</h2>
        <p className="mt-1 text-sm text-slate-600">Dragi w 7ot. Le but: réaction, pas score.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {deckNames.map((name) => (
            <button
              key={name}
              onClick={() => {
                setDeckName(name);
                setCards(dragRateDecks[name as keyof typeof dragRateDecks]);
                setZones(Object.fromEntries(dragLanes.map((lane) => [lane, []])) as Record<string, VisualCard[]>);
              }}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${deckName === name ? "bg-[#0f4c81] text-white" : "bg-white text-[#0f4c81]"}`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {dragLanes.map((lane) => (
            <div
              key={lane}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                const id = event.dataTransfer.getData("text/plain");
                onDropLane(lane, id);
              }}
              className="min-h-24 rounded-2xl border-2 border-dashed border-[#0f4c81]/20 bg-white/60 p-3"
            >
              <p className="text-sm font-semibold text-[#0f4c81]">{lane}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {zones[lane].map((card) => (
                  <span key={card.id} className="rounded-full bg-[#0f4c81]/10 px-2 py-1 text-xs text-[#0f4c81]">
                    {card.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {cards.map((card) => (
            <button
              key={card.id}
              draggable
              onDragStart={(event) => event.dataTransfer.setData("text/plain", card.id)}
              className={`rounded-2xl bg-gradient-to-r ${card.gradient} p-3 text-left text-white shadow-md transition hover:-translate-y-0.5`}
            >
              <p className="text-xs opacity-90">{card.icon} {card.category}</p>
              <p className="font-semibold">{card.title}</p>
              <p className="text-xs opacity-90">{card.subtitle}</p>
            </button>
          ))}
        </div>

        <button onClick={() => setDone(true)} className="mt-4 rounded-2xl bg-gradient-to-r from-[#f97316] to-[#fb7185] px-4 py-2 text-sm font-semibold text-white">
          Reveal group result
        </button>
      </article>
    </section>
  );
}
