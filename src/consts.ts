export const SITE_NAME = 'Formula Student UL';
export const SITE_DESCRIPTION =
  'A student-led motorsport team at the University of Limerick. We design, build and race a single-seater every year.';

// BASE_URL is "/" locally and "/<repo>/" on GitHub Pages; strip the trailing slash so we can write `${base}/path/`.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const nav = [
  { label: 'Our Partners', href: '/ourpartners/' },
  { label: 'Newsroom', href: '/newsroom/' },
  { label: 'Meet the Team', href: '/meettheteam/' },
  { label: 'Our Car', href: '/ourcar/' },
  { label: 'Instagram', href: 'https://www.instagram.com/formulastudentul/', external: true },
];

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
