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
