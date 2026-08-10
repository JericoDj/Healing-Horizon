import styles from './RouteFallback.module.css';

/**
 * RouteFallback — shown while a code-split route chunk loads.
 *
 * A slow, breathing pulse rather than a spinner: it matches the brand's
 * pacing, and it does not imply the wait is longer than it is. Announced
 * politely so screen-reader users know something is happening.
 */
export function RouteFallback({ label = 'Loading' }) {
  return (
    <div className={styles.fallback} role="status" aria-live="polite">
      <div className={styles.inner}>
        <span className={styles.pulse} aria-hidden="true" />
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
}

export default RouteFallback;
