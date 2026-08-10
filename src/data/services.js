/**
 * services.js — the practice's service catalogue.
 *
 * `slug` drives the /services/:slug route. Adding an entry here adds a page.
 * PLACEHOLDER: rates and durations are illustrative. Confirm with billing.
 */

export const services = [
  {
    slug: 'individual-therapy',
    name: 'Individual Therapy',
    icon: 'person',
    summary:
      'One-to-one sessions for anxiety, depression, burnout, grief, life transitions and self-worth.',
    forWho: 'Adults 18+',
    format: 'In person or telehealth',
    duration: '50 minutes',
    cadence: 'Weekly or biweekly',
    rate: 175,
    featured: true,
    intro:
      'A regular hour that belongs to you. Individual therapy gives you a steady, confidential place to understand what you are carrying, why it keeps returning, and what you would like to be different.',
    helpsWith: [
      'Anxiety, worry and panic',
      'Depression and low mood',
      'Burnout and chronic stress',
      'Grief and loss',
      'Life transitions — career, identity, relationships',
      'Self-esteem and perfectionism',
    ],
    approaches: [
      'Cognitive Behavioral Therapy (CBT)',
      'Acceptance & Commitment Therapy (ACT)',
      'Psychodynamic therapy',
      'Internal Family Systems (IFS)',
    ],
    whatToExpect: [
      {
        title: 'A free 15-minute consultation',
        body: 'We talk briefly about what brought you here and match you with the therapist whose training fits. No cost, no obligation.',
      },
      {
        title: 'Your first full session',
        body: 'Your therapist asks about your history, your goals and what has and has not helped before. You set the pace.',
      },
      {
        title: 'A working rhythm',
        body: 'Most clients start weekly. Around session four to six you and your therapist review what is shifting and adjust the plan together.',
      },
    ],
  },
  {
    slug: 'couples-therapy',
    name: 'Couples Therapy',
    icon: 'hearts',
    summary:
      'Structured work on communication, trust, intimacy and repair — for partners at any stage.',
    forWho: 'Partners, any relationship structure',
    format: 'In person or telehealth',
    duration: '60 minutes',
    cadence: 'Weekly to start',
    rate: 215,
    featured: true,
    intro:
      'Most couples do not arrive because they stopped caring. They arrive because the same argument keeps happening and neither person feels heard. Couples therapy slows that cycle down enough to see it.',
    helpsWith: [
      'Recurring conflict and communication breakdown',
      'Rebuilding trust after a betrayal',
      'Intimacy and desire differences',
      'Parenting and household load',
      'Money and long-term planning stress',
      'Deciding whether to stay together',
    ],
    approaches: [
      'Emotionally Focused Therapy (EFT)',
      'The Gottman Method',
      'Attachment-based couples work',
    ],
    whatToExpect: [
      {
        title: 'A joint first session',
        body: 'You come together so your therapist hears both perspectives from the start, without either of you translating for the other.',
      },
      {
        title: 'Individual check-ins',
        body: 'Each partner usually has one solo session so nothing important stays unsaid.',
      },
      {
        title: 'A shared map',
        body: 'By session four you have a named pattern, agreed goals and concrete practices to try between sessions.',
      },
    ],
  },
  {
    slug: 'teen-therapy',
    name: 'Teen & Adolescent Therapy',
    icon: 'sprout',
    summary:
      'Developmentally attuned support for ages 12–17, with parents kept appropriately in the loop.',
    forWho: 'Ages 12–17',
    format: 'In person preferred',
    duration: '50 minutes',
    cadence: 'Weekly',
    rate: 175,
    featured: true,
    intro:
      'Teenagers do best with a therapist who takes them seriously as their own person. We hold that line while keeping caregivers informed enough to help — and we say clearly, at the outset, what stays private and what does not.',
    helpsWith: [
      'Anxiety, school refusal and test stress',
      'Depression and social withdrawal',
      'Identity, gender and sexuality',
      'Friendship conflict and bullying',
      'Screen use, sleep and motivation',
      'Family conflict at home',
    ],
    approaches: [
      'CBT for adolescents',
      'Dialectical Behavior Therapy (DBT) skills',
      'Family systems consultation',
    ],
    whatToExpect: [
      {
        title: 'A caregiver intake',
        body: 'We meet with parents or guardians first to gather history and agree how communication will work.',
      },
      {
        title: 'The teen sets the agenda',
        body: 'Sessions belong to your teen. We explain confidentiality and its limits in plain language on day one.',
      },
      {
        title: 'Regular family touchpoints',
        body: 'Roughly every six weeks we bring caregivers back in for a progress conversation.',
      },
    ],
  },
  {
    slug: 'family-therapy',
    name: 'Family Therapy',
    icon: 'home',
    summary:
      'Work with the whole household on communication, boundaries, blending and repair.',
    forWho: 'Households of any shape',
    format: 'In person or telehealth',
    duration: '60 minutes',
    cadence: 'Biweekly',
    rate: 215,
    featured: false,
    intro:
      'When one person is struggling, the whole household feels it. Family therapy treats the relationships rather than assigning a problem to one member.',
    helpsWith: [
      'Escalating conflict between family members',
      'Blended-family adjustment',
      'Supporting a family member in recovery',
      'Caregiving stress and role strain',
      'Separation and co-parenting',
      'Cultural and generational differences',
    ],
    approaches: [
      'Structural family therapy',
      'Narrative therapy',
      'Systemic and attachment-based work',
    ],
    whatToExpect: [
      {
        title: 'Everyone gets heard',
        body: 'The first session maps how the family currently communicates — no one is designated the patient.',
      },
      {
        title: 'Clear working agreements',
        body: 'We set ground rules for sessions and for home, so progress does not depend on goodwill alone.',
      },
      {
        title: 'Skills you keep',
        body: 'Sessions end with something practical to try before the next one.',
      },
    ],
  },
  {
    slug: 'trauma-emdr',
    name: 'Trauma Therapy & EMDR',
    icon: 'shield',
    summary:
      'Paced, consent-led trauma treatment including EMDR for single-incident and complex trauma.',
    forWho: 'Adults 18+',
    format: 'In person or telehealth',
    duration: '60–90 minutes',
    cadence: 'Weekly',
    rate: 205,
    featured: true,
    intro:
      'Trauma work is not about retelling the worst thing that happened to you. It is about giving your nervous system a way to finish a response it never got to complete — at a pace you control, with stabilisation first.',
    helpsWith: [
      'PTSD and complex PTSD',
      'Childhood and developmental trauma',
      'Medical trauma and birth trauma',
      'Accidents, assault and single-incident trauma',
      'Dissociation and emotional numbing',
      'Nightmares and hypervigilance',
    ],
    approaches: [
      'EMDR (Eye Movement Desensitization and Reprocessing)',
      'Somatic Experiencing',
      'Trauma-focused CBT',
      'Internal Family Systems (IFS)',
    ],
    whatToExpect: [
      {
        title: 'Stabilisation comes first',
        body: 'Before any processing, you build resourcing and grounding skills. Nobody is rushed into reprocessing.',
      },
      {
        title: 'You hold the brakes',
        body: 'EMDR uses an explicit stop signal. You can pause any session at any moment, and that is treated as good work, not failure.',
      },
      {
        title: 'Integration',
        body: 'Sessions close with grounding, and we plan the days after a heavy session, not just the hour itself.',
      },
    ],
  },
  {
    slug: 'group-therapy',
    name: 'Group Programs',
    icon: 'group',
    summary:
      'Small, facilitated groups — anxiety skills, grief support, and a DBT skills series.',
    forWho: 'Adults 18+, 6–8 per group',
    format: 'In person, weekly cohorts',
    duration: '90 minutes',
    cadence: '8–12 week cohorts',
    rate: 75,
    featured: false,
    intro:
      'There is a particular relief in a room where nobody needs the situation explained. Groups are small, screened and facilitated by two clinicians.',
    helpsWith: [
      'Social anxiety and isolation',
      'Grief and bereavement',
      'Emotion regulation skills (DBT)',
      'Chronic illness adjustment',
      'Early recovery support',
      'Perinatal mood changes',
    ],
    approaches: ['DBT skills training', 'Process groups', 'Psychoeducational groups'],
    whatToExpect: [
      {
        title: 'A screening conversation',
        body: 'Every member meets a facilitator first. Groups work when the fit is right.',
      },
      {
        title: 'A fixed cohort',
        body: 'Groups run as closed cohorts so trust can build. You are with the same people from week one.',
      },
      {
        title: 'Confidentiality you agree to',
        body: 'Every member signs a group agreement. What is said in the room stays in the room.',
      },
    ],
  },
  {
    slug: 'telehealth',
    name: 'Online Therapy',
    icon: 'video',
    summary:
      'The same clinicians, the same care, delivered over secure video anywhere in Oregon or Washington.',
    forWho: 'Residents of OR & WA',
    format: 'Secure video',
    duration: '50 minutes',
    cadence: 'Weekly or biweekly',
    rate: 175,
    featured: false,
    intro:
      'Telehealth removed the commute, not the relationship. For many clients it is the difference between therapy happening and therapy staying on the to-do list.',
    helpsWith: [
      'Limited time between work and caregiving',
      'Living outside the Portland metro',
      'Mobility or chronic-illness barriers',
      'Preferring the safety of your own space',
      'Continuity while travelling in-state',
      'Reduced exposure during illness',
    ],
    approaches: ['All modalities offered in person, adapted for video'],
    whatToExpect: [
      {
        title: 'A secure, private link',
        body: 'Sessions run on a HIPAA-compliant platform. No account, no download — a browser link at your appointment time.',
      },
      {
        title: 'A short tech check',
        body: 'We test camera, audio and connection before your first session so the hour is not spent troubleshooting.',
      },
      {
        title: 'A safety plan on file',
        body: 'For telehealth we record your session location and a local emergency contact. Standard practice, and it matters.',
      },
    ],
  },
];

/** Featured subset used on the home page. */
export const featuredServices = services.filter((service) => service.featured);

/** Lookup helper used by the service detail route. */
export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) ?? null;
}

export default services;
