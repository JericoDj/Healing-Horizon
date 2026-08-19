import { Link, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Icon,
  SectionHeading,
  StatusBadge,
} from '../components/ui';
import { getProgramBySlug, programs } from '../data/programs';
import { getTherapistsByService } from '../data/team';
import paths from '../routes/paths';
import styles from './ProgramDetailPage.module.css';

/** Three siblings, taken in catalogue order so the set stays stable per page. */
function relatedTo(service) {
  const index = programs.findIndex((item) => item.slug === service.slug);
  return [1, 2, 3].map((offset) => programs[(index + offset) % programs.length]);
}

export function ProgramDetailPage() {
  const { slug } = useParams();
  const service = getProgramBySlug(slug);

  usePageMeta({
    title: service ? `${service.name} | Healing Horizons PRP` : 'Program not found',
    description: service
      ? service.summary
      : 'We could not find that program. See all programs Healing Horizons offers, or ask us directly.',
    noIndex: !service,
  });

  /* ---------------------------------------------------------- not found -- */
  if (!service) {
    return (
      <section className={`section ${styles.missing}`} aria-labelledby="missing-heading">
        <div className="container container--narrow">
          <Breadcrumbs
            items={[
              { label: 'Home', to: paths.home },
              { label: 'Programs', to: paths.programs },
              { label: 'Not found' },
            ]}
          />

          <div className={styles.missingInner}>
            <span className={styles.missingIcon} aria-hidden="true">
              <Icon name="search" size={28} />
            </span>

            <h1 id="missing-heading">We could not find that program</h1>

            <p className={styles.missingCopy}>
              The link may be out of date, or the address may have a typo in it. Here is everything we currently offer, and a way to ask us directly.
            </p>

            <div className={styles.missingActions}>
              <Button to={paths.programs} variant="primary" size="lg" iconRight="arrowRight">
                See all programs
              </Button>
              <Button to={paths.contact} variant="outline" size="lg">
                Ask us a question
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const therapists = getTherapistsByService(service.slug);
  const related = relatedTo(service);

  return (
    <>
      {/* ------------------------------------------------------------- hero -- */}
      <section className={`section section--tight section--sunken ${styles.hero}`} aria-labelledby="service-heading">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', to: paths.home },
              { label: 'Programs', to: paths.programs },
              { label: service.name },
            ]}
          />

          <div className={styles.heroInner}>
            <span className={styles.heroIcon} aria-hidden="true">
              <Icon name={service.icon} size={30} />
            </span>

            <h1 id="service-heading">{service.name}</h1>

            <p className={styles.lead}>{service.intro}</p>

            <ul className={styles.chips}>
              <li>
                <Badge tone="brand" icon="person">
                  <span className="visually-hidden">Who it is for: </span>
                  {service.forWho}
                </Badge>
              </li>
              <li>
                <Badge tone="brand" icon="mapPin">
                  <span className="visually-hidden">Format: </span>
                  {service.format}
                </Badge>
              </li>
              <li>
                <Badge tone="brand" icon="clock">
                  <span className="visually-hidden">Session length: </span>
                  {service.duration}
                </Badge>
              </li>
              <li>
                <Badge tone="brand" icon="calendar">
                  <span className="visually-hidden">How often: </span>
                  {service.cadence}
                </Badge>
              </li>
              <li>
                <Badge tone="accent">
                  <span className="visually-hidden">Rate: </span>{service.rate}
                </Badge>
              </li>
            </ul>

            <div className={styles.heroActions}>
              <Button to={paths.contact} variant="primary" size="lg" iconRight="arrowRight">
                Get started with this program
              </Button>
              <Button to={paths.programs} variant="outline" size="lg">
                View all programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ what this helps with */}
      <section
        className={`section section--sunken ${styles.helps}`}
        aria-labelledby="helps-heading"
      >
        <div className="container">
          <SectionHeading
            id="helps-heading"
            eyebrow="Rehabilitation Focus"
            title="What this program helps with"
            intro="Individualized support to build independence, emotional regulation, and daily living skills in real-world Maryland environments."
          />

          <ul className={styles.checkList}>
            {service.helpsWith.map((item) => (
              <li key={item} className={styles.checkItem}>
                <span className={styles.checkMark} aria-hidden="true">
                  <Icon name="check" size={16} strokeWidth={2.2} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------- how we work -- */}
      <section className={`section ${styles.approaches}`} aria-labelledby="approaches-heading">
        <div className="container">
          <SectionHeading
            id="approaches-heading"
            eyebrow="Our Approach"
            title="How we deliver this support"
            intro="Person-centered, evidence-informed rehabilitation strategies designed for real community impact."
          />

          <ul className={styles.approachList}>
            {service.approaches.map((approach, index) => (
              <li key={approach} className={styles.approachItem}>
                <span className={styles.approachNumber}>{String(index + 1).padStart(2, '0')}</span>
                <p className={styles.approachText}>{approach}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------- what to expect */}
      <section className={`section section--sunken ${styles.steps}`} aria-labelledby="steps-heading">
        <div className="container">
          <SectionHeading
            id="steps-heading"
            eyebrow="The Process"
            title="What to expect when getting started"
            intro="A structured path from referral and functional assessment to ongoing community milestone achievements."
          />

          <ol className={styles.stepsList}>
            {service.whatToExpect.map((step, index) => (
              <li key={step.title} className={styles.stepCard}>
                <span className={styles.stepCount}>Step {index + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------------------------------- who offers it -- */}
      <section className={`section ${styles.clinicians}`} aria-labelledby="clinicians-heading">
        <div className="container">
          <SectionHeading
            id="clinicians-heading"
            eyebrow="Who you would be talking to"
            title="Therapists who offer this"
            intro="Request any of them by name, or let our intake coordinator suggest a match. Availability changes week to week, so the note on each card is the most current thing we have."
          />

          {therapists.length > 0 ? (
            <ul className={styles.clinicianGrid}>
              {therapists.map((member) => (
                <li key={member.slug} className={styles.clinicianItem}>
                  <Card
                    to={paths.therapist(member.slug)}
                    className={styles.clinicianCard}
                    padding="md"
                  >
                    <Avatar
                      initials={member.initials}
                      accent={member.accent}
                      size="sm"
                      alt={member.name}
                    />
                    <div className={styles.clinicianText}>
                      <h3 className={styles.clinicianName}>{member.name}</h3>
                      <p className={styles.clinicianCreds}>{member.credentials}</p>
                      <StatusBadge available={member.acceptingClients}>
                        {member.availability}
                      </StatusBadge>
                    </div>
                    <span className={styles.clinicianArrow} aria-hidden="true">
                      <Icon name="chevronRight" size={20} />
                    </span>
                  </Card>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.approachNote}>
              We are between clinicians for this service right now. Contact us and we will tell
              you when it restarts, or refer you to a practice that offers it today.
            </p>
          )}
        </div>
      </section>

      {/* -------------------------------------------------------- related --- */}
      <section className={`section ${styles.related}`} aria-labelledby="related-heading">
        <div className="container">
          <SectionHeading
            id="related-heading"
            eyebrow="Explore More"
            title="Other Psychiatric Rehabilitation Programs"
            intro="Our programs complement one another to support holistic recovery and community independence."
          />

          <ul className={styles.relatedGrid}>
            {related.map((item) => (
              <li key={item.slug} className={styles.relatedItem}>
                <Card to={paths.program(item.slug)} className={styles.relatedCard} padding="md">
                  <span className={styles.relatedIcon} aria-hidden="true">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3 className={styles.relatedName}>{item.name}</h3>
                  <p className={styles.relatedSummary}>{item.summary}</p>
                  <span className={styles.relatedMore}>
                    Learn more
                    <Icon name="arrowRight" size={16} />
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------- closing CTA */}
      <section className={`section section--inverse ${styles.cta}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <p className="eyebrow">Get Started</p>
            <h2 id="cta-heading">Ready to Begin Your Psychiatric Rehabilitation Plan?</h2>
            <p className={styles.ctaCopy}>
              Our intake team is ready to answer questions about Maryland Medicaid coverage, clinician referrals, and scheduling your initial assessment.
            </p>
            <div className={styles.ctaActions}>
              <Button to={paths.contact} variant="inverse" size="lg" iconRight="arrowRight">
                Talk With Our Intake Team
              </Button>
              <Button to={paths.programs} variant="inverseOutline" size="lg">
                Back to All Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramDetailPage;
