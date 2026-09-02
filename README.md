# IOFitness public website

Marketing and content site for [IOFitness](https://io.fitness). This is not the training application.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Server Components by default

## Local development

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Content

- Homepage copy lives in `content/homepage.ts`.
- Learn articles are registered in `content/learn.ts`. Add an object there, then a matching page will be generated at `/learn/[slug]`.
- `/how-it-works` and `/methodology` are planned in `lib/site.ts` (`plannedRoutes`) and should not be published until they have real content.

## Early access

The homepage form validates an email address and an optional goal. Persistence is not connected yet.

Set `EARLY_ACCESS_WEBHOOK_URL` to POST signups as JSON. Until that is set, submissions are logged only.
