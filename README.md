# Lammetna MVP 🇹🇳

Lammetna est un hub de party games pour les groupes d'amis tunisiens sur Discord / voice call.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Données locales/mock uniquement

## Ce MVP inclut
- Landing page tunisian-first (copie FR + vibe tounsia)
- Lobby / Room page (code room, joueurs, mood, setup)
- Librairie des jeux (extendable)
- 3 mini-jeux jouables:
  1. Drag & Rate
  2. Guess El Group
  3. Category Chaos Tunisia

## Packs de contenu tunisien
- `data/media-tounsi.ts`
- `data/mekla-tounsia.ts`
- `data/blayes-sorties.ts`
- `data/vibes-tounsi.ts`
- `data/category-chaos-tounsi.ts`

## Run local
```bash
npm install
npm run dev
```
Puis ouvrir `http://localhost:3000`.

## Architecture
- `app/` pages et routes
- `components/` UI réutilisable
- `components/games/` mini-jeux
- `data/` packs tounsi + registry
- `lib/` helpers
- `types/` interfaces partagées

## Ajouter un nouveau jeu
1. Ajouter entrée dans `data/gameRegistry.ts`.
2. Ajouter un composant dans `components/games/`.
3. Mapper le `gameId` dans `app/room/[code]/game/[gameId]/page.tsx`.
4. Ajouter pack(s) local dans `data/`.

Objectif produit: réactions, reveal, discussion et culture tounsia avant les points.
