STATUS: COMPLETED 2026-06-17

# Plan: Hero fullscreen + unified scroll arrow

## Success criteria

- [x] `pnpm run build` przechodzi bez błędów
- [x] Hero section ma `min-height: 100vh`
- [x] Strzałka widoczna od razu po załadowaniu (nie wymaga scrollowania)
- [x] Strzałka fixed, wycentrowana poziomo, ~28px od dołu ekranu
- [x] Klik gdy footer NIEWIDOCZNY → scroll do `#projects`
- [x] Gdy footer widoczny → strzałka obraca się o 180° (transition ≥ 0.25s)
- [x] Klik gdy footer WIDOCZNY → scroll do góry
- [x] Stary `#back-top` i `.scroll-down` usunięte

## Scope
- `src/components/PortfolioPage.astro`
- `src/styles/global.css`
