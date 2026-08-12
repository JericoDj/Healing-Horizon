import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
  SectionHeading,
} from '../components/ui';
import { getServiceBySlug, services } from '../data/services';
import paths from '../routes/paths';
import styles from './ServicesPage.module.css';

/**
 * Plain-language entry points — the sentences people actually open the
 * consultation call with, mapped to where that conversation usually starts.
 *
 * These describe this page's wayfinding rather than the service catalogue, so
 * they live here. If the practice starts editing them often, move them into
 * `src/data/services.js` alongside the services they point at.
 */
const STARTING_POINTS = [
  {
    concern: 'We keep having the same argument, and by the end neither of us feels heard.',
    slug: 'couples-therapy',
  },
  {
    concern: 'I hold it together all day and then fall apart in the car.',
    slug: 'individual-therapy',
  },
  {
    concern: 'My kid stopped going to school and will not tell me why.',
    slug: 'teen-therapy',
  },
  {
    concern: 'Something happened years ago and my body still reacts as though it is now.',
    slug: 'trauma-emdr',
  },
  {
    concern: 'Dinner ends in a shouting match most nights, and everyone blames someone different.',
    slug: 'family-therapy',
  },
  {
    concern: 'I want to do this, but I cannot get across town on a Tuesday afternoon.',
    slug: 'telehealth',
  },
  {
    concern: 'I am tired of explaining what grief feels like to people who have not had it.',
    slug: 'group-therapy',
  },
  {
    concern: 'I have never been to therapy and I am not sure this counts as a real problem.',
    slug: 'individual-therapy',
  },
];

export function ServicesPage() {
  usePageMeta({
    title: 'Our services',
    description:
      'Individual, couples, teen, family, trauma, group and online therapy in Portland and across Oregon and Washington. Formats, durations and rates listed.',
  });

  return (
    <>
      {/* ------------------------------------------------------------- hero -- */}
      <section className={`section section--tight section--sunken ${styles.hero}`} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">Services</p>
            <h1 id="services-heading">Our services</h1>
            <p className={styles.lead}>
              Seven ways of working, offered by six licensed clinicians — in person at our
              Portland office and by secure video anywhere in Oregon or Washington. Each one
              below tells you who it is for, how long a session runs and what it costs, before
              you have to speak to anybody.
            </p>
            <p className={styles.heroNote}>
              <Icon name="phone" size={20} />
              <span>
                Every service starts the same way: a free 15-minute phone call. No cost, no
                obligation, and you can end it by saying this is not the right place.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- the service cards */}
      <section
        className={`section section--sunken ${styles.catalogue}`}
        aria-labelledby="catalogue-heading"
      >
        <div className="container">
          <SectionHeading
            id="catalogue-heading"
            eyebrow="What we offer"
            title="Choose where to start"
            intro="You do not have to pick correctly. If you land on the wrong one, our intake coordinator will say so on the call and point you at a better fit."
          />

          <ul className={styles.grid}>
            {services.map((service) => (
              <li key={service.slug} className={styles.gridItem}>
                <Card to={paths.service(service.slug)} className={styles.serviceCard} padding="lg">
                  <CardHeader className={styles.cardHead}>
                    <span className={styles.cardIcon} aria-hidden="true">
                      <Icon name={service.icon} size={24} />
                    </span>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                  </CardHeader>

                  <CardBody className={styles.cardBody}>
                    <p className={styles.cardSummary}>{service.summary}</p>

                    <dl className={styles.meta}>
                      <div className={styles.metaRow}>
                        <dt className={styles.metaTerm}>Who</dt>
                        <dd className={styles.metaValue}>{service.forWho}</dd>
                      </div>
                      <div className={styles.metaRow}>
                        <dt className={styles.metaTerm}>Format</dt>
                        <dd className={styles.metaValue}>{service.format}</dd>
                      </div>
                      <div className={styles.metaRow}>
                        <dt className={styles.metaTerm}>Session</dt>
                        <dd className={styles.metaValue}>{service.duration}</dd>
                      </div>
                    </dl>
                  </CardBody>

                  <CardFooter className={styles.cardFoot}>
                    <span className={styles.rate}>
                      From ${service.rate}
                      <span className={styles.rateUnit}> per session</span>
                    </span>
                    <span className={styles.learnMore}>
                      Learn more
                      <Icon name="arrowRight" size={16} />
                    </span>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------ not-sure band */}
      <section
        className={`section section--tight section--accent ${styles.band}`}
        aria-labelledby="unsure-heading"
      >
        <div className="container">
          <div className={styles.bandInner}>
            <div className={styles.bandCopy}>
              <h2 id="unsure-heading" className={styles.bandTitle}>
                Not sure which one fits?
              </h2>
              <p>
                Most people are not sure, and working that out is what the first call is for.
                Tell us in a sentence or two what has been going on. We will suggest a service
                and a clinician, or say honestly that somewhere else would serve you better.
              </p>
            </div>
            <div className={styles.bandActions}>
              <Button to={paths.book} variant="primary" size="lg" iconRight="arrowRight">
                Book a free consultation
              </Button>
              <Button to={paths.contact} variant="outline" size="lg">
                Send a message instead
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- starting points */}
      <section className={`section ${styles.mapping}`} aria-labelledby="starting-points-heading">
        <div className="container">
          <SectionHeading
            id="starting-points-heading"
            eyebrow="Start here"
            title="If this sounds familiar"
            intro="Some of the sentences people say on the first call, and where that conversation usually begins."
          />

          <ul className={styles.mapList}>
            {STARTING_POINTS.map((point) => {
              const service = getServiceBySlug(point.slug);
              if (!service) return null;

              return (
                <li key={point.concern} className={styles.mapRow}>
                  <p className={styles.mapConcern}>&ldquo;{point.concern}&rdquo;</p>
                  <div className={styles.mapTarget}>
                    <span className={styles.mapLabel}>Usually starts with</span>
                    <Link to={paths.service(service.slug)} className={styles.mapLink}>
                      <Icon name={service.icon} size={18} />
                      <span>{service.name}</span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className={styles.mapNote}>
            These are starting points, not diagnoses. Plenty of people begin in one place and
            move to another, and some do two things at once. If none of them sound like you,
            that is exactly what the 15-minute call is for.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- closing CTA */}
      <section className={`section section--inverse ${styles.cta}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <p className="eyebrow">Next step</p>
            <h2 id="cta-heading">Start with fifteen minutes</h2>
            <p className={styles.ctaCopy}>
              You will talk to a person, not a form. They will ask what has been going on, tell
              you which of our clinicians has the right training and current availability, and
              answer your questions about cost. If we are not the right place for you, they will
              tell you that too and suggest where to look next.
            </p>
            <div className={styles.ctaActions}>
              <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight" className={styles.bookCta}>
                Book a consultation
              </Button>
              <Button to={paths.rates} variant="inverseOutline" size="lg">
                See rates and insurance
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
