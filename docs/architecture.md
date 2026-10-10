# portfolio — Architecture

## Structure
<!-- uzupełniane w miarę rozwoju projektu -->

## Decisions
- 2026-06-16 — **font system: Fontsource self-hosted** — zamiast Google Fonts używamy `@fontsource-variable/geist` + `@fontsource/commit-mono`; fonty bundlowane z buildem (zero external requests, lepsza prywatność i LCP). Geist Variable jako `font-sans`, Commit Mono jako `font-mono`.

- 2026-10-10 — **zero client JS** — React, lucide i przełącznik motywu usunięte; motyw przez `prefers-color-scheme`, język przez osobne statyczne strony (`/`, `/pl/`). Test na `dist/` przepuszcza tylko `<script type="application/ld+json">`.
- 2026-10-10 — **fonty: IBM Plex Sans Variable + IBM Plex Mono** (Fontsource, self-hosted) — zastępują Geist + Commit Mono z decyzji z 2026-06-16; spójne z CV.
- 2026-10-10 — **treść w content collection** — `src/content/projects/*.md` (zod schema): karta, case study, `featured` (główna) i `status`. Słownik `src/i18n/ui.ts` tylko dla stron głównych; case studies są wyłącznie EN.
- 2026-10-10 — **heatmapa GitHub pobierana przy buildzie** (GraphQL, `GITHUB_TOKEN`) i renderowana jako statyczny SVG; bez tokena sekcja znika. Świeżość danych zależy od deployu (codzienny deploy hook w Actions).
- 2026-10-10 — **testy na zbudowanym `dist/`** przez `node --test` (bez Vitesta): sprawdzają to, co faktycznie trafia do użytkownika (brak JS, linki, obrazy, SEO, neutralność projektu grupowego).
- 2026-10-10 — **SEO/GEO**: ręcznie generowane `sitemap.xml` i `llms.txt` z tych samych danych co strony; JSON-LD z jednym `Person @id` współdzielonym przez wszystkie strony.
- 2026-10-10 — **Tailwind usunięty** — w praktyce używany był tylko preflight; zastąpiony małym resetem w `global.css` (porównanie zrzutów piksel po pikselu: bez zmian).

## Open questions
<!-- Track unresolved technical decisions -->
