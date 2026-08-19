import { Link } from 'react-router-dom';
import { Button, SectionHeading } from '../ui';
import { site } from '../../data/site';
import paths from '../../routes/paths';
import styles from './HowItWorks.module.css';

/**
 * HowItWorks — the three steps between reading this page and sitting down.
 *
 * Written as an ordered list so the sequence survives without the numerals;
 * the teal discs are decorative and hidden from assistive tech.
 */
export function HowItWorks() {
  return (
    <section className={`section ${styles.how}`} aria-labelledby="how-heading">
      <div className="container">
        <SectionHeading
          id="how-heading"
          align="center"
          eyebrow="Our Process"
          title="How Our Psychiatric Rehabilitation Program Works"
          intro="A structured, collaborative pathway designed to ensure participants receive prompt authorizations and personalized, community-based support."
        />

        <ol className={styles.steps}>
          <li className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              1
            </span>
            <h3 className={styles.stepTitle}>Referral &amp; Initial Assessment</h3>
            <p className={styles.stepBody}>
              Submit a referral from your behavioral health provider, hospital, or CSA, or contact us directly. Our intake coordinator will verify eligibility and guide you through authorization.
            </p>
          </li>

          <li className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              2
            </span>
            <h3 className={styles.stepTitle}>Personalized Rehabilitation Plan</h3>
            <p className={styles.stepBody}>
              Collaborate with our rehabilitation specialists to build an Individualized Rehabilitation Plan (IRP) centered on your personal recovery and independence goals.
            </p>
          </li>

          <li className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              3
            </span>
            <h3 className={styles.stepTitle}>Community-Based Support</h3>
            <p className={styles.stepBody}>
              Work one-on-one with your rehabilitation specialist in real-life settings—at home, work, school, or community centers—practicing daily living and wellness skills.
            </p>
          </li>

          <li className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              4
            </span>
            <h3 className={styles.stepTitle}>Ongoing Progress &amp; Care Coordination</h3>
            <p className={styles.stepBody}>
              Participate in regular progress reviews, quarterly IRP updates, and ongoing coordination with your primary therapist, doctors, and community support systems.
            </p>
          </li>
        </ol>

        <div className={styles.cta}>
          <Button to={paths.book} size="lg" iconRight="arrowRight">
            Get Started With Psychiatric Rehabilitation
          </Button>
          <p className={styles.ctaNote}>
            Have questions about referrals or authorizations? <Link to={paths.contact}>Contact our intake team</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
