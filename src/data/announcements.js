/**
 * announcements.js — the strip that runs above the header.
 *
 * Keep these SHORT (roughly 60 characters) and factual. This is the one place
 * on the site where text moves, so it has to be readable in a glance.
 *
 * Rules for what belongs here:
 *   · concrete and time-bound — a group starting, a panel we joined, hours;
 *   · verifiable — if you cannot evidence it, it does not go in the ticker;
 *   · never clinical claims, never urgency ("book now!"), never outcomes.
 *
 * Announcements are deliberately NOT links. They move, and a moving click
 * target is a poor one. Everything referenced here is reachable from the nav
 * directly underneath.
 *
 * PLACEHOLDER: dates and counts are illustrative. Anything with a date needs
 * an owner — a stale "starts 14 September" in November reads as neglect.
 */

export const announcements = [
  {
    id: 'dbt-group',
    icon: 'group',
    text: 'New DBT skills group starts 14 September — three places left',
  },
  {
    id: 'availability',
    icon: 'calendar',
    text: 'Evening and Saturday appointments available',
  },
  {
    id: 'insurance',
    icon: 'shieldCheck',
    text: 'Now in network with Regence, PacificSource and Providence',
  },
  {
    id: 'accepting',
    icon: 'person',
    text: 'Five of our six therapists are taking new clients',
  },
  {
    id: 'telehealth',
    icon: 'video',
    text: 'Telehealth available across Maryland',
  },
];

/**
 * Pixels per second. Deliberately slower than the 60–100px/s most marquees
 * run at, because that speed reads as urgent and this is a therapy practice.
 * Slower than this and a full cycle takes over a minute, which means someone
 * who lands mid-loop never sees the last announcement.
 */
export const TICKER_SPEED = 52;

export default announcements;
