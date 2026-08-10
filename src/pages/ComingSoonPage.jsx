import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logos/logo_no_background.png';
import logoTextImg from '../assets/logos/logo_text_no_background.png';
import { useUI } from '../context/UIContext';
import { site } from '../data/site';
import paths from '../routes/paths';
import { Alert, Button, Icon, Input } from '../components/ui';
import styles from './ComingSoonPage.module.css';

export function ComingSoonPage({ title = 'Coming Soon', sectionName }) {
  const { openBooking } = useUI();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const displayTitle = sectionName ? `${sectionName} — Coming Soon` : title;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Brand Header */}
        <div className={styles.brandHeader}>
          <img src={logoImg} alt="" className={styles.logoImg} />
          <img src={logoTextImg} alt={site.name} className={styles.brandTextImg} />
        </div>

        {/* Eyebrow Location */}
        <p className={styles.eyebrow}>
          {site.address.line1}, {site.address.city} • {site.serviceAreas.join(' & ')}
        </p>

        {/* Title */}
        <h1 className={styles.title}>{displayTitle}</h1>

        {/* Four Pillars Badges */}
        <div className={styles.pillars}>
          <span className={`${styles.pillarBadge} ${styles.heal}`}>Heal</span>
          <span className={`${styles.pillarBadge} ${styles.empower}`}>Empower</span>
          <span className={`${styles.pillarBadge} ${styles.support}`}>Support</span>
          <span className={`${styles.pillarBadge} ${styles.thrive}`}>Thrive</span>
        </div>

        {/* Description */}
        <p className={styles.description}>
          We are currently crafting and expanding this section for our Dunkirk clinic and telehealth clients across Maryland.
          In the meantime, our intake team is actively taking new clients and phone consultations.
        </p>

        {/* Email Notification Form */}
        <div className={styles.notifyBox}>
          {submitted ? (
            <Alert tone="success" title="You're on the list!">
              <p>We'll notify you as soon as this page goes live.</p>
            </Alert>
          ) : (
            <form onSubmit={handleNotifySubmit} className={styles.notifyForm}>
              <Input
                type="email"
                placeholder="Enter your email for updates..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.emailInput}
              />
              <Button type="submit" variant="solid" size="md">
                Notify Me
              </Button>
            </form>
          )}
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <Button type="button" size="lg" iconRight="arrowRight" onClick={openBooking}>
            Book a free consultation
          </Button>

          <Button href={site.contact.phoneHref} size="lg" variant="outline" iconLeft="phone">
            Call {site.contact.phone}
          </Button>

          <Button to={paths.home} size="lg" variant="ghost">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
