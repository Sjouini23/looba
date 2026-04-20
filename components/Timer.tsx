"use client";

import { useEffect, useMemo, useState } from "react";

export function Timer({ seconds, onDone }: { seconds: number; onDone: () => void }) {
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    if (left <= 0) {
      onDone();
      return;
    }
    const id = setTimeout(() => setLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(id);
  }, [left, onDone]);

  const danger = left <= 10;
  const percent = useMemo(() => Math.max(0, Math.round((left / seconds) * 100)), [left, seconds]);

  return (
    <div className={`rounded-xl border px-3 py-2 text-sm ${danger ? "animate-pulseSoft border-rose-400/40 bg-rose-500/10 text-rose-200" : "border-white/10 bg-white/5 text-slate-200"}`}>
      <div className="mb-1 flex justify-between">
        <span>Time</span>
        <span className="font-semibold">{left}s</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
