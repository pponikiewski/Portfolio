STATUS: COMPLETED 2026-06-18

# Plan: footer i poświata niewidoczne na desktopie

## Success criteria
- [x] `pnpm run build` przechodzi
- [x] Footer "Piotr Ponikiewski / Built with Astro" jest widoczny po przewinięciu na dół
- [x] Pomarańczowa poświata u dołu jest widoczna zarówno w dark- jak i light-mode

## Scope
- `src/scripts/scroll-reveal.ts` — usunięcie `site-footer` z obserwowanych elementów
- `src/styles/global.css` — usunięcie `site-footer` z selektora opacity:0 + zwiększenie opacity glow dla light-mode (14%)

## Root cause
`rootMargin: '0px 0px -10% 0px'` w IntersectionObserver wykluczał dolne 10% viewportu. Footer (~66px) mieścił się w całości w tej martwej strefie → nigdy nie dostawał klasy `.in` → zostawał na `opacity: 0`. Glow 7% był niewidoczny na jasnym tle.
