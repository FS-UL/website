import { defineConfig } from 'astro/config';

// Wraps the content after each "## Heading" in a <section> so posts can be styled as full-width bands.
// Anything before the first heading becomes an intro section.
function rehypeSections() {
  const section = (children, cls) => ({ type: 'element', tagName: 'section', properties: { className: cls }, children });
  return (tree) => {
    const out = [];
    let current = null;
    for (const node of tree.children) {
      if (node.type === 'element' && node.tagName === 'h2') {
        current = section([node], ['post-section']);
        out.push(current);
      } else if (!current) {
        if (!(node.type === 'text' && !node.value.trim())) {
          current = section([node], ['post-section', 'post-section--intro']);
          out.push(current);
        }
      } else {
        current.children.push(node);
      }
    }
    tree.children = out;
  };
}

const base = process.env.BASE_PATH || '/';

// SITE_URL / BASE_PATH are set by the GitHub Actions workflow.
// For a custom domain, set SITE_URL=https://yourdomain.com and BASE_PATH=/ .
export default defineConfig({
  site: process.env.SITE_URL || 'https://fsul.ie',
  base,
  trailingSlash: 'always',
  markdown: { rehypePlugins: [rehypeSections] },
  redirects: {
    // Old slugs
    '/meet-the-team': `${base.replace(/\/$/, '')}/meettheteam/`,
    '/our-car': `${base.replace(/\/$/, '')}/ourcar/`,
    // The old WordPress nav menu linked to this slug; the page's real slug is /ourpartners/
    // (redirect targets are not base-aware, so prefix it manually)
    '/our-partners': `${base.replace(/\/$/, '')}/ourpartners/`,
  },
});
