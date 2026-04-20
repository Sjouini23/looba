import { Player } from "@/types/game";

export function Scoreboard({ players }: { players: Player[] }) {
  return (
    <section className="card p-4">
      <h3 className="mb-3 text-sm font-semibold text-[#0f4c81]">Mood du groupe</h3>
      <ul className="grid gap-2 sm:grid-cols-2">
        {players.map((player) => (
          <li key={player.id} className="rounded-2xl bg-gradient-to-r from-white to-[#fef3c7] p-3 text-sm">
            <p className="font-semibold text-slate-700">{player.name}</p>
            <p className="text-xs text-slate-500">{player.ready ? "Prêt pour le chaos" : "Yestana encore"}</p>
            <p className="text-lg">{player.mood ?? "😌"}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
