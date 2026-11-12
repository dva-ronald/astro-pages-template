# Astra — Astro + Pages CMS template

A static **Astro** site template with **Tailwind**, a shared **design basis** (CSS tokens, parent themes, named block variants), and **Pages CMS** (`.pages.yml`) for editor-friendly, block-based pages.

Demo brand content ships as the default site so you can preview immediately, then clone and rebrand.

## Stack

- Astro (static)
- Tailwind CSS v4 + design tokens
- Pages CMS via `.pages.yml`
- Optional blog collection

## Quick start

```bash
npm install
npm run dev
```

Preview production output:

```bash
npm run build
npm run preview
```

Requires **Node.js ≥ 22.23.4** (Astro 7).

## Pages CMS setup

Self-hosted DvA instance: [https://pagescms.dva.dev](https://pagescms.dva.dev) (after GitHub App is configured). Hosted alternative: [app.pagescms.org](https://app.pagescms.org).

1. Push this repo to GitHub (or fork/clone for a new site).
2. Open Pages CMS, sign in with GitHub, and install the GitHub App on the org/account that owns the repo.
3. Open the repository. Pages CMS reads `.pages.yml`.
4. Edit **Site settings**, **Navigation**, **Pages** (block sections), and optional **Blog** posts. Saves commit back to the repo; your host rebuilds on push.

Media uploads go to `public/media` (served as `/media/...`).

### Edit pages like WordPress + ACF

Think of **Pages → Page sections** as ACF Flexible Content:

1. Open **Pages** → pick a page (e.g. Home).
2. Under **Page sections**, click **Add** and choose a block: Hero, Text section, Features, Image + text, FAQ, Call to action, Logo strip, Blog posts.
3. Fill the fields (layout, theme, text, buttons). Buttons can **link to an existing page** or a custom URL.
4. Drag sections to reorder; collapse them to scan the page structure.
5. **Save** — Pages CMS commits to Git; deploy/rebuild picks it up.

**Site settings** ≈ WordPress general settings. **Navigation** ≈ a simple menu (page picker or custom URL such as `/blog/`). **Blog** is optional long-form posts, separate from block pages.

**Blokken leren:** zie [docs/editor-blokken.md](docs/editor-blokken.md) — wanneer welk blok, en welke instellingen (NL cheatsheet).

## Clone for a new site

1. Use this repo as a template / fork / `git clone`.
2. Rename the package in `package.json` and update `src/data/site.json`.
3. Replace demo pages in `src/content/pages` and posts in `src/content/blog`.
4. Adjust navigation in `src/data/navigation.json`.
5. Restyle via tokens in `src/styles/global.css` (fonts, palette, spacing) before rewriting components.
6. Prefer trailing slashes on internal links (`/blog/`, `/work/`). The template accepts both `/blog` and `/blog/` (`trailingSlash: 'ignore'`) and normalizes outbound hrefs.
7. Point Pages CMS at the new repo and deploy (Cloudflare Pages, Netlify, GitHub Pages, etc.).

## Design basis

| Layer | Where | Purpose |
| --- | --- | --- |
| Tokens | `src/styles/global.css` `:root` | Color, type, space, radius |
| Parent themes | `.theme-light` / `.theme-dark` / `.theme-brand` | Section atmosphere |
| Block variants | Each block’s `variant` field | Limited layout choices (not utility strings in CMS) |

**Blocks (v1):** `hero`, `richText`, `features`, `cta`, `faq`, `imageText`, `logos`, `blogRoll`

Schemas live in:

- Zod: `src/lib/blocks.ts` + `src/content.config.ts`
- CMS: `.pages.yml`
- UI: `src/components/blocks/*` via `BlockRenderer.astro`

Keep those three aligned when you extend the model.

## Conventions for AI (and humans)

1. **Keep the block schema** unless the product truly needs a new block. Prefer a new **variant** on an existing block.
2. **Restyle through tokens and themes** first (`global.css`), then variants, then component markup.
3. **Do not** store long Tailwind class strings in CMS content.
4. When adding a block: update Zod, `.pages.yml`, the Astro component, and `BlockRenderer` together.
5. Homepage content is `src/content/pages/home.md` (`slug: home`). Other pages use `slug` as the URL path.
6. Blog is optional — safe to leave unused; remove nav links if a site does not need it.
7. Match brand-first hero rules: brand as a hero-level signal, one headline, one short supporting line, CTA group, one dominant visual — no card clutter in the first viewport.

## Project map

```text
.pages.yml                 # Pages CMS config
src/
  content/pages/           # Block-based pages (Markdown + frontmatter)
  content/blog/            # Optional blog posts
  data/site.json           # Site title, description, URL
  data/navigation.json     # Primary nav
  components/blocks/       # Block UI
  lib/blocks.ts            # Shared Zod block schemas
  styles/global.css        # Tokens + themes + motion
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Static production build to `dist/` |
| `npm run preview` | Preview the production build |

## License

MIT — use freely as a starting point for client and internal sites.
