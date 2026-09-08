---
name: IOFitness
description: Adaptive training marketing — Get better. Warm paper + forest D1.
colors:
  paper: "#f3efe6"
  field: "#fffcf7"
  ink: "#1a1714"
  muted: "#5e574e"
  accent: "#2f4a3c"
  accent-hover: "#24382e"
  rule: "#d6cfc3"
typography:
  wordmark:
    fontFamily: "Fraunces, Georgia, serif"
    fontWeight: 600
    letterSpacing: "tight"
  headline:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "tight"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "1.125rem"
    lineHeight: 1.75
rounded:
  sm: "2px"
  md: "6px"
  phone: "1.75rem"
spacing:
  section-y: "3.5rem"
  section-y-lg: "5rem"
  content-gap: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  product-phone:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.phone}"
---

# Design System

Canonical visual lane: **D1** (see `docs/brand-bible.md` §8). Tokens live in `app/globals.css` as CSS variables; Tailwind maps them via `@theme inline`.

## Overview

Editorial warmth without campus-brochure energy. Feels like a **workout app**, not a college magazine. Marketing surfaces are sectional type on warm paper with forest CTAs; product proof uses quiet matte phone plates of real app UI — no photography, no AI glow, no purple SaaS gradients.

## Colors

| Token | Hex | Role |
|---|---|---|
| `paper` | `#f3efe6` | Page background |
| `field` | `#fffcf7` | Raised surfaces / phone chrome interior |
| `ink` | `#1a1714` | Primary text |
| `muted` | `#5e574e` | Secondary text |
| `accent` | `#2f4a3c` | Forest — CTAs, links, focus, active nav |
| `accent-hover` | `#24382e` | CTA hover |
| `rule` | `#d6cfc3` | Hairlines / borders |

Do not invent new brand hexes in components. Semantic success/warning greens for in-phone workout plates may mirror the app (`#3f6b4a` work phase) but keep marketing chrome on the table above.

## Typography

| Role | Face | Notes |
|---|---|---|
| Wordmark only | **Fraunces** (`font-display`) | **IOFitness** lockup in header and product plates |
| Headlines, UI, body | **Source Sans 3** (`font-sans`) | Heroes, section H1/H2, Learn titles, body |

**Ban:** Fraunces on article H1s or marketing heroes — that made the site feel collegiate.

Loaded in `app/layout.tsx` via `next/font/google`.

## Layout

- Content width: marketing / Learn index ~ `max-w-5xl`; articles ~ `max-w-3xl`
- Horizontal padding: `px-5` / `sm:px-8`
- Section rhythm: border-t `rule`, generous vertical padding (`py-14` / `sm:py-20`)
- Homepage hero: one composition — brand, **Get better.**, one sentence, one CTA group, one product phone (stack on small screens; side-by-side from `lg`)
- Process beats may pair copy with a smaller phone plate; do not turn the first viewport into a dashboard or card collage

## Elevation & Depth

Prefer borders (`rule`) over shadows. Product phone: matte field fill, thin `rule` border, **no glow**, no multi-layer shadow stacks. Cards on marketing pages are rare; OK inside app UI plates when they hold interaction.

## Shapes

- CTAs: `rounded-sm` (~2px), solid forest, `min-h-12`
- Phone chrome: large continuous radius (`~1.75rem`), quiet home-indicator bar
- Avoid pill clusters and rounded-full marketing chips

## Components

| Component | Path / pattern |
|---|---|
| Site header | `components/site-header.tsx` — Fraunces wordmark + Learn |
| Site footer | `components/site-footer.tsx` |
| Product phone | `components/product-phone.tsx` — matte frame for app plates |
| App plates | `components/app-preview/*` — home, Adapt / This hurt, timer |
| Primary CTA | Solid `bg-accent` / `text-paper` / `hover:bg-accent-hover` |

Primary CTA label today: **Get the App** (`content/homepage.ts`). Keep `href: "#"` until a real store URL exists — do not revive a fake waitlist.

## Do's and Don'ts

**Do**
- Keep Fraunces for the **IOFitness** wordmark only
- Show product UI on paper to prove the trainer that stays with you
- Soft-close with **IOFitness is built to…** / **built around…**
- Preserve paper/forest tokens across marketing and app

**Don't**
- Photography (for now)
- Purple AI glow, hustle neon, purple–indigo SaaS gradients
- Dashboard soup / stat strips / floating badges on hero media
- Passive “being designed / intended model” soft closes
- Ship empty `/how-it-works` or `/methodology` pages
