/**
 * site.js — single source of truth for practice-wide facts.
 *
 * PLACEHOLDER CONTENT: phone numbers use the 555 range reserved for fiction,
 * and the address, licence numbers and NPI are invented. Replace every value
 * in this file with the real practice details before going live. Legal pages
 * read from here, so a stale value here becomes a stale value in your Terms.
 */

export const site = {
  name: 'Healing Horizons',
  /** Shown under the wordmark in the header and footer. */
  descriptor: 'Behavioral Health Services',
  legalName: 'Healing Horizons Behavioral Health Services',
  tagline: 'Therapy where you are',
  description:
    'A group therapy practice offering individual, couples, family and group counselling — in person in Dunkirk and online across Maryland.',
  founded: 2016,
  url: 'https://www.healinghorizon.com',

  contact: {
    phone: '443-123-4567',
    phoneHref: 'tel:+14431234567',
    fax: '443-123-4568',
    email: 'info@healinghorizon.com',
    intakeEmail: 'info@healinghorizon.com',
    billingEmail: 'info@healinghorizon.com',
    privacyEmail: 'info@healinghorizon.com',
  },

  address: {
    line1: 'Southern Maryland Blvd',
    line2: 'Suite 300',
    city: 'Dunkirk',
    state: 'MD',
    postalCode: '20754',
    country: 'US',
    mapUrl: 'https://maps.google.com/?q=Southern+Maryland+Blvd+Dunkirk+MD',
  },

  /** Where the practice is licensed to deliver care. */
  serviceAreas: ['Maryland'],

  hours: [
    { day: 'Monday', open: '8:00 AM', close: '7:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '7:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '7:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '7:00 PM' },
    { day: 'Friday', open: '8:00 AM', close: '5:00 PM' },
    { day: 'Saturday', open: '9:00 AM', close: '1:00 PM' },
    { day: 'Sunday', open: null, close: null },
  ],

  /** Front-desk response commitment, quoted on the contact page. */
  responseTime: 'within one business day',

  social: [
    { label: 'Instagram', href: 'https://instagram.com/', handle: '@healinghorizon' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', handle: 'Healing Horizon' },
    // Commented out — no live Psychology Today profile to link to yet.
    // Re-add once the practice profile exists: { label: 'Psychology Today', href: 'https://www.psychologytoday.com/', handle: 'Practice profile' },
  ],

  credentials: [
    'Licensed in Oregon and Washington',
    'LGBTQIA+ affirming practice',
    'Trauma-informed care standards',
    'In-network with major regional plans',
  ],
};

/**
 * Crisis resources. These are real, national (US) services and are shown in
 * the footer of every page and at the top of the contact form. Do not remove
 * them — a mental-health site without a crisis path is a liability.
 */
export const crisisResources = [
  {
    label: 'Suicide & Crisis Lifeline',
    detail: 'Call or text 988 — free, confidential, 24/7',
    href: 'tel:988',
    action: 'Call or text 988',
  },
  {
    label: 'Crisis Text Line',
    detail: 'Text HOME to 741741',
    href: 'sms:741741',
    action: 'Text 741741',
  },
  {
    label: 'Emergency services',
    detail: 'If you or someone else is in immediate danger',
    href: 'tel:911',
    action: 'Call 911',
  },
];

/**
 * Primary navigation. Consumed by the header, the footer and the mobile
 * drawer so the three can never drift apart.
 *
 * `label` is kept short because six items plus icons, a phone number and a CTA
 * have to share one bar — "Therapists" rather than "Our Therapists" is worth
 * about 45px, which is the difference between the desktop nav fitting and the
 * wordmark being squeezed. `icon` must name an icon that exists in
 * `components/ui/Icon.jsx`.
 */
export const primaryNav = [
  // { label: 'Services', to: '/services', icon: 'heartHand' },
  { label: 'Therapists', to: '/therapists', icon: 'group' },
  { label: 'About', to: '/about', icon: 'leaf' },
  { label: 'Resources', to: '/resources', icon: 'book' },
  { label: 'FAQ', to: '/faq', icon: 'info' },
  { label: 'Contact', to: '/contact', icon: 'mail' },
];

export const footerNav = [
  {
    heading: 'Care',
    links: [
      { label: 'All services', to: '/services' },
      { label: 'Individual therapy', to: '/services/individual-therapy' },
      { label: 'Couples therapy', to: '/services/couples-therapy' },
      { label: 'Teen & adolescent', to: '/services/teen-therapy' },
      { label: 'Group programs', to: '/services/group-therapy' },
    ],
  },
  {
    heading: 'Practice',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Our therapists', to: '/therapists' },
      { label: 'Rates & insurance', to: '/rates' },
      { label: 'Resources', to: '/resources' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    heading: 'Get started',
    links: [
      { label: 'Book a consultation', to: '/book' },
      { label: 'Contact us', to: '/contact' },
      { label: 'New client paperwork', to: '/contact#intake' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Accessibility', to: '/accessibility' },
      { label: 'Notice of Privacy Practices', to: '/privacy#hipaa' },
    ],
  },
];

export default site;
