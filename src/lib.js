import site from './content/site.json';
import fontsTmpl from './styles/fonts.css.tmpl?raw';

const pageFiles = import.meta.glob('./content/pages/*.html', { query: '?raw', import: 'default', eager: true });
const postFiles = import.meta.glob('./content/posts/*.html', { query: '?raw', import: 'default', eager: true });

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const SITE_NAME = 'Formula Student UL';
export const nav = [
  { label: 'Our Partners', href: '/ourpartners/' },
  { label: 'Newsroom', href: '/newsroom/' },
  { label: 'Meet the Team', href: '/meet-the-team/' },
  { label: 'Our Car', href: '/our-car/' },
  { label: 'Instagram', href: 'https://www.instagram.com/formulastudentul/', external: true },
];

// Prefix root-relative URLs in WordPress-authored HTML with the site base path.
export const withBase = (html) => html.replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`);
export const fontsCss = fontsTmpl.replaceAll('%BASE%', base);

export const pages = site.pages.map((p) => ({ ...p, html: pageFiles[`./content/pages/${p.file}.html`] }));
export const posts = site.posts.map((p) => ({ ...p, html: postFiles[`./content/posts/${p.slug}.html`] }));
export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
