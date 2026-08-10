import { useEffect } from 'react';
import { site } from '../data/site';

/**
 * usePageMeta — sets document title, meta description, canonical URL and
 * Open Graph tags per route, and moves focus for screen-reader users.
 *
 * React Router does not manage the document head, and a client-side router
 * without this leaves every page announcing the same title. Every page
 * component calls this once.
 *
 * @param {object} meta
 * @param {string} meta.title       page title, without the site-name suffix
 * @param {string} [meta.description]
 * @param {boolean} [meta.noIndex]  set on thin or duplicate pages
 */
export function usePageMeta({ title, description, noIndex = false } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`;
    document.title = fullTitle;

    setMetaTag('name', 'description', description ?? site.description);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description ?? site.description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', site.name);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description ?? site.description);

    if (noIndex) setMetaTag('name', 'robots', 'noindex,follow');
    else document.querySelector('meta[name="robots"]')?.remove();

    setCanonical(`${site.url}${window.location.pathname}`);
    setMetaTag('property', 'og:url', `${site.url}${window.location.pathname}`);
  }, [title, description, noIndex]);
}

function setMetaTag(attribute, key, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default usePageMeta;
