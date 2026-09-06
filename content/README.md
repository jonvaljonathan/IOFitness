# Content

Edit copy here instead of inside presentational components.

- `homepage.ts` — approved homepage wording
- `learn.ts` — Learn index copy and the article list

## Copy skills

Brand source of truth: `docs/brand-bible.md`  
Short marketing brief: `.agents/product-marketing.md`

Before writing or revising homepage or Learn copy, read:

1. `.cursor/skills/copywriting/SKILL.md` for persuasive page copy
2. `.cursor/skills/copy-editing/SKILL.md` for editing passes on existing copy
3. `.cursor/skills/cro/SKILL.md` for conversion review of homepage and marketing pages
4. `.cursor/skills/learn-copy-tone/SKILL.md` for Learn article house voice

These are also mirrored under `.agents/skills/`.

## Publishing a Learn article

1. Match the house voice in published `content/articles/` pieces and `learn-copy-tone`.
2. Add a content module under `content/articles/`.
3. Register it in `learnArticles` inside `learn.ts`.
4. The `/learn/[slug]` route, sitemap, and Article JSON-LD pick it up automatically.

Do not add placeholder articles. Do not link to unpublished routes.

`/how-it-works` and `/methodology` are listed as planned routes in `lib/site.ts`. Do not add `app` pages for them until the content is real.
