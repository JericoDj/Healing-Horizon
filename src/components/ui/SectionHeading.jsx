import styles from './SectionHeading.module.css';

/**
 * SectionHeading — eyebrow + heading + intro, in one consistent block.
 *
 * Nearly every section on the site opens the same way, and letting each one
 * hand-roll its own spacing is how a design system drifts. `align` handles
 * the only variation we actually need.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  level = 2,
  id,
  className = '',
  children,
}) {
  const Heading = `h${level}`;

  return (
    <div className={`${styles.wrap} ${styles[align]} ${className}`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Heading className={styles.title} id={id}>
        {title}
      </Heading>
      {intro ? <p className={styles.intro}>{intro}</p> : null}
      {children ? <div className={styles.extra}>{children}</div> : null}
    </div>
  );
}

export default SectionHeading;
