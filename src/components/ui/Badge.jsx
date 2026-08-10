import Icon from './Icon';
import styles from './Badge.module.css';

/**
 * Badge — a small status or category marker.
 *
 * tone: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'inverse'
 *
 * Colour alone never carries the meaning: the label text always says it too,
 * which is what WCAG 1.4.1 requires and what colour-blind users need.
 */
export function Badge({ children, tone = 'neutral', icon, size = 'md', className = '', ...rest }) {
  return (
    <span
      className={`${styles.badge} ${styles[tone]} ${styles[size]} ${className}`}
      {...rest}
    >
      {icon ? <Icon name={icon} size={size === 'sm' ? 12 : 14} strokeWidth={1.9} /> : null}
      {children}
    </span>
  );
}

/** A badge with a filled dot, for availability states. */
export function StatusBadge({ available, children, className = '' }) {
  return (
    <span
      className={`${styles.badge} ${styles.md} ${
        available ? styles.success : styles.neutral
      } ${className}`}
    >
      <span
        className={`${styles.dot} ${available ? styles.dotSuccess : styles.dotNeutral}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export default Badge;
