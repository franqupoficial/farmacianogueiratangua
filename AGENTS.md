# AGENTS.md

## Cursor Cloud specific instructions

This is a single-page React + Vite marketing site for "Farmácia Nogueira Tanguá" (Portuguese, `pt-BR`). No backend, database, or auth — it is a static frontend only.

- Package manager is npm (see `package-lock.json`). Dependencies are installed by the startup update script.
- Standard scripts live in `package.json`: `npm run dev` (Vite dev server on `http://localhost:5173/`), `npm run build`, `npm run lint` (ESLint), `npm run preview`.
- `npm run dev` binds to localhost only; pass `-- --host` if you need to expose it on the network.
- App structure: `src/App.jsx` composes section components under `src/components/sections` and layout components under `src/components/layout`; global styles in `src/styles/site.css`.
