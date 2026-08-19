import { Link, useLocation } from 'react-router-dom';
import { Button, Card, Icon } from '../components/ui';
import { crisisResources, site } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';
import paths from '../routes/paths';
import styles from './NotFoundPage.module.css';

const DESTINATIONS = [
  {
    to: paths.home,
    icon: 'home',
    label: 'Home',
    description: 'Start again from the beginning.',
  },
  {
    to: paths.programs,
    icon: 'leaf',
    label: 'Our programs',
    description: 'Maryland Medicaid-covered psychiatric rehabilitation programs.',
  },
  {
    to: paths.explore,
    icon: 'compass',
    label: 'Explore',
    description: 'Learn how PRP works, who we serve, and Maryland resources.',
  },
  {
    to: paths.about,
    icon: 'sparkle',
    label: 'About Healing Horizons',
    description: 'Our mission, care model, and community-based service areas.',
  },
  {
    to: paths.faq,
    icon: 'info',
    label: 'Frequently asked questions',
    description: 'Answers to common questions about Medicaid, referrals, and care.',
  },
  {
    to: paths.contact,
    icon: 'mail',
    label: 'Contact intake',
    description: 'Send a message and our intake team will reply within one business day.',
  },
  {
    to: paths.book,
    icon: 'calendar',
    label: 'Book a consultation',
    description: 'A free 15-minute phone call. No cost, no obligation.',
  },
];

/**
 * NotFoundPage — the page a broken link lands on.
 *
 * Someone may have arrived here from an out-of-date directory entry while
 * looking for a therapist. It is not the place for a joke; it is the place for
 * a phone number and five links that work.
 */
export function NotFoundPage() {
  usePageMeta({
    title: 'Page not found',
    description: 'We could not find that page. Here is how to reach the practice instead.',
    noIndex: true,
  });

  const location = useLocation();

  return (
    <section className={`section ${styles.page}`} aria-labelledby="notfound-heading">
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.status} aria-hidden="true">
            404
          </p>
          <h1 id="notfound-heading">We could not find that page</h1>

          <p className={styles.lede}>
            The link may be out of date, or the address may have a typo in it. Nothing has gone
            wrong on your end, and the practice is still here.
          </p>

          <p className={styles.attempted}>
            <Icon name="search" size={17} />
            <span>
              You asked for <code className={styles.path}>{location.pathname}</code>
            </span>
          </p>

          <div className={styles.actions}>
            <Button to={paths.home} size="lg" iconRight="arrowRight">
              Go to the home page
            </Button>
            <Button to={paths.contact} variant="outline" size="lg">
              Contact the practice
            </Button>
          </div>

          <Card tone="accent" padding="md" className={styles.phoneCard}>
            <h2 className={styles.phoneHeading}>
              <Icon name="phone" size={20} />
              If you were looking for a person, not a page
            </h2>
            <p className={styles.phoneNumber}>
              <a href={site.contact.phoneHref}>{site.contact.phone}</a>
            </p>
            <p className={styles.phoneNote}>
              Our intake coordinator answers during office hours and returns voicemails the next
              business day. You can also email{' '}
              <a href={`mailto:${site.contact.intakeEmail}`}>{site.contact.intakeEmail}</a>.
            </p>
          </Card>

          <h2 className={styles.linksHeading}>Where you may have been heading</h2>
          <ul className={styles.links}>
            {DESTINATIONS.map((destination) => (
              <li key={destination.to}>
                <Link to={destination.to} className={styles.linkCard}>
                  <Icon name={destination.icon} size={22} className={styles.linkIcon} />
                  <span className={styles.linkText}>
                    <span className={styles.linkLabel}>{destination.label}</span>
                    <span className={styles.linkDescription}>{destination.description}</span>
                  </span>
                  <Icon name="chevronRight" size={18} className={styles.linkChevron} />
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.crisis}>
            <h2 className={styles.crisisHeading}>
              <Icon name="heartHand" size={20} />
              If you need help right now
            </h2>
            <p className={styles.crisisNote}>
              This practice is not a crisis service and does not monitor messages after hours. These
              lines are free, confidential and answered 24/7.
            </p>
            <ul className={styles.crisisList}>
              {crisisResources.map((resource) => (
                <li key={resource.label}>
                  <a href={resource.href} className={styles.crisisLink}>
                    {resource.action}
                  </a>
                  <span className={styles.crisisDetail}>{resource.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
