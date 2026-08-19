/**
 * faqs.js — grouped questions for the /faq page and site-wide search.
 * Sourced directly for Maryland Psychiatric Rehabilitation Program (PRP).
 */

export const faqGroups = [
  {
    id: 'getting-started',
    heading: 'Getting Started',
    items: [
      {
        id: 'what-is-prp',
        question: 'What is a Psychiatric Rehabilitation Program (PRP)?',
        answer:
          'A Psychiatric Rehabilitation Program (PRP) is an accredited, person-centered program authorized under Maryland Behavioral Health Administration (BHA) regulations. PRP helps adults and transitional-age youth living with mental health conditions develop practical daily living skills, emotional self-management tools, social connections, and community independence.',
      },
      {
        id: 'how-to-start',
        question: 'How do I get started with psychiatric rehabilitation?',
        answer:
          'Getting started is straightforward: (1) Obtain a referral from your licensed mental health therapist, psychiatrist, or medical provider; (2) Submit your referral form online or contact our intake team; (3) We verify your Maryland Medicaid eligibility and schedule an initial functional assessment to build your personalized rehabilitation plan.',
      },
      {
        id: 'after-referral',
        question: 'What happens after I submit a referral?',
        answer:
          'Once we receive a referral, our intake coordinator reviews the clinical documentation and confirms active Maryland Medicaid coverage within 1–2 business days. We then reach out to the participant or referring provider to schedule the initial intake assessment.',
      },
      {
        id: 'initial-assessment',
        question: 'What happens during the initial assessment?',
        answer:
          'During the initial assessment, a rehabilitation coordinator meets with you to discuss your strengths, daily living needs, recovery goals, housing, transportation, and areas where you want support. Together, you will outline your Individualized Rehabilitation Plan (IRP).',
      },
      {
        id: 'intake-duration',
        question: 'How long does the intake process take?',
        answer:
          'From initial referral submission to your first community rehabilitation session typically takes 3 to 7 business days, depending on provider documentation and Maryland Medicaid pre-authorization timelines.',
      },
    ],
  },
  {
    id: 'prp-services',
    heading: 'Psychiatric Rehabilitation Services',
    items: [
      {
        id: 'included-services',
        question: 'What services are included in psychiatric rehabilitation?',
        answer:
          'Healing Horizons offers comprehensive PRP components including Daily Living Skills (hygiene, nutrition, budgeting, home upkeep), Mental Health Symptom Management, Community Resource Coordination (housing, SNAP, SSI/SSDI), Educational & Vocational Readiness, Medication Education & Routine Building, Social Skills, and Crisis Prevention Planning.',
      },
      {
        id: 'in-home-services',
        question: 'Are services provided in the home?',
        answer:
          'Yes. Rehabilitation specialists provide one-on-one support directly in your home environment, helping you build and practice functional daily living routines where they are most relevant.',
      },
      {
        id: 'community-services',
        question: 'Can PRP services be provided in the community?',
        answer:
          'Yes. A core feature of PRP is real-world community skill practice. Sessions frequently occur at local grocery stores, public transit hubs, libraries, community centers, and employment or educational facilities.',
      },
      {
        id: 'service-frequency',
        question: 'How often will I receive services?',
        answer:
          'Session frequency is determined collaboratively in your Individualized Rehabilitation Plan (IRP), typically ranging from 2 to 6 face-to-face sessions per month based on your assessed needs and clinical recommendations.',
      },
    ],
  },
  {
    id: 'medicaid-coverage',
    heading: 'Maryland Medicaid & Coverage',
    items: [
      {
        id: 'medicaid-covers-prp',
        question: 'Does Maryland Medicaid cover psychiatric rehabilitation services?',
        answer:
          'Yes. Psychiatric Rehabilitation Program (PRP) services are 100% covered by Maryland Medicaid (HealthChoice and fee-for-service) for individuals who meet clinical eligibility and authorization criteria.',
      },
      {
        id: 'healing-horizons-medicaid',
        question: 'Does Healing Horizons accept Maryland Medicaid?',
        answer:
          'Yes. Healing Horizons Behavioral Health is an authorized Maryland Medicaid behavioral health provider and bills Medicaid directly for all covered PRP services.',
      },
      {
        id: 'need-medicaid',
        question: 'Do I need Medicaid to receive services?',
        answer:
          'Active Maryland Medicaid is required for state-authorized PRP funding. If you are uninsured or need assistance applying for Maryland Medicaid, our intake team can help connect you with state entitlement resources.',
      },
      {
        id: 'prp-costs',
        question: 'Are there costs for psychiatric rehabilitation services?',
        answer:
          'No. There are zero co-pays, deductibles, or out-of-pocket costs for authorized participants with active Maryland Medicaid coverage.',
      },
    ],
  },
  {
    id: 'eligibility-referrals',
    heading: 'Eligibility & Referrals',
    items: [
      {
        id: 'who-is-eligible',
        question: 'Who is eligible for psychiatric rehabilitation services in Maryland?',
        answer:
          'To be eligible for PRP in Maryland, individuals must: (1) Be an adult (18+) or transitional-age youth; (2) Have an active, qualifying behavioral health diagnosis; (3) Be currently engaged in outpatient mental health therapy with a licensed clinician; and (4) Have active Maryland Medicaid.',
      },
      {
        id: 'who-can-refer',
        question: 'Who can refer someone to a PRP program?',
        answer:
          'Referrals can be submitted by licensed outpatient therapists, psychologists, psychiatrists, psychiatric nurse practitioners (CRNP-PMH), primary care physicians, hospital discharge planners, or Core Service Agencies (CSAs).',
      },
      {
        id: 'family-referral',
        question: 'Can a family member make a referral?',
        answer:
          'Family members or caregivers can initiate the intake process and help coordinate documentation. However, an official clinical referral form signed by the participant’s licensed mental health provider is required by Maryland regulations.',
      },
      {
        id: 'self-referral',
        question: 'Can I refer myself?',
        answer:
          'Yes, you can contact us directly to begin the intake process. We will reach out to your current therapist or psychiatrist with your consent to obtain the necessary clinical referral documentation.',
      },
    ],
  },
  {
    id: 'privacy-confidentiality',
    heading: 'Privacy & Confidentiality',
    items: [
      {
        id: 'is-confidential',
        question: 'Is my information confidential?',
        answer:
          'Yes. Healing Horizons adheres strictly to HIPAA regulations, Maryland behavioral health privacy laws, and professional ethical standards. Your personal, clinical, and rehabilitation records are kept completely confidential.',
      },
      {
        id: 'who-accesses-records',
        question: 'Who can access my records?',
        answer:
          'Only your designated rehabilitation team and clinical supervisors have access to your records. Information is only shared with external parties (such as family members, doctors, or therapists) when you have signed an explicit, written Authorization for Release of Information.',
      },
      {
        id: 'information-protection',
        question: 'How is my information protected?',
        answer:
          'We maintain state-of-the-art electronic health records with 256-bit encryption, strict role-based access permissions, and ongoing compliance audits that meet all federal and Maryland state data security standards.',
      },
    ],
  },
  {
    id: 'sessions-support',
    heading: 'Sessions & Support',
    items: [
      {
        id: 'where-services-provided',
        question: 'Where are psychiatric rehabilitation services provided?',
        answer:
          'Services are community-based and delivered wherever daily living skills are practiced: inside your home, in your neighborhood, at community resource centers, workplaces, libraries, or transit stations across Maryland.',
      },
      {
        id: 'in-home-provided',
        question: 'Do you provide in-home services?',
        answer:
          'Yes, in-home visits are a cornerstone of our program. Meeting in your home allows our specialists to assist directly with organization, routine scheduling, meal planning, and personal wellness strategies.',
      },
      {
        id: 'support-between-sessions',
        question: 'What happens if I need support between sessions?',
        answer:
          'You can contact your assigned rehabilitation specialist during regular business hours for scheduled check-ins and coordination. Your Individualized Rehabilitation Plan also includes coping toolkits and natural support contacts.',
      },
      {
        id: 'mental-health-crisis',
        question: 'What should I do in a mental health crisis?',
        answer:
          'If you or someone you know is experiencing an immediate life-threatening emergency, call 911 immediately. For urgent mental health support 24/7, call or text 988 (Suicide & Crisis Lifeline) or contact your local Maryland Mobile Crisis Team. Every participant also develops a personalized Crisis Prevention & Safety Plan at intake.',
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
  allFaqs.find((f) => f.id === 'what-is-prp'),
  allFaqs.find((f) => f.id === 'how-to-start'),
  allFaqs.find((f) => f.id === 'medicaid-covers-prp'),
  allFaqs.find((f) => f.id === 'who-is-eligible'),
].filter(Boolean);

export default faqGroups;
