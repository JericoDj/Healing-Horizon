import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Badge, Button, Icon, SectionHeading } from '../components/ui';
import { allFaqs, faqGroups } from '../data/faqs';
import { site } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';
import paths from '../routes/paths';
import styles from './FaqPage.module.css';

/**
 * FaqPage — grouped questions, with a search that flattens them.
 *
 * Two modes on purpose. Browsing wants structure (four themed groups with a
 * jump nav); searching wants a flat ranked list. Trying to serve both with one
 * layout produces a page that is bad at both.
 */
export function FaqPage() {
  usePageMeta({
    title: 'Frequently asked questions',
    description:
      'Getting started, cost and insurance, confidentiality, and how sessions work at Healing Horizon — answered plainly.',
  });

  const [query, setQuery] = useState('');
  const trimmed = query.trim();
  const isSearching = trimmed.length > 0;

  const results = useMemo(() => {
    if (!isSearching) return [];
    const needle = trimmed.toLowerCase();
    return allFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(needle) || faq.answer.toLowerCase().includes(needle),
    );
  }, [trimmed, isSearching]);

  return (
    <>
      <section className={`section ${styles.hero}`} aria-labelledby="faq-heading">
        <div className="container">
          <p className="eyebrow">Questions</p>
          <h1 id="faq-heading" className={styles.title}>
            The things people ask before they call
          </h1>
          <p className={styles.lede}>
            Cost, confidentiality, how long it takes, what actually happens in a first session.
            If your question is not here, ask us — nobody has ever asked us something they
            should have been embarrassed about.
          </p>

          <div className={styles.searchWrap}>
            <label htmlFor="faq-search" className={styles.searchLabel}>
              Search questions
            </label>
            <div className={styles.searchField}>
              <Icon name="search" size={20} className={styles.searchIcon} />
              <input
                id="faq-search"
                type="search"
                className={styles.searchInput}
                placeholder="insurance, confidentiality, first session…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
              />
              {isSearching ? (
                <button
                  type="button"
                  className={styles.searchClear}
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                >
                  <Icon name="close" size={17} />
                </button>
              ) : null}
            </div>
          </div>

          <p className={styles.resultCount} aria-live="polite">
            {isSearching
              ? `${results.length} ${results.length === 1 ? 'question matches' : 'questions match'} “${trimmed}”.`
              : `${allFaqs.length} questions across ${faqGroups.length} topics.`}
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section section--sunken" aria-labelledby="faq-content-heading">
        <div className="container">
          <h2 id="faq-content-heading" className="visually-hidden">
            {isSearching ? 'Search results' : 'All questions by topic'}
          </h2>

          {isSearching ? (
            <SearchResults results={results} query={trimmed} onClear={() => setQuery('')} />
          ) : (
            <div className={styles.browseLayout}>
              <nav className={styles.jumpNav} aria-label="Jump to a topic">
                <p className={styles.jumpHeading}>Topics</p>
                <ul className={styles.jumpList}>
                  {faqGroups.map((group) => (
                    <li key={group.id}>
                      <a href={`#${group.id}`} className={styles.jumpLink}>
                        {group.heading}
                        <span className={styles.jumpCount}>{group.items.length}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.groups}>
                {faqGroups.map((group) => (
                  <section
                    key={group.id}
                    id={group.id}
                    className={styles.group}
                    aria-labelledby={`${group.id}-heading`}
                  >
                    <h3 id={`${group.id}-heading`} className={styles.groupHeading}>
                      {group.heading}
                    </h3>
                    <Accordion items={group.items} allowMultiple />
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section" aria-labelledby="faq-ask-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Still wondering"
            title="Ask us the thing you did not find here"
            intro="Our intake coordinator answers these all day and is not fazed by any of them. Call, email, or send a short message — whichever feels easiest."
            id="faq-ask-heading"
          />

          <ul className={styles.contactGrid}>
            <li className={styles.contactCard}>
              <span className={styles.contactIcon}>
                <Icon name="phone" size={22} />
              </span>
              <h3 className={styles.contactTitle}>Call the practice</h3>
              <p className={styles.contactBody}>
                Weekdays from 8am. If we are with clients, leave a message and we call back the
                same day.
              </p>
              <a href={site.contact.phoneHref} className={styles.contactAction}>
                {site.contact.phone}
              </a>
            </li>

            <li className={styles.contactCard}>
              <span className={styles.contactIcon}>
                <Icon name="mail" size={22} />
              </span>
              <h3 className={styles.contactTitle}>Email us</h3>
              <p className={styles.contactBody}>
                Good for questions about insurance and scheduling. Please keep clinical detail out
                of email.
              </p>
              <a href={`mailto:${site.contact.intakeEmail}`} className={styles.contactAction}>
                {site.contact.intakeEmail}
              </a>
            </li>

            <li className={styles.contactCard}>
              <span className={styles.contactIcon}>
                <Icon name="heartHand" size={22} />
              </span>
              <h3 className={styles.contactTitle}>Send a message</h3>
              <p className={styles.contactBody}>
                A short form. We reply {site.responseTime}, and you choose how you would like to
                be contacted.
              </p>
              <Link to={paths.contact} className={styles.contactAction}>
                Contact form
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section section--inverse" aria-labelledby="faq-cta-heading">
        <div className="container">
          <div className={styles.cta}>
            <h2 id="faq-cta-heading" className={styles.ctaHeading}>
              The fastest way to get your questions answered
            </h2>
            <p className={styles.ctaBody}>
              Fifteen minutes on the phone with a person who can answer all of it at once —
              cost, fit, availability. Free, and nothing is booked at the end of it unless you
              want it to be.
            </p>
            <div className={styles.ctaActions}>
              <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight">
                Book a free consultation
              </Button>
              <Button
                href={site.contact.phoneHref}
                variant="inverseOutline"
                size="lg"
                iconLeft="phone"
              >
                {site.contact.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SearchResults({ results, query, onClear }) {
  if (results.length === 0) {
    return (
      <div className={styles.empty}>
        <h3 className={styles.emptyHeading}>Nothing matches “{query}”</h3>
        <p className={styles.emptyBody}>
          Try a shorter word, or ask us directly — we would rather answer it than have you guess.
        </p>
        <div className={styles.emptyActions}>
          <Button variant="secondary" onClick={onClear}>
            Clear search
          </Button>
          <Button to={paths.contact} iconRight="arrowRight">
            Ask us your question
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.results}>
      {results.map((faq) => (
        <div key={faq.id} className={styles.resultItem}>
          <Badge tone="brand" size="sm">
            {faq.groupHeading}
          </Badge>
          <Accordion items={[faq]} defaultOpenId={results.length <= 3 ? faq.id : null} />
        </div>
      ))}
    </div>
  );
}

export default FaqPage;
