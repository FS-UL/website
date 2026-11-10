export const SITE_NAME = 'Formula Student UL';
export const SITE_DESCRIPTION =
  'A student-led motorsport team at the University of Limerick. We design, build and race a single-seater every year.';

// BASE_URL is "/" locally and "/<repo>/" on GitHub Pages; strip the trailing slash so we can write `${base}/path/`.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// Google Form that sponsor enquiries are sent to.
export const SPONSOR_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeSaSpfMyGhvWRcTTap6KeJwXJt8gR4y65CD4KNei2xUTt0bA/viewform';

export const INSTAGRAM_URL = 'https://www.instagram.com/formulastudentul/';

export const nav = [
  { label: 'Our Partners', href: '/ourpartners/' },
  { label: 'Newsroom', href: '/newsroom/' },
  { label: 'Meet the Team', href: '/meettheteam/' },
  { label: 'Our Car', href: '/ourcar/' },
  { label: 'Instagram', href: INSTAGRAM_URL, external: true },
];

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
