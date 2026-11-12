// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  // Accept both /blog and /blog/ (CMS editors often omit the slash).
  // Outbound links are still normalized to trailing slashes via normalizeHref().
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
