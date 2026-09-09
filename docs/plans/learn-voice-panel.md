# Plan: IOFitness Learn Voice Panel

**Status:** plan only (not built yet)  
**Problem:** `npm run grade:learn` can return **A 100** on structurally correct copy that still sounds rough, choppy, or AI. That grade is lying about ship-readiness.  
**Goal:** A Yerba-style **community / persona grading skill** for IOFitness Learn (and later homepage), where named readers score the piece and can fail it on ear, clarity, and trust — not just checklist structure.

Yerba’s community-manager skill is not in this workspace. This plan rebuilds the useful pattern for IOFitness using:

- Brand bible audience (`docs/brand-bible.md` on brand branch)
- Existing pipeline personas as *seeds* (Jon, Carlos, Pete, Sarah, …)
- `copy-editing` Expert Panel scoring (7+/avg 8+) as a starting mechanic
- Green / Yellow / Red “ear” grades so a piece cannot hide behind structural A’s

---

## 1. What “good” means after this

A Learn article is ship-ready only when **all three** pass:

| Gate | Job | Can it give A 100 to rough prose? |
|---|---|---|
| `lint:copy` | Em dashes, banned soft closes | No (surface) |
| `grade:learn` | Actor, DIY stack, product job, SAID present | **Yes — today’s bug** |
| **`grade:learn:voice` (new)** | Personas hear it aloud; sentence craft; life-link clarity; trust | **No — that’s the point** |

Rule: structural A + voice Reds = **do not ship**. The human never sees “A” alone again.

---

## 2. Skill shape

**Name:** `learn-voice-panel`  
**Paths:** `.agents/skills/learn-voice-panel/` and `.cursor/skills/` mirror  
**Invoke when:** drafting or revising any `content/articles/*`, homepage hero/process copy, or when user says the piece “screams AI” / “sentences are rough” / “grade this”

### Skill contents

```
learn-voice-panel/
  SKILL.md                 # when/how to run the panel; pass rules; loop
  references/personas.md   # fixed Learn-reader roster (not full pipeline dumps)
  references/rubric.md     # Green/Yellow/Red definitions + fail examples
  references/report-schema.md  # JSON/markdown report shape
```

### Agent behavior (mandatory)

1. Read the article (or section) aloud in its head.
2. Role each persona **in first person** with concrete quotes from the copy.
3. Score Green / Yellow / Red on each ear dimension.
4. List **must-fix** lines (exact quotes + why).
5. Refuse to call the piece done while any Red remains, or while Yellows stay after one revision loop without improvement.
6. Re-run the panel after edits (same Yerba loop: grade → fix → grade).

---

## 3. Persona roster (Learn panel v1)

Keep **five**. Enough to catch different ears; small enough to run every article.

| ID | Seed | Who they are | What they fail hard on |
|---|---|---|---|
| `pete` | Pete (75, beginner) | Starting later; hates being talked down to or buried in jargon | Intimidating words, academic SAID dumps, hopeless or hustle tone |
| `carlos` | Carlos (65, knee) | Wants to stay useful / grandkids / real life | Life demand never becomes a plain exercise; abstract “qualities” |
| `jon` | Jon (ski + ultimate + injuries) | Sport + limitation; calls BS on stretch-only ski prep | Wrong exercise for the demand; limitation = delete training |
| `sarah` | Sarah (beginner, habit / fat loss) | New-ish; decision fatigue | Homework / selection stacks; feels like she must become the coach |
| `editor` | Internal “warm coach editor” | Brand voice + sentence craft | Choppy fragments, AI cadence, brochure middle, fake punchlines |

Optional later (v2): `mike` (skeptical advanced) for vapor / overclaim; `emma` (climber + elbow) for sport-specific matching.

**Important:** These are **reader personas for copy**, not pipeline fixtures. Pull biography from `test-personas.ts` lightly; rewrite as short “how they read Learn” cards in `personas.md`.

---

## 4. Rubric: Greens, not letter grades

Each persona scores **four ears** (not a fake 100):

| Ear | Green | Yellow | Red |
|---|---|---|---|
| **Finish** | I’d keep reading | I’d skim | I’d bounce |
| **Life → exercise** | I can picture the demand and the work | Idea is there, wording muddy | Still abstract / jargon / no link |
| **Human voice** | Sounds like a sharp coach talking | A few clunky lines | Rough, AI, or brochure |
| **Trust** | I trust IOFitness more | Neutral | Feels like homework, hype, or lies |

### Pass / fail

- **Ship:** all personas **Green** on all ears, **or** all Green with at most **one Yellow** total across the whole panel, and that Yellow has a written “acceptable because…” note.
- **Fail:** any **Red**, or **two+ Yellows**.
- Report must include **exact quotes** for every Yellow/Red.

Letter grades from `grade:learn` stay for structure only. Voice panel never outputs “A 100.”

---

## 5. How this would have graded the current exercise article

Structural gate: A 100 (true).  
Voice panel (expected, before craft pass):

| Persona | Likely | Why |
|---|---|---|
| `editor` | **Red** on Human voice | Choppy openers (“Not did you sweat.”), stacked short punches, still rough |
| `pete` | **Yellow/Red** | Fragments + density; SAID still appears before enough plain pictures |
| `carlos` | **Yellow** | Grandkids/40 lb is good; surrounding sentences still stiff |
| `jon` | **Yellow → Green** | Goblet/ski truth is right; needs smoother delivery |
| `sarah` | **Green/Yellow** | App-picks is clear; product middle can still feel brochure |

**Net: fail ship.** That is the correct outcome for “sentences are rough.”

---

## 6. Implementation sequence

### Pass A — Skill + roster (no automation yet)

1. Author `learn-voice-panel` skill + persona cards + rubric.
2. Point `learn-copy-tone` at it: after structure grade, run voice panel before calling Learn copy done.
3. Manually run panel on `pick-the-right-exercises-for-your-goals` → produce a fail report → craft-edit until Greens.
4. Update PR with report artifact so humans see Reds, not “A 100.”

### Pass B — Lightweight script

1. `scripts/grade-learn-voice.mjs` prints roster + rubric checklist and requires a report file path.
2. `npm run grade:learn:voice` fails CI/local if `docs/learn-voice-reports/<slug>.md` is missing or still contains `Red`.
3. Optional: parse report frontmatter `status: pass|fail`.

### Pass C — Tighten structural grader

1. Cap or annotate: print `structure: A 100 · voice: NOT RUN` so nobody confuses the two.
2. Add a few **craft heuristics** that can only Yellow-flag (never full A alone): very short punch fragments in a row, “Not \"…\".” openers, etc. Heuristics assist; personas decide.

### Pass D — Expand surface

1. Homepage hero/process through the same panel.
2. Later: in-app chrome (welcome, re-entry) with a smaller 3-persona subset.

---

## 7. Agent loop (the Yerba habit)

```
write/revise
  → lint:copy
  → grade:learn          # structure
  → learn-voice-panel    # personas → Greens/Yellows/Reds + must-fix quotes
  → fix must-fixes only
  → re-panel
  → stop at Greens (or one justified Yellow)
  → human jumps in
```

Do **one article** through this loop as the proving ground (exercise-selection), same as we did for actor/DIY. Do not batch-rewrite the library until the panel is trusted.

---

## 8. Out of scope (for now)

- Replacing pipeline `test-personas.ts` (different job)
- Auto-LLM scoring in CI without a written report (too noisy; skill-driven panel first)
- Renaming all Learn slugs
- Turning voice panel into a public community feature

---

## 9. Decision checkpoints for you

1. **Roster:** Pete / Carlos / Jon / Sarah / Editor — swap anyone?
2. **Pass bar:** zero Reds + ≤1 Yellow — too strict / too loose?
3. **Build Pass A now** (skill + fail the current article honestly), or adjust roster first?

Once those are locked, implement Pass A on the current exercise article until the panel is Green — that is the craft pass the structural grader cannot do.
