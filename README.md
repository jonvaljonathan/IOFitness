# IOFitness public website

Marketing and content site for [IOFitness](https://io.fitness). This is not the training application.

Training app / Supabase project: [jonvaljonathan/iofit](https://github.com/jonvaljonathan/iofit).

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Server Components by default
- Supabase (shared with iofit) for early-access signups

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content

- Homepage copy lives in `content/homepage.ts`.
- Learn articles are registered in `content/learn.ts`. Add an object there, then a matching page will be generated at `/learn/[slug]`.
- `/how-it-works` and `/methodology` are planned in `lib/site.ts` (`plannedRoutes`) and should not be published until they have real content.

## Early access

The homepage form validates an email address and an optional goal, then upserts a row in the shared iofit Supabase project via a server action (service role key — never sent to the browser).

Required environment variables (same names as iofit):

- `SUPABASE_URL` — project URL from the iofit Supabase project
- `SUPABASE_SERVICE_KEY` — service role key from the same project

Optional alias: `SUPABASE_SERVICE_ROLE_KEY` (accepted if `SUPABASE_SERVICE_KEY` is unset).

Schema (owned by iofit migrations):

- Table `early_access_signups` (`email` unique, optional `goal`, timestamps)
- Migration: `supabase/migrations/20260903000000_early_access_signups.sql` in iofit
- RLS: no anon/authenticated access; service role only

Re-submitting the same email updates the existing row (and refreshes `goal` when provided) instead of creating a duplicate. No welcome email or double opt-in yet.
