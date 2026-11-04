import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the GitHub Actions workflow.
// For a custom domain, set SITE_URL=https://yourdomain.com and BASE_PATH=/ .
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  redirects: {
    // The old WordPress nav menu linked to this slug; the page's real slug is /ourpartners/
    '/our-partners': '/ourpartners/',
  },
});
