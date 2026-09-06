# IOFitness Brand Bible

Canonical brand reference for product, marketing, Learn, and in-app copy.
If another doc conflicts with this file, **this file wins** until it is deliberately revised.

Working quiz notes that led here: `docs/brand-quiz/decisions-so-far.md`.

---

## 1. Product frame

**In voice (use these; keep all three in rotation):**

1. No matter where you’re starting, you can get better. We’ll help you do it safely, progressively, and honestly.
2. You can get better from here. We’ll build the path with you: progressive, safe, and straight with you.
3. Getting better is possible from where you are. We stick with you and program it properly.

**Internal paraphrase (not customer-facing):** Adaptive training for people who know what they want their body to do, but not how to program the path — delivered like a trainer who stays with you.

**What we are not:**
- A one-shot AI workout generator
- A calorie / wellness tracker first
- A physio clinic or diagnostic service
- Hustle-bro motivation content
- A specialist system for elite single-sport periodization (e.g. dedicated marathon programming)

---

## 2. Audience

**Primary:** Adults who will train if the plan is clear, honest, and adaptable. Not defined by age band. Includes people coming back from time off, training around a limitation, chasing muscle or fat loss, balancing sport and lifting, or starting a habit later in life.

**Politely ignore:**
- Ultra-specialized athletes who need sport-specific high-performance systems as the core product
- People who want comforting lies and quit when told the truth

**Truth contract:** We tell people real timelines. Want visible muscle? Think months, not days. Seventy and starting strength? Possible — and harder; we say so. Torn Achilles? Recovery is long; we don’t pretend otherwise. Kind ≠ soft-pedaled.

---

## 3. Naming and brand line

| Use | Form |
|---|---|
| Product name | **IOFitness** (one word, capital I-O-F) |
| Learn section | **IOFitness Learn** |
| Brand line | **Get better.** |
| Soft product close | **IOFitness is built to…** |

**Do not use:** Io Fitness, io fitness, IO Fitness (spaced), I.O. Fitness.

**Brand line rules:**
- Primary lockup and footer: `Get better.`
- Do not replace with punchier slogan variants in marketing without updating this bible
- Runner-ups kept in the archive only (not active): Keep getting better; Better from here; Progress you can trust; Train honestly; Built to stick; Show up. Get better; Intentionally better

**Soft close:**
- Prefer purpose form: `IOFitness is built to help you stay with a plan that adapts when life gets loud.`
- Prefer model form: `IOFitness is built around that kind of decision.`
- Avoid passive: `is being designed`, `is being built`, `will one day`
- If a capability is not shipped yet, say what we’re building toward in active voice without fake present-tense product claims — or omit the product close

---

## 4. Personality

**Warm coach. Calm. Plainspoken. Honest.**

- Celebrates real wins
- Not demanding, not hype
- Unapologetically truthful — including hard timelines
- Motivating through clarity and progress, not pressure

**One voice everywhere:** homepage, Learn, app UI, ads. Dial intensity slightly by surface; do not change character.

| More like | Less like |
|---|---|
| Warm coach | Cold systems memo |
| Calm / understated | Fired-up hype |
| Plainspoken | Jargon-heavy S&C paper |
| Empathetic + truthful | Demanding taskmaster |

Humor: light and human is fine; never sarcastic at the user’s expense, never meme-lord fitness Twitter.

---

## 5. Voice and vocabulary

### Prefer / avoid

| Prefer | Avoid |
|---|---|
| sore shoulder, angry knee | local limitation, constrained region |
| swap the lift | substitute by training intent |
| keep training legs and back | continue developing unconstrained qualities |
| show up / come back tomorrow | crush your goals / no excuses |
| pick a primary goal | optimize your stack |
| give it enough weeks | transform in 21 days |
| eat for the goal | biohack your macros |

### Brand vocabulary worth repeating

show up · come back tomorrow · pick a primary goal · give it enough weeks · eat for the goal · keep the week repeatable · get better · safe and progressive · straight with you

### Titles (especially Learn)

Name the situation. Plain, explanatory, calm. Not punchy slogans.

- Good: `Pick the Right Exercises for Your Goals`
- Bad: `Muscle Takes Months. Train Like You Mean It.`

Full Learn register: `.cursor/skills/learn-copy-tone/SKILL.md`.

---

## 6. Claims and evidence

**Never:**
- Diagnose injury or disease
- Prescribe medical treatment or rehab protocols as medicine
- Guarantee results, weight lost, or muscle gained
- Fake precision (universal “exactly 48 hours,” one timeline for everyone)

**Do:**
- Separate evidence from judgment
- Use real timelines as ranges and context, not promises
- Learn: cite sources; footnotes / source list at the bottom
- Marketing: light evidence nods are fine; do not write a research paper

---

## 7. Competitive stance

**We own:** the trainer that stays with you — monitors what happened, adjusts the plan, and programs the next work properly.

**We are not trying to win:** “generate me a workout” as a one-off LLM prompt. That can start someone; it does not stick with them.

**North star feel:** what a good personal trainer or PT *should* do across weeks — progressive, safe, honest — when they actually pay attention.

---

## 8. Visual system (Lane D1)

Editorial warmth without campus-brochure energy. Feels like a **workout app**, not a college magazine.

### Color

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#f3efe6` | Page background |
| `--field` | `#fffcf7` | Raised surfaces / cards |
| `--ink` | `#1a1714` | Primary text |
| `--muted` | `#5e574e` | Secondary text |
| `--accent` | `#2f4a3c` | Forest — CTAs, links, focus |
| `--accent-hover` | `#24382e` | Hover |
| `--rule` | `#d6cfc3` | Hairlines / borders |

Use semantic tokens / CSS variables. Do not invent new brand hexes in components.

**Ban:** purple AI glow, hustle-bro black/red neon, generic purple-indigo SaaS gradients.

### Typography

| Role | Face | Notes |
|---|---|---|
| Wordmark only | **Fraunces** (`font-display`) | Serif reserved for **IOFitness** lockup |
| Headlines, UI, body | **Source Sans 3** (`font-sans`) | Product-forward; not thesis typography |

Do not set article H1s or marketing heroes in Fraunces. That is what made the site feel collegiate.

### Layout and chrome

- Content width: marketing/`Learn` index ~ `max-w-5xl`; articles ~ `max-w-3xl`
- CTAs: solid forest, `rounded-sm`, comfortable tap height (~`min-h-12`)
- Cards OK when they hold interaction (app home, workout). Marketing stays mostly editorial sections with clear CTAs — not dashboard soup
- Same paper system for marketing and app (not a separate dark “hybrid” theme)
- **No photography for now** — type and product UI only

### Logo

- Wordmark: **IOFitness** in Fraunces
- App icon / mark: **IO** on forest field (see `app/icon.tsx`)
- Clear space: keep the wordmark uncrowded; don’t lock it into gradients or glow

---

## 9. Content architecture

| Surface | Job |
|---|---|
| Homepage | Situations + promise; convert curiosity into understanding |
| Learn | Authority teaching; answer “what should the plan do next?” |
| App | Execute the week; adapt when life moves |
| How it works / Methodology | Planned — ship only with real content |

Learn is the long-trust layer. Homepage is the door. Product is the stay-with-you trainer.

---

## 10. Do / don’t examples

**Do:**  
“You want more muscle. Training hard without eating for it usually stalls you. Give the block enough weeks to show a trend.”

**Don’t:**  
“Unlock hypertrophic potential with our AI-powered stimulus engine.”

**Do:**  
“Missed Monday? Don’t throw the week out. Finish the work that still matters.”

**Don’t:**  
“No days off. Winners train through it.”

**Do (soft close):**  
“IOFitness is built to keep the next session obvious when motivation gets quiet.”

**Don’t (soft close):**  
“IOFitness is being designed around a proprietary multi-agent pipeline.”

---

## 11. Agent and engineering checklist

Before shipping brand-facing work:

1. Read this bible (and Learn tone skill for articles)
2. Brand line is **Get better.** — not a new slogan
3. Soft close uses **IOFitness is built to…** when present
4. Colors/fonts come from tokens above
5. Fraunces only on the wordmark
6. No diagnosis, guarantees, or fake precision
7. Sounds like something you’d say to a real client

Operational excerpt for marketing skills: `.agents/product-marketing.md`.
