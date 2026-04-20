# Lammetna MVP

Lammetna is a polished, dark-mode party game MVP for Discord-style friend group nights.

## Tech stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Local/mock state only

## MVP includes
- Landing page
- Lobby / Room page
- Expandable game library with filters
- Shared scoreboard
- 2 playable mini-games:
  - Category Rush
  - Rate It

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Project structure
- `app/` routes and page shells
- `components/` reusable UI + game components
- `components/games/` playable mini-game implementations
- `data/` game registry, content packs, and mock room data
- `lib/` scoring and utility helpers
- `types/` shared interfaces

## Add a new game later
1. Add metadata entry in `data/gameRegistry.ts`.
2. Create a game component in `components/games/`.
3. Extend game routing in `app/room/[code]/game/[gameId]/page.tsx` to map `gameId` to the new component.
4. Add content data pack files under `data/` and scoring logic under `lib/` as needed.

This keeps the MVP architecture multiplayer-ready while staying lightweight.
