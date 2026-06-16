# Plan: About + hero lead update

STATUS: COMPLETED 2026-06-16

## Assumptions
1. hero.lead = paragraf pod h1 w hero (`<p class="hero-sub">`)
2. figcaption.about-cap usunięty z template (zielona kropka + handle)
3. about.lead + about.text zaktualizowane treścią z CV
4. Edukacja: dt:empty { display: none } + pełne dane ze szkoły i lat

## Success criteria
- [x] hero.lead (PL) zawiera podany przez usera tekst co do słowa
- [x] hero.lead (EN) zawiera przetłumaczoną wersję
- [x] figcaption.about-cap nie istnieje w wyrenderowanym HTML
- [x] about.lead i about.text zaktualizowane (PL + EN)
- [x] Edukacja: dwa wiersze, drugi bez widocznego labelu, pełne dane
- [x] `npm run build` przechodzi bez błędów

## Scope
- src/i18n/content.ts
- src/components/PortfolioPage.astro
- src/styles/global.css
