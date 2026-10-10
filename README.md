# Piotr Ponikiewski — Portfolio

Bilingual (PL/EN) personal portfolio built with Astro, React, TypeScript and Tailwind CSS. Mono-grid minimalist design with light/dark themes.

**Live routes:** `/` (EN, default), `/pl/`, `/projects/`, `/projects/<slug>/` (case studies, EN)

## Quick start

```bash
pnpm install
pnpm run dev        # localhost:4321
pnpm run typecheck  # astro check
pnpm run test       # build + checks on dist/ (node --test)
pnpm run build      # type-check + production build → dist/
pnpm run preview    # serve the build
```

Requires Node 24 (tests run TypeScript directly with `node --test`). Set `GITHUB_TOKEN` (read-only, no scopes) to render the GitHub activity heatmap; without it the section is left out.

## Structure

```
src/
  pages/
    index.astro, pl/index.astro   home pages (EN, PL)
    projects/index.astro          all projects
    projects/[slug].astro         case studies
    404.astro, sitemap.xml.ts, llms.txt.ts
  components/                     Home, ProjectCard, Activity (heatmap)
  content/projects/*.md           one file per project: card copy + case study
  i18n/ui.ts                      home page copy (EN + PL)
  lib/github.ts, lib/schema.ts    build-time contributions, JSON-LD
  styles/global.css               tokens, reset, all styles
tests/dist.test.ts                checks the built site
public/                           CV (PDF), og.png, favicon, robots.txt
```

## Editing content

- **Projects:** add or edit `src/content/projects/<slug>.md`. Frontmatter holds the card (tagline and summary in EN and PL, facts, stack, repo); the body is the case study. `featured: false` keeps a project off the home page, `status: in-progress` adds a label, `cover` adds a screenshot.
- **Home page copy:** `src/i18n/ui.ts`, both languages.

## Design

Technical-document style: IBM Plex Sans and Plex Mono, one blue accent, hairline rules, real numbers instead of decoration. Light and dark follow the OS setting. No client-side JavaScript; the only `<script>` is JSON-LD data.

See `CLAUDE.md` for full conventions and architecture notes.
