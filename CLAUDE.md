# Project: portfolio

## Stack
- **Runtime:** Node.js (pnpm)
- **Language:** TypeScript (strict mode — zero `any`)
- **Framework:** Astro (islands architecture; minimal client JS by default)
- **UI:** React (within the framework)
- **Styling:** Tailwind CSS

## Commands
```bash
pnpm install        # install deps
pnpm run dev        # run dev
pnpm run test        # tests
pnpm run typecheck        # static check
pnpm run build        # build
```

## Rules
- TypeScript strict — zero `any`, use `unknown` if needed
- Never expose secrets/credentials in code or logs

## Workflow (complements Karpathy guidelines — do not repeat their rituals)
- Karpathy principles (assumptions, surgical scope, simplicity) are active globally — apply them, don't restate them
- **Mark deliberate simplifications** with a `ponytail:` comment naming the ceiling and the upgrade path, e.g. `// ponytail: in-memory store, swap for Redis if it needs to survive restarts`. A known shortcut reads as intent; an unmarked one reads as a bug
- If an explanation defending a simplification would be longer than the code itself, cut the explanation — prose defending simplicity is complexity smuggled back in
- **Steer, don't prescribe:** when guidance has no single right answer (approach, architecture), give the goal and the why, then trust your judgment for the how — never follow a checklist that doesn't fit the task. When it has a defensibly right shape (format, security), keep the specifics
- **Verification loop (Goal-Driven Execution):** a task is DONE only when `pnpm run typecheck` and `pnpm run test` pass AND each acceptance criterion is checked off. Loop autonomously until green — don't report partial success
- **Fast path:** trivial change (typo, one-liner, single-file tweak) → skip planning rigor entirely, just do it and run the static check
- Docs are synced via `/sync`: docs/notes.md (always), docs/plan.md (checkboxes), docs/architecture.md (only on architectural decisions), README (user-facing changes). Remind me if the session did significant work and I haven't synced

## Tools (installed MCP/plugins — use them)
- **Serena:** prefer symbol-level reading over reading whole files; use find/references tools when exploring code
- **Context7:** when unsure about a library/framework API — fetch current docs instead of guessing from memory
- Never read entire folders; read exact files or symbols

## Knowledge Base
- A cross-project knowledge base of solved problems lives OUTSIDE this repo (Obsidian vault: knowledge/). It is not in context by default
- When you hit a problem that feels like it might have been solved before (encoding, build config, auth flow, env quirks), ASK me to check the KB before solving from scratch
