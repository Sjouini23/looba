import { GameLibrary } from "@/components/GameLibrary";
import { Button, Shell } from "@/components/ui";

export default async function LibraryPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return (
    <Shell>
      <main className="space-y-4">
        <header className="flex items-end justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Game Library</p>
            <h1 className="text-3xl font-semibold">Pick your next round</h1>
          </div>
          <Button href={`/room/${code}`} variant="ghost">
            Back to lobby
          </Button>
        </header>
        <GameLibrary roomCode={code} />
      </main>
    </Shell>
  );
}
