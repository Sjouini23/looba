import { Button, Shell } from "@/components/ui";
import { gameRegistry } from "@/data/gameRegistry";

export default function Home() {
  return (
    <Shell>
      <main className="space-y-14 pb-10">
        <section className="card overflow-hidden p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Lammetna</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Premium party games for your next <span className="gradient-text">Discord night</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            From rapid guessing to chaotic taste debates, Lammetna makes group chat game nights feel smooth, stylish, and social.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/room/LMTN-73">Create Room</Button>
            <Button href="/room/LMTN-73/library" variant="ghost">
              Explore Games
            </Button>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Game categories</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Guess", "Rate", "Draw", "Story"].map((category) => (
              <article key={category} className="card p-4 transition hover:border-violet-300/40">
                <p className="text-lg font-medium">{category}</p>
                <p className="mt-2 text-sm text-slate-300">Designed for fast rounds, reactions, and replayability.</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Featured games</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {gameRegistry.slice(0, 2).map((game) => (
              <article key={game.id} className="card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{game.name}</h3>
                  <span className="rounded-full bg-violet-400/20 px-2 py-1 text-xs text-violet-200">{game.mood}</span>
                </div>
                <p className="mt-2 text-slate-300">{game.description}</p>
                <p className="mt-3 text-sm text-cyan-200">{game.durationSec}s rounds · {game.category}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card p-6">
          <h2 className="text-2xl font-semibold">What is Lammetna?</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Lammetna is a social party game hub for friend groups that love quizzes, opinions, stories, and playful competition. This MVP focuses on two polished games with a shared lobby and scoreboard, built to feel great on both phones and desktop streams.
          </p>
        </section>
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400">Lammetna MVP · Built for group chat nights</footer>
    </Shell>
  );
}
