STATUS: COMPLETED 2026-06-17

# Plan: Techniczne opisy projektów + stack badges

## Assumptions

1. `ProjectRow.astro` zostaje zastąpiony `ProjectRow.tsx` — plik `.astro` usunięty, nowy `.tsx` z `client:load` w `PortfolioPage.astro`.
2. **Collapsed state** pokazuje: numer, nazwa + kind, status. Wszystko inne (description, highlights, stack, links) jest ukryte.
3. **Expanded state** dodaje: description, highlights jako lista z bulletem `▸`, stack jako tagi/badges, linki jako przyciski.
4. Animacja przez CSS `grid-template-rows: 0fr → 1fr` + `transition` — zero nowych dependencji.
5. Każdy projekt ma własny stan, można rozwinąć kilka niezależnie.
6. `moreProjects` w `PortfolioPage.astro` też używa `ProjectRow` — import zaktualizowany.
7. `projectsIntro.text` PL (placeholder) — usunięte/wyczyszczone.
8. Opisy przepisane: `description` zaczyna od decyzji architektonicznej.

## Success criteria

- [x] `pnpm run build` przechodzi bez błędów
- [x] Kliknięcie nagłówka projektu rozwija panel z description, highlights, stack, links
- [x] Drugie kliknięcie zwija panel
- [x] Animacja expand/collapse widoczna (nie instant jump)
- [x] Każdy z 3 projektów działa niezależnie
- [x] Żaden `description` (6 szt.) nie zaczyna się od słowa "Aplikacja" / "A desktop" / "A web"
- [x] Żaden `highlight` nie jest opisem z perspektywy użytkownika (każdy ma termin techniczny)
- [x] `projectsIntro.text` w PL nie zawiera zdania o screenach

## Scope

| Plik | Zmiana |
|------|--------|
| `src/components/ProjectRow.astro` | **Usunięty** |
| `src/components/ProjectRow.tsx` | **Nowy** — React island z expand logic |
| `src/components/PortfolioPage.astro` | Import + `client:load` na nowym komponencie |
| `src/i18n/content.ts` | Przepisane `description`, `highlights`, usunięte placeholder |

## Simplest approach

`ProjectRow.tsx` trzyma jeden `useState(false)` dla open/close. Klikalna jest cała górna belka (`<button>`). Rozwinięta treść siedzi w `div` z `overflow: hidden` i CSS transition na `grid-template-rows`. Brak Framer Motion — tylko React + CSS.
