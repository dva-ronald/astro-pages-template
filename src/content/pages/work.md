---
title: Work
description: Sample project stories that exercise Astra’s content blocks.
slug: work
sections:
  - type: hero
    theme: dark
    variant: default
    brand: Astra
    headline: Sample work that shows the blocks.
    text: Two short project stories — enough surface area to preview features, image-text, FAQ, and CTA without pretending this is a real agency portfolio.
  - type: imageText
    theme: light
    variant: default
    heading: Pier & Pine handbook
    text: |
      A member handbook site for a fictional co-op. Block pages for policies, a slim FAQ, and a blog roll for seasonal notes.

      **Stack cue:** Astro static output, Pages CMS for editors, tokens tuned to a coastal green.
    image: /media/project-pier.svg
    imageAlt: Abstract pier lines over soft water color fields
    buttons:
      - label: Read a related note
        style: primary
        href: /blog/tokens-before-utilities/
  - type: features
    theme: light
    variant: split
    heading: What we reused
    items:
      - title: Hero + FAQ
        text: Brand-led hero on dark theme, FAQ in split variant for scannable answers.
      - title: Image + text
        text: Alternating imageText sections for project narrative without card grids.
      - title: Blog roll
        text: Optional posts linked from the homepage without a separate CMS product.
  - type: imageText
    theme: light
    variant: reversed
    heading: Ledger Lab status page
    text: |
      A quiet status and changelog surface for a fictional finance ops tool. Dark brand sections, compact features, and a single CTA into docs.
    image: /media/project-ledger.svg
    imageAlt: Layered ledger bars in ink and chartreuse
  - type: faq
    theme: light
    variant: compact
    heading: About these samples
    items:
      - question: Are these real clients?
        answer: No — they are demo narratives so the template ships with believable content density.
      - question: Can I delete them?
        answer: Yes. Replace `src/content/pages` and blog posts with your site’s content, and update navigation.
  - type: cta
    theme: dark
    variant: centered
    heading: Use these pages as a visual checklist
    text: When restyling, walk homepage → about → work → blog and confirm tokens still hold.
    buttons:
      - label: Back home
        style: primary
        page: home
---
