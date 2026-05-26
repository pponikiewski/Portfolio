# Piotr Ponikiewski — Portfolio

Bilingual (PL/EN) personal portfolio built with Astro, React, TypeScript and Tailwind CSS. Mono-grid minimalist design with light/dark themes.

**Live routes:** `/pl` (default) · `/en`

## Quick start

```bash
npm install
npm run dev      # localhost:4321
npm run build    # type-check + production build → dist/
npm run preview  # serve the build
```

Requires Node 18+.

## Structure

```
src/
  pages/
    index.astro          redirect / → /pl
    [lang]/index.astro   generates /pl and /en
  components/
    PortfolioPage.astro  full page markup
    ThemeToggle.tsx      React island — theme switch
  i18n/content.ts        all copy (PL + EN), typed
  styles/global.css      design system + component styles
public/
  cv/                    downloadable CV (PDF)
  images/                profile photo
```

## Editing content

All text lives in `src/i18n/content.ts` under `content.pl` / `content.en`. Both languages must keep identical structure (same keys, same array lengths) — one type serves both. Edit both when changing projects, stack, or copy.

## Design

Mono-grid minimalist: single red accent on neutral background, sharp corners, hairline rules, JetBrains Mono labels. Light (`#faf9f6`) and dark (`#18181b`) themes; default follows the OS preference, toggle persists the choice.

See `CLAUDE.md` for full conventions and architecture notes.
