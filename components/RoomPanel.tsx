import { Player } from "@/types/game";
import { initials } from "@/lib/utils";

export function RoomPanel({ code, players }: { code: string; players: Player[] }) {
  return (
    <section className="card p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#0f4c81]">Code room</p>
        <span className="rounded-xl bg-[#0f4c81] px-3 py-1 text-xs font-bold text-white">{code}</span>
      </div>
      <ul className="space-y-2">
        {players.map((player) => (
          <li key={player.id} className="flex items-center justify-between rounded-2xl border border-[#0f4c81]/10 bg-white/70 p-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-content-center rounded-full bg-gradient-to-br from-cyan-300 to-orange-300 text-xs font-bold text-[#0f4c81]">{initials(player.name)}</span>
              <div>
                <p className="text-sm font-semibold text-slate-700">{player.name}</p>
                <div className="flex gap-1">
                  {player.isHost && <span className="rounded-full bg-[#f97316]/20 px-2 text-[10px] text-[#c2410c]">Host</span>}
                  <span className={`rounded-full px-2 text-[10px] ${player.ready ? "bg-emerald-200 text-emerald-800" : "bg-slate-200 text-slate-600"}`}>
                    {player.ready ? "Ready" : "Pas encore"}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-lg">{player.mood ?? "😌"}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
