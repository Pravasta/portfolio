# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at http://localhost:8080 (port is fixed, not the default 5173)
- `npm run build` — production build to `dist/`
- `npm run build:dev` — development-mode build (preserves debug info)
- `npm run lint` — ESLint across all `.ts`/`.tsx` files
- `npm run preview` — serve the built `dist/` locally

## Path Aliases

`@/` maps to `src/`. Always use `@/` for src imports — never use relative paths that traverse directories.

```ts
import { Button } from "@/components/ui/button";
import { usePortfolioStore } from "@/store/PortfolioStore";
```

## Project Structure

New portfolio sections follow this pattern:
1. Create `src/features/<section-name>/` with component file(s)
2. Import and render from the appropriate page in `src/pages/`
3. Add navigation entry in `src/components/Navbar/` if needed

## UI Components

Shadcn/ui primitives live in `src/components/ui/`. To add a new one:
```
npx shadcn@latest add <component-name>
```
Do not manually create files in `src/components/ui/` — use the CLI so config (path aliases, CSS variables) is wired correctly.

## Styling

- Tailwind CSS with CSS variables for theming — use `bg-background`, `text-foreground`, etc. over raw colors
- Custom navy palette: `navy-50` through `navy-900` (defined in `tailwind.config.ts`)
- Dark mode is class-based — toggled via `next-themes`; test both modes when adding UI
- Custom animations available: `fade-in`, `slide-in-left`, `slide-in-right`, `scale-in`, `float`, `pulse-glow`

## TypeScript

App code (`src/`) uses a loose TypeScript config (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false`) — this is intentional for rapid iteration. Do not tighten these settings without discussing first.

## Deployment

This project deploys to **Netlify** on push to `main`. Run `npm run build` to validate locally before pushing. There is no separate staging branch.

## Notes

- `lovable-tagger` plugin runs in dev mode only — it tags components for the Lovable editor and can be ignored
- No test framework is configured — validate changes by running the dev server
