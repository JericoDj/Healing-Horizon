import Icon from './Icon';
import styles from './Alert.module.css';

const TONE_ICONS = {
  info: 'info',
  success: 'check',
  warning: 'alert',
  danger: 'alert',
  brand: 'heartHand',
};

/**
 * Alert — a persistent, in-page message. (Transient messages use the toast
 * system instead.)
 *
 * `live` controls whether this is an assertive live region. Set it ONLY for
 * messages that appear in response to something the user just did — a failed
 * submit, for example.
 *
 * It is deliberately NOT keyed off `tone`. A standing crisis notice is a
 * warning, but it is present on first paint; making it role="alert" means a
 * screen reader interrupts to read the whole block when the page mounts, and
 * then again on every re-render. Live regions are for changes, not for
 * severity.
 */
export function Alert({
  children,
  title,
  tone = 'info',
  icon,
  action,
  live = false,
  className = '',
  ...rest
}) {
  return (
    <div
      className={`${styles.alert} ${styles[tone]} ${className}`}
      role={live ? 'alert' : 'note'}
      {...rest}
    >
      <Icon name={icon ?? TONE_ICONS[tone] ?? 'info'} size={20} className={styles.icon} />
      <div className={styles.content}>
        {title ? <p className={styles.title}>{title}</p> : null}
        <div className={styles.body}>{children}</div>
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  );
}

export default Alert;
