/**
 * resources.js — the Resources / articles index.
 * PLACEHOLDER: article bodies are short illustrative excerpts. Replace with
 * real clinician-authored content, and have a licensed clinician review
 * anything that reads as clinical guidance before it is published.
 */

export const resourceCategories = [
  { id: 'all', label: 'All' },
  { id: 'psych-rehab', label: 'Psychiatric Rehabilitation' },
  { id: 'independent-living', label: 'Independent Living' },
  { id: 'mental-health', label: 'Mental Health & Wellness' },
  { id: 'community-resources', label: 'Community Resources' },
  { id: 'families-caregivers', label: 'Families & Caregivers' },
  { id: 'practical-guides', label: 'Practical Guides' },
];

export const resources = [
  {
    slug: 'what-is-a-psychiatric-rehabilitation-program',
    title: 'What Is a Psychiatric Rehabilitation Program (PRP)?',
    category: 'psych-rehab',
    readingTime: 6,
    date: '2026-05-14',
    author: 'clinical-team',
    featured: true,
    excerpt:
      'Learn what psychiatric rehabilitation is, who it can help, what services may be included, and what to expect when getting started in Maryland.',
    body: [
      'A Psychiatric Rehabilitation Program (PRP) is a person-centered, recovery-oriented service designed to help individuals with serious mental health conditions develop the skills and community resources needed to live independently and successfully.',
      'Unlike clinical psychotherapy alone, which focuses on symptom analysis and processing, PRP focuses on functional daily living skills, social confidence, emotional regulation, community navigation, and vocational readiness.',
      'In Maryland, PRP services are provided in real-world community and in-home settings. Rehabilitation specialists work alongside participants to practice budgeting, meal preparation, medication adherence routines, and transportation.',
      'Eligible participants must have an active mental health diagnosis, be actively engaged in outpatient mental health therapy, and have a referral from their licensed clinician. Services are 100% covered by Maryland Medicaid for authorized individuals.',
    ],
  },
  {
    slug: 'daily-living-routines-independence',
    title: 'Building Sustainable Daily Living Routines for Greater Independence',
    category: 'independent-living',
    readingTime: 5,
    date: '2026-04-22',
    author: 'rehabilitation-team',
    featured: true,
    excerpt:
      'Practical strategies for establishing consistent morning routines, household organization, meal planning, and budgeting that support mental wellness.',
    body: [
      'Structured daily routines provide stability when living with mental health challenges. Having a predictable flow to your day reduces cognitive fatigue and anxiety.',
      'Start with one anchor habit: Pick a consistent wake-up time or morning meal rather than overhauling your entire schedule overnight.',
      'Break tasks into visual steps: Use checklists or calendar reminders for grocery shopping, laundry, hygiene, and bill paying.',
      'Practice in real-life settings: Practicing skills directly in your kitchen, grocery store, or transit station builds confidence far faster than talking about it in an office.',
    ],
  },
  {
    slug: 'recognizing-early-symptom-warning-signs',
    title: 'Recognizing Early Warning Signs & Mental Health Wellness Tools',
    category: 'mental-health',
    readingTime: 6,
    date: '2026-03-30',
    author: 'clinical-team',
    featured: true,
    excerpt:
      'How to identify personal emotional triggers, notice subtle relapse indicators, and build a proactive wellness recovery plan.',
    body: [
      'Relapse and distress rarely happen without warning. Changes in sleep patterns, appetite, social withdrawal, or increased irritability are common early signals.',
      'Developing a personal wellness toolkit allows you to intervene before mild symptoms escalate into a crisis episode.',
      'Work with your rehabilitation coordinator to document specific coping strategies: breathing exercises, grounding techniques, reaching out to a support person, or contacting your care team.',
      'Keep a copy of your crisis prevention plan easily accessible on your phone or in your living space.',
    ],
  },
  {
    slug: 'navigating-maryland-community-resources',
    title: 'Navigating Maryland Community Resources & Public Entitlements',
    category: 'community-resources',
    readingTime: 7,
    date: '2026-02-18',
    author: 'intake-team',
    featured: false,
    excerpt:
      'A guide to accessing supportive housing, SSI/SSDI benefits, SNAP food assistance, public transit passes, and healthcare in Maryland.',
    body: [
      'Community resource linkage is a core pillar of psychiatric rehabilitation. Navigating complex state and county programs can feel overwhelming when done alone.',
      'Entitlements support stability: Applying for and maintaining Medicaid, SNAP food benefits, and disability income ensures your essential needs are secure.',
      'Transportation resources: Many Maryland counties offer non-emergency medical transportation and discounted transit passes for eligible participants.',
      'Our care coordinators work directly with local housing authorities and community partners to connect participants with safe, supportive living options.',
    ],
  },
  {
    slug: 'family-and-natural-support-role-in-prp',
    title: 'How Families and Natural Supports Can Support PRP Recovery',
    category: 'families-caregivers',
    readingTime: 5,
    date: '2026-01-26',
    author: 'rehabilitation-team',
    featured: false,
    excerpt:
      'Understanding the boundary between supporting independence and caretaking, and how loved ones can reinforce rehabilitation goals.',
    body: [
      'Family members and trusted friends play a powerful role in long-term rehabilitation and community stability.',
      'Empowerment over caretaking: Encourage your loved one to practice their daily living skills, cook meals, and manage appointments rather than doing tasks for them.',
      'Participating in rehabilitation reviews: With participant consent, family members can participate in goal-setting discussions to align support at home.',
      'Celebrate incremental progress: Building lasting independent habits is a gradual process of consistency and positive reinforcement.',
    ],
  },
  {
    slug: 'step-by-step-guide-prp-referral-maryland',
    title: 'The Step-by-Step Guide to Getting a PRP Referral in Maryland',
    category: 'practical-guides',
    readingTime: 5,
    date: '2026-01-12',
    author: 'intake-team',
    featured: false,
    excerpt:
      'Everything you need to know about Maryland Medicaid eligibility, clinician referral forms, intake assessments, and starting PRP services.',
    body: [
      'Starting Psychiatric Rehabilitation services in Maryland requires three simple steps:',
      'Step 1: Clinical Referral — Your licensed outpatient therapist or psychiatrist completes a PRP referral form confirming active mental health treatment.',
      'Step 2: Intake & Assessment — Our intake coordinator reviews your referral, verifies Medicaid coverage, and completes an initial functional assessment.',
      'Step 3: Individualized Plan — You and your rehabilitation specialist create your customized rehabilitation plan and begin in-home and community sessions.',
    ],
  },
];

export const featuredResources = resources.filter((item) => item.featured);

export function getResourceBySlug(slug) {
  return resources.find((item) => item.slug === slug) ?? null;
}

export const exploreCategories = resourceCategories;
export const exploreArticles = resources;
export const featuredExploreArticles = featuredResources;
export const getExploreArticleBySlug = getResourceBySlug;

export default resources;
