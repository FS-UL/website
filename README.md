# Formula Student UL

Website for [Formula Student UL](https://fsul.ie), the University of Limerick student motorsport team that designs, builds and races a single-seater car each year. The site was migrated from WordPress and is currently under construction.

Live at **https://fsul.ie**.

## What's on the site

| Page | URL | Description |
| --- | --- | --- |
| Home | `/` | Hero carousel (main hero, upcoming events, featured posts) and latest news. |
| Our Car | `/ourcar/` | The current car and its specifications. |
| Meet the Team | `/meettheteam/` | Team members, shown as flip cards. |
| Our Partners | `/ourpartners/` | Sponsors and partners. |
| Sponsor | `/sponsor/` | Information for prospective sponsors. |
| Newsroom | `/newsroom/` | Paginated list of news posts. |
| News posts | `/<slug>/` | Individual posts, written in Markdown. |

The site also provides an RSS feed (`/rss.xml`), `robots.txt`, a custom 404 page, and SEO metadata via `astro-seo`.

## Tech Stack

- [Astro](https://astro.build) static site (no client framework)
- Content collections for news posts and events (Markdown)
- Plain CSS with a shared theme, Orbitron and Barlow fonts
- Deployed to GitHub Pages via GitHub Actions

## Development

Requires Node 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview  # serve the built site locally
```

## Project Structure

| Path | What |
| --- | --- |
| `src/pages/` | Pages. Each is an Astro page wrapped in `Layout`. |
| `src/content/posts/` | News posts (`title`, `date`, `author` required; optional `excerpt`, `featured`, `image`). |
| `src/content/events/` | Events shown in the home carousel (`title`, `date` required). Past events drop off on the next build. |
| `src/content.config.ts` | Content collection schemas. |
| `src/layouts/Layout.astro` | Page shell and SEO. |
| `src/components/` | Header, footer, carousel, news grid and page-building blocks (banners, bands, card grids, buttons). |
| `src/lib/` | Helpers, including carousel data and the photo library. |
| `src/consts.ts` | Site name, description, navigation, date formatting. |
| `src/assets/` | Images and fonts, optimised by Astro at build time. |
| `src/styles/` | Global theme and the flip-card styles. |
| `public/` | Files served as-is (favicon, `CNAME`). |

## Adding Content

- **News post:** add a Markdown file to `src/content/posts/`. Set `featured: true` to show it in the home carousel.
- **Event:** add a Markdown file to `src/content/events/`. It appears in the carousel until its date has passed.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages (**Settings → Pages → Source: GitHub Actions**). The workflow sets `SITE_URL` (`https://fsul.ie`) and `BASE_PATH` (`/`); the custom domain is configured in `public/CNAME`.
