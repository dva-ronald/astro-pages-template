---
title: About
description: Why Astra exists — a calm default for Astro + Pages CMS sites.
slug: about
sections:
  - type: hero
    theme: dark
    variant: centered
    brand: Astra
    headline: A template that prefers rails over sprawl.
    text: Astra is demo content for an Astro + Pages CMS starter. Keep the block schema stable; restyle through tokens and variants.
  - type: richText
    theme: light
    variant: narrow
    heading: What this is for
    body: |
      Spin up simple marketing and brochure sites quickly. Editors change copy and block order in Pages CMS. Developers and AI agents adapt look-and-feel from Figma or screenshots without inventing a new content model each time.

      The design basis is intentional: CSS tokens, parent section themes (`light`, `dark`, `brand`), and named block variants. That is the Lumos-like discipline — without adopting Lumos itself.
  - type: features
    theme: light
    variant: compact
    heading: Working agreements
    items:
      - title: Keep the schema
        text: Add blocks carefully. Prefer new variants on existing blocks over one-off layouts in content files.
      - title: Restyle via tokens
        text: Change fonts, palette, and spacing in `global.css` before rewriting components.
      - title: Motion with purpose
        text: A few entrance motions are enough. Respect reduced-motion preferences.
  - type: faq
    theme: light
    variant: split
    heading: Common questions
    text: Straight answers for people cloning the template.
    items:
      - question: Do I have to use the blog?
        answer: No. The collection is optional. Leave it empty or hide nav links if a site does not need posts.
      - question: Can editors invent new layouts?
        answer: They choose among the defined blocks and variants. Free-form layout chaos is intentionally out of scope.
      - question: Where should AI start when restyling?
        answer: Tokens and themes first, then block variants, then component markup — while keeping `.pages.yml` and Zod schemas aligned.
  - type: cta
    theme: brand
    variant: band
    heading: Ready for the next site?
    text: Fork the repo, rename the brand in site config, and swap demo copy.
    buttons:
      - label: Open work samples
        style: primary
        page: work
---
