import { usePageMeta } from '../hooks/usePageMeta';
import { useUI } from '../context/UIContext';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
  SectionHeading,
} from '../components/ui';
import { programs } from '../data/programs';
import paths from '../routes/paths';
import styles from './ProgramsPage.module.css';

const WHO_WE_SERVE = [
  {
    icon: 'person',
    title: 'Adults & Transitional-Age Youth',
    body: 'Adults age 18+ and youth transitioning to adulthood who need structured, compassionate guidance to navigate life with independence.',
  },
  {
    icon: 'home',
    title: 'Independent Living Support',
    body: 'Individuals working to master daily living routines, household upkeep, budgeting, nutrition, hygiene, and community navigation.',
  },
  {
    icon: 'mapPin',
    title: 'Community-Based Rehabilitation',
    body: 'Participants who benefit from hands-on, one-on-one rehabilitation sessions delivered directly in their home and local Maryland neighborhoods.',
  },
  {
    icon: 'sparkle',
    title: 'Mental Health Skill Development',
    body: 'Those seeking practical coping mechanisms, emotional regulation tools, early warning sign awareness, and proactive crisis safety planning.',
  },
];

export function ProgramsPage() {
  const { openBooking } = useUI();

  usePageMeta({
    title: 'Psychiatric Rehabilitation Programs in Maryland | Healing Horizons',
    description:
      'Explore person-centered, Maryland Medicaid-covered psychiatric rehabilitation programs (PRP) designed to support independence, daily living, wellness, and community participation.',
  });

  return (
    <>
      {/* ------------------------------------------------------------- Hero -- */}
      <section className={`section section--tight section--sunken ${styles.hero}`} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">PSYCHIATRIC REHABILITATION PROGRAMS · MARYLAND</p>
            <h1 id="services-heading">Psychiatric Rehabilitation Programs in Maryland</h1>
            <p className={styles.lead}>
              Person-centered, Maryland Medicaid-covered programs designed to support independence,
              daily living, wellness, and community participation.
            </p>
            <div className={styles.bandActions} style={{ marginTop: 'var(--space-2)' }}>
              <Button type="button" size="lg" iconRight="arrowRight" onClick={openBooking}>
                Get Started With PRP
              </Button>
              <Button href="#programs" size="lg" variant="outline">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------ Section 2: Program Cards */}
      <section
        id="programs"
        className={`section section--sunken ${styles.catalogue}`}
        aria-labelledby="catalogue-heading"
      >
        <div className="container">
          <SectionHeading
            id="catalogue-heading"
            eyebrow="Our Programs"
            title="Our Psychiatric Rehabilitation Programs"
            intro="Explore person-centered PRP services designed to help adults and transitional-age youth develop practical skills, manage mental health needs, and build greater independence."
          />

          <ul className={styles.grid}>
            {programs.map((service) => (
              <li key={service.slug} className={styles.gridItem}>
                <Card to={paths.program(service.slug)} className={styles.serviceCard} padding="lg">
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
                      Maryland Medicaid Covered
                    </span>
                    <span className={styles.learnMore}>
                      Learn about this program
                      <Icon name="arrowRight" size={16} />
                    </span>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------- Section 3: Who We Serve */}
      <section
        id="who-we-serve"
        className={`section ${styles.whoSection}`}
        aria-labelledby="who-heading"
      >
        <div className="container">
          <SectionHeading
            id="who-heading"
            eyebrow="Eligibility &amp; Fit"
            title="Who Can Benefit From Psychiatric Rehabilitation?"
            intro="Our psychiatric rehabilitation programs support adults and transitional-age youth who need help developing practical skills, managing mental health symptoms, improving daily functioning, and connecting with community resources."
          />

          <ul className={styles.whoGrid}>
            {WHO_WE_SERVE.map((item) => (
              <li key={item.title}>
                <div className={styles.whoCard}>
                  <span className={styles.whoIcon} aria-hidden="true">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3 className={styles.whoTitle}>{item.title}</h3>
                  <p className={styles.whoBody}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------- Section 4: Not Sure Which Fits */}
      <section
        id="program-guidance"
        className={`section section--tight section--accent ${styles.band}`}
        aria-labelledby="unsure-heading"
      >
        <div className="container">
          <div className={styles.bandInner}>
            <div className={styles.bandCopy}>
              <h2 id="unsure-heading" className={styles.bandTitle}>
                Not Sure Which Psychiatric Rehabilitation Program Is Right for You?
              </h2>
              <p>
                You don't have to choose the right service on your own. Our intake team can learn
                about your needs and help you identify the appropriate program and next steps.
              </p>
            </div>
            <div className={styles.bandActions}>
              <Button to={paths.contact} variant="primary" size="lg" iconRight="arrowRight">
                Talk With Our Intake Team
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={openBooking}>
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Closing CTA */}
      <section id="get-started" className={`section section--inverse ${styles.cta}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <p className="eyebrow">Get Started</p>
            <h2 id="cta-heading">Start Your Rehabilitation Journey Today</h2>
            <p className={styles.ctaCopy}>
              Whether you are an individual seeking independence, a family member, or a provider
              submitting a referral, our Maryland intake specialists are here to assist you.
            </p>
            <div className={styles.ctaActions}>
              <Button type="button" variant="inverse" size="lg" iconRight="arrowRight" className={styles.bookCta} onClick={openBooking}>
                Get Started / Make a Referral
              </Button>
              <Button to={paths.contact} variant="inverseOutline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramsPage;
