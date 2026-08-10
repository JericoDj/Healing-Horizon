/**
 * paths.js — every URL in the app, in one place.
 *
 * Components import from here instead of writing string literals, so a route
 * rename is a single edit and a typo is a build-time-ish error rather than a
 * silent 404.
 */

export const paths = {
  home: '/',
  about: '/about',

  services: '/services',
  service: (slug = ':slug') => `/services/${slug}`,

  therapists: '/therapists',
  therapist: (slug = ':slug') => `/therapists/${slug}`,

  rates: '/rates',

  resources: '/resources',
  resource: (slug = ':slug') => `/resources/${slug}`,

  faq: '/faq',
  contact: '/contact',
  book: '/book',

  privacy: '/privacy',
  terms: '/terms',
  accessibility: '/accessibility',

  notFound: '*',
};

export default paths;
