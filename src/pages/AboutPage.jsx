import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { Avatar, Button, Card, Icon, SectionHeading } from '../components/ui';
import { site } from '../data/site';
import { team } from '../data/team';
import { affiliations } from '../data/testimonials';
import paths from '../routes/paths';
import styles from './AboutPage.module.css';

/**
 * The practice's operating principles. These are page content rather than
 * catalogue data, so they live here; move them to `src/data/` if the practice
 * starts revising them regularly.
 */
const PRINCIPLES = [
  {
    id: 'fit',
    icon: 'heartHand',
    title: 'Fit matters more than modality',
    body: 'A therapist’s training matters. It matters less than whether you can be honest with them. So we match on fit first and method second, and if it is not right after a session or two, say so. Changing therapists inside the practice is an ordinary request, not an awkward one, and we make it easy.',
  },
  {
    id: 'cost',
    icon: 'info',
    title: 'You know what it costs before you commit',
    body: 'Every rate we charge is published on this site, along with the plans we take, the cancellation policy and what happens if we are out of network with you. Nobody should find out the price of therapy from a bill.',
  },
  {
    id: 'plan',
    icon: 'calendar',
    title: 'The plan is visible, and it is yours to question',
    body: 'Around session four to six your therapist reviews with you what is shifting, what is not, and what you are working towards. That review repeats. You should always be able to answer the question of why you are still coming.',
  },
  {
    id: 'refer',
    icon: 'external',
    title: 'We will say if we are not the right place',
    body: 'Referring you elsewhere on day one is a better outcome than six weeks of near-miss. If you need a prescriber, a higher level of care, or a specialty nobody here holds, we will tell you plainly and help you find it rather than keeping the appointment.',
  },
  {
    id: 'consent',
    icon: 'leaf',
    title: 'Consent and pace belong to you',
    body: 'You can decline a question, stop an exercise, or say that today is not the day for the hard thing. In trauma work especially, stopping is a skill we teach on purpose. It is not a sign the work is failing.',
  },
  {
    id: 'confidentiality',
    icon: 'shieldCheck',
    title: 'You hear the limits of confidentiality first',
    body: 'Your therapist explains the narrow legal exceptions at the first session, in plain language, before you decide what to tell us. For teenagers we agree how communication with caregivers will work before the first session, not after something difficult comes up.',
  },
];

/** What "trauma-informed" changes about an actual session here. */
const TRAUMA_INFORMED = [
  'You are told what a session will involve before it starts, and you can decline any part of it.',
  'We ask before going into detail about what happened, and we stop when you say stop.',
  'Grounding and stabilisation come before any trauma processing, even when that takes weeks.',
  'Sessions close with time to settle, rather than ending at the hardest moment.',
  'We plan for the day after a heavy session, not only the hour itself.',
  'Nobody has to prove what happened to them in order to be taken seriously.',
];

export function AboutPage() {
  usePageMeta({
    title: 'About us',
    description:
      'Healing Horizon is a six-clinician group practice in Portland, founded in 2016. What we believe, how the practice runs, and where to find us.',
  });

  return (
    <>
      {/* ------------------------------------------------------------- hero -- */}
      <section className={`section section--tight section--sunken ${styles.hero}`} aria-labelledby="about-heading">
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">About the practice</p>
            <h1 id="about-heading">About Healing Horizon</h1>
            <p className={styles.lead}>
              We are a group practice in Portland: six licensed therapists, one office on Alder
              Street, and telehealth across Oregon and Washington. This page covers the part most
              practice websites leave vague — who runs the place, what we actually believe about
              doing this work, and how it operates when you are not in the room.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- our story -- */}
      <section className={`section section--sunken ${styles.story}`} aria-labelledby="story-heading">
        <div className="container">
          <div className={styles.storyLayout}>
            <div className={styles.storyMain}>
              <SectionHeading
                id="story-heading"
                eyebrow="Why we exist"
                title="Built for the six months after the crisis"
              />

              <div className={styles.storyProse}>
                <p>
                  Dr. Maya Okafor spent ten years in hospital-based behavioral health before
                  opening this practice in {site.founded}. Hospital work is good at the acute
                  end — keep someone safe, get them through the night, discharge them steady. What
                  it is not built for is the six months afterwards, when the useful work becomes
                  possible and the waiting list is months long. She started Healing Horizon for
                  the six months afterwards.
                </p>
                <p>
                  It is a group practice rather than one clinician with a website, and that is a
                  deliberate structure rather than a growth stage. Six licensed therapists, each
                  with a real specialty, who consult with one another every week. That matters
                  more than it sounds. If you come in for couples work and it becomes clear one
                  partner is carrying untreated trauma, there is a colleague down the hall who
                  does that work, and you do not have to start over somewhere else.
                </p>
                <p>
                  We see clients in person at the Portland office and by secure video anywhere in{' '}
                  {site.serviceAreas.join(' or ')}. Telehealth started as a necessity in 2020 and
                  stayed, because for a lot of people it is the difference between therapy
                  happening and therapy staying on a list.
                </p>
                <p>
                  We are small on purpose and intend to stay that way. Adding a clinician here
                  means finding someone we would send our own family to, which happens rarely and
                  never on a schedule. When that means a short wait rather than an immediate
                  opening with whoever is free, we would rather tell you about the wait.
                </p>
              </div>
            </div>

            <aside className={styles.storyAside} aria-label="Practice facts">
              <dl className={styles.factList}>
                <div className={styles.fact}>
                  <dt className={styles.factLabel}>Founded</dt>
                  <dd className={styles.factValue}>{site.founded}</dd>
                </div>
                <div className={styles.fact}>
                  <dt className={styles.factLabel}>Clinicians</dt>
                  <dd className={styles.factValue}>{team.length} licensed therapists</dd>
                </div>
                <div className={styles.fact}>
                  <dt className={styles.factLabel}>Licensed in</dt>
                  <dd className={styles.factValue}>{site.serviceAreas.join(' and ')}</dd>
                </div>
                <div className={styles.fact}>
                  <dt className={styles.factLabel}>First conversation</dt>
                  <dd className={styles.factValue}>Free, 15 minutes, by phone</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ what we believe */}
      <section className={`section ${styles.beliefs}`} aria-labelledby="beliefs-heading">
        <div className="container">
          <SectionHeading
            id="beliefs-heading"
            eyebrow="What we believe"
            title="Six things we hold ourselves to"
            intro="Not values on a wall. These are the commitments you can hold us to, and the ones we would want you to name if we ever fell short of them."
          />

          <ul className={styles.beliefGrid}>
            {PRINCIPLES.map((principle) => (
              <li key={principle.id} className={styles.beliefItem}>
                <Card className={styles.beliefCard} padding="lg" tone="raised">
                  <span className={styles.beliefIcon} aria-hidden="true">
                    <Icon name={principle.icon} size={22} />
                  </span>
                  <h3 className={styles.beliefTitle}>{principle.title}</h3>
                  <p className={styles.beliefBody}>{principle.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------- how we operate -- */}
      <section
        className={`section section--sunken ${styles.practice}`}
        aria-labelledby="practice-heading"
      >
        <div className="container">
          <SectionHeading
            id="practice-heading"
            eyebrow="How we work as a practice"
            title="What happens behind your hour"
            intro="Therapy is only as good as the structure around it. Here is the structure."
          />

          <div className={styles.practiceGrid}>
            <article className={styles.practiceBlock}>
              <h3 className={styles.practiceTitle}>Consultation is not optional</h3>
              <p>
                Every clinician here brings cases to a weekly consultation group, and newly
                licensed clinicians also have individual supervision with our clinical director.
                Your therapist is never the only mind on your situation, and getting a second
                perspective does not require you to go anywhere. Consultation happens inside the
                practice under the same confidentiality obligations as your sessions.
              </p>
            </article>

            <article className={styles.practiceBlock}>
              <h3 className={styles.practiceTitle}>Training the practice pays for</h3>
              <p>
                Continuing education is funded by the practice and the hours are protected rather
                than squeezed into evenings. That is where the EMDRIA certification, the Gottman
                Level 3 training, the intensive DBT training and the perinatal mental health
                certification on this team came from. Nobody here is working from what they
                learned in graduate school a decade ago.
              </p>
            </article>

            <article className={styles.practiceBlock}>
              <h3 className={styles.practiceTitle}>Matching before you commit</h3>
              <p>
                Our intake coordinator is a licensed clinician, not a receptionist, and she runs
                the first call herself. She will ask what you are looking for and who you would
                find it easiest to talk to. If nobody here is the right answer, that is what she
                will tell you on that call.
              </p>
            </article>
          </div>

          <div className={styles.traumaBlock}>
            <h3 className={styles.practiceTitle}>What we mean by trauma-informed</h3>
            <p className={styles.traumaIntro}>
              It has become a label people put on a website. Here is what it changes about an
              actual session:
            </p>
            <ul className={styles.checkList}>
              {TRAUMA_INFORMED.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkMark} aria-hidden="true">
                    <Icon name="check" size={16} strokeWidth={2.2} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- the office */}
      <section className={`section ${styles.office}`} aria-labelledby="office-heading">
        <div className="container">
          <SectionHeading
            id="office-heading"
            eyebrow="The office"
            title="Where this actually happens"
            intro="If travelling somewhere unfamiliar is part of what makes a first appointment hard, here is everything you would otherwise have to ask."
          />

          <div className={styles.officeGrid}>
            <Card className={styles.officeCard} padding="lg" tone="sunken">
              <span className={styles.officeIcon} aria-hidden="true">
                <Icon name="mapPin" size={22} />
              </span>
              <h3 className={styles.officeTitle}>Where to find us</h3>
              <address className={styles.address}>
                <span>{site.address.line1}</span>
                <span>{site.address.line2}</span>
                <span>
                  {site.address.city}, {site.address.state} {site.address.postalCode}
                </span>
              </address>
              <Button
                href={site.address.mapUrl}
                variant="outline"
                size="sm"
                iconRight="external"
              >
                Open in maps
              </Button>
            </Card>

            <Card className={styles.officeCard} padding="lg" tone="sunken">
              <span className={styles.officeIcon} aria-hidden="true">
                <Icon name="check" size={22} />
              </span>
              <h3 className={styles.officeTitle}>Getting into the building</h3>
              <ul className={styles.officeList}>
                <li>Step-free from the street, with an elevator to the third floor.</li>
                <li>Metered street parking, plus a garage on the same block.</li>
                <li>
                  If you would rather wait in your car until your session time, tell your
                  therapist and they will come out to meet you.
                </li>
              </ul>
              <p className={styles.officeNote}>
                If something would make the building easier for you, tell us before your first
                visit and we will arrange it. Our{' '}
                <Link to={paths.accessibility}>accessibility statement</Link> covers this site
                itself.
              </p>
            </Card>

            <Card className={styles.officeCard} padding="lg" tone="sunken">
              <span className={styles.officeIcon} aria-hidden="true">
                <Icon name="video" size={22} />
              </span>
              <h3 className={styles.officeTitle}>Or do not travel at all</h3>
              <p className={styles.officeBody}>
                We see telehealth clients anywhere in {site.serviceAreas.join(' and ')}, on a
                HIPAA-compliant platform that needs a browser link and nothing else. No account,
                no download. Same clinicians, same rates, same session length.
              </p>
              <Button to={paths.service('telehealth')} variant="ghost" size="sm" iconRight="arrowRight">
                How online sessions work
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- affiliations -- */}
      <section
        className={`section section--tight section--accent ${styles.affiliations}`}
        aria-labelledby="affiliations-heading"
      >
        <div className="container">
          <h2 id="affiliations-heading" className={styles.affiliationsHeading}>
            Professional bodies our clinicians belong to or trained through
          </h2>
          <ul className={styles.affiliationList}>
            {affiliations.map((affiliation) => (
              <li key={affiliation} className={styles.affiliationItem}>
                <Icon name="shieldCheck" size={18} />
                <span>{affiliation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------------------- team preview */}
      <section className={`section ${styles.team}`} aria-labelledby="team-heading">
        <div className="container">
          <SectionHeading
            id="team-heading"
            eyebrow="The team"
            title="The people you would actually be talking to"
            intro="Every clinician here is independently licensed. Each profile says what they work with, how they work, and whether they have room this month."
          />

          <ul className={styles.teamGrid}>
            {team.map((member) => (
              <li key={member.slug} className={styles.teamItem}>
                <Card to={paths.therapist(member.slug)} className={styles.teamCard} padding="md">
                  <Avatar
                    initials={member.initials}
                    accent={member.accent}
                    size="sm"
                    alt={member.name}
                  />
                  <div className={styles.teamText}>
                    <h3 className={styles.teamName}>{member.name}</h3>
                    <p className={styles.teamRole}>{member.role}</p>
                    <p className={styles.teamCreds}>{member.credentials}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          <div className={styles.teamAction}>
            <Button to={paths.therapists} variant="secondary" size="lg" iconRight="arrowRight">
              Read the full profiles
            </Button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- closing CTA -- */}
      <section className={`section section--inverse ${styles.cta}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <p className="eyebrow">Next step</p>
            <h2 id="cta-heading">If this sounds like the right place</h2>
            <p className={styles.ctaCopy}>
              Start with a free 15-minute call. You describe what has been going on, we tell you
              who here has the right training and the availability, and you decide afterwards
              whether to book anything. If we are not the right fit, we will say so on that call
              and point you somewhere better.
            </p>
            <div className={styles.ctaActions}>
              <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight">
                Book a consultation
              </Button>
              <Button to={paths.contact} variant="inverseOutline" size="lg">
                Ask a question first
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
