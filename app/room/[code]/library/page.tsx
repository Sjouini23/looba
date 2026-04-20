import { GameLibrary } from "@/components/GameLibrary";
import { Button, SectionTitle, Shell } from "@/components/ui";

export default async function LibraryPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return (
    <Shell>
      <main className="space-y-4">
        <header className="flex items-end justify-between gap-2">
          <SectionTitle title="Chouf les jeux" subtitle="Rate • Guess • Category + bientôt Draw/Story." />
          <Button href={`/room/${code}`} variant="ghost">
            Retour salon
          </Button>
        </header>
        <GameLibrary roomCode={code} />
      </main>
    </Shell>
  );
}
