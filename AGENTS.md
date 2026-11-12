# Agent notes — Astra template

## Development

```bash
npm install
npm run dev
npm run build
```

Node.js ≥ 22.23.4 required.

## How to extend this template

1. **Keep the block schema** (Zod + `.pages.yml` + `BlockRenderer`) unless a new block is truly needed.
2. Prefer a new **variant** on an existing block over a one-off layout.
3. **Restyle via tokens** in `src/styles/global.css` and parent themes (`theme-light` / `theme-dark` / `theme-brand`) before rewriting components.
4. Do not put long Tailwind utility strings in CMS content.
5. Internal links: prefer trailing slashes (`/blog/`, `/about/`). `normalizeHref()` in `src/lib/links.ts` adds them when rendering; `trailingSlash: 'ignore'` accepts both forms.
6. CTAs use a `buttons` list (label + style + page reference and/or custom `href`), not fixed primary/secondary fields. Legacy `primaryCta` / `secondaryCta` / `cta` still render via `resolveButtons()`.
5. When adding a block: update `src/lib/blocks.ts`, `.pages.yml`, `src/components/blocks/*`, and `BlockRenderer.astro` together.

## Content map

- Homepage: `src/content/pages/home.md` (`slug: home`)
- Inner pages: `src/content/pages/*.md`
- Blog (optional): `src/content/blog/*.md`
- Site + nav: `src/data/site.json`, `src/data/navigation.json`

## Docs

- Astro: https://docs.astro.build
- Pages CMS: https://pagescms.org/docs/
