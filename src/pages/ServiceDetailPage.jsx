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
import { getServiceBySlug, services } from '../data/services';
import { getTherapistsByService } from '../data/team';
import paths from '../routes/paths';
import styles from './ServiceDetailPage.module.css';

/** Three siblings, taken in catalogue order so the set stays stable per page. */
function relatedTo(service) {
  const index = services.findIndex((item) => item.slug === service.slug);
  return [1, 2, 3].map((offset) => services[(index + offset) % services.length]);
}

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  usePageMeta({
    title: service ? service.name : 'Service not found',
    description: service
      ? service.summary
      : 'We could not find that service. See everything Healing Horizon offers, or ask us directly.',
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
              { label: 'Services', to: paths.services },
              { label: 'Not found' },
            ]}
          />

          <div className={styles.missingInner}>
            <span className={styles.missingIcon} aria-hidden="true">
              <Icon name="search" size={28} />
            </span>

            <h1 id="missing-heading">We could not find that service</h1>

            <p className={styles.missingCopy}>
              The link may be out of date, or the address may have a typo in it. Nothing has gone
              wrong on your end. Here is everything we currently offer, and a way to ask us
              directly if what you are looking for is not on the list.
            </p>

            <div className={styles.missingActions}>
              <Button to={paths.services} variant="primary" size="lg" iconRight="arrowRight">
                See all services
              </Button>
              <Button to={paths.contact} variant="outline" size="lg">
                Ask us a question
              </Button>
            </div>

            <p className={styles.missingHint}>
              If you were looking for costs, the{' '}
              <Link to={paths.rates}>rates and insurance page</Link> lists every fee we charge.
            </p>
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
      <section className={`section ${styles.hero}`} aria-labelledby="service-heading">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', to: paths.home },
              { label: 'Services', to: paths.services },
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
                  <span className="visually-hidden">Rate: </span>${service.rate} per session
                </Badge>
              </li>
            </ul>

            <div className={styles.heroActions}>
              <Button to={paths.book} variant="primary" size="lg" iconRight="arrowRight">
                Book a free consultation
              </Button>
              <Button to={paths.contact} variant="outline" size="lg">
                Contact us
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
            eyebrow="Common reasons people come"
            title="What this helps with"
            intro="These are the things people describe, not diagnoses. You do not need a label to book a call, and you do not have to match any of them exactly."
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
            eyebrow="How we work"
            title="The methods your therapist may draw on"
            intro="Nobody applies one method to everybody. Your therapist will tell you which approach they are using and why, in plain language, and you can ask them to explain it again at any point."
          />

          <ul className={styles.approachList}>
            {service.approaches.map((approach) => (
              <li key={approach} className={styles.approachItem}>
                <span className={styles.approachMark} aria-hidden="true">
                  <Icon name="sparkle" size={18} />
                </span>
                <span className={styles.approachName}>{approach}</span>
              </li>
            ))}
          </ul>

          <p className={styles.approachNote}>
            If an approach is not working for you, say so. Changing method partway through is a
            normal part of the work rather than a setback, and it is a conversation your
            therapist should be raising before you have to.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- what to expect -- */}
      <section
        className={`section section--accent ${styles.expect}`}
        aria-labelledby="expect-heading"
      >
        <div className="container">
          <SectionHeading
            id="expect-heading"
            eyebrow="What to expect"
            title="How this usually goes"
            intro="Three steps, in order. Nothing here happens without you agreeing to it first."
          />

          <ol className={styles.steps}>
            {service.whatToExpect.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {index + 1}
                </span>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.body}</p>
                </div>
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

      {/* ------------------------------------------------------------ rates -- */}
      <section
        className={`section section--sunken ${styles.rates}`}
        aria-labelledby="rates-heading"
      >
        <div className="container">
          <div className={styles.rateBox}>
            <div className={styles.rateFigure}>
              <p className={styles.rateAmount}>${service.rate}</p>
              <p className={styles.rateUnit}>per {service.duration} session</p>
            </div>

            <div className={styles.rateCopy}>
              <h2 id="rates-heading" className={styles.rateHeading}>
                What it costs
              </h2>
              <p>
                That is our standard private-pay rate, before any insurance benefit is applied.
                We are in network with several regional plans and can issue a monthly superbill
                if we are out of network with yours.
              </p>
              <p className={styles.rateNote}>
                The first 15-minute phone consultation is free, and there is no charge until you
                book an actual session.
              </p>
              <Button to={paths.rates} variant="secondary" iconRight="arrowRight">
                See rates and insurance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- related --- */}
      <section className={`section ${styles.related}`} aria-labelledby="related-heading">
        <div className="container">
          <SectionHeading
            id="related-heading"
            eyebrow="Also available"
            title="Other ways we work"
            intro="Plenty of people do two of these at once, or start with one and move to another."
          />

          <ul className={styles.relatedGrid}>
            {related.map((item) => (
              <li key={item.slug} className={styles.relatedItem}>
                <Card to={paths.service(item.slug)} className={styles.relatedCard} padding="md">
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
            <p className="eyebrow">Next step</p>
            <h2 id="cta-heading">Fifteen minutes, no cost</h2>
            <p className={styles.ctaCopy}>
              The call is a conversation, not an assessment. You describe what has been going on
              in whatever words you have, we tell you who here has the right training and the
              availability, and you decide afterwards whether to book anything at all.
            </p>
            <div className={styles.ctaActions}>
              <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight">
                Book a consultation
              </Button>
              <Button to={paths.services} variant="inverseOutline" size="lg">
                Back to all services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetailPage;
