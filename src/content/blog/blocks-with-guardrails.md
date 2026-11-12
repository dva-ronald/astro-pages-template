---
title: Blocks with guardrails
description: Editors get choices; the template keeps layouts from sprawling.
pubDate: 2026-11-08
---

Astra’s pages are lists of typed blocks: hero, rich text, features, CTA, FAQ, image-text, logos, and an optional blog roll.

Each block exposes a short list of variants. That is the product decision: enough flexibility for marketing pages, not enough rope to invent a unique layout language per page.

If you need something new, prefer:

1. A new **variant** on an existing block
2. A carefully named **new block** with matching Zod + `.pages.yml` fields
3. Never a pile of ad-hoc Tailwind classes stored in CMS content

The blog you are reading is intentionally separate — Markdown body for long-form, blocks for composed pages.
