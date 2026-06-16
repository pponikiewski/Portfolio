# Plan: Hero system readout — stack below on small screens

STATUS: COMPLETED 2026-06-16

## Assumptions

1. The cutoff where telem should stack (not hide) is ≤ 900px — the same breakpoint that currently hides it. The ≤ 720px breakpoint gets the same treatment.
2. On stacked layout telem goes **below** `.hero-content`, even though it's first in the DOM — CSS `order` will handle this without touching HTML.
3. Stacked telem takes **full width** (no `min(360px, 40%)` constraint).
4. The decorative `aria-hidden="true"` attribute already on `.hero-telem` is fine — no a11y change needed.
5. No visual restyling of the telem rows themselves — just layout change.

## Success criteria

- [x] `pnpm run typecheck` passes (no script — build passes clean)
- [x] `pnpm run test` passes (no script — build passes clean)
- [x] At viewport `901px+`: telem is absolutely positioned to the right of content, unchanged
- [x] At viewport `≤ 900px`: telem is visible and renders below hero content in normal flow
- [x] At viewport `≤ 720px`: telem is visible and renders below hero content in normal flow
- [x] `.hero-telem { display: none }` no longer appears at either breakpoint

## Scope

**One file only:**
- `src/styles/global.css` — modify the `@media (max-width: 900px)` and `@media (max-width: 720px)` blocks

## Simplest approach

At ≤ 900px, switch `.hero` to `display: flex; flex-direction: column`, reset `.hero-telem` from `position: absolute` to `position: static` (removing top/right/transform/width), add `order: 1` so it renders after `.hero-content` despite being first in the DOM, and set `width: 100%`. Remove `display: none` from both breakpoints. The ≤ 720px block inherits the flex layout and only needs `display: none` removed.
