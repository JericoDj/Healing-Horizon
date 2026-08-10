import { affiliations, trustSignals } from '../../data/testimonials';
import styles from './TrustStrip.module.css';

/**
 * TrustStrip — the practice's verifiable facts, stated plainly.
 *
 * On a clinical site this does the work testimonials would do elsewhere, and
 * it does it without asking a client to vouch for their own therapy. The
 * heading is visually hidden because the numbers are the content; the outline
 * still needs a rung between the page <h1> and the cards below.
 */
export function TrustStrip() {
  return (
    <section
      className={`section section--tight ${styles.strip}`}
      aria-labelledby="trust-heading"
    >
      <div className="container">
        <header className={styles.header}>
          <h2 id="trust-heading" className={styles.title}>
            Why Choose Healing Horizon
          </h2>
          <p className={styles.subtitle}>
            Verifiable metrics, licensed clinicians, and responsive care built for Dunkirk and families across Maryland.
          </p>
        </header>

        <ul className={styles.list}>
          {trustSignals.map((signal, index) => {
            const pillarClass = [
              styles.valueHeal,
              styles.valueEmpower,
              styles.valueSupport,
              styles.valueThrive,
            ][index % 4];

            return (
              <li key={signal.id} className={styles.item}>
                <p className={`${styles.value} ${pillarClass}`}>{signal.value}</p>
                <p className={styles.label}>{signal.label}</p>
                <p className={styles.detail}>{signal.detail}</p>
              </li>
            );
          })}
        </ul>

        <div className={styles.affiliations}>
          <h3 className={styles.affiliationsHeading}>
            Affiliations and professional memberships
          </h3>
          <ul className={styles.affiliationsList}>
            {affiliations.map((name) => (
              <li key={name} className={styles.affiliation}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
