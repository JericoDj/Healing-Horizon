/**
 * storageService.js — namespaced, failure-tolerant localStorage.
 *
 * Storage throws in private-browsing modes and when quota is exceeded, and a
 * therapy site should degrade quietly rather than crash. Every method here
 * swallows and returns a fallback.
 *
 * ⚠️ Never persist anything a client typed about their health here. Draft
 * recovery is deliberately limited to non-clinical contact fields.
 */

const NAMESPACE = 'hh';

const key = (name) => `${NAMESPACE}:${name}`;

function isAvailable() {
  try {
    const probe = `${NAMESPACE}:__probe__`;
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

const available = typeof window !== 'undefined' && isAvailable();

export const storageService = {
  available,

  get(name, fallback = null) {
    if (!available) return fallback;
    try {
      const raw = window.localStorage.getItem(key(name));
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },

  set(name, value) {
    if (!available) return false;
    try {
      window.localStorage.setItem(key(name), JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove(name) {
    if (!available) return false;
    try {
      window.localStorage.removeItem(key(name));
      return true;
    } catch {
      return false;
    }
  },
};

export const STORAGE_KEYS = {
  theme: 'theme',
  contactDraft: 'contact-draft',
  bookingDraft: 'booking-draft',
  recentlyViewedTherapists: 'recent-therapists',
};

export default storageService;
