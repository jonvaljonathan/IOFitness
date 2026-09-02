# IOFitness public website

Marketing and content site for [IOFitness](https://io.fitness). This is not the training application.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Server Components by default
- Resend Contacts API for early-access signups

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

The homepage form validates an email address and an optional goal, then upserts a Resend contact via a server action.

Required environment variable:

- `RESEND_API_KEY` — Resend API key with Full access (not send-only)

Optional environment variable:

- `RESEND_EARLY_ACCESS_SEGMENT_ID` — Segment ID for an "IOFitness Early Access" segment in Resend

Optional goal answers are stored on the contact as the `early_access_goal` custom property (created automatically on first use if missing).
