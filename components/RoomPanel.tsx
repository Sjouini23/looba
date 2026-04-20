import { Player } from "@/types/game";
import { initials } from "@/lib/utils";

export function RoomPanel({ code, players }: { code: string; players: Player[] }) {
  return (
    <section className="card p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-slate-400">Room code</p>
        <span className="rounded-lg bg-cyan-400/15 px-2 py-1 text-xs font-semibold text-cyan-200">{code}</span>
      </div>
      <ul className="space-y-2">
        {players.map((player) => (
          <li key={player.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-content-center rounded-full bg-violet-400/30 text-xs font-semibold">{initials(player.name)}</span>
              <div>
                <p className="text-sm">{player.name}</p>
                <div className="flex gap-1">
                  {player.isHost && <span className="rounded-full bg-amber-400/20 px-2 text-[10px] text-amber-200">Host</span>}
                  <span className={`rounded-full px-2 text-[10px] ${player.ready ? "bg-emerald-400/20 text-emerald-200" : "bg-slate-400/20 text-slate-300"}`}>
                    {player.ready ? "Ready" : "Waiting"}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-xs text-slate-400">{player.score} pts</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
