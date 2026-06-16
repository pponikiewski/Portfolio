---
description: PM planning mode — spec with acceptance criteria before coding
argument-hint: [feature description]
---

Plan this task: $ARGUMENTS

Produce a spec structured to feed the Karpathy guidelines (one plan, not two):

1. **Assumptions** (Think Before Coding) — list every assumption you're making; mark uncertain ones with `?` and ask about those (max 2 questions)
2. **Success criteria** (Goal-Driven Execution) — `- [ ]` checklist where each item is VERIFIABLE: a command that must pass, a testable behavior, or a concrete observable state. No vague criteria like "works correctly"
3. **Scope** (Surgical Changes) — exact files to create/modify (locate with Serena, don't guess paths). Everything outside this list is off-limits during implementation
4. **Simplest approach** (Simplicity First) — one paragraph; if you considered a more complex design, say why you rejected it

Wait for my explicit "go".
After I say "go": FIRST save this spec to `docs/plan.md` (overwrite previous), THEN implement, checking off criteria in that file as you complete them.
No code before "go".
