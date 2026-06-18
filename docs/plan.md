STATUS: COMPLETED 2026-06-18

# Plan: Mountain Sunset Hero Background

## Success criteria
- [x] A layered mountain SVG (2–3 ranges) is visible behind the hero on all screen widths
- [x] Gradient sky reads as a recognizable warm sunset (orange/rose/deep blue-purple)
- [x] h1, .hero-sub, .hero-type, .hero-cta remain comfortably readable over the background (visual check)
- [x] No layout shift — hero still fills min-height: 100vh, padding unchanged
- [x] Dark mode: sunset still visible and not jarring
- [x] pnpm run build passes (no typecheck script)

## Scope
- `src/components/PortfolioPage.astro` — add `<div class="hero-bg">` with inline SVG inside `.hero`
- `src/styles/global.css` — add `.hero-bg` block + scrim overlay rule

## Approach
Inline SVG in `.hero-bg` div, absolutely positioned. SVG has a linearGradient sky (orange → rose → deep indigo) and 3 path shapes for mountain layers. Thin scrim div keeps text legible on both themes.
