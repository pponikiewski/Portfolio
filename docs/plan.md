STATUS: COMPLETED 2026-06-18

# Plan: Fix footer + bottom glow

## Success criteria
- [x] Tekst "Piotr Ponikiewski | Built with Astro" widoczny na dole strony
- [x] Glow sięga do absolutnej krawędzi strony (edge-to-edge)
- [x] Glow jest za contentem (nie nakrywa tekstu)
- [x] pnpm run build przechodzi

## Scope
- `src/components/PortfolioPage.astro` — przenieś .bottom-glow przed .inner
- `src/styles/global.css` — usuń z-index: -1 z .bottom-glow
