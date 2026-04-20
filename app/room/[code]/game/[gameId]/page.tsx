import { CategoryRushGame } from "@/components/games/CategoryRushGame";
import { RateItGame } from "@/components/games/RateItGame";
import { Scoreboard } from "@/components/Scoreboard";
import { Button, Shell } from "@/components/ui";
import { mockPlayers } from "@/data/mockRoom";

export default async function GamePage({ params }: { params: Promise<{ code: string; gameId: string }> }) {
  const { code, gameId } = await params;
  const game = gameId === "rate-it" ? <RateItGame /> : <CategoryRushGame />;

  return (
    <Shell>
      <main className="space-y-4">
        <header className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Live Round</p>
            <h1 className="text-3xl font-semibold">{gameId === "rate-it" ? "Rate It" : "Category Rush"}</h1>
          </div>
          <div className="flex gap-2">
            <Button href={`/room/${code}/library`} variant="ghost">
              Switch game
            </Button>
            <Button href={`/room/${code}`}>
              Return lobby
            </Button>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">{game}</div>
          <Scoreboard players={mockPlayers} />
        </section>
      </main>
    </Shell>
  );
}
