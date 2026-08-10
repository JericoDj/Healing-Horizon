import { Link } from 'react-router-dom';
import styles from './Card.module.css';

/**
 * Card — the surface primitive for grouped content.
 *
 * Pass `to` to make the whole card a link. The heading inside still renders as
 * a heading; the card wrapper carries the anchor, so screen readers get one
 * link with the card's text rather than a nest of overlapping targets.
 *
 * tone: 'raised' | 'sunken' | 'accent' | 'inverse' | 'outline'
 */
export function Card({
  children,
  as: Component = 'div',
  to,
  tone = 'raised',
  padding = 'md',
  interactive = false,
  className = '',
  ...rest
}) {
  const classes = [
    styles.card,
    styles[tone],
    styles[`pad-${padding}`],
    interactive || to ? styles.interactive : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = '', ...rest }) {
  return (
    <div className={`${styles.header} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '', ...rest }) {
  return (
    <div className={`${styles.body} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...rest }) {
  return (
    <div className={`${styles.footer} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export default Card;
