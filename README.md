# Piotr Ponikiewski — Portfolio

Bilingual (PL/EN) personal portfolio at [pponikiewski.dev](https://pponikiewski.dev). Fully static Astro site with TypeScript and plain CSS, no client-side JavaScript.

**Routes:** `/` (EN, default), `/pl/`, `/projects/`, `/projects/<slug>/` (case studies, EN). `/en` redirects to `/`.

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

```text
src/
  pages/
    index.astro, pl/index.astro   home pages (EN, PL)
    projects/index.astro          all projects
    projects/[slug].astro         case studies
    404.astro, sitemap.xml.ts, llms.txt.ts
  layouts/Base.astro              <head>, meta, social cards, JSON-LD
  components/                     Home, ProjectCard, Activity (heatmap)
  content/projects/*.md           one file per project: card copy + case study
  content.config.ts               project frontmatter schema
  assets/                         portrait and project screenshots (optimized at build)
  i18n/ui.ts                      home page copy (EN + PL)
  lib/github.ts, lib/schema.ts    build-time contributions, JSON-LD
  styles/global.css               tokens, reset, all styles
tests/dist.test.ts                checks the built site
public/                           CV (PDF, PL + EN), og.png, favicons, robots.txt
docs/                             notes, plan, architecture decisions
```

## Editing content

- **Projects:** add or edit `src/content/projects/<slug>.md`. Frontmatter holds the card (tagline and summary in EN and PL, facts, stack, repo); the body is the case study. `featured: false` keeps a project off the home page, `status: in-progress` adds a label, `cover` adds a screenshot.
- **Home page copy:** `src/i18n/ui.ts`, both languages.

## Design

Technical-document style: IBM Plex Sans and Plex Mono, one blue accent, hairline rules, real numbers instead of decoration. Light and dark follow the OS setting. No client-side JavaScript; the only `<script>` is JSON-LD data.

## Deploy and CI

- **Hosting:** Vercel, building from `master` (`vercel.json` sets trailing slashes and the `/en` redirect). The production build needs `GITHUB_TOKEN` for the heatmap.
- **CI** (`.github/workflows/ci.yml`): on every push to `master` and on PRs, runs `typecheck` and `test`. No token is passed, so the test checks that the heatmap is left out.
- **Daily rebuild** (`.github/workflows/daily-rebuild.yml`): the heatmap is fetched at build time, so a cron job calls a Vercel Deploy Hook once a day. Set it as the `VERCEL_DEPLOY_HOOK` repo secret; without it the job skips.

Conventions live in `CLAUDE.md`, architecture decisions in `docs/architecture.md`.
