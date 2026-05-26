# CLAUDE.md

Personal portfolio site for Piotr Ponikiewski. Static, bilingual (PL/EN), single-page-per-language with a mono-grid minimalist design.

## Stack

- **Astro 5.7** — static site generator, ships zero JS by default
- **React 19** — used only for islands (`ThemeToggle`), hydrated via `client:load`
- **Tailwind 3.4** — utility layer (`@astrojs/tailwind`); most styling lives in hand-written CSS, not utilities
- **TypeScript 5.7** — strict
- **lucide-react** — icons

## Commands

```bash
npm run dev      # astro dev --host 127.0.0.1 (localhost:4321)
npm run build    # astro check && astro build  (type-checks, then builds to dist/)
npm run preview  # serve the production build
```

Always run `npm run build` before claiming a change is done — `astro check` catches type errors the dev server ignores.

## Architecture

- `src/pages/index.astro` — redirects `/` → `/pl`
- `src/pages/[lang]/index.astro` — generates `/pl` and `/en` via `getStaticPaths()`; imports `global.css`, picks content by lang, renders `PortfolioPage`
- `src/components/PortfolioPage.astro` — the entire page markup (hero, projects, stack, about, contact). Single source of layout.
- `src/components/ThemeToggle.tsx` — the only React island; toggles `data-theme` on `<html>` and persists to `localStorage`
- `src/i18n/content.ts` — all copy (PL + EN) in one typed `content` object; `PageContent` type drives the component props
- `src/styles/global.css` — design system + every component style

`@/` is the path alias for `src/` (see tsconfig).

## Content — edit here, not in markup

All text lives in `src/i18n/content.ts` under `content.pl` / `content.en`. The two languages **must stay structurally identical** — same keys, same array lengths — because one `PageContent` type serves both. To add/change a project, stack group, etc., edit both `pl` and `en`.

Sections rendered: hero, projects, stack, about, contact. (A `process` block still exists in `content.ts` but is **not rendered** — safe to remove if unused.)

## Design system (mono-grid minimal)

- **Theme**: light (`#faf9f6`) + dark (`#18181b`) via `:root[data-theme]`. Default follows `prefers-color-scheme`; an inline script in `PortfolioPage.astro` `<head>` sets it pre-paint to avoid flash, and `ThemeToggle` overrides + persists.
- **Color**: single red accent (`--accent`: `#ff4d2e` light / `#ff5a3c` dark). No other accent colors — keep it monochrome + red.
- **Tokens**: all colors are CSS vars (`--bg --ink --muted --line --line-strong --accent --hover`). Use them; never hardcode hex in component CSS.
- **Type**: Inter (body) + JetBrains Mono (labels, nav, kickers — anything uppercase/letterspaced). Loaded from Google Fonts in `<head>`.
- **Visual language**: sharp corners (no border-radius), hairline rules (`--line`), vertical grid lines on `.page` at 25/50/75%, numbered sections (`01`–`04`), index-style project list. Keep it clean and editorial — avoid generic rounded-card "AI" look.

## Conventions

- Layout and styling go in `global.css` with semantic class names, not Tailwind utility soup.
- Keep React islands minimal — Astro is the default; reach for React only when interactivity truly needs it.
- Assets in `public/`: CV at `/cv/Piotr_Ponikiewski_cv.pdf`, profile photo at `/images/profile.webp`.
