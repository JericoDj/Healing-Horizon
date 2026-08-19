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
    value: '6',
    title: 'Licensed & Experienced Mental Health Therapists',
    subtitle: 'Board-Certified Maryland Clinicians (LCPC, LCSW-C, LCMFT)',
    detail: 'Every therapist at Healing Horizons is independently licensed in Maryland with extensive experience in individual, couples, and family therapy.',
  },
  {
    id: 'personalized-therapy',
    value: '100%',
    title: 'Personalized Therapy for Your Mental Health Needs',
    subtitle: 'Customized Evidence-Based Treatment Plans',
    detail: 'Tailored clinical care integrating CBT, DBT, EMDR, Gottman Method, and IFS to match your personal mental health goals.',
  },
  {
    id: 'convenient-care',
    value: 'MD',
    title: 'Convenient Therapy Across Maryland',
    subtitle: 'In-Person and Telehealth Statewide',
    detail: 'Flexible scheduling with evening and Saturday hours, accessible in person and online via secure telehealth.',
  },
  {
    id: 'responsive-intake',
    value: '1 Day',
    title: 'Accessible & Responsive Mental Health Support',
    subtitle: 'Quick Intake & Free 15-Minute Consultation',
    detail: 'Speak with our intake coordinator within one business day with zero cost or obligation to find the right therapeutic fit.',
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
            Why Choose Our Mental Health Therapists in Maryland?
          </h2>
          <p className={styles.subtitle}>
            Verifiable metrics, licensed clinicians, and responsive care built for families across Maryland.
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
                Affiliations &amp; Professional Memberships in Maryland
              </h4>
            </div>
            <h5 className={styles.affiliationsSubtitle}>
              Clinical Standards &amp; Practice Accreditations
            </h5>
            <h6 className={styles.affiliationsCompliance}>
              Maryland Department of Health &amp; National Clinical Board Compliance
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
