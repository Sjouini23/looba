import { CategoryChaosGame } from "@/components/games/CategoryChaosGame";
import { DragRateGame } from "@/components/games/DragRateGame";
import { GuessGroupGame } from "@/components/games/GuessGroupGame";
import { Scoreboard } from "@/components/Scoreboard";
import { Button, Shell } from "@/components/ui";
import { mockPlayers } from "@/data/mockRoom";

export default async function GamePage({ params }: { params: Promise<{ code: string; gameId: string }> }) {
  const { code, gameId } = await params;

  const map = {
    "drag-rate": { title: "Drag & Rate", view: <DragRateGame /> },
    "guess-group": { title: "Guess El Group", view: <GuessGroupGame /> },
    "category-chaos": { title: "Category Chaos Tunisia", view: <CategoryChaosGame /> }
  } as const;

  const current = map[gameId as keyof typeof map] ?? map["drag-rate"];

  return (
    <Shell>
      <main className="space-y-4">
        <header className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#0f4c81]">Round live</p>
            <h1 className="text-3xl font-bold text-[#0f4c81]">{current.title}</h1>
          </div>
          <div className="flex gap-2">
            <Button href={`/room/${code}/library`} variant="ghost">
              Switch jeu
            </Button>
            <Button href={`/room/${code}`}>Retour salon</Button>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">{current.view}</div>
          <Scoreboard players={mockPlayers} />
        </section>
      </main>
    </Shell>
  );
}
