/**
 * insurance.js — rates, accepted plans and payment policy.
 * PLACEHOLDER: plan names are illustrative examples of regional US carriers.
 * Verify your actual contracted panels before publishing. Listing a carrier
 * you are not credentialed with creates a real billing dispute later.
 */

export const rates = [
  {
    id: 'individual',
    service: 'Individual therapy',
    duration: '50 min',
    price: 175,
    note: 'Standard weekly session',
  },
  {
    id: 'couples',
    service: 'Couples therapy',
    duration: '60 min',
    price: 215,
    note: 'Also used for family sessions',
  },
  {
    id: 'trauma',
    service: 'Trauma therapy & EMDR',
    duration: '60–90 min',
    price: 205,
    note: 'Extended sessions billed pro rata',
  },
  {
    id: 'group',
    service: 'Group program',
    duration: '90 min',
    price: 75,
    note: 'Per session, 8–12 week cohorts',
  },
  {
    id: 'intake',
    service: 'Initial assessment',
    duration: '60 min',
    price: 195,
    note: 'First appointment only',
  },
  {
    id: 'consult',
    service: 'Phone consultation',
    duration: '15 min',
    price: 0,
    note: 'Always free, no obligation',
  },
];

export const acceptedPlans = [
  'Regence BlueCross BlueShield of Oregon',
  'PacificSource Health Plans',
  'Providence Health Plan',
  'Moda Health',
  'First Choice Health',
  'Aetna',
  'Cigna / Evernorth',
  'Oregon Health Plan (select clinicians)',
];

export const paymentMethods = [
  'Visa, Mastercard, American Express, Discover',
  'HSA and FSA cards',
  'ACH bank transfer',
  'Check (in-office only)',
];

export const billingPolicies = [
  {
    id: 'card-on-file',
    title: 'Card on file',
    body: 'We keep a card on file and charge it after each session. You receive an itemised receipt by email the same day.',
  },
  {
    id: 'superbill',
    title: 'Out-of-network superbills',
    body: 'If we are not in network with your plan, we issue a monthly superbill with all the coding your insurer needs. Reimbursement rates vary; ask your plan about your out-of-network outpatient mental health benefit.',
  },
  {
    id: 'good-faith-estimate',
    title: 'Good Faith Estimate',
    body: 'Under the No Surprises Act, clients who are uninsured or not using insurance receive a written estimate of expected costs before care begins. Ask for one at any time.',
  },
  {
    id: 'sliding-scale',
    title: 'Sliding scale',
    body: 'A limited number of reduced-fee slots are reserved for clients in financial hardship and allocated by need. Asking will never affect the quality of care you are offered.',
  },
  {
    id: 'cancellation',
    title: 'Cancellations',
    body: 'Twenty-four hours notice, please. Later cancellations and missed sessions are charged at the full rate and are not covered by insurance. Emergencies and illness are waived.',
  },
];

/** Questions we suggest clients ask their insurer — used as a checklist block. */
export const insuranceChecklist = [
  'Do I have outpatient mental health benefits?',
  'What is my deductible, and has it been met this year?',
  'How many sessions per year does my plan cover?',
  'What is my copay or coinsurance per session?',
  'Is prior authorisation required?',
  'What is my out-of-network reimbursement rate for CPT code 90837?',
];

export default rates;
