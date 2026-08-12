import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import { newsletterController } from '../../controllers/newsletterController';
import { crisisResources, footerNav, site } from '../../data/site';
import paths from '../../routes/paths';
import { Button, Icon } from '../ui';
import Logo from './Logo';
import styles from './Footer.module.css';

/**
 * Footer — practice details, sitemap, newsletter, crisis resources, legal.
 *
 * The crisis block sits above everything else. On a mental-health site the
 * footer is where people scroll when they are looking for a phone number in
 * a bad moment, and it should not be below four columns of marketing links.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <CrisisStrip />

      <div className={`container ${styles.main}`}>
        <div className={styles.brandColumn}>
          <Link to={paths.home} className={styles.brand} aria-label={`${site.name} — home`}>
            <Logo size={44} className={styles.logo} />
            <span className={styles.brandName}>{site.name}</span>
          </Link>

          <p className={styles.blurb}>{site.description}</p>

          <address className={styles.address}>
            {/* Street / suite / city on their own lines — the previous
                "line1, line2" run-on wrapped mid-phrase in this column.
                Each row's text is wrapped so the two-column grid in
                .addressLink places it deterministically. */}
            <a href={site.address.mapUrl} target="_blank" rel="noreferrer noopener" className={styles.addressLink}>
              <Icon name="mapPin" size={17} />
              <span>
                <span className={styles.addressSingle}>
                  {site.address.line1}, {site.address.line2}, {site.address.city}, {site.address.state} {site.address.postalCode}
                </span>
                <span className={styles.addressMulti}>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.postalCode}
                </span>
              </span>
            </a>
            <a href={site.contact.phoneHref} className={styles.addressLink}>
              <Icon name="phone" size={17} />
              <span>{site.contact.phone}</span>
            </a>
            <a href={`mailto:${site.contact.email}`} className={styles.addressLink}>
              <Icon name="mail" size={17} />
              <span>{site.contact.email}</span>
            </a>
          </address>

          {/* Social media links commented out per request
          <ul className={styles.social}>
            {site.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer noopener" className={styles.socialLink}>
                  {item.label}
                  <Icon name="external" size={13} />
                </a>
              </li>
            ))}
          </ul>
          */}
        </div>

        <nav className={styles.sitemap} aria-label="Footer">
          {footerNav.map((group) => (
            <div key={group.heading} className={styles.navGroup}>
              <h2 className={styles.navHeading}>{group.heading}</h2>
              <ul className={styles.navList}>
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <NewsletterForm />
      </div>

      <div className={styles.legalBar}>
        <div className={`container ${styles.legalInner}`}>
          <p className={styles.copyright}>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className={styles.legalLinks}>
            <li>
              <Link to={paths.privacy}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={paths.terms}>Terms of Service</Link>
            </li>
            <li>
              <Link to={paths.accessibility}>Accessibility</Link>
            </li>
          </ul>
        </div>
        <div className={`container ${styles.disclaimerWrap}`}>
          <p className={styles.disclaimer}>
            The content on this website is for general information only and is not a substitute for
            professional diagnosis or treatment. Visiting this site or contacting us does not create
            a therapist–client relationship. {site.name} is a fictional demonstration practice; all
            names, licence numbers and contact details on this site are placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
}

function CrisisStrip() {
  return (
    <section className={styles.crisis} aria-labelledby="footer-crisis-heading">
      <div className={`container ${styles.crisisInner}`}>
        <div className={styles.crisisIntro}>
          <Icon name="heartHand" size={22} />
          <div>
            <h2 id="footer-crisis-heading" className={styles.crisisHeading}>
              If you are in crisis right now
            </h2>
            <p className={styles.crisisNote}>
              We are not an emergency service and do not monitor messages after hours. These lines
              are free, confidential and answered 24/7.
            </p>
          </div>
        </div>

        <ul className={styles.crisisList}>
          {crisisResources.map((resource) => (
            <li key={resource.label}>
              <a href={resource.href} className={styles.crisisLink}>
                <span className={styles.crisisAction}>{resource.action}</span>
                <span className={styles.crisisDetail}>{resource.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NewsletterForm() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const outcome = await newsletterController.submit({ email, website: honeypot });
    setIsSubmitting(false);

    if (outcome.status === 'rejected') {
      setError(outcome.errors.email);
      return;
    }
    if (outcome.status === 'error') {
      setError(outcome.message);
      return;
    }

    setIsDone(true);
    setEmail('');
    toast.success('Subscribed', 'We send one short email a month. Unsubscribe any time.');
  };

  return (
    <div className={styles.newsletter}>
      <h2 className={styles.navHeading}>Practice notes</h2>
      <p className={styles.newsletterBlurb}>
        One short email a month: new groups, openings, and something worth reading. No clinical
        advice, no selling.
      </p>

      {isDone ? (
        <p className={styles.newsletterDone}>
          <Icon name="check" size={18} />
          You are subscribed. Thank you.
        </p>
      ) : (
        <form className={styles.newsletterForm} onSubmit={handleSubmit} noValidate>
          <div className={styles.newsletterRow}>
            <label htmlFor="footer-newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="footer-newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={styles.newsletterInput}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError(null);
              }}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? 'footer-newsletter-error' : undefined}
            />
            <Button
              type="submit"
              variant="inverse"
              loading={isSubmitting}
              iconRight="arrowRight"
              className={styles.subscribeButton}
            >
              Subscribe
            </Button>
          </div>

          <div className={styles.hp} aria-hidden="true">
            <label htmlFor="footer-hp">Leave empty</label>
            <input
              id="footer-hp"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
            />
          </div>

          {error ? (
            <p className={styles.newsletterError} id="footer-newsletter-error" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}

export default Footer;
