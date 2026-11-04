# formulastudent
Website for Formula Student UL, built with [Astro](https://astro.build) and migrated from WordPress.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
```

## Structure

- `src/content/pages/*.html`, `src/content/posts/*.html` – page/post bodies converted from the WordPress block editor (edit these directly).
- `src/content/site.json` – titles, slugs and dates for pages and posts.
- `src/lib.js` – navigation, helpers.
- `src/styles/global.css` – recreation of the WordPress theme (palette, fonts, layout, core blocks).
- `src/styles/flip-cards.css`, `src/scripts/flip-cards.js` – the `fsul-flip-cards` plugin, ported as-is.
- `public/wp-content/uploads/` – media, kept at the original WordPress paths.

URLs match WordPress (`/%postname%/`): `/newsroom/`, `/ourpartners/`, `/september-october-update/`, etc.

## Deploying to GitHub Pages

1. In the repo: **Settings → Pages → Source: GitHub Actions**.
2. Push to `main`; `.github/workflows/deploy.yml` builds and deploys.

By default the site is served at `https://<owner>.github.io/<repo>/`. For a custom domain, set `SITE_URL` to the
domain and `BASE_PATH` to `/` in the workflow, and add a `public/CNAME` file containing the domain.
