STATUS: COMPLETED 2026-10-09

# Plan: redesign portfolio (dokument techniczny, 0 KB JS)

Kierunek z brainstormingu: portfolio full-stack developera dla tech leadów (rekruterzy drugi plan). Styl dokumentu technicznego, techniczność z typografii i prawdziwych liczb, nie z dekoracji. Zero JS. Dials: variance 5 / motion 3 / density 4.

## Assumptions
1. EN pod `/`, PL pod `/pl/`. Case studies tylko EN: `/projects/tracker/`, `/projects/group-manager/`, `/projects/netdoctor/`. `/en` -> `/`.
2. Zero JS na wszystkich stronach. Usunięte React, `@astrojs/react`, `lucide-react` (brak wysp).
3. Tailwind v3 zostaje (bez upgrade'u). Style jako tokeny CSS w `global.css`.
4. Motyw auto przez `prefers-color-scheme`, bez przełącznika. Jeden akcent, jeden system radiusów.
5. Fonty: IBM Plex Sans + IBM Plex Mono przez Fontsource (latin + latin-ext). Spójne z CV.
6. Przejście karta -> case study przez CSS `@view-transition` (zero JS, progressive enhancement).
7. Case studies jako content collection Astro (markdown + zod). Miejsca na historię Piotra: `<!-- TODO(piotr): ... -->`, nic zmyślonego.
8. Podpis wydajności w stopce: tylko "bez JavaScriptu" (weryfikowane testem).
9. Testy: `node --test` (Node 24, .ts) na `dist/` po buildzie.
10. Screeny robi Piotr. Pola `cover`/`images` opcjonalne; brak obrazu = nic się nie renderuje.
11. CV PL = `Downloads/ponikiewski.piotr-cv.pdf`. CV EN = odtworzenie układu w HTML (scratchpad, poza repo) -> PDF przez headless Edge.

## Success criteria
- [x] `pnpm run typecheck` (astro check) 0 błędów
- [x] `pnpm run build` przechodzi
- [x] `pnpm run test` przechodzi i sprawdza w `dist/`:
  - [x] 5 stron: `/`, `/pl/`, `/projects/{tracker,group-manager,netdoctor}/`
  - [x] 0 tagów `<script>` na każdej stronie
  - [x] 0 znaków em-dash i en-dash w HTML
  - [x] brak "Róża" / "różan" / "rozanc" i linku do demo produkcyjnego (wyjątek: URL repo GitHub)
  - [x] EN linkuje `cv_en.pdf`, PL linkuje `cv_pl.pdf`, oba pliki w `dist/cv/`
  - [x] każdy wewnętrzny `href`/`src` wskazuje istniejący plik w `dist/`
  - [x] każdy `<img>` ma niepusty `alt`, `width`, `height`
  - [x] `<html lang>` = en/pl, `hreflang` w obie strony
  - [x] `<h1>` na głównej zawiera "Full-stack developer", bez "Junior"; sekcja about zawiera "Junior"
- [x] Lighthouse mobile na `/`, `/pl/` i `/projects/tracker/`: Performance 99-100, Accessibility 100, SEO 100. Best Practices 82 lokalnie wyłącznie przez `is-on-https` (preview po HTTP); do potwierdzenia na produkcji (HTTPS). Pomiar z zablokowanym AdGuardem, który wstrzykuje 1,8 MB skryptów lokalnie.
- [x] `/en` przekierowuje na `/` (vercel.json + Astro redirects)
- [x] Zrzuty `/`, `/pl/`, jednego case study: jasny + ciemny, 375 i 1440 px, przejrzane; brak poziomego scrolla
- [x] Build i testy przechodzą bez screenów; po dodaniu `cover.png` obraz pojawia się na karcie i w case study z alt/width/height (sprawdzone na tymczasowym pliku)
- [x] Wszystkie `TODO(piotr)` wypisane w raporcie końcowym
- [x] `public/cv/Piotr_Ponikiewski_cv_pl.pdf` = nowe CV; `..._cv_en.pdf` = 1 strona A4, te same sekcje co PL
- [x] Pre-flight taste skill: brak numeracji sekcji, siatek, fałszywych terminali, kropek statusu; max 1 eyebrow / 3 sekcje

## Scope
Tworzone:
- `src/pages/pl/index.astro`, `src/pages/projects/[slug].astro`
- `src/layouts/Base.astro`
- `src/components/Home.astro`, `src/components/ProjectCard.astro`
- `src/i18n/ui.ts`
- `src/content.config.ts`, `src/content/projects/{tracker,group-manager,netdoctor}.md`
- `src/assets/profile.webp` (przeniesione z `public/images`)
- `tests/dist.test.ts`

Modyfikowane:
- `src/pages/index.astro`, `src/styles/global.css` (od zera)
- `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `vercel.json`
- `public/cv/*.pdf`, `docs/plan.md`

Usuwane:
- `src/components/PortfolioPage.astro`, `ProjectRow.astro`, `ThemeToggle.tsx`
- `src/pages/[lang]/index.astro`, `src/i18n/content.ts`, `src/scripts/`
- `public/images/1.jpg`, `public/images/profile.webp`

Poza zakresem: README, notes (przez `/sync`), favicon, sitemap, 404, analityka, screeny.

## Simplest approach
Statyczne Astro: dwie strony główne z jednego komponentu + słownik, trzy case studies z kolekcji markdown, jeden arkusz CSS z tokenami. Obrazy przez `astro:assets`. Testy na zbudowanym `dist/` przez `node --test`. Odrzucone: Tailwind v4 (osobna zmiana), przełączniki w JS (kłóci się z 0 KB JS), Vitest (zbędna zależność).
