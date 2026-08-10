import { Component } from 'react';
import { site } from '../../data/site';
import styles from './ErrorBoundary.module.css';

/**
 * ErrorBoundary — the last line of defence.
 *
 * A white screen is bad on any site. On a therapy practice's site, where
 * someone may be trying to reach a human on a difficult day, it is worse. So
 * the fallback still shows the phone number and the crisis lines, and offers
 * a reload rather than a dead end.
 *
 * Class component because React still has no hook equivalent for this.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Wire this to your error reporter (Sentry, etc.) in production.
    console.error('Unhandled UI error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.href = '/';
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className={styles.wrap}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Something went wrong on this page</h1>
          <p className={styles.body}>
            We are sorry. The page did not load correctly. You can reload and try again — and if you
            need to reach us in the meantime, please call or email. We answer both.
          </p>

          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={this.handleReload}>
              Return to the homepage
            </button>
            <a className={styles.secondary} href={site.contact.phoneHref}>
              Call {site.contact.phone}
            </a>
          </div>

          <p className={styles.crisis}>
            <strong>If you are in crisis:</strong> call or text <a href="tel:988">988</a> for the
            Suicide &amp; Crisis Lifeline, text HOME to 741741, or call{' '}
            <a href="tel:911">911</a> if you are in immediate danger.
          </p>

          {import.meta.env.DEV && this.state.error ? (
            <pre className={styles.debug}>{String(this.state.error?.stack ?? this.state.error)}</pre>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
