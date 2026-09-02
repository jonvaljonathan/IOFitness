# IOFitness public website

Marketing and content site for [IOFitness](https://io.fitness). This is not the training application.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Server Components by default
- Postgres (Neon) for early-access signups

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

The homepage form validates an email address and an optional goal, then upserts a row in Postgres via a server action.

Required environment variable:

- `DATABASE_URL` — Postgres connection string (Neon free tier works on Vercel)

Schema:

- Table `early_access_signups` (`email` unique, optional `goal`, timestamps)
- Created automatically on first signup; SQL is also in `sql/early-access.sql`

Re-submitting the same email updates the existing row (and refreshes `goal` when provided) instead of creating a duplicate.
