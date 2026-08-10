import Icon from './Icon';
import styles from './Toaster.module.css';

const TONE_ICONS = {
  success: 'check',
  danger: 'alert',
  info: 'info',
};

/**
 * Toaster — the render surface for ToastProvider.
 *
 * The container is an aria-live region so confirmations reach screen readers.
 * Success and info are polite (they wait for a pause); errors are assertive.
 * Every toast is dismissible by keyboard, and none of them steal focus.
 */
export function Toaster({ toasts = [], onDismiss }) {
  if (toasts.length === 0) return null;

  return (
    <div className={styles.viewport} aria-live="polite" aria-atomic="false">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${styles.toast} ${styles[toast.tone] ?? styles.info}`}
          role={toast.tone === 'danger' ? 'alert' : 'status'}
        >
          <span className={styles.icon}>
            <Icon name={TONE_ICONS[toast.tone] ?? 'info'} size={18} strokeWidth={2} />
          </span>

          <div className={styles.content}>
            <p className={styles.title}>{toast.title}</p>
            {toast.description ? <p className={styles.description}>{toast.description}</p> : null}
          </div>

          <button
            type="button"
            className={styles.dismiss}
            onClick={() => onDismiss(toast.id)}
            aria-label={`Dismiss: ${toast.title}`}
          >
            <Icon name="close" size={16} strokeWidth={2} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Toaster;
