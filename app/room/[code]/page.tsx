import { GameLibrary } from "@/components/GameLibrary";
import { RoomPanel } from "@/components/RoomPanel";
import { Scoreboard } from "@/components/Scoreboard";
import { mockPlayers } from "@/data/mockRoom";
import { Button, Shell } from "@/components/ui";

export default async function RoomPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return (
    <Shell>
      <main className="space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Room</p>
            <h1 className="text-3xl font-semibold">{code}</h1>
          </div>
          <div className="flex gap-2">
            <Button href={`/room/${code}/library`} variant="ghost">
              Open library
            </Button>
            <Button href={`/room/${code}/game/category-rush`}>Start game</Button>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          <RoomPanel code={code} players={mockPlayers} />
          <div className="space-y-4 lg:col-span-2">
            <Scoreboard players={mockPlayers} title="Score summary" />
            <article className="card p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-300">Quick settings</h3>
              <div className="grid gap-2 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-white/5 p-3">Round timer: 45s</div>
                <div className="rounded-xl bg-white/5 p-3">Points mode: Standard</div>
                <div className="rounded-xl bg-white/5 p-3">Content pack: Mixed</div>
              </div>
            </article>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Game library preview</h2>
          <GameLibrary roomCode={code} />
        </section>
      </main>
    </Shell>
  );
}
