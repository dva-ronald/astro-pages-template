import { z } from 'astro:content';

export const themeSchema = z.enum(['light', 'dark', 'brand']).default('light');
export const variantSchema = z.enum(['default', 'split', 'centered', 'compact', 'band']).default('default');

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const buttonSchema = z.object({
  label: z.string(),
  style: z.enum(['primary', 'secondary']).default('primary'),
  /** Page slug from Pages CMS `reference` (collection: pages) */
  page: z.string().optional(),
  /** Custom / external URL; overrides `page` when set */
  href: z.string().optional(),
});

export const heroBlockSchema = z.object({
  type: z.literal('hero'),
  theme: themeSchema.optional(),
  variant: z.enum(['default', 'split', 'centered']).default('default'),
  brand: z.string().optional(),
  headline: z.string(),
  text: z.string().optional(),
  /** Prefer this list (add/remove buttons in CMS). */
  buttons: z.array(buttonSchema).max(3).optional(),
  /** @deprecated Use `buttons` */
  primaryCta: linkSchema.optional(),
  /** @deprecated Use `buttons` */
  secondaryCta: linkSchema.optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
});

export const richTextBlockSchema = z.object({
  type: z.literal('richText'),
  theme: themeSchema.optional(),
  variant: z.enum(['default', 'narrow', 'band']).default('default'),
  heading: z.string().optional(),
  body: z.string(),
});

export const featuresBlockSchema = z.object({
  type: z.literal('features'),
  theme: themeSchema.optional(),
  variant: z.enum(['default', 'split', 'compact']).default('default'),
  heading: z.string().optional(),
  text: z.string().optional(),
  items: z
    .array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    )
    .default([]),
});

export const ctaBlockSchema = z.object({
  type: z.literal('cta'),
  theme: themeSchema.optional(),
  variant: z.enum(['default', 'band', 'centered']).default('default'),
  heading: z.string(),
  text: z.string().optional(),
  buttons: z.array(buttonSchema).max(3).optional(),
  /** @deprecated Use `buttons` */
  primaryCta: linkSchema.optional(),
  /** @deprecated Use `buttons` */
  secondaryCta: linkSchema.optional(),
});

export const faqBlockSchema = z.object({
  type: z.literal('faq'),
  theme: themeSchema.optional(),
  variant: z.enum(['default', 'compact', 'split']).default('default'),
  heading: z.string().optional(),
  text: z.string().optional(),
  items: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    )
    .default([]),
});

export const imageTextBlockSchema = z.object({
  type: z.literal('imageText'),
  theme: themeSchema.optional(),
  variant: z.enum(['default', 'split', 'reversed']).default('default'),
  heading: z.string(),
  text: z.string().optional(),
  image: z.string(),
  imageAlt: z.string().optional(),
  buttons: z.array(buttonSchema).max(2).optional(),
  /** @deprecated Use `buttons` */
  cta: linkSchema.optional(),
});

export const logosBlockSchema = z.object({
  type: z.literal('logos'),
  theme: themeSchema.optional(),
  variant: z.enum(['default', 'compact', 'band']).default('default'),
  heading: z.string().optional(),
  items: z
    .array(
      z.object({
        name: z.string(),
        image: z.string().optional(),
      }),
    )
    .default([]),
});

export const blogRollBlockSchema = z.object({
  type: z.literal('blogRoll'),
  theme: themeSchema.optional(),
  variant: z.enum(['default', 'compact', 'split']).default('default'),
  heading: z.string().optional(),
  text: z.string().optional(),
  limit: z.number().int().positive().optional(),
});

export const blockSchema = z.discriminatedUnion('type', [
  heroBlockSchema,
  richTextBlockSchema,
  featuresBlockSchema,
  ctaBlockSchema,
  faqBlockSchema,
  imageTextBlockSchema,
  logosBlockSchema,
  blogRollBlockSchema,
]);

export type Block = z.infer<typeof blockSchema>;
export type ThemeName = z.infer<typeof themeSchema>;

export function themeClass(theme: ThemeName | undefined = 'light'): string {
  return `theme-${theme}`;
}
