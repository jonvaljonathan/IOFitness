# Content

Edit copy here instead of inside presentational components.

- `homepage.ts` — approved homepage wording
- `learn.ts` — Learn index copy and the article list

To publish a Learn article:

1. Add a content module under `content/articles/`.
2. Register it in `learnArticles` inside `learn.ts`.
3. The `/learn/[slug]` route, sitemap, and Article JSON-LD pick it up automatically.

Do not add placeholder articles. Do not link to unpublished routes.

`/how-it-works` and `/methodology` are listed as planned routes in `lib/site.ts`. Do not add `app` pages for them until the content is real.
