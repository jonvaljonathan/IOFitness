# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Adults who will train when the plan is clear, honest, and adaptable. Not an age niche. Includes people coming back from time off, training around a limitation, chasing muscle or fat loss, balancing sport and lifting, or starting a habit later in life.

**Politely ignore:** Ultra-specialized athletes who need elite single-sport periodization as the core product; people who want comforting lies and quit when told the truth.

*(Confirmed in `docs/brand-bible.md` §2 — locked brand quiz.)*

## Product Purpose

IOFitness is adaptive training that stays with you: it monitors what happened, adjusts the plan, and programs the next work properly — safely, progressively, and honestly from wherever you are.

Success looks like people sticking with a plan that still makes sense after missed sessions, sore joints, sport weekends, and real timelines — not a one-shot generated workout they abandon.

This marketing site (`io.fitness`) is the door: situations + promise, Learn for authority, path into the app. The native app executes the week.

*(Confirmed in brand bible §1, §9.)*

## Positioning

**Own:** the trainer that stays with you across weeks.

**Refuse:** “ChatGPT, but workouts” / one-shot LLM generators as the product story.

**North star feel:** what a good personal trainer should do when they actually pay attention — progressive, safe, honest.

*(Confirmed in brand bible §7.)*

## Operating Context

- **Homepage** — situations + promise; convert curiosity into understanding; product UI proof (app plates) without photography.
- **Learn** — authority teaching; answer “what should the plan do next?”; cite sources.
- **App (separate repo, `IOFit`)** — execute the week; Adapt when life moves (time, place, this hurt, re-entry).
- **Planned (do not ship empty):** `/how-it-works`, `/methodology` (`lib/site.ts`).

## Capabilities and Constraints

**Marketing site today:**
- Next.js App Router marketing + Learn articles
- Early-access / waitlist UX was removed as fake; primary CTA is **Get the App** → `#` until a real App Store / TestFlight URL exists
- No photography; product proof via type + D1 app UI plates
- IndexNow / SEO tooling present

**Must not claim:**
- Diagnosis, medical treatment, guaranteed results, fake precision timelines

**Undecided / open:**
- Real app-store / TestFlight destination for Get the App
- Whether `/how-it-works` ships before or after public app download

## Brand Commitments

Canonical: **`docs/brand-bible.md`**. If another doc conflicts, the bible wins until deliberately revised.

| Commitment | Form |
|---|---|
| Product name | **IOFitness** (one word; never spaced / Io Fitness) |
| Brand line | **Get better.** |
| Soft close | **IOFitness is built to…** / **built around…** (active; never “being designed”) |
| Voice | Warm coach. Calm. Plainspoken. Celebrates wins. Unapologetically truthful. One voice on homepage, Learn, app, ads. |
| Visual lane | D1 — warm paper + forest; Fraunces **wordmark only**; Source Sans 3 for headlines/UI/body; no AI glow / hustle-bro |

Operational brief: `.agents/product-marketing.md`.

## Evidence on Hand

- Brand bible + quiz decisions: `docs/brand-bible.md`, `docs/brand-quiz/`
- Live product UI plates on homepage (home / Adapt / timer) when PR #56 is merged — CSS plates matching app D1 tokens, not photography
- Learn article corpus under `content/articles/`
- **Do not fabricate:** testimonials, customer logos, App Store rankings, clinical outcomes

## Product Principles

1. **Recommend, never force** — honesty and choice over hustle.
2. **Stay with you** — the plan changes after real training shows up.
3. **Truthful timelines** — kind ≠ soft-pedaled; ranges and context, not promises.
4. **One voice** — marketing and product speak the same coach.
5. **Product, not brochure** — editorial warmth without campus-magazine energy; show the workout app.

## Accessibility & Inclusion

No product-specific WCAG target was locked in the brand quiz. Default expectation for this site: readable contrast on paper/ink, keyboard-reachable primary nav and CTAs, skip link present in `app/layout.tsx`. Strengthen standards when a formal a11y bar is set.
