import { Player } from "@/types/game";
import { sortedLeaderboard } from "@/lib/utils";

export function Scoreboard({ players, title = "Session Leaderboard" }: { players: Player[]; title?: string }) {
  const board = sortedLeaderboard(players);
  return (
    <section className="card p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-300">{title}</h3>
      <ul className="space-y-2">
        {board.map((player, index) => (
          <li key={player.id} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">#{index + 1}</span>
              <span>{player.name}</span>
              {player.badge && <span className="rounded-full bg-violet-400/20 px-2 py-0.5 text-xs text-violet-200">{player.badge}</span>}
            </div>
            <span className="font-semibold text-cyan-200">{player.score} pts</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
