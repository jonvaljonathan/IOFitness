---
name: learn-voice-panel
description: >-
  Persona panel for IOFitness Learn (and homepage) copy. Use when drafting,
  revising, or reviewing Learn articles, when copy feels rough or AI, or when
  the user asks for voice grades / Greens. Roles Pete, Jon, Carlos, and the
  warm-coach editor. Outputs Green/Yellow/Red with quoted must-fixes. Does not
  replace lint:copy or grade:learn structure gates.
---

# Learn voice panel

Structural `grade:learn` can A-grade rough prose. This panel is the ear check.

**Ship philosophy:** We will not make everyone happy. We should make **some** people happy on every article — enough Greens that a real reader would finish and trust it. Any **Red** from the warm-coach editor on Human voice is a hard block. Reader personas may stay Yellow on taste; two Reds across the panel, or zero Greens, means rewrite.

## Before you start

1. `npm run lint:copy`
2. `npm run grade:learn` (structure)
3. Read `references/personas.md` and `references/rubric.md`
4. Read the full article (or section) as if aloud

## Panel roster (v1)

| ID | Role |
|---|---|
| `pete` | 75, starting later — jargon and intimidation |
| `jon` | Ski + sport + injuries — demand match and stretch-theater BS |
| `carlos` | 65, knee, grandkids / useful life — plain life→exercise link |
| `editor` | Warm coach editor — sentence craft, AI smell, brand voice |

## How to run

For each persona, write **in first person**:

1. One-line gut reaction
2. Score four ears: Finish / Life→exercise / Human voice / Trust → Green, Yellow, or Red
3. Quote 1–3 exact lines that drove Yellow/Red
4. One must-fix (or “none — I’m happy enough”)

Then summarize:

- Who is **happy** (mostly Green)?
- Who is **not** (any Red, or majority Yellow)?
- Ordered must-fix list for the next rewrite pass
- Verdict: `pass` (some happy, no editor Red, ≤1 reader Red) | `fail`

Write the report to `docs/learn-voice-reports/<slug>.md` using `references/report-schema.md`.

## Loop

```
revise → lint:copy → grade:learn → voice panel → fix must-fixes → re-panel
```

Stop when verdict is `pass` and at least **two** personas are happy. Then hand to the human.

## Do not

- Average scores into a fake “A 100”
- Soften a Red to Yellow to ship
- Skip the editor
- Treat pipeline `test-personas.ts` as copy-paste bios — use `references/personas.md`
