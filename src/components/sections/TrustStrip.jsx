import { affiliations, trustSignals } from '../../data/testimonials';
import Icon from '../ui/Icon';
import styles from './TrustStrip.module.css';

/**
 * TrustStrip — the practice's verifiable facts, stated plainly.
 *
 * On a clinical site this does the work testimonials would do elsewhere, and
 * it does it without asking a client to vouch for their own therapy. The
 * heading is visually hidden because the numbers are the content; the outline
 * still needs a rung between the page <h1> and the cards below.
 */
const whyChoosePillars = [
  {
    id: 'licensed-therapists',
    value: '6+',
    title: 'Licensed & Experienced Mental Health Professionals',
    subtitle: 'Qualified Behavioral Health Specialists & Coordinators',
    detail: 'Our rehabilitation team works in close collaboration with licensed Maryland clinicians to deliver individualized, recovery-oriented care.',
  },
  {
    id: 'personalized-therapy',
    value: '100%',
    title: 'Personalized Psychiatric Rehabilitation',
    subtitle: 'Custom Individualized Rehabilitation Plans (IRP)',
    detail: 'Tailored rehabilitation goals focusing on daily living skills, emotional regulation, and community integration suited to each participant.',
  },
  {
    id: 'convenient-care',
    value: 'MD',
    title: 'Community-Based Support Across Maryland',
    subtitle: 'In-Home and Real-World Support',
    detail: 'Services delivered where skills are needed most—in homes, community centers, schools, and workplaces across Maryland.',
  },
  {
    id: 'responsive-intake',
    value: '1 Day',
    title: 'Responsive Mental Health & Intake Services',
    subtitle: 'Rapid Intake & Referral Coordination',
    detail: 'Prompt intake coordination within one business day to assist participants, families, and referring providers with authorization.',
  },
];

export function TrustStrip() {
  return (
    <section
      className={`section section--tight ${styles.strip}`}
      aria-labelledby="trust-heading"
    >
      <div className="container">
        <header className={styles.header}>
          <h2 id="trust-heading" className={styles.title}>
            Why Families Choose Our Psychiatric Rehabilitation Program in Maryland
          </h2>
          <p className={styles.subtitle}>
            Person-centered rehabilitation, CARF-aligned standards, and responsive community care built for individuals and families across Maryland.
          </p>
        </header>

        <ul className={styles.list}>
          {whyChoosePillars.map((signal, index) => {
            const pillarClass = [
              styles.valueHeal,
              styles.valueEmpower,
              styles.valueSupport,
              styles.valueThrive,
            ][index % 4];

            const borderClass = [
              styles.itemHeal,
              styles.itemEmpower,
              styles.itemSupport,
              styles.itemThrive,
            ][index % 4];

            return (
              <li key={signal.id} className={`${styles.item} ${borderClass}`}>
                <p className={`${styles.value} ${pillarClass}`}>{signal.value}</p>
                <h3 className={styles.itemTitle}>{signal.title}</h3>
                <h4 className={styles.itemSubtitle}>{signal.subtitle}</h4>
                <p className={styles.detail}>{signal.detail}</p>
              </li>
            );
          })}
        </ul>

        <div className={styles.affiliations}>
          <div className={styles.affiliationsHeader}>
            <div className={styles.affiliationsHeading}>
              <Icon name="shieldCheck" size={20} className={styles.affiliationsIcon} />
              <h4 className={styles.affiliationsTitle}>
                Accreditation Standards &amp; Maryland Regulatory Compliance
              </h4>
            </div>
            <h5 className={styles.affiliationsSubtitle}>
              Quality Rehabilitation Standards &amp; Licensing Compliance
            </h5>
            <h6 className={styles.affiliationsCompliance}>
              Maryland Department of Health &amp; Behavioral Health Administration (BHA) Standards
            </h6>
          </div>

          <ul className={styles.affiliationsList}>
            {affiliations.map((name) => (
              <li key={name} className={styles.affiliation}>
                <span className={styles.affiliationIconWrap}>
                  <Icon name="shieldCheck" size={13} className={styles.affiliationIcon} />
                </span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
