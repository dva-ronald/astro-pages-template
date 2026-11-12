/**
 * Normalize hrefs for this template's trailing-slash convention.
 * - External URLs (http/https/mailto/tel/#) left as-is
 * - Internal paths get a trailing slash (except bare "/")
 */
export function normalizeHref(href: string | undefined | null): string {
  if (!href) return '#';
  const trimmed = href.trim();
  if (!trimmed) return '#';

  if (
    /^(https?:|mailto:|tel:|sms:)/i.test(trimmed) ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('//')
  ) {
    return trimmed;
  }

  const [pathPart, ...rest] = trimmed.split(/([?#])/);
  const suffix = rest.join('');
  let path = pathPart || '/';

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  if (path !== '/' && !path.endsWith('/')) {
    path = `${path}/`;
  }

  return `${path}${suffix}`;
}

/** Map a Pages CMS page slug (or path) to a site href. */
export function pageSlugToHref(slug: string | undefined | null): string {
  if (!slug) return '#';
  const value = slug.trim().replace(/^\/+|\/+$/g, '');
  if (!value || value === 'home' || value === 'index') return '/';
  return normalizeHref(`/${value}/`);
}

export type ButtonStyle = 'primary' | 'secondary';

export type CmsButton = {
  label: string;
  style?: ButtonStyle | null;
  /** Page slug from Pages CMS reference field */
  page?: string | null;
  /** Custom / external URL; wins over `page` when set */
  href?: string | null;
};

export type LegacyLink = {
  label: string;
  href: string;
};

export type ResolvedButton = {
  label: string;
  style: ButtonStyle;
  href: string;
};

export function resolveButtonHref(button: CmsButton): string {
  const custom = button.href?.trim();
  if (custom) return normalizeHref(custom);
  if (button.page) return pageSlugToHref(button.page);
  return '#';
}

/**
 * Prefer `buttons[]`. Fall back to legacy primaryCta / secondaryCta / cta.
 */
export function resolveButtons(input: {
  buttons?: CmsButton[] | null;
  primaryCta?: LegacyLink | null;
  secondaryCta?: LegacyLink | null;
  cta?: LegacyLink | null;
}): ResolvedButton[] {
  if (input.buttons?.length) {
    return input.buttons
      .filter((b) => b?.label)
      .slice(0, 3)
      .map((b) => ({
        label: b.label,
        style: b.style === 'secondary' ? 'secondary' : 'primary',
        href: resolveButtonHref(b),
      }));
  }

  const legacy: ResolvedButton[] = [];
  if (input.primaryCta?.label) {
    legacy.push({
      label: input.primaryCta.label,
      style: 'primary',
      href: normalizeHref(input.primaryCta.href),
    });
  }
  if (input.secondaryCta?.label) {
    legacy.push({
      label: input.secondaryCta.label,
      style: 'secondary',
      href: normalizeHref(input.secondaryCta.href),
    });
  }
  if (!legacy.length && input.cta?.label) {
    legacy.push({
      label: input.cta.label,
      style: 'primary',
      href: normalizeHref(input.cta.href),
    });
  }
  return legacy.slice(0, 3);
}

export function buttonClass(style: ButtonStyle): string {
  return style === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary';
}
