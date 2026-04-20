import { Button, Brand, SectionTitle, Shell } from "@/components/ui";
import { allVisualCards } from "@/data/packs";

export default function Home() {
  const samples = allVisualCards.slice(0, 6);

  return (
    <Shell>
      <main className="space-y-12 pb-10">
        <section className="card-pop overflow-hidden p-6 sm:p-10">
          <Brand />
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-[#0f4c81] sm:text-5xl">
            Rate, guess, drag, debate — <span className="gradient-text">jawna tounsi</span> pour les calls Discord.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Lammetna = jeux sociaux pour les 9a3dat: mekla, séries, blayes, outfits, vibes. Le fun c&apos;est le reveal w discussion, mch points.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/room/LMTN-73">A3mel room</Button>
            <Button href="/room/LMTN-73" variant="ghost">
              Od5ol l room
            </Button>
            <Button href="/room/LMTN-73/library" variant="warm">
              Chouf les jeux
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle title="Chnowa nal3bou ?" subtitle="3 styles principaux + universe qui ykbar b packs tounsia." />
          <div className="grid gap-3 sm:grid-cols-3">
            {["Drag & Rate", "Guess El Group", "Category Chaos"].map((style) => (
              <article key={style} className="card p-4">
                <p className="text-lg font-bold text-[#0f4c81]">{style}</p>
                <p className="mt-1 text-sm text-slate-600">Réactions, opinions, reveal du groupe. Kol round différent.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle title="Sample cards — Tunisian vibes" subtitle="Même sans images, les cartes sont expressives et locales." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {samples.map((card) => (
              <article key={card.id} className={`card-pop bg-gradient-to-br ${card.gradient} p-[1px]`}>
                <div className="rounded-[22px] bg-white/90 p-4">
                  <p className="text-xs text-slate-500">{card.icon} {card.category}</p>
                  <p className="font-bold text-[#0f4c81]">{card.title}</p>
                  <p className="text-sm text-slate-600">{card.subtitle}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {card.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">#{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="py-6 text-center text-xs text-slate-500">Lammetna — Pour les calls, les 9a3dat, w les nights Discord.</footer>
    </Shell>
  );
}
