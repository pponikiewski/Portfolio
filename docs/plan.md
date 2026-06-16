# Plan: Budgie + przycisk "więcej projektów"

STATUS: COMPLETED 2026-06-16

## Assumptions

1. Budgie = `D:\dev\budget` — desktopowa aplikacja budżetu domowego (Tauri 2 + React 19 + SQLite)
2. GitHub link: `https://github.com/pponikiewski/budget`
3. "Osobna karta" = sekcja inline która się **rozwija** po kliknięciu przycisku
4. W sekcji "więcej": TokenForge jako drugi projekt
5. Oba języki aktualizowane symetrycznie

## Success criteria

- [x] `Deep Prompt` zastąpiony przez `Budgie` w `content.ts` (pl + en)
- [x] Pod listą 3 projektów widnieje przycisk "Więcej projektów" / "More projects"
- [x] Kliknięcie przycisku odsłania co najmniej 1 dodatkowy projekt w formacie `.proj-row`
- [x] Przycisk zmienia label: "Pokaż mniej" / "Show less" po rozwinięciu
- [x] Sekcja widoczna bez JS (graceful degradation)
- [x] `npm run build` przechodzi bez błędów TypeScript

## Scope

- `src/i18n/content.ts` — zamiana Deep Prompt → Budgie + nowa tablica `moreProjects`
- `src/components/PortfolioPage.astro` — blok `moreProjects` + przycisk toggle + inline `<script>`

## Simplest approach

`moreProjects` to osobna tablica w `content` obok `projects`. W Astro renderuję ją jako
`<div id="more-projects-list">` ukryty przez JS przy starcie (graceful degradation: bez JS
lista widoczna). Przycisk toggluje `display` i zmienia `textContent`.
