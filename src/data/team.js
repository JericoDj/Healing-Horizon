/**
 * team.js — clinician directory.
 *
 * PLACEHOLDER: every therapist below is fictional and every licence number is
 * invented. Replace with real clinicians, real licence numbers and real
 * headshots before launch. Publishing a fake licence number is a regulatory
 * problem, not a content problem.
 *
 * `initials` and `accent` drive the generated avatar. Swap `photo` in when you
 * have real headshots (400x500, subject centred, warm neutral background).
 */

export const team = [
  {
    slug: 'maya-okafor',
    name: 'Dr. Maya Okafor',
    credentials: 'PsyD, Licensed Psychologist',
    role: 'Clinical Director',
    licence: 'OR #PS-4821 · WA #PY-60912',
    initials: 'MO',
    accent: 'teal',
    photo: null,
    pronouns: 'she/her',
    acceptingClients: true,
    availability: 'Waitlist — approx. 3 weeks',
    focus: ['Trauma & PTSD', 'EMDR', 'Anxiety', 'Clinical supervision'],
    services: ['individual-therapy', 'trauma-emdr'],
    languages: ['English', 'Igbo'],
    modalities: ['EMDR', 'Internal Family Systems', 'Somatic Experiencing'],
    education: [
      'PsyD, Clinical Psychology — Pacific University',
      'BA, Psychology — University of Washington',
      'EMDRIA-certified EMDR therapist',
    ],
    shortBio:
      'Maya founded Healing Horizon after a decade in hospital-based trauma care. She works slowly and never rushes reprocessing.',
    bio: [
      'Maya spent ten years in hospital-based behavioral health before opening Healing Horizon in 2016, and she brings that setting\'s seriousness about safety planning into private practice.',
      'Her work centres on trauma — the single-incident kind and the long, quiet kind that started in childhood. She is EMDRIA-certified and pairs EMDR with somatic and parts work, because a nervous system rarely responds to reasoning alone.',
      'Clients describe her as direct and unhurried. She will tell you what she is noticing, and she will wait as long as it takes for you to decide what to do with it.',
    ],
    approachQuote:
      'You are not broken and you are not a project. You adapted to something, and we can look at whether that adaptation still serves you.',
  },
  {
    slug: 'daniel-reyes',
    name: 'Daniel Reyes',
    credentials: 'LMFT, Licensed Marriage & Family Therapist',
    role: 'Couples & Family Lead',
    licence: 'OR #T-1907 · WA #LF-60441',
    initials: 'DR',
    accent: 'deep',
    photo: null,
    pronouns: 'he/him',
    acceptingClients: true,
    availability: 'Accepting new clients',
    focus: ['Couples therapy', 'Blended families', 'Infidelity repair', 'Co-parenting'],
    services: ['couples-therapy', 'family-therapy'],
    languages: ['English', 'Spanish'],
    modalities: ['Emotionally Focused Therapy', 'Gottman Method', 'Structural family therapy'],
    education: [
      'MS, Marriage & Family Therapy — Lewis & Clark College',
      'Level 3 trained, The Gottman Institute',
      'Externship in Emotionally Focused Therapy',
    ],
    shortBio:
      'Daniel works with couples and households in conflict, in English and Spanish, with a focus on the pattern rather than the blame.',
    bio: [
      'Daniel works almost exclusively with pairs and households. His view is that most couples are not fighting about the dishes; they are fighting about whether the other person will show up, and the dishes are simply where that question surfaces.',
      'He is Gottman Level 3 trained and EFT-externed, and he uses both — structure when a couple needs the arguing to stop, attachment work when they need to say the harder thing underneath it.',
      'He sees clients in English and Spanish, and works often with blended families and with couples deciding, honestly, whether to continue.',
    ],
    approachQuote:
      'I am not here to decide who is right. I am here to make the pattern visible enough that you can both step out of it.',
  },
  {
    slug: 'sarah-lindqvist',
    name: 'Sarah Lindqvist',
    credentials: 'LCSW, Licensed Clinical Social Worker',
    role: 'Adolescent Specialist',
    licence: 'OR #L-8850 · WA #LW-61220',
    initials: 'SL',
    accent: 'teal',
    photo: null,
    pronouns: 'she/they',
    acceptingClients: true,
    availability: 'Two afternoon slots open',
    focus: ['Teens & adolescents', 'School anxiety', 'LGBTQIA+ youth', 'DBT skills'],
    services: ['teen-therapy', 'individual-therapy', 'group-therapy'],
    languages: ['English'],
    modalities: ['DBT skills', 'CBT for adolescents', 'Narrative therapy'],
    education: [
      'MSW — Portland State University',
      'Intensive DBT training, Behavioral Tech',
      'Gender-affirming care certificate, WPATH-aligned',
    ],
    shortBio:
      'Sarah works with teenagers and their families, and is a long-standing provider of gender-affirming care for young people.',
    bio: [
      'Sarah has spent her career with people between twelve and eighteen — an age group she describes as the most honest client population she has ever worked with, provided they believe you are not reporting everything back.',
      'She works with school avoidance, anxiety, self-harm risk and identity, and she runs the practice\'s DBT skills group. Her intake with caregivers is unusually thorough, because most family friction around a struggling teenager comes from unclear expectations rather than bad intentions.',
      'She provides gender-affirming care and has written letters of support for young people and their families since 2018.',
    ],
    approachQuote:
      'Teenagers do not need another adult managing them. They need one adult who is genuinely curious about what they think.',
  },
  {
    slug: 'james-whitfield',
    name: 'James Whitfield',
    credentials: 'LPC, Licensed Professional Counselor',
    role: 'Therapist',
    licence: 'OR #C-6114',
    initials: 'JW',
    accent: 'clay',
    photo: null,
    pronouns: 'he/him',
    acceptingClients: false,
    availability: 'Waitlist only',
    focus: ['Men\'s mental health', 'Burnout', 'Grief', 'Substance use'],
    services: ['individual-therapy', 'group-therapy'],
    languages: ['English'],
    modalities: ['ACT', 'Motivational interviewing', 'CBT'],
    education: [
      'MA, Clinical Mental Health Counseling — Oregon State University',
      'Certified Alcohol & Drug Counselor I (CADC I)',
    ],
    shortBio:
      'James works with adults on burnout, grief and substance use, often with people who have never been to therapy before.',
    bio: [
      'A large share of James\'s caseload is people who arrived reluctantly — sent by a partner, a doctor or an HR conversation. He is comfortable with that and does not treat ambivalence as a problem to be overcome before real work can start.',
      'He works with burnout, grief, anger and substance use, and holds a CADC I alongside his counselling licence, so he can hold both threads at once when they are tangled.',
      'His style is plain-spoken and practical. Expect goals, homework you actually agreed to, and a check-in on whether any of it is working.',
    ],
    approachQuote:
      'You do not have to want to be here. You just have to be honest for fifty minutes.',
  },
  {
    slug: 'priya-raman',
    name: 'Priya Raman',
    credentials: 'PhD, Licensed Psychologist',
    role: 'Therapist',
    licence: 'OR #PS-5203 · WA #PY-61508',
    initials: 'PR',
    accent: 'deep',
    photo: null,
    pronouns: 'she/her',
    acceptingClients: true,
    availability: 'Accepting new clients',
    focus: ['Anxiety & OCD', 'Perfectionism', 'Perinatal mental health', 'Chronic illness'],
    services: ['individual-therapy', 'telehealth', 'group-therapy'],
    languages: ['English', 'Tamil', 'Hindi'],
    modalities: ['CBT', 'Exposure & Response Prevention', 'ACT'],
    education: [
      'PhD, Clinical Psychology — University of Oregon',
      'Postdoctoral fellowship in anxiety disorders — OHSU',
      'Perinatal Mental Health Certification (PMH-C)',
    ],
    shortBio:
      'Priya treats anxiety and OCD with exposure-based methods, and holds a perinatal mental health certification.',
    bio: [
      'Priya\'s training is in the anxiety disorders, and she uses the treatments with the strongest evidence behind them — CBT and, for OCD, Exposure and Response Prevention. She explains the reasoning as she goes; clients who understand why an exposure works tend to complete it.',
      'She also holds a PMH-C and works with new and expecting parents on the mood changes that nobody warns them about.',
      'A significant part of her caseload is high-achieving adults whose anxiety is invisible from the outside because it keeps producing results.',
    ],
    approachQuote:
      'Anxiety is very good at sounding like caution. Part of the work is learning to tell them apart.',
  },
  {
    slug: 'aaliyah-brooks',
    name: 'Aaliyah Brooks',
    credentials: 'LCSW, Licensed Clinical Social Worker',
    role: 'Therapist & Intake Coordinator',
    licence: 'OR #L-9012',
    initials: 'AB',
    accent: 'clay',
    photo: null,
    pronouns: 'she/her',
    acceptingClients: true,
    availability: 'Accepting new clients',
    focus: ['Life transitions', 'Racial identity & belonging', 'Grief', 'Self-worth'],
    services: ['individual-therapy', 'telehealth', 'group-therapy'],
    languages: ['English'],
    modalities: ['Relational psychodynamic', 'Narrative therapy', 'Mindfulness-based'],
    education: [
      'MSW — Howard University',
      'Certificate in Grief & Bereavement Counseling',
    ],
    shortBio:
      'Aaliyah handles most first conversations at the practice and works with adults through transition, grief and questions of belonging.',
    bio: [
      'Aaliyah is usually the first person a new client speaks to. She runs intake, and she is careful about matching — she would rather refer you out on day one than have you spend six weeks with the wrong fit.',
      'Her own caseload is adults in transition: career changes, divorce, relocation, the loss of a parent, or the slower disorientation of realising the life you built is not the one you want.',
      'She works relationally and unhurriedly, with particular attention to identity, belonging and the cost of code-switching.',
    ],
    approachQuote:
      'Somewhere along the way you learned who you had to be. We can look at whether that is still the arrangement you want.',
  },
];

/**
 * Curated filter taxonomy for the /therapists page.
 *
 * Each clinician's `focus` labels are written for a human reading a profile
 * ("Anxiety & OCD", "Racial identity & belonging"). Those make excellent prose
 * and a terrible filter: flattening them produces two dozen near-duplicate
 * chips, and a visitor looking for anxiety help has to guess whether to press
 * "Anxiety" or "Anxiety & OCD".
 *
 * So the filter offers the eight things people actually arrive searching for.
 * `matches` are lowercase substrings tested against a clinician's focus labels
 * and modalities, which means adding a clinician does not require touching
 * this list.
 */
export const focusAreas = [
  {
    id: 'anxiety',
    label: 'Anxiety & OCD',
    matches: ['anxiety', 'ocd', 'perfectionism', 'exposure'],
  },
  {
    id: 'trauma',
    label: 'Trauma & PTSD',
    matches: ['trauma', 'ptsd', 'emdr', 'somatic'],
  },
  {
    id: 'couples',
    label: 'Couples & family',
    matches: ['couples', 'families', 'family', 'infidelity', 'co-parenting'],
  },
  {
    id: 'teens',
    label: 'Teens & young people',
    matches: ['teens', 'adolescent', 'school', 'youth', 'dbt'],
  },
  {
    id: 'grief',
    label: 'Grief & loss',
    matches: ['grief', 'bereavement', 'loss'],
  },
  {
    id: 'burnout',
    label: 'Burnout & transitions',
    matches: ['burnout', 'life transitions', 'self-worth', "men's"],
  },
  {
    id: 'identity',
    label: 'Identity & belonging',
    matches: ['identity', 'belonging', 'lgbtqia', 'racial'],
  },
  {
    id: 'health',
    label: 'Health & perinatal',
    matches: ['perinatal', 'chronic illness', 'substance'],
  },
];

/** True when a clinician's focus or modalities touch a given focus area. */
export function therapistMatchesFocusArea(member, areaId) {
  const area = focusAreas.find((item) => item.id === areaId);
  if (!area) return true;
  const haystack = [...member.focus, ...member.modalities].join(' ').toLowerCase();
  return area.matches.some((needle) => haystack.includes(needle));
}

/** Lookup helper used by the therapist detail route. */
export function getTherapistBySlug(slug) {
  return team.find((member) => member.slug === slug) ?? null;
}

/** Therapists who deliver a given service slug. */
export function getTherapistsByService(serviceSlug) {
  return team.filter((member) => member.services.includes(serviceSlug));
}

/** Options for the "preferred therapist" select on booking/contact forms. */
export const therapistOptions = [
  { value: '', label: 'No preference — match me' },
  ...team.map((member) => ({
    value: member.slug,
    label: `${member.name}, ${member.credentials.split(',')[0]}`,
  })),
];

export default team;
