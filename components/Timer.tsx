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

  const percent = useMemo(() => Math.max(0, Math.round((left / seconds) * 100)), [left, seconds]);

  return (
    <div className={`rounded-2xl border px-3 py-2 text-sm ${left <= 10 ? "animate-pulse border-rose-300 bg-rose-100 text-rose-700" : "border-cyan-200 bg-cyan-50 text-cyan-800"}`}>
      <div className="mb-1 flex justify-between font-semibold">
        <span>Timer round</span>
        <span>{left}s</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white">
        <div className="h-full bg-gradient-to-r from-cyan-400 to-orange-400 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
