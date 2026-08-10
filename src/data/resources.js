/**
 * resources.js — the Resources / articles index.
 * PLACEHOLDER: article bodies are short illustrative excerpts. Replace with
 * real clinician-authored content, and have a licensed clinician review
 * anything that reads as clinical guidance before it is published.
 */

export const resourceCategories = [
  { id: 'all', label: 'All' },
  { id: 'starting', label: 'Starting therapy' },
  { id: 'anxiety', label: 'Anxiety & stress' },
  { id: 'relationships', label: 'Relationships' },
  { id: 'families', label: 'Families & teens' },
  { id: 'practical', label: 'Practical guides' },
];

export const resources = [
  {
    slug: 'what-to-expect-first-session',
    title: 'What actually happens in a first therapy session',
    category: 'starting',
    readingTime: 6,
    date: '2026-05-14',
    author: 'aaliyah-brooks',
    featured: true,
    excerpt:
      'The first session is the one people rehearse for. Here is what it really involves, what you are not expected to do, and how to tell whether the fit is right.',
    body: [
      'Almost everyone arrives at a first session having rehearsed an opening line. Most people never use it, because the first question is usually simpler than the one they prepared for.',
      'A first session is mostly information gathering. Your therapist wants to understand what brought you in now — not just what is difficult, but why this month rather than last year. They will ask about your history, your health, your support around you, and what you have already tried.',
      'You are not expected to produce a coherent narrative. Starting in the middle is fine. Saying "I do not know where to start" is a real answer and a useful one.',
      'By the end you should have a sense of two things: whether this person is someone you could be honest with, and roughly what working together would look like. If either answer is no, say so. Therapists would far rather hear that in week one than lose you in week six.',
    ],
  },
  {
    slug: 'grounding-techniques-that-work',
    title: 'Five grounding techniques that hold up under real stress',
    category: 'anxiety',
    readingTime: 5,
    date: '2026-04-22',
    author: 'priya-raman',
    featured: true,
    excerpt:
      'Most grounding advice is written for mild stress. These five are chosen because they still work when your attention has narrowed and your hands are shaking.',
    body: [
      'Grounding techniques fail in the moment for a predictable reason: they were practised in calm and deployed in panic. Anything that requires concentration you do not currently have will not work.',
      'The five below are chosen for robustness. Practise each one while calm, several times, so it is available later without effort.',
      'Physiological sigh: two inhales through the nose, the second short and stacked on the first, then a long slow exhale through the mouth. Repeat three times. It is the fastest reliable way to lower physiological arousal.',
      'Temperature change: cold water on the wrists or the face. This engages the mammalian dive reflex and slows the heart rate directly, without needing you to think clearly first.',
      'Weight and pressure: press your feet into the floor, hard, and hold for ten seconds. Push your palms together. Proprioceptive input reaches the brain even when visual attention has narrowed.',
      'Naming, out loud: five things you can see, four you can hear, three you can touch. Say them audibly. Silent naming is easy to abandon; hearing your own voice is harder to drift from.',
      'A prepared sentence: one line you have written in advance and keep on your phone. "This is a panic response. It peaks in ten minutes. I have been here before." Reading is easier than composing.',
    ],
  },
  {
    slug: 'supporting-a-partner-in-therapy',
    title: 'How to support a partner who has just started therapy',
    category: 'relationships',
    readingTime: 7,
    date: '2026-03-30',
    author: 'daniel-reyes',
    featured: true,
    excerpt:
      'Your partner starting therapy can be a relief and a threat at the same time. What helps, what does not, and why the first two months often feel worse.',
    body: [
      'When someone starts therapy, the people closest to them often expect improvement and get turbulence instead. This is common and not a bad sign. Things that were being carried silently start getting spoken about, and speech is messier than silence.',
      'What helps: asking how they found the session rather than what they talked about. The first is care; the second, however kindly meant, asks them to account for a private hour.',
      'What helps: taking something off their plate on therapy days. Processing is genuinely tiring.',
      'What does not help: treating their therapist as a rival, or asking them to relay your position into the room. If you want a third party to hear you both, that is what couples therapy is for.',
      'What does not help: keeping score of the changes. Progress in therapy is not linear and a bad fortnight is not evidence it is not working.',
      'And one honest note: if your partner\'s therapy is surfacing things about the relationship, your own support becomes harder to sustain alone. Having your own therapist is not disloyalty. It is often what makes staying supportive possible.',
    ],
  },
  {
    slug: 'talking-to-your-teen-about-therapy',
    title: 'Talking to your teenager about starting therapy',
    category: 'families',
    readingTime: 6,
    date: '2026-02-18',
    author: 'sarah-lindqvist',
    featured: false,
    excerpt:
      'How you introduce therapy shapes whether your teen engages with it. A few phrasings that tend to work, and several that reliably backfire.',
    body: [
      'Teenagers are acutely sensitive to being handled. If therapy is introduced as a consequence or a fix, it will be received as a punishment, and the first three sessions get spent undoing that.',
      'What tends to work: naming what you have observed without diagnosing it. "You have seemed heavier lately and I do not think I am the right person to help with all of it" is honest and does not require them to agree with a label.',
      'What tends to work: giving them some control. Let them see the therapist bios, and let them veto one. A teenager who chose their therapist arrives differently.',
      'What tends to backfire: promising you will not be told anything. You cannot promise that, and being caught in it costs you more than the honesty would have.',
      'What tends to backfire: asking for a session report in the car afterwards. Ask if they want to talk, accept the answer, and put music on.',
      'Expect the first few weeks to look like nothing is happening. Rapport with a fifteen-year-old is built slowly and it is not a delay in the work — it is the work.',
    ],
  },
  {
    slug: 'choosing-a-therapist-checklist',
    title: 'A practical checklist for choosing a therapist',
    category: 'practical',
    readingTime: 5,
    date: '2026-01-26',
    author: 'maya-okafor',
    featured: false,
    excerpt:
      'Credentials, modality, logistics and fit — what actually predicts a good outcome, and what people over-weight when they are choosing.',
    body: [
      'The strongest predictor of a good outcome in therapy is not the modality. It is the working alliance: whether you and your therapist agree on the goals, agree on the tasks, and have a bond that survives disagreement.',
      'That said, some things are worth checking first. Confirm the licence — every clinician should have a licence number verifiable through your state board. Confirm the specialism matches. Confirm the practical facts: fee, availability, location or telehealth, and how cancellations work.',
      'Then use the consultation call for the part that actually matters. Ask how they would approach what you described. Ask what a typical course of treatment looks like for it. Listen less to the content of the answer than to whether you feel like a person in the conversation.',
      'People tend to over-weight the acronym after a therapist\'s name and under-weight logistics. A brilliant therapist with no slot at a time you can reliably attend is not a good match.',
      'Finally: it is acceptable to try two or three. Consultations are usually free for a reason.',
    ],
  },
  {
    slug: 'burnout-or-depression',
    title: 'Burnout or depression? The distinction matters for treatment',
    category: 'anxiety',
    readingTime: 6,
    date: '2025-12-09',
    author: 'james-whitfield',
    featured: false,
    excerpt:
      'They overlap heavily and are treated differently. A few of the distinguishing questions clinicians actually use.',
    body: [
      'Burnout and depression share exhaustion, cynicism and reduced capacity, which is why they are so often confused. The distinction matters because the treatments diverge.',
      'One useful question is whether the flatness is context-bound. Burnout tends to lift, at least partially, on a genuine break — two weeks away and something returns. Depression usually travels with you.',
      'Another is what happens to enjoyment. In burnout, the capacity for pleasure is often intact but there is no energy left to reach it. In depression, the pleasure itself is frequently gone even when the opportunity is right there.',
      'A third is self-concept. Burnout tends to produce "I cannot keep doing this." Depression more often produces "There is something wrong with me."',
      'None of these are diagnostic on their own, and the two co-occur often enough that the question is frequently "how much of each." But they point treatment in different directions: burnout usually requires a structural change to load and recovery, while depression responds to treatments aimed at mood directly. Getting the emphasis wrong wastes months.',
    ],
  },
];

export const featuredResources = resources.filter((item) => item.featured);

export function getResourceBySlug(slug) {
  return resources.find((item) => item.slug === slug) ?? null;
}

export default resources;
