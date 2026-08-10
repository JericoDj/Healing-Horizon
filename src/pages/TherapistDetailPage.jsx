import { Link, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Icon,
  SectionHeading,
  StatusBadge,
} from '../components/ui';
import { getTherapistBySlug, team } from '../data/team';
import { getServiceBySlug } from '../data/services';
import { site } from '../data/site';
import paths from '../routes/paths';
import styles from './TherapistDetailPage.module.css';

/**
 * Plain-English glosses for the modalities in team.js.
 *
 * Written to be descriptive rather than promissory: what the method involves,
 * not what it will do for you. A client reading these should be able to decide
 * whether it sounds like something they want to try, which is the only
 * decision this page is asking them to make.
 */
const MODALITY_NOTES = {
  EMDR: 'A structured protocol for reprocessing traumatic memory, paced by you and with an explicit stop signal you can use at any point.',
  'Internal Family Systems':
    'Treats the mind as having parts with competing jobs — the one that pushes, the one that hides — and works with them rather than against them.',
  'Somatic Experiencing':
    'Follows what the body is doing, such as tension, breath and impulse, as a route into material that talking alone tends to circle.',
  'Emotionally Focused Therapy':
    'Looks underneath a recurring argument to the attachment need driving it, so the conversation stops being about who is right.',
  'Gottman Method':
    'A research-derived framework for conflict, repair and friendship in couples, with concrete practices to try between sessions.',
  'Structural family therapy':
    'Maps the roles, alliances and boundaries inside a household, and where an arrangement that once worked has stopped working.',
  'DBT skills':
    'Teachable skills for riding out distress, regulating emotion and handling relationships, practised deliberately between sessions.',
  'CBT for adolescents':
    'Cognitive behavioural work adapted for teenagers — shorter, more concrete, and built around what they actually care about.',
  'Narrative therapy':
    'Separates the person from the problem and examines the story that has been told about it, including who else wrote parts of it.',
  ACT: 'Acceptance and Commitment Therapy: building willingness to feel what is present while still acting on what matters to you.',
  'Motivational interviewing':
    'A way of talking through ambivalence without argument, so the reasons for changing something come from you rather than the therapist.',
  CBT: 'Cognitive Behavioral Therapy: examining the loop between thought, feeling and behaviour, then testing it against what actually happens.',
  'Exposure & Response Prevention':
    'The standard approach for OCD: approaching what sets off the urge and postponing the ritual, in graded steps you agree to in advance.',
  'Relational psychodynamic':
    'Pays attention to patterns across your relationships, including the one in the room, and where those patterns were first learned.',
  'Mindfulness-based':
    'Practices for noticing what is happening while it is happening, without having to act on it immediately.',
};

const FALLBACK_NOTE =
  'Your therapist will explain how this works, and why it fits what you described, before you start.';

export function TherapistDetailPage() {
  const { slug } = useParams();
  const therapist = getTherapistBySlug(slug);

  usePageMeta({
    title: therapist ? therapist.name : 'Therapist not found',
    description: therapist
      ? therapist.shortBio
      : 'That therapist profile is not available. Browse the clinicians currently practising at Healing Horizon.',
    noIndex: !therapist,
  });

  if (!therapist) {
    return (
      <section className={`section ${styles.notFound}`} aria-labelledby="therapist-missing-heading">
        <div className="container container--narrow">
          <Breadcrumbs
            items={[
              { label: 'Home', to: paths.home },
              { label: 'Our Therapists', to: paths.therapists },
              { label: 'Not found' },
            ]}
          />
          <p className="eyebrow">Nothing here</p>
          <h1 id="therapist-missing-heading">Therapist not found</h1>
          <p className={styles.notFoundBody}>
            The profile you were looking for is not on this site. Clinicians sometimes leave a
            practice, and links go stale. Everyone currently seeing clients at Healing Horizon is
            listed on the therapists page.
          </p>
          <div className={styles.notFoundActions}>
            <Button to={paths.therapists} variant="primary" iconLeft="arrowLeft">
              Back to our therapists
            </Button>
            <Button to={paths.contact} variant="outline">
              Ask us who is available
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const firstName = therapist.name.replace(/^Dr\.\s+/, '').split(' ')[0];
  const services = therapist.services.map(getServiceBySlug).filter(Boolean);
  const otherTherapists = team.filter((member) => member.slug !== therapist.slug).slice(0, 3);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className={`section ${styles.hero}`} aria-labelledby="therapist-heading">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', to: paths.home },
              { label: 'Our Therapists', to: paths.therapists },
              { label: therapist.name },
            ]}
          />

          <div className={styles.heroGrid}>
            <div className={styles.heroAside}>
              <div className={styles.portrait}>
                <Avatar
                  size="xl"
                  initials={therapist.initials}
                  accent={therapist.accent}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <StatusBadge available={therapist.acceptingClients}>
                {therapist.acceptingClients ? 'Accepting new clients' : 'Not accepting new clients'}
              </StatusBadge>

              <dl className={styles.facts}>
                <div className={styles.fact}>
                  <dt>Availability</dt>
                  <dd>{therapist.availability}</dd>
                </div>
                <div className={styles.fact}>
                  <dt>Licence</dt>
                  <dd>{therapist.licence}</dd>
                </div>
                <div className={styles.fact}>
                  <dt>Speaks</dt>
                  <dd>{therapist.languages.join(', ')}</dd>
                </div>
                <div className={styles.fact}>
                  <dt>Pronouns</dt>
                  <dd>{therapist.pronouns}</dd>
                </div>
              </dl>
            </div>

            <div className={styles.heroMain}>
              <p className="eyebrow">{therapist.role}</p>
              <h1 id="therapist-heading">{therapist.name}</h1>
              <p className={styles.credentials}>{therapist.credentials}</p>

              <figure className={styles.quote}>
                <Icon name="quote" size={32} className={styles.quoteMark} />
                <blockquote className={styles.quoteText}>
                  <p>{therapist.approachQuote}</p>
                </blockquote>
                <figcaption className={styles.quoteCaption}>
                  How {firstName} describes the work
                </figcaption>
              </figure>

              <div className={styles.heroActions}>
                <Button to={paths.book} variant="primary" size="lg" iconRight="arrowRight">
                  Book with {firstName}
                </Button>
                <Button to={paths.contact} variant="outline" size="lg">
                  Contact us
                </Button>
              </div>

              {therapist.acceptingClients ? null : (
                <p className={styles.heroNote}>
                  {firstName} is not taking new clients at the moment. You can still ask to be put
                  on the waitlist, and we will suggest colleagues with similar training in the
                  meantime.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- About/bio */}
      <section className="section section--sunken" aria-labelledby="about-heading">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div>
              <SectionHeading id="about-heading" eyebrow="Background" title={`About ${firstName}`} />
              <div className="prose">
                {therapist.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className={styles.focusPanel}>
              <h3 className={styles.panelTitle} id="focus-heading">
                Areas of focus
              </h3>
              <ul className={styles.focusList} aria-labelledby="focus-heading">
                {therapist.focus.map((item) => (
                  <li key={item}>
                    <Badge tone="brand">{item}</Badge>
                  </li>
                ))}
              </ul>
              <p className={styles.panelNote}>
                These are the areas {firstName} works in most often. If what you are bringing is not
                on the list, ask anyway — we would rather tell you plainly whether it fits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ How they work */}
      <section className="section" aria-labelledby="modalities-heading">
        <div className="container">
          <SectionHeading
            id="modalities-heading"
            eyebrow="Methods"
            title="How they work"
            intro={`${firstName} draws on the approaches below, and will tell you which one is being used and why. None of them is applied to everyone in the same order.`}
          />

          <ul className={styles.modalityGrid}>
            {therapist.modalities.map((modality) => (
              <li key={modality}>
                <Card as="article" tone="outline" padding="md" className={styles.modalityCard}>
                  <span className={styles.modalityIcon} aria-hidden="true">
                    <Icon name="sparkle" size={20} />
                  </span>
                  <h3 className={styles.modalityTitle}>{modality}</h3>
                  <p className={styles.modalityBody}>{MODALITY_NOTES[modality] ?? FALLBACK_NOTE}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------- Training & licence */}
      <section className="section section--sunken" aria-labelledby="training-heading">
        <div className="container">
          <SectionHeading
            id="training-heading"
            eyebrow="Credentials"
            title="Training and credentials"
            intro="Every clinician here holds a current licence, and every licence number can be checked against the state board that issued it. We would encourage you to check."
          />

          <div className={styles.trainingGrid}>
            <Card tone="raised" padding="lg" className={styles.trainingCard}>
              <h3 className={styles.panelTitle}>Education and training</h3>
              <ul className={styles.checkList}>
                {therapist.education.map((entry) => (
                  <li key={entry}>
                    <Icon name="check" size={17} strokeWidth={2.2} />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card tone="raised" padding="lg" className={styles.trainingCard}>
              <h3 className={styles.panelTitle}>Licence</h3>
              <p className={styles.licence}>{therapist.licence}</p>
              <p className={styles.panelNote}>
                Licences are issued and held by the state board in each state where{' '}
                {firstName} practises, and are verifiable through that board&rsquo;s public
                register. {site.name} is licensed to deliver care in{' '}
                {site.serviceAreas.join(' and ')}.
              </p>
              <p className={styles.panelNote}>
                {therapist.credentials} · {therapist.pronouns}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Services */}
      {services.length > 0 ? (
        <section className="section" aria-labelledby="services-heading">
          <div className="container">
            <SectionHeading
              id="services-heading"
              eyebrow="What they offer"
              title={`Services ${firstName} provides`}
              intro="Each of these has its own page with fees, session length and what the first few weeks look like."
            />

            <ul className={styles.serviceGrid}>
              {services.map((service) => (
                <li key={service.slug} className={styles.serviceItem}>
                  <Card
                    to={paths.service(service.slug)}
                    tone="raised"
                    padding="md"
                    className={styles.serviceCard}
                  >
                    <span className={styles.serviceIcon} aria-hidden="true">
                      <Icon name={service.icon} size={22} />
                    </span>
                    <h3 className={styles.serviceTitle}>{service.name}</h3>
                    <p className={styles.serviceSummary}>{service.summary}</p>
                    <span className={styles.serviceMeta}>
                      {service.duration} · {service.format}
                    </span>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ---------------------------------------------------- Other therapists */}
      <section className="section section--sunken" aria-labelledby="others-heading">
        <div className="container">
          <SectionHeading
            id="others-heading"
            eyebrow="Also here"
            title="Other therapists"
            intro="If the fit does not feel right, that is worth acting on rather than working around."
          />

          <ul className={styles.otherGrid}>
            {otherTherapists.map((member) => (
              <li key={member.slug} className={styles.otherItem}>
                <Card as="article" tone="raised" padding="md" interactive className={styles.otherCard}>
                  <Avatar
                    size="sm"
                    initials={member.initials}
                    accent={member.accent}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className={styles.otherText}>
                    <h3 className={styles.otherName}>
                      <Link to={paths.therapist(member.slug)} className={styles.otherLink}>
                        {member.name}
                      </Link>
                    </h3>
                    <p className={styles.otherRole}>{member.credentials}</p>
                    <p className={styles.otherFocus}>{member.focus.slice(0, 2).join(' · ')}</p>
                    <StatusBadge available={member.acceptingClients}>
                      {member.acceptingClients ? 'Accepting new clients' : 'Waitlist only'}
                    </StatusBadge>
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          <div className={styles.otherActions}>
            <Button to={paths.therapists} variant="secondary" iconLeft="arrowLeft">
              See the whole team
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Closing CTA */}
      <section className="section section--inverse" aria-labelledby="therapist-cta-heading">
        <div className="container">
          <SectionHeading
            id="therapist-cta-heading"
            align="center"
            eyebrow="A small next step"
            title={`Talk to ${firstName} for 15 minutes`}
            intro="A short consultation call, free of charge, to work out whether this is the right place to start. You are not committing to anything by making it."
          />
          <div className={styles.ctaActions}>
            <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight">
              Book a consultation
            </Button>
            <Button href={site.contact.phoneHref} variant="inverseOutline" size="lg" iconLeft="phone">
              {site.contact.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TherapistDetailPage;
