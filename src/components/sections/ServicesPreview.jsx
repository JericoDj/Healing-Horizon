import { Button, Card, Icon, SectionHeading } from '../ui';
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
  'individual-therapy': {
    title: 'Individual Mental Health Therapy',
    subheading: 'Evidence-Based Care for Anxiety, Depression & Stress',
  },
  'couples-therapy': {
    title: 'Couples & Marriage Counseling',
    subheading: 'Relationship Strengthening, Communication & Repair',
  },
  'teen-therapy': {
    title: 'Teen & Adolescent Therapy',
    subheading: 'Support for Ages 12–17 & Family Consultation',
  },
  'trauma-emdr': {
    title: 'Trauma Therapy & EMDR Processing',
    subheading: 'Specialized Somatic & Trauma-Informed Clinical Care',
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
          eyebrow="Specialized Care"
          title="Mental Health Services in Dunkirk, MD"
          intro="Comprehensive, compassionate psychotherapy and evidence-based mental health counseling in Dunkirk, MD and across Calvert County."
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
                    <dt className={styles.metaTerm}>Session</dt>
                    <dd className={styles.metaValue}>{service.duration}</dd>
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
          <Button to={paths.services} variant="secondary" iconRight="arrowRight">
            See all services
          </Button>
          <p className={styles.footerNote}>
            Not sure which fits? Our intake coordinator will help you work it out on the
            consultation call.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
