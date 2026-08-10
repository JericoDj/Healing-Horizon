import { Link } from 'react-router-dom';
import Icon from './Icon';
import styles from './Breadcrumbs.module.css';

/**
 * Breadcrumbs — used on every detail page (service, therapist, article).
 *
 * The last crumb is the current page: not a link, and marked aria-current so
 * screen readers say so.
 *
 * @param {{label: string, to?: string}[]} items
 */
export function Breadcrumbs({ items = [], className = '' }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`${styles.nav} ${className}`}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              {isLast || !item.to ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link to={item.to} className={styles.link}>
                    {item.label}
                  </Link>
                  <span className={styles.separator} aria-hidden="true">
                    <Icon name="chevronRight" size={14} />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
