# Plan: About + hero lead update

STATUS: IN PROGRESS 2026-06-16

## Assumptions
1. hero.lead = paragraf pod h1 w hero (`<p class="hero-sub">`)
2. figcaption.about-cap usunięty z template (zielona kropka + handle)
3. about.lead + about.text zaktualizowane treścią z CV
4. Edukacja: dt:empty { display: none } + pełne dane ze szkoły i lat

## Success criteria
- [ ] hero.lead (PL) zawiera podany przez usera tekst co do słowa
- [ ] hero.lead (EN) zawiera przetłumaczoną wersję
- [ ] figcaption.about-cap nie istnieje w wyrenderowanym HTML
- [ ] about.lead i about.text zaktualizowane (PL + EN)
- [ ] Edukacja: dwa wiersze, drugi bez widocznego labelu, pełne dane
- [ ] `npm run build` przechodzi bez błędów

## Scope
- src/i18n/content.ts
- src/components/PortfolioPage.astro
- src/styles/global.css
