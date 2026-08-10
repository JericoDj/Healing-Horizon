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
          eyebrow="Getting started"
          title="Three steps, and only the first one is on you"
          intro="Most people put off the first message for months. Here is exactly what happens after you send it, so there is nothing left to imagine."
        />

        <ol className={styles.steps}>
          <li className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              1
            </span>
            <h3 className={styles.stepTitle}>Reach out</h3>
            <p className={styles.stepBody}>
              Use the contact form or call{' '}
              <a className={styles.phone} href={site.contact.phoneHref}>
                {site.contact.phone}
              </a>
              . A sentence or two about what is going on is plenty — you do not need to explain
              yourself in writing. Our intake coordinator replies {site.responseTime}.
            </p>
          </li>

          <li className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              2
            </span>
            <h3 className={styles.stepTitle}>A free 15-minute call</h3>
            <p className={styles.stepBody}>
              You talk to a person, not a form. We ask what you are looking for and suggest the
              therapist whose training fits. If this practice is not the right place for you, we
              say so and point you somewhere better.
            </p>
          </li>

          <li className={styles.step}>
            <span className={styles.num} aria-hidden="true">
              3
            </span>
            <h3 className={styles.stepTitle}>Your first session</h3>
            <p className={styles.stepBody}>
              Mostly listening. Your therapist asks what brought you in, what has helped before
              and what you would like to be different. You set the pace, and you can decline any
              question.
            </p>
          </li>
        </ol>

        <div className={styles.cta}>
          <Button to={paths.book} size="lg" iconRight="arrowRight">
            Book a free consultation
          </Button>
          <p className={styles.ctaNote}>
            Rather write than talk? <Link to={paths.contact}>Send a message instead</Link> — the
            same person reads both.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
