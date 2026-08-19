/**
 * services.js — the practice's service catalogue.
 *
 * Sourced directly from Healing Horizons Behavioral Health, LLC
 * Psychiatric Rehabilitation Program (PRP) Service Components (Section 2.5).
 */

export const services = [
  {
    slug: 'daily-living-skills',
    name: 'Daily Living & Independent Living Skills',
    icon: 'home',
    summary:
      'Support with personal hygiene, budgeting, meal planning, nutrition, time management, household skills, and other daily living needs.',
    forWho: 'Adults & Transitional-Age Youth',
    format: 'In-home & community settings',
    duration: 'Individualized sessions',
    cadence: 'Per Rehabilitation Plan (IRP)',
    rate: 'Maryland Medicaid Covered',
    featured: true,
    intro:
      'Building practical routines for everyday independence. We provide structured, one-on-one rehabilitation support in real-life environments where daily living skills are needed most.',
    helpsWith: [
      'Personal hygiene and self-care routines',
      'Household management and organization',
      'Budgeting, financial literacy, and bill paying',
      'Meal planning, grocery shopping, and healthy nutrition',
      'Time management and daily scheduling',
      'Developing sustainable independent living habits',
    ],
    approaches: [
      'In-vivo skill practice in home & community',
      'Goal-oriented daily living plans',
      'Hands-on behavioral coaching',
      'Strength-based individual reinforcement',
    ],
    whatToExpect: [
      {
        title: 'Initial Functional Assessment',
        body: 'We evaluate daily living strengths, personal goals, and areas needing support in your actual living environment.',
      },
      {
        title: 'Individualized Rehabilitation Plan (IRP)',
        body: 'Together with your rehabilitation specialist, you set practical goals for independent living and self-sufficiency.',
      },
      {
        title: 'Real-World Skill Building',
        body: 'Staff work directly with you at home and in the community to practice and solidify daily living routines.',
      },
    ],
  },
  {
    slug: 'symptom-management',
    name: 'Mental Health Symptom Management',
    icon: 'sparkle',
    summary:
      'Education and coaching to recognize symptoms, develop coping strategies, regulate emotions, and support ongoing mental wellness.',
    forWho: 'Adults & Transitional-Age Youth',
    format: 'Community & one-to-one coaching',
    duration: 'Individualized sessions',
    cadence: 'Per Rehabilitation Plan (IRP)',
    rate: 'Maryland Medicaid Covered',
    featured: true,
    intro:
      'Empowering participants with actionable self-regulation and coping strategies to manage persistent behavioral health challenges and maintain community stability.',
    helpsWith: [
      'Recognizing early warning signs and triggers of relapse',
      'Developing personal coping and emotional regulation tools',
      'Reducing distress, panic, and crisis episodes',
      'Wellness recovery action planning',
      'Building emotional resilience and self-advocacy',
      'Decreasing avoidable psychiatric hospitalizations',
    ],
    approaches: [
      'Recovery-oriented wellness coaching',
      'Distress tolerance & emotional regulation tools',
      'Proactive relapse prevention planning',
      'Psychoeducation & self-advocacy training',
    ],
    whatToExpect: [
      {
        title: 'Trigger & Pattern Identification',
        body: 'Learn to recognize early changes in mood, thought patterns, or stressors before they escalate into crises.',
      },
      {
        title: 'Custom Coping Toolkit',
        body: 'Develop practical grounding, emotional regulation, and self-soothing skills you can use anywhere.',
      },
      {
        title: 'Ongoing Wellness Monitoring',
        body: 'Regularly review and adapt your wellness plan with your rehabilitation coordinator as your stability grows.',
      },
    ],
  },
  {
    slug: 'community-coordination',
    name: 'Community Resource & Care Coordination',
    icon: 'leaf',
    summary:
      'Support navigating housing, SSI/SSDI, Medicaid benefits, food resources, transportation, healthcare, and other community services.',
    forWho: 'Adults & Transitional-Age Youth',
    format: 'Community & resource navigation',
    duration: 'Ongoing coordination',
    cadence: 'Collaborative schedule',
    rate: 'Maryland Medicaid Covered',
    featured: true,
    intro:
      'Connecting participants with essential community supports, public entitlements, and healthcare services to establish a secure foundation for long-term recovery.',
    helpsWith: [
      'Navigating supportive and independent housing resources',
      'Applying for and maintaining SSI/SSDI, SNAP, and Medicaid benefits',
      'Accessing food assistance and community nutrition programs',
      'Arranging public and non-emergency medical transportation',
      'Coordinating with primary care and specialty medical providers',
      'Connecting with peer recovery and community programs',
    ],
    approaches: [
      'Person-centered care coordination',
      'Direct linkage to local and state resources',
      'Collaboration with CSAs, LBHAs, and medical teams',
      'Self-advocacy and entitlement maintenance support',
    ],
    whatToExpect: [
      {
        title: 'Resource Needs Assessment',
        body: 'Identify immediate and long-term needs for housing, entitlements, healthcare, and basic necessities.',
      },
      {
        title: 'Direct Linkage & Navigation',
        body: 'Staff assist with paperwork, applications, agency appointments, and communicating with benefit providers.',
      },
      {
        title: 'Sustained Care Coordination',
        body: 'Continuous collaboration to ensure all community and medical supports stay connected and active.',
      },
    ],
  },
  {
    slug: 'vocational-educational',
    name: 'Educational & Vocational Support',
    icon: 'book',
    summary:
      'Support with job readiness, interview preparation, workplace skills, education, vocational goals, and employment resources.',
    forWho: 'Adults & Transitional-Age Youth',
    format: 'Community & vocational sites',
    duration: 'Goal-focused sessions',
    cadence: 'Per Rehabilitation Plan (IRP)',
    rate: 'Maryland Medicaid Covered',
    featured: true,
    intro:
      'Supporting participants in pursuing meaningful vocational, career, and educational milestones that build confidence, financial independence, and purpose.',
    helpsWith: [
      'Employment readiness and workplace soft skills',
      'Resume writing and job application assistance',
      'Interview preparation and mock interviews',
      'Returning to high school, GED programs, or vocational training',
      'Connecting with Maryland supported employment services (DORS)',
      'Navigating workplace communication and accommodations',
    ],
    approaches: [
      'Supported employment readiness model',
      'Individualized vocational goal mapping',
      'Interview coaching and application support',
      'Educational enrollment coordination',
    ],
    whatToExpect: [
      {
        title: 'Career & Educational Interest Mapping',
        body: 'Discover your strengths, past experience, interests, and educational or employment goals.',
      },
      {
        title: 'Readiness & Application Prep',
        body: 'Craft resumes, prepare job or school applications, and practice communication techniques.',
      },
      {
        title: 'Retention & Ongoing Support',
        body: 'Ongoing coaching to navigate work/school environments, manage stress, and maintain success.',
      },
    ],
  },
  {
    slug: 'medication-support',
    name: 'Medication Education & Support',
    icon: 'shieldCheck',
    summary:
      'Education about medications, treatment routines, and questions to discuss with prescribing healthcare providers.',
    forWho: 'Enrolled PRP Participants',
    format: 'In-home & community check-ins',
    duration: 'Routine check-ins',
    cadence: 'Per Rehabilitation Plan (IRP)',
    rate: 'Maryland Medicaid Covered',
    featured: false,
    intro:
      'Healing Horizons does not prescribe medications, but supports participants in understanding their medications, maintaining routines, and communicating effectively with their doctors.',
    helpsWith: [
      'Understanding prescribed psychiatric medications and their purposes',
      'Establishing daily routines for consistent medication adherence',
      'Identifying potential side effects to report to prescribing clinicians',
      'Organizing prescription refills and pharmacy coordination',
      'Coordinating updates directly with external prescribing doctors',
    ],
    approaches: [
      'Non-prescribing adherence coaching',
      'Collaborative coordination with prescribing clinicians',
      'Routine-building & pill-organizer systems',
      'Medication literacy education',
    ],
    whatToExpect: [
      {
        title: 'Medication Routine Review',
        body: 'Review current prescriptions, schedules, and any hurdles to consistent adherence.',
      },
      {
        title: 'Habit & Adherence Support',
        body: 'Set up organizational strategies and reminders that fit seamlessly into daily routines.',
      },
      {
        title: 'Prescriber Collaboration',
        body: 'Assist with relaying observations and questions to your psychiatrist or medical provider.',
      },
    ],
  },
  {
    slug: 'social-interpersonal',
    name: 'Social Skills & Interpersonal Development',
    icon: 'group',
    summary:
      'Support with communication, conflict resolution, healthy relationships, and building social confidence.',
    forWho: 'Adults & Transitional-Age Youth',
    format: 'Community & group settings',
    duration: 'Individual & interactive sessions',
    cadence: 'Per Rehabilitation Plan (IRP)',
    rate: 'Maryland Medicaid Covered',
    featured: false,
    intro:
      'Helping participants build meaningful social connections, improve communication skills, and comfortably engage in community and group activities.',
    helpsWith: [
      'Effective communication and active listening skills',
      'Healthy conflict resolution and boundary setting',
      'Building and maintaining positive social support networks',
      'Engaging in community recreation, arts, and social events',
      'Overcoming social isolation and building confidence',
    ],
    approaches: [
      'Interactive interpersonal coaching',
      'Real-world social outings and group participation',
      'Boundary setting and communication modeling',
      'Community integration activities',
    ],
    whatToExpect: [
      {
        title: 'Social Goals Assessment',
        body: 'Identify interpersonal goals, relationship dynamics, and community interests.',
      },
      {
        title: 'Interactive Practice',
        body: 'Practice conversational skills, conflict de-escalation, and boundary communication in supportive settings.',
      },
      {
        title: 'Community Participation',
        body: 'Take part in structured community outings, interest groups, and public events.',
      },
    ],
  },
  {
    slug: 'crisis-safety',
    name: 'Crisis Prevention & Safety Planning',
    icon: 'shield',
    summary:
      'Individualized crisis prevention planning, coping strategies, emergency protocols, and coordination with appropriate support services.',
    forWho: 'All Enrolled Participants',
    format: 'Individual & family collaboration',
    duration: 'Ongoing safety review',
    cadence: 'Created at intake & updated quarterly',
    rate: 'Maryland Medicaid Covered',
    featured: false,
    intro:
      'Proactive safety planning that establishes clear de-escalation strategies, emergency contacts, and seamless coordination with local crisis authorities.',
    helpsWith: [
      'Developing personalized crisis prevention and safety plans',
      'Identifying environmental and emotional de-escalation triggers',
      'Establishing emergency contact procedures for caregivers and staff',
      'Coordinating with Local Behavioral Health Authorities (LBHAs) and Mobile Crisis Teams',
    ],
    approaches: [
      'Collaborative safety plan creation',
      'De-escalation and grounding protocols',
      'Multi-agency emergency coordination',
      'Regular quarterly reviews and updates',
    ],
    whatToExpect: [
      {
        title: 'Personalized Safety Plan',
        body: 'Create a step-by-step plan detailing warning signs, personal coping tools, and support contacts.',
      },
      {
        title: 'Support Network Engagement',
        body: 'Ensure family, natural supports, and care teams understand emergency procedures.',
      },
      {
        title: '24/7 Crisis Coordination',
        body: 'Direct linkages to 988, local CSAs, and mobile crisis intervention units.',
      },
    ],
  },
  {
    slug: 'family-support',
    name: 'Family & Natural Support Involvement',
    icon: 'hearts',
    summary:
      'With consent, families and natural supports can participate in planning, coordination, and ongoing rehabilitation goals.',
    forWho: 'Participants & Consented Supports',
    format: 'In-home & consultative meetings',
    duration: 'Collaborative sessions',
    cadence: 'As requested & consented',
    rate: 'Maryland Medicaid Covered',
    featured: false,
    intro:
      'Engaging family members, caregivers, and natural supports to foster an understanding, stable environment that champions the participant’s recovery.',
    helpsWith: [
      'Engaging families and caregivers in rehabilitation goals',
      'Improving household communication and mutual understanding',
      'Educating natural supports on mental health recovery and boundaries',
      'Strengthening long-term informal community support networks',
    ],
    approaches: [
      'Strength-based family engagement',
      'Psychoeducation for caregivers and natural supports',
      'Collaborative goal alignment',
    ],
    whatToExpect: [
      {
        title: 'Participant Consent & Preference',
        body: 'Involvement is always led by participant consent and tailored to their personal wishes.',
      },
      {
        title: 'Collaborative Goal Alignment',
        body: 'Work together with loved ones to support IRP milestones and independent living goals.',
      },
      {
        title: 'Caregiver Support & Education',
        body: 'Provide tools and resources to help families navigate behavioral health challenges positively.',
      },
    ],
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) ?? null;
}

export const programs = services;
export const featuredPrograms = featuredServices;
export const getProgramBySlug = getServiceBySlug;

export default programs;
