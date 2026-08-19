/**
 * testimonials.js
 *
 * ⚠️ READ BEFORE EDITING — this is an ethics issue, not a copy issue.
 *
 * APA Ethics Code 5.05 and most state licensing boards prohibit soliciting
 * testimonials from current therapy clients or from anyone otherwise
 * vulnerable to undue influence. Several boards discourage client testimonials
 * on practice websites entirely, even from former clients.
 *
 * So this file deliberately does NOT contain client quotes. It contains:
 *   1. `reflections` — composite, illustrative statements written by the
 *      practice, explicitly labelled as such in the UI. Not attributed to any
 *      real person, because no real person said them.
 *   2. `trustSignals` — verifiable facts about the practice, which is what
 *      actually builds trust on a clinical site anyway.
 *
 * If you later want real quotes, get written, revocable consent from FORMER
 * clients only, confirm your state board permits it, and keep the consent on
 * file. Do not skip that.
 */

/** Composite statements. The UI must label these as illustrative. */
export const reflections = [
  {
    id: 'reflection-fit',
    quote:
      'The thing people tell us most often is that they were surprised how much easier it got once they stopped rehearsing what to say before the session.',
    context: 'On finding a fit',
  },
  {
    id: 'reflection-pace',
    quote:
      'Clients regularly say the first four weeks felt slower than expected — and that the slowness was the reason it held.',
    context: 'On pacing',
  },
  {
    id: 'reflection-return',
    quote:
      'A common turning point: realising the pattern in the room is the same one that shows up at home, and being able to name it out loud for the first time.',
    context: 'On what changes',
  },
];

/**
 * Verifiable practice facts. Every number here must be defensible — if you
 * cannot show the source, delete the row rather than rounding it up.
 */
export const trustSignals = [
  {
    id: 'clinicians',
    value: '6',
    label: 'Licensed clinicians',
    detail: 'Every therapist is independently licensed in Maryland.',
  },
  {
    id: 'years',
    value: '9',
    label: 'Years in practice',
    detail: 'Serving Dunkirk, Southern Maryland, and all of Maryland by in-person and telehealth.',
  },
  {
    id: 'response',
    value: '1 day',
    label: 'Typical response time',
    detail: 'New enquiries hear back from our intake coordinator within one business day.',
  },
  {
    id: 'consult',
    value: 'Free',
    label: '15-minute consultation',
    detail: 'Before you commit to anything, you talk to a person and check the fit.',
  },
];

/** Professional affiliations shown as a quiet logo/credential row. */
export const affiliations = [
  'CARF International Standards Aligned',
  'Maryland Behavioral Health Administration (BHA)',
  'Maryland Medicaid Authorized Provider',
  'Local Behavioral Health Authorities (LBHAs/CSAs)',
  'National Association of Social Workers (NASW)',
];

export default reflections;
