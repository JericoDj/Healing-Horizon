/**
 * faqs.js — grouped questions for the /faq page and the home-page excerpt.
 * PLACEHOLDER: rates, policies and insurance names are illustrative.
 * Have your billing lead and (ideally) a healthcare attorney review before launch.
 */

export const faqGroups = [
  {
    id: 'getting-started',
    heading: 'Getting started',
    items: [
      {
        id: 'first-step',
        question: 'What is the first step?',
        answer:
          'Send us a message through the contact form or call the practice. Our intake coordinator replies within one business day and offers you a free 15-minute phone consultation. That call is not therapy — it is a short conversation to hear what you are looking for and to match you with the right therapist.',
      },
      {
        id: 'choose-therapist',
        question: 'Can I choose my therapist?',
        answer:
          'Yes. You can request a specific clinician on the contact form, or let us match you. If you are unsure, our coordinator will suggest one or two based on what you describe. If the fit is not right after a session or two, say so — changing therapists within the practice is normal and we will make it easy.',
      },
      {
        id: 'first-session',
        question: 'What happens in the first session?',
        answer:
          'Mostly listening. Your therapist will ask what brought you in, some history, what has helped before and what has not, and what you would like to be different. You are not expected to arrive with a tidy summary. You set the pace, and you can decline any question.',
      },
      {
        id: 'how-long',
        question: 'How long will I be in therapy?',
        answer:
          'It depends on what you are working on. Focused work on a specific issue often runs 8 to 20 sessions. Longer-standing patterns take longer. Around session four to six your therapist will review progress with you openly, and that review repeats — you should always know why you are still coming.',
      },
    ],
  },
  {
    id: 'cost-insurance',
    heading: 'Cost & insurance',
    items: [
      {
        id: 'rates',
        question: 'What do sessions cost?',
        answer:
          'Individual sessions are $175 for 50 minutes. Couples and family sessions are $215 for 60 minutes. Trauma and EMDR sessions are $205 for 60 to 90 minutes. Group programs are $75 per session. These are our standard private-pay rates before any insurance benefit is applied.',
      },
      {
        id: 'insurance',
        question: 'Do you take insurance?',
        answer:
          'We are in-network with several regional plans, listed on our Rates & Insurance page. If we are out of network with your plan, we can provide a monthly superbill that you submit for out-of-network reimbursement. We recommend calling the number on your card and asking about your outpatient mental health benefit, your deductible, and your out-of-network reimbursement rate before your first session.',
      },
      {
        id: 'good-faith',
        question: 'What is a Good Faith Estimate?',
        answer:
          'Under the federal No Surprises Act, if you are uninsured or choose not to use insurance, you have the right to a written estimate of what your care will cost before you begin. We provide one automatically at intake, and you can request one at any time.',
      },
      {
        id: 'sliding-scale',
        question: 'Do you offer reduced fees?',
        answer:
          'We hold a limited number of sliding-scale slots for clients experiencing financial hardship, allocated by need rather than first-come. Ask our intake coordinator — the conversation is confidential and it will not affect the care you are offered.',
      },
      {
        id: 'cancellation',
        question: 'What is your cancellation policy?',
        answer:
          'We ask for 24 hours notice. Sessions cancelled with less than 24 hours notice, and missed sessions, are charged at the full rate, and insurance does not cover late cancellations. We waive the fee for genuine emergencies and for illness — tell us what happened.',
      },
    ],
  },
  {
    id: 'privacy',
    heading: 'Privacy & confidentiality',
    items: [
      {
        id: 'confidential',
        question: 'Is what I say confidential?',
        answer:
          'Yes, with narrow legal exceptions your therapist will explain in full at your first session: a serious and imminent risk of harm to yourself or another identifiable person, suspected abuse or neglect of a child, an older adult or a dependent adult, and a valid court order. Outside of those, nothing leaves the room without your written authorisation.',
      },
      {
        id: 'records',
        question: 'Who can see my records?',
        answer:
          'Your clinical record is held under HIPAA. Your therapist can see it, and administrative staff can see the minimum necessary for scheduling and billing. Nobody outside the practice receives records without your signed release, except in the legal exceptions above. You may request a copy of your record at any time.',
      },
      {
        id: 'teens-privacy',
        question: 'How does confidentiality work for teenagers?',
        answer:
          'We set this out explicitly in the first caregiver session. Broadly: the content of a teen\'s sessions is private, and caregivers receive progress and safety information rather than transcripts. Safety concerns are always shared. Oregon law also gives minors aged 14 and over certain rights to consent to outpatient mental health treatment — your therapist will walk your family through what that means.',
      },
      {
        id: 'website-data',
        question: 'Is the contact form on this site secure?',
        answer:
          'The form is encrypted in transit, but please treat it as you would email — do not include clinical details, diagnoses or anything you would not want in an ordinary inbox. Give us your name, how to reach you, and a sentence about what you are looking for. Clinical conversation belongs in session or on the phone.',
      },
    ],
  },
  {
    id: 'logistics',
    heading: 'Sessions & logistics',
    items: [
      {
        id: 'telehealth-quality',
        question: 'Is online therapy as effective as in person?',
        answer:
          'For most presentations the research shows comparable outcomes, and telehealth removes a barrier that keeps a lot of people out of therapy entirely. Some work — certain trauma processing, some family sessions, and anyone in an unsafe or non-private living situation — is better in the room. Your therapist will be honest with you about which applies.',
      },
      {
        id: 'where-located',
        question: 'Where are you located?',
        answer:
          'Our office is at 1420 Alder Street, Suite 300, Portland, Oregon. The building is step-free from the street with an elevator to the third floor, and there is metered street parking plus a garage on the same block. We see telehealth clients anywhere in Oregon and Washington.',
      },
      {
        id: 'medication',
        question: 'Can you prescribe medication?',
        answer:
          'No. Our clinicians are psychologists, counsellors and clinical social workers, not prescribers. If medication seems worth exploring, we will coordinate with your primary care doctor or refer you to a psychiatric provider, and continue therapy alongside it.',
      },
      {
        id: 'emergency',
        question: 'What if I am in crisis between sessions?',
        answer:
          'This practice is not a crisis service and we do not monitor messages after hours. If you are in immediate danger, call 911. For urgent support at any hour, call or text 988 for the Suicide & Crisis Lifeline, or text HOME to 741741 for the Crisis Text Line. Every client also builds a personal safety plan with their therapist early in treatment.',
      },
    ],
  },
];

/** Flat list — used by the search filter on the FAQ page. */
export const allFaqs = faqGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, groupId: group.id, groupHeading: group.heading })),
);

/** Short subset for the home page. */
export const homeFaqs = [
  allFaqs.find((f) => f.id === 'first-step'),
  allFaqs.find((f) => f.id === 'insurance'),
  allFaqs.find((f) => f.id === 'confidential'),
  allFaqs.find((f) => f.id === 'telehealth-quality'),
].filter(Boolean);

export default faqGroups;
