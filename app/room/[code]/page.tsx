import { GameLibrary } from "@/components/GameLibrary";
import { RoomPanel } from "@/components/RoomPanel";
import { Scoreboard } from "@/components/Scoreboard";
import { mockPlayers } from "@/data/mockRoom";
import { Button, SectionTitle, Shell } from "@/components/ui";

export default async function RoomPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return (
    <Shell>
      <main className="space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle title={`Salon ${code}`} subtitle="Chnowa nal3bou ? choisis jeu, pack, w start." />
          <div className="flex gap-2">
            <Button href={`/room/${code}/library`} variant="ghost">
              Librairie
            </Button>
            <Button href={`/room/${code}/game/drag-rate`}>Start round</Button>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          <RoomPanel code={code} players={mockPlayers} />
          <div className="space-y-4 lg:col-span-2">
            <Scoreboard players={mockPlayers} />
            <article className="card p-4">
              <h3 className="mb-2 text-sm font-semibold text-[#0f4c81]">Setup rapide</h3>
              <div className="grid gap-2 text-sm sm:grid-cols-3">
                <div className="rounded-2xl bg-cyan-50 p-3">Pack: Jawna tounsi</div>
                <div className="rounded-2xl bg-orange-50 p-3">Mode: Social reveal</div>
                <div className="rounded-2xl bg-rose-50 p-3">Host: Alya</div>
              </div>
            </article>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-[#0f4c81]">Jeux disponibles</h2>
          <GameLibrary roomCode={code} />
        </section>
      </main>
    </Shell>
  );
}
