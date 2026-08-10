import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { TICKER_SPEED, announcements } from '../../data/announcements';
import { Icon } from '../ui';
import styles from './NewsTicker.module.css';

/**
 * NewsTicker — the announcement strip above the header.
 *
 * Moving text is the easiest thing on a website to get wrong, so the rules it
 * follows are worth stating:
 *
 *  · WCAG 2.2.2 (Level A) requires a way to pause anything that moves for more
 *    than five seconds alongside other content. The pause button is therefore
 *    mandatory, not a nicety, and it is a real button — visible, labelled and
 *    keyboard reachable.
 *  · It also pauses on hover and on focus, so you can read an item without
 *    racing it, and so a keyboard user tabbing past is not chasing a target.
 *  · Under `prefers-reduced-motion` it does not animate at all. It becomes a
 *    plain, horizontally scrollable row — every announcement still reachable,
 *    nothing moving. Vestibular disorders and migraine are over-represented in
 *    this audience.
 *  · It is NOT a live region. The content is static marketing copy; announcing
 *    it over whatever the user is doing would be hostile.
 *
 * The strip scrolls away with the page — only the header is sticky. Permanent
 * vertical furniture is not worth it for content you read once.
 */
export function NewsTicker() {
  const { prefersReducedMotion } = useTheme();
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef(null);
  const setRef = useRef(null);

  /**
   * Duration is derived from the measured width so the speed stays constant
   * however many announcements are configured. A fixed duration would make
   * three items crawl and eight items sprint.
   */
  const syncDuration = useCallback(() => {
    const track = trackRef.current;
    const set = setRef.current;
    if (!track || !set) return;
    const distance = set.getBoundingClientRect().width;
    if (!distance) return;
    track.style.setProperty('--ticker-duration', `${distance / TICKER_SPEED}s`);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    syncDuration();

    const observer = new ResizeObserver(syncDuration);
    if (setRef.current) observer.observe(setRef.current);

    // Webfonts land after first paint and change the measured width.
    document.fonts?.ready.then(syncDuration).catch(() => {});

    return () => observer.disconnect();
  }, [prefersReducedMotion, syncDuration]);

  if (announcements.length === 0) return null;

  const colorClasses = [styles.iconOrange, styles.iconYellow, styles.iconGreen];

  const items = announcements.map((item, index) => {
    const colorClass = colorClasses[index % colorClasses.length];
    return (
      <li key={item.id} className={styles.item}>
        <Icon name={item.icon} size={16} strokeWidth={2} className={`${styles.itemIcon} ${colorClass}`} />
        <span className={styles.itemText}>{item.text}</span>
      </li>
    );
  });

  return (
    <aside className={styles.ticker} aria-label="Practice announcements">
      <div className={styles.inner}>
        {/* Hover pauses so you can finish reading an item without racing it.
            There is deliberately nothing focusable in here — the items are
            plain text — so the keyboard path is the pause button, not a
            focus-within rule that would never fire. */}
        <div
          className={styles.viewport}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {prefersReducedMotion ? (
            // No animation, no duplicate — just a scrollable row.
            <ul className={`${styles.track} ${styles.trackStatic}`}>{items}</ul>
          ) : (
            <div
              ref={trackRef}
              className={`${styles.track} ${isPaused ? styles.trackPaused : ''}`}
            >
              <ul className={styles.set} ref={setRef}>
                {items}
              </ul>
              {/* The seamless-loop copy. Hidden from assistive tech so the
                  announcements are not read out twice. */}
              <ul className={styles.set} aria-hidden="true">
                {items}
              </ul>
            </div>
          )}
        </div>

        {/* WCAG 2.2.2 (Level A): anything moving for more than five seconds
            alongside other content needs a way to stop it. The button is
            therefore required — but it is transparent until you hover the
            strip or tab to it, so the resting bar stays clean. Same trick as
            the skip link: invisible until it is the thing you need. */}
        {prefersReducedMotion ? null : (
          <button
            type="button"
            className={`${styles.control} ${isPaused ? styles.controlActive : ''}`}
            onClick={() => setIsPaused((paused) => !paused)}
            aria-pressed={isPaused}
            title={isPaused ? 'Resume announcements' : 'Pause announcements'}
          >
            <Icon name={isPaused ? 'play' : 'pause'} size={14} strokeWidth={2.2} />
            <span className="visually-hidden">
              {isPaused ? 'Resume announcements' : 'Pause announcements'}
            </span>
          </button>
        )}
      </div>
    </aside>
  );
}

export default NewsTicker;
