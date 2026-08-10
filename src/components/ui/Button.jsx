import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import styles from './Button.module.css';

/**
 * Button — the single interactive primitive.
 *
 * Renders as <button>, <Link> (when given `to`) or <a> (when given `href`),
 * so a link never has to pretend to be a button. Same visual API either way.
 *
 * Variants
 *   primary   Deep Teal fill. One per view — the main next step.
 *   secondary Mist fill, teal text. The reasonable alternative.
 *   outline   Bordered, transparent. Tertiary actions.
 *   ghost     No chrome until hover. Toolbar and inline actions.
 *   accent    Clay fill. Reserved for the single highest-intent CTA.
 *   inverse   For use on Deep Teal surfaces.
 */
export const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    to,
    href,
    type = 'button',
    iconLeft,
    iconRight,
    fullWidth = false,
    loading = false,
    disabled = false,
    className = '',
    ...rest
  },
  ref,
) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    loading ? styles.loading : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      {iconLeft && !loading ? <Icon name={iconLeft} size={size === 'sm' ? 16 : 18} /> : null}
      <span className={styles.label}>{children}</span>
      {iconRight ? <Icon name={iconRight} size={size === 'sm' ? 16 : 18} /> : null}
    </>
  );

  if (to && !disabled) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {content}
    </button>
  );
});

export default Button;
