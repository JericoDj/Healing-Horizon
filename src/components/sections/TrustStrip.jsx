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
export function TrustStrip() {
  return (
    <section
      className={`section section--tight ${styles.strip}`}
      aria-labelledby="trust-heading"
    >
      <div className="container">
        <header className={styles.header}>
          <h2 id="trust-heading" className={styles.title}>
            Why Choose Healing Horizons
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
            // The card border repeats its own number's colour, so each tile
            // reads as one coloured unit rather than a coloured number sitting
            // inside an unrelated neutral box.
            const borderClass = [
              styles.itemHeal,
              styles.itemEmpower,
              styles.itemSupport,
              styles.itemThrive,
            ][index % 4];

            return (
              <li key={signal.id} className={`${styles.item} ${borderClass}`}>
                <p className={`${styles.value} ${pillarClass}`}>{signal.value}</p>
                <p className={styles.label}>{signal.label}</p>
                <p className={styles.detail}>{signal.detail}</p>
              </li>
            );
          })}
        </ul>

        {/* A bordered panel rather than a plain text row underneath the cards
            above — memberships are a credibility signal, and a flat list of
            dot-separated text reads as an afterthought. Each name gets its
            own bordered chip with a shield mark, so the block reads as a set
            of credentials rather than a caption. */}
        <div className={styles.affiliations}>
          <div className={styles.affiliationsHeading}>
            <Icon name="shieldCheck" size={18} className={styles.affiliationsIcon} />
            <h3 className={styles.affiliationsTitle}>
              Affiliations &amp; professional memberships
            </h3>
          </div>
          <ul className={styles.affiliationsList}>
            {affiliations.map((name) => (
              <li key={name} className={styles.affiliation}>
                {/* A solid-colour icon disc, not a flat tinted glyph — the
                    earlier version put all its colour into a 15px icon on a
                    pale tint, which read as "a plain white pill with a
                    slightly-off-white edge" from a normal viewing distance. */}
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
