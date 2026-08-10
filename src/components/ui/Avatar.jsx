import styles from './Avatar.module.css';

/**
 * Avatar — clinician portrait, with a designed fallback.
 *
 * Real headshots are rarely ready when a site is built, and a broken image on
 * a therapist card undermines the whole page. The fallback is a tinted
 * monogram in one of three brand accents, which looks deliberate rather than
 * missing. Drop a `src` in and it takes over.
 */
export function Avatar({
  src,
  alt = '',
  initials = '',
  accent = 'teal',
  size = 'md',
  className = '',
  ...rest
}) {
  const classes = [styles.avatar, styles[size], styles[accent], className].filter(Boolean).join(' ');

  if (src) {
    return <img src={src} alt={alt} className={classes} loading="lazy" decoding="async" {...rest} />;
  }

  return (
    <span className={classes} role="img" aria-label={alt || undefined} {...rest}>
      <span className={styles.initials} aria-hidden="true">
        {initials}
      </span>
      <svg className={styles.texture} viewBox="0 0 120 150" aria-hidden="true" preserveAspectRatio="none">
        <circle cx="98" cy="26" r="46" fill="currentColor" opacity="0.16" />
        <circle cx="18" cy="132" r="38" fill="currentColor" opacity="0.12" />
      </svg>
    </span>
  );
}

export default Avatar;
