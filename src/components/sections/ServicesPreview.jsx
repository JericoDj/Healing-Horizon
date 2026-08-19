import { Card, Icon, SectionHeading } from '../ui';
import { featuredServices } from '../../data/services';
import paths from '../../routes/paths';
import styles from './ServicesPreview.module.css';

/**
 * ServicesPreview — the four featured services, each card a link to its page.
 *
 * The whole card is the link (Card handles that), so the "Read about…" line is
 * an affordance rather than a second target. The meta row answers the two
 * questions people actually ask first: is this for me, and how long is it.
 */
const serviceHeadings = {
  'daily-living-skills': {
    title: 'Daily Living & Life Skills',
    subheading: 'Independent Living & Self-Sufficiency',
  },
  'symptom-management': {
    title: 'Symptom Self-Management',
    subheading: 'Emotional Regulation & Relapse Prevention',
  },
  'community-coordination': {
    title: 'Community Resource Linkage',
    subheading: 'Care Coordination & Resource Navigation',
  },
  'vocational-educational': {
    title: 'Educational & Vocational Support',
    subheading: 'Job Readiness, GED & Career Development',
  },
};

export function ServicesPreview() {
  return (
    <section
      className={`section section--sunken ${styles.services}`}
      aria-labelledby="services-heading"
    >
      <div className="container">
        <SectionHeading
          id="services-heading"
          eyebrow="Core PRP Services"
          title="Psychiatric Rehabilitation Services Across Maryland"
          intro="Person-centered, structured rehabilitation interventions designed to build functional skills, independence, and long-term community wellness."
        />

        <ul className={styles.grid}>
          {featuredServices.map((service) => {
            const headingInfo = serviceHeadings[service.slug] || {
              title: service.name,
              subheading: service.forWho,
            };

            return (
              <li key={service.slug} className={styles.cell}>
                <Card
                  to={paths.service(service.slug)}
                  padding="md"
                  className={styles.card}
                >
                  <span className={styles.icon} aria-hidden="true">
                    <Icon name={service.icon} size={24} />
                  </span>

                  <h3 className={styles.name}>{headingInfo.title}</h3>
                  <h4 className={styles.subheading}>{headingInfo.subheading}</h4>
                  <p className={styles.summary}>{service.summary}</p>

                <dl className={styles.meta}>
                  <div className={styles.metaRow}>
                    <dt className={styles.metaTerm}>For</dt>
                    <dd className={styles.metaValue}>{service.forWho}</dd>
                  </div>
                  <div className={styles.metaRow}>
                    <dt className={styles.metaTerm}>Setting</dt>
                    <dd className={styles.metaValue}>{service.format}</dd>
                  </div>
                </dl>

                <span className={styles.more}>
                  Read about {service.name}
                  <Icon name="arrowRight" size={16} />
                </span>
              </Card>
              </li>
            );
          })}
        </ul>

        <div className={styles.footer}>
          {/* "See all services" removed by request. It also pointed at /services,
              which is currently commented out of primaryNav in data/site.js —
              so the nav no longer offers that route either. Restore both
              together if the Services index comes back. */}
          <p className={styles.footerNote}>
            Need assistance with an intake or referral? Our intake team is available to help guide participants, families, and referring providers through the process.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
