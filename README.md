# formulastudent
Website for Formula Student UL, built with [Astro](https://astro.build) and migrated from WordPress.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
```

## Structure

| Path | What |
| --- | --- |
| `src/pages/*.astro` | Pages (`index`, `newsroom`, `ourpartners`, `our-car`, `meet-the-team`). Each is a normal Astro page wrapped in `Layout`. |
| `src/pages/[slug].astro` | Renders news posts at `/<slug>/` (WordPress `/%postname%/` permalinks). |
| `src/content/posts/*.md` | News posts as Markdown (`title`, `date`, optional `excerpt` frontmatter). Add a file here to publish a post. |
| `src/content.config.ts` | Content collection schema for posts. |
| `src/layouts/Layout.astro`, `src/components/` | Header, footer, news grid. |
| `src/consts.ts` | Site name, navigation, date formatting. |
| `src/assets/` | Images and the Barlow/Orbitron fonts. Images are optimised by Astro at build time. |
| `src/styles/global.css` | Theme (palette, fonts, layout, WordPress block styles used by the pages). |
| `src/styles/flip-cards.css`, `src/scripts/flip-cards.js` | The old `fsul-flip-cards` plugin, ported as-is (team cards). |
| `public/` | Files served as-is (favicon). |

## Deploying to GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and deploys. Pages must be set to
**Settings → Pages → Source: GitHub Actions**. The site is served at `https://<owner>.github.io/<repo>/`.

For a custom domain, set `SITE_URL` to the domain and `BASE_PATH` to `/` in the workflow, and add a
`public/CNAME` file containing the domain.
