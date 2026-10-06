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
    /* Shown with the +1 country code so it reads as a US number.
       Previously 443-413-9692 (from the licensure cover letter). */
    phone: '+1 443-858-3270',
    phoneHref: 'tel:+14438583270',
    /* ⚠️ TO CONFIRM — no fax number appears anywhere in the policy packet. */
    fax: '443-413-9693',
    /* The practice has two inboxes. The separate referrals@ / billing@ /
       privacy@ addresses on the old healinghorizonsbhs.com domain were
       placeholders, so every role now points at the main inbox. */
    email: 'info@healinghorizonsbehavioralmd.net',
    altEmail: 'healinghorizonsbh@gmail.com',
    intakeEmail: 'info@healinghorizonsbehavioralmd.net',
    billingEmail: 'info@healinghorizonsbehavioralmd.net',
    privacyEmail: 'info@healinghorizonsbehavioralmd.net',
  },

  address: {
    /* Confirmed office address. Replaces the earlier "Waldorf, MD"
       placeholder taken from the policy packet headers. */
    line1: '10339 Southern Maryland Blvd',
    line2: 'Suite 205',
    city: 'Dunkirk',
    state: 'MD',
    postalCode: '20754',
    country: 'US',
    mapUrl: 'https://maps.google.com/?q=10339+Southern+Maryland+Blvd+Suite+205+Dunkirk+MD+20754',
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
    { day: 'Monday', open: null, close: null },
    { day: 'Tuesday', open: '10:00 AM', close: '4:00 PM' },
    { day: 'Wednesday', open: '10:00 AM', close: '4:00 PM' },
    { day: 'Thursday', open: '10:00 AM', close: '4:00 PM' },
    { day: 'Friday', open: '10:00 AM', close: '4:00 PM' },
    { day: 'Saturday', open: null, close: null },
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
    // 'Built to CARF Behavioral Health Standards',
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
  { label: 'Programs', to: '/programs', icon: 'leaf' },
  { label: 'Explore', to: '/explore', icon: 'compass' },
  { label: 'About', to: '/about', icon: 'sparkle' },
  { label: 'FAQ', to: '/faq', icon: 'info' },
  { label: 'Contact', to: '/contact', icon: 'mail' },
];

export const footerNav = [
  {
    heading: 'Programs',
    links: [
      { label: 'All Programs', to: '/programs' },
      { label: 'Daily Living Skills', to: '/programs/daily-living-skills' },
      { label: 'Symptom Management', to: '/programs/symptom-management' },
      { label: 'Community Coordination', to: '/programs/community-coordination' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'Explore PRP Services', to: '/explore' },
      { label: 'Explore by Topic Hub', to: '/explore#topics' },
      { label: 'Educational Articles', to: '/explore#articles' },
      { label: 'Maryland Resources', to: '/explore#maryland-resources' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'About Healing Horizons', to: '/about' },
      { label: 'Our Mission & Approach', to: '/about#mission' },
      { label: 'Maryland Service Areas', to: '/about#service-areas' },
      { label: 'Why Choose Us', to: '/about#why-choose' },
    ],
  },
  {
    heading: 'FAQ',
    links: [
      { label: 'Frequently Asked Questions', to: '/faq' },
      { label: 'Getting Started & Referrals', to: '/faq#getting-started' },
      { label: 'PRP Services & In-Home Care', to: '/faq#prp-services' },
      { label: 'Maryland Medicaid Coverage', to: '/faq#medicaid-coverage' },
    ],
  },
];

export default site;
