import { Icon, SectionHeading } from '../ui';
import { reflections } from '../../data/testimonials';
import styles from './ReflectionsSection.module.css';

/**
 * ReflectionsSection — composite statements, labelled as composite.
 *
 * These are NOT client testimonials and must never be presented as such.
 * APA Ethics Code 5.05 and most state boards restrict soliciting testimonials
 * from people in therapy, so the practice does not publish them at all. The
 * disclosure sits above the quotes rather than under them, because a label
 * that arrives after the reader has already believed something is not a label.
 */
export function ReflectionsSection() {
  return (
    <section
      className={`section section--inverse ${styles.reflections}`}
      aria-labelledby="reflections-heading"
    >
      <div className="container">
        <SectionHeading
          id="reflections-heading"
          align="center"
          eyebrow="From our clinicians"
          title="What people tend to notice"
          intro="Patterns our therapists hear often enough that they are worth saying out loud before you start."
        />

        <p className={styles.disclosure}>
          <Icon name="info" size={20} />
          <span>
            <strong>These are composite reflections written by our clinicians, not client
            testimonials.</strong>{' '}
            We do not publish client testimonials. Nothing below is attributed to a real person,
            because no real person said it — asking someone in therapy to endorse their therapist
            is a request they are not free to refuse.
          </span>
        </p>

        <ul className={styles.list}>
          {reflections.map((reflection) => (
            <li key={reflection.id} className={styles.item}>
              <Icon name="quote" size={32} className={styles.mark} />
              <p className={styles.context}>{reflection.context}</p>
              <blockquote className={styles.quote}>
                <p>{reflection.quote}</p>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReflectionsSection;
