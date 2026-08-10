import { Link } from 'react-router-dom';
import { Button, Icon, SectionHeading } from '../ui';
import { crisisResources, site } from '../../data/site';
import paths from '../../routes/paths';
import styles from './ClosingCta.module.css';

/**
 * ClosingCta — the last thing on the page, and the smallest possible ask.
 *
 * The crisis line stays. Anything that invites someone to make contact has to
 * say what this practice is not, and where to go instead when it is urgent.
 */
export function ClosingCta() {
  const urgent = crisisResources[0];

  return (
    <section
      className={`section section--inverse ${styles.closing}`}
      aria-labelledby="closing-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <SectionHeading
            id="closing-heading"
            align="center"
            eyebrow="When you are ready"
            title="Start with a 15-minute call"
            intro="No cost, no obligation, and nothing is decided on it. You tell us what you are looking for, we tell you honestly whether we are the right practice, and you take it from there."
          />

          <div className={styles.actions}>
            <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight">
              Book a free consultation
            </Button>
            <Button
              href={site.contact.phoneHref}
              variant="inverseOutline"
              size="lg"
              iconLeft="phone"
            >
              {site.contact.phone}
            </Button>
          </div>

          <p className={styles.note}>
            You can also just call. Our intake coordinator picks up during practice hours, and{' '}
            <Link to={paths.contact}>a written message</Link> gets a reply {site.responseTime}.
          </p>

          <p className={styles.crisis}>
            <Icon name="alert" size={18} />
            <span>
              Healing Horizon is not a crisis service. If you need support right now,{' '}
              <a href={urgent.href}>{urgent.detail}</a>.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClosingCta;
