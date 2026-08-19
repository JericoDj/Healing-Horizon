import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Badge, Button, Icon, SectionHeading } from '../components/ui';
import { allFaqs, faqGroups } from '../data/faqs';
import { site } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';
import { useUI } from '../context/UIContext';
import paths from '../routes/paths';
import styles from './FaqPage.module.css';

/**
 * FaqPage — grouped questions, with a search that flattens them.
 */
export function FaqPage() {
  const { openBooking } = useUI();

  usePageMeta({
    title: 'Frequently Asked Questions About Psychiatric Rehabilitation | Healing Horizons',
    description:
      'PRP services, Maryland Medicaid, referrals, eligibility, in-home support, and getting started.',
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
      <section className={`section section--tight section--sunken ${styles.hero}`} aria-labelledby="faq-heading">
        <div className="container">
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <h1 id="faq-heading" className={styles.title} style={{ maxWidth: '24ch' }}>
            Frequently Asked Questions About Psychiatric Rehabilitation
          </h1>
          <p className={styles.lede}>
            PRP services, Maryland Medicaid, referrals, eligibility, in-home support, and getting started.
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
                placeholder="Medicaid, referral, in-home services, eligibility…"
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
              : `${allFaqs.length} questions across ${faqGroups.length} categories.`}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ 2. FAQ Questions */}
      <section className="section section--sunken" aria-labelledby="faq-content-heading">
        <div className="container">
          <SectionHeading
            id="faq-content-heading"
            eyebrow="Browse Questions"
            title="Psychiatric Rehabilitation FAQs by Topic"
            intro="Find detailed answers about Maryland PRP services, Medicaid coverage, eligibility requirements, referral pathways, and getting started."
          />

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
                    <h2 id={`${group.id}-heading`} className={styles.groupHeading}>
                      {group.heading}
                    </h2>
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
            eyebrow="Direct Assistance"
            title="Ask us the question you did not find here"
            intro="Our intake specialists are available to guide you through Maryland Medicaid eligibility, clinical referrals, and individualized program options."
            id="faq-ask-heading"
          />

          <ul className={styles.contactGrid}>
            <li className={styles.contactCard}>
              <span className={styles.contactIcon}>
                <Icon name="phone" size={22} />
              </span>
              <h3 className={styles.contactTitle}>Call Our Intake Team</h3>
              <p className={styles.contactBody}>
                Weekdays from 8am to 6pm. We answer questions about Medicaid and referrals directly.
              </p>
              <a href={site.contact.phoneHref} className={styles.contactAction}>
                {site.contact.phone}
              </a>
            </li>

            <li className={styles.contactCard}>
              <span className={styles.contactIcon}>
                <Icon name="mail" size={22} />
              </span>
              <h3 className={styles.contactTitle}>Email Intake</h3>
              <p className={styles.contactBody}>
                Ideal for general questions and referral inquiries across Maryland.
              </p>
              <a href={`mailto:${site.contact.intakeEmail}`} className={styles.contactAction}>
                {site.contact.intakeEmail}
              </a>
            </li>

            <li className={styles.contactCard}>
              <span className={styles.contactIcon}>
                <Icon name="heartHand" size={22} />
              </span>
              <h3 className={styles.contactTitle}>Send a Message</h3>
              <p className={styles.contactBody}>
                Submit an inquiry or referral through our secure contact form. We reply {site.responseTime}.
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
              Still Have Questions About Psychiatric Rehabilitation?
            </h2>
            <p className={styles.ctaBody}>
              Whether you are an individual seeking independence, a family member, or a provider
              submitting a referral, our Maryland intake specialists are here to guide you.
            </p>
            <div className={styles.ctaActions}>
              <Button to={paths.contact} variant="inverse" size="lg" iconRight="arrowRight">
                Talk With Our Intake Team
              </Button>
              <Button
                type="button"
                variant="inverseOutline"
                size="lg"
                onClick={openBooking}
              >
                Book a Free Consultation
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
