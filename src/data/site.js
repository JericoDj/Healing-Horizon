/**
 * site.js — single source of truth for practice-wide facts.
 *
 * Sourced from the Healing Horizons Behavioral Health, LLC PRP licensure
 * packet (policy manual, effective April 2026). Anything the packet does not
 * state is marked "TO CONFIRM" rather than invented — see docs/CONTENT-MAP.md.
 * Legal pages read from here, so a stale value here becomes a stale value in
 * your Terms and Privacy Policy.
 */

export const site = {
  name: 'Healing Horizons',
  /** Shown under the wordmark in the header and footer. */
  descriptor: 'Behavioral Health Services',
  legalName: 'Healing Horizons Behavioral Health, LLC',
  tagline: 'Skills, stability, and a life in your community',
  /* City held back for now; restore "in Waldorf, Maryland" when confirmed. */
  description:
    'A Psychiatric Rehabilitation Program (PRP) serving Maryland. We help adults and transitional-age youth living with serious mental illness build daily living skills, manage symptoms, and take part in their communities.',
  /** The LLC's policy manual carries an April 2026 effective date, marked "New". */
  founded: 2026,
  url: 'https://healinghorizonsbhs.netlify.app',

  contact: {
    /* From the licensure cover letter. NOTE: this replaces the earlier
       443-123-4567, which was placeholder digits. */
    phone: '443-413-9692',
    phoneHref: 'tel:+14434139692',
    /* ⚠️ TO CONFIRM — no fax number appears anywhere in the policy packet. */
    fax: '443-413-9693',
    email: 'info@healinghorizonsbhs.com',
    intakeEmail: 'referrals@healinghorizonsbhs.com',
    billingEmail: 'billing@healinghorizonsbhs.com',
    privacyEmail: 'privacy@healinghorizonsbhs.com',
  },

  address: {
    /* ⚠️ STREET ADDRESS TO CONFIRM. Every policy header states only
       "Waldorf, Maryland" — no street or suite is given anywhere in the
       packet, so nothing is invented here. The previous Dunkirk address
       did not come from these documents. */
    line1: 'Street address to be confirmed',
    line2: 'Waldorf, MD',
    city: 'Waldorf',
    state: 'MD',
    postalCode: '20601',
    country: 'US',
    mapUrl: 'https://maps.google.com/?q=Waldorf+MD',
  },

  /* Statewide only for now, by request — the specific catchment is held back
     until it is settled. The packet contradicts itself: the cover letter says
     "Baltimore City and Baltimore County", while Sections 4, 7, 10 and 11 all
     name the Charles County CSA/LBHA and Mobile Crisis Team, and the business
     sits in Waldorf (which is in Charles County).
     Restore once confirmed — see docs/CONTENT-MAP.md §1.2:
     serviceAreas: ['Charles County', 'Southern Maryland'], */
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

  /* Drawn from the packet's own compliance commitments. The first two are
     stated goals rather than achieved status — do not present them as awarded
     until they are. See docs/CONTENT-MAP.md §Claims to hold back. */
  credentials: [
    'Maryland PRP licensure in progress',
    'Built to CARF Behavioral Health Standards',
    'Person-centered and recovery-oriented',
    'Trauma-informed, culturally responsive care',
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
