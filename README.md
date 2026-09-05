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

Copy `.env.example` to `.env.local` and set `SUPABASE_URL` + `SUPABASE_SERVICE_KEY` if you want the early-access form to persist locally (same values as iofit).

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

## Search / discovery

- `app/robots.ts` allows Googlebot, Bingbot, OAI-SearchBot, and `*`.
- `app/sitemap.ts` lists published routes and Learn articles.
- Organization + WebSite JSON-LD ship in the root layout; Learn articles get Article JSON-LD when published.
- Canonical host is `https://io.fitness` (www redirects via `next.config.ts`).

### IndexNow

A key file lives at `public/{key}.txt` (committed). After publishing or updating public pages on production:

```bash
npm run indexnow
# or specific URLs:
node scripts/notify-indexnow.mjs https://io.fitness/learn/your-slug
```

### Webmaster verification (manual)

1. **Google Search Console** — add `https://io.fitness` as a URL-prefix property, choose HTML tag verification, put the token in Vercel env `GOOGLE_SITE_VERIFICATION`, redeploy, then verify. Submit `https://io.fitness/sitemap.xml`.
2. **Bing Webmaster Tools** — add the site, choose meta tag verification, put the token in Vercel env `BING_SITE_VERIFICATION`, redeploy, then verify. Import the same sitemap (or sync from GSC).
