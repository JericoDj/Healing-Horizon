import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Icon, SectionHeading } from '../components/ui';
import { exploreCategories, exploreArticles } from '../data/explore';
import { usePageMeta } from '../hooks/usePageMeta';
import paths from '../routes/paths';
import styles from './ExplorePage.module.css';

/** "2026-05-14" → "14 May 2026". */
export function formatArticleDate(iso) {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

const EXPLORE_TOPICS = [
  {
    icon: 'person',
    title: 'Who We Serve',
    description: 'Learn who may benefit from psychiatric rehabilitation and the types of support available.',
    to: paths.programs,
    cta: 'Learn Who We Serve',
  },
  {
    icon: 'clock',
    title: 'How Psychiatric Rehabilitation Works',
    description: 'Understand the referral, intake, assessment, and ongoing support process.',
    to: '/#how-it-works',
    cta: 'See How It Works',
  },
  {
    icon: 'mapPin',
    title: 'Maryland Service Areas',
    description: 'Explore the Maryland communities where Healing Horizons provides psychiatric rehabilitation services.',
    to: paths.about,
    cta: 'View Service Areas',
  },
  {
    icon: 'info',
    title: 'Frequently Asked Questions',
    description: 'Get answers about PRP, Medicaid coverage, referrals, services, and getting started.',
    to: paths.faq,
    cta: 'Read FAQs',
  },
];

const MARYLAND_LINKS = [
  { label: 'Maryland Medicaid & PRP', to: paths.faq, icon: 'shieldCheck' },
  { label: 'Maryland Service Areas', to: paths.about, icon: 'mapPin' },
  { label: 'PRP Referral Information', to: paths.contact, icon: 'book' },
  { label: 'Frequently Asked Questions', to: paths.faq, icon: 'info' },
];

export function ExplorePage() {
  usePageMeta({
    title: 'Explore Psychiatric Rehabilitation Services in Maryland | Healing Horizons',
    description:
      'Learn how PRP works, who we serve, where we provide care, and what to expect when getting started in Maryland.',
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const visible = useMemo(
    () =>
      activeCategory === 'all'
        ? exploreArticles
        : exploreArticles.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const [lead, ...rest] = visible;

  return (
    <>
      {/* -------------------------------------------------------- 1. Hero -- */}
      <section className={`section section--tight section--sunken ${styles.hero}`} aria-labelledby="explore-heading">
        <div className="container">
          <p className="eyebrow">EXPLORE HEALING HORIZONS · MARYLAND</p>
          <h1 id="explore-heading" className={styles.title} style={{ maxWidth: '24ch' }}>
            Explore Psychiatric Rehabilitation Services in Maryland
          </h1>
          <p className={styles.lede}>
            Learn how PRP works, who we serve, where we provide care, and what to expect when getting started.
          </p>
        </div>
      </section>

      {/* ---------------------------------- 2. Explore by Topic (Hub) -- */}
      <section id="topics" className={`section section--sunken ${styles.exploreHub}`} aria-labelledby="hub-heading">
        <div className="container">
          <SectionHeading
            id="hub-heading"
            eyebrow="Explore By Topic"
            title="Find the Information You Need"
            intro="Whether you're exploring psychiatric rehabilitation for yourself or someone you support, start with the information that matters most."
          />

          <ul className={styles.exploreGrid}>
            {EXPLORE_TOPICS.map((topic) => (
              <li key={topic.title}>
                <Link to={topic.to} className={styles.hubCard}>
                  <span className={styles.hubIcon} aria-hidden="true">
                    <Icon name={topic.icon} size={22} />
                  </span>
                  <div>
                    <h3 className={styles.hubTitle}>{topic.title}</h3>
                    <p className={styles.hubDescription}>{topic.description}</p>
                  </div>
                  <span className={styles.hubCta}>
                    {topic.cta}
                    <Icon name="arrowRight" size={16} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------- 3. Educational Resources / Articles -- */}
      <section id="articles" className={`section ${styles.articlesSection}`} aria-labelledby="articles-heading">
        <div className="container">
          <SectionHeading
            id="articles-heading"
            eyebrow="Educational Resources"
            title="Mental Health &amp; Psychiatric Rehabilitation Resources"
            intro="Practical information from our team about psychiatric rehabilitation, mental health, independent living, and community-based support."
          />

          <div className={styles.filterBar}>
            <span className={styles.filterLabel} id="category-filter-label">
              Filter by topic
            </span>
            <div className={styles.filterChips} role="group" aria-labelledby="category-filter-label">
              {exploreCategories.map((category) => {
                const isActive = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          <p className={styles.resultCount} aria-live="polite">
            Showing {visible.length} of {exploreArticles.length} resources
            {activeCategory !== 'all'
              ? ` in ${exploreCategories.find((c) => c.id === activeCategory)?.label}`
              : ''}
            .
          </p>

          {visible.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyText}>No articles in that topic yet.</p>
              <Button variant="secondary" onClick={() => setActiveCategory('all')}>
                Show all articles
              </Button>
            </div>
          ) : (
            <>
              {lead ? <LeadArticle article={lead} /> : null}

              {rest.length > 0 ? (
                <ul className={styles.grid}>
                  {rest.map((article) => (
                    <li key={article.slug} className={styles.gridItem}>
                      <ArticleCard article={article} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          )}
        </div>
      </section>

      {/* --------------------------------- 4. Maryland Specific Section -- */}
      <section id="maryland-resources" className={`section section--tight section--accent ${styles.marylandSection}`} aria-labelledby="maryland-heading">
        <div className="container">
          <SectionHeading
            id="maryland-heading"
            eyebrow="Maryland Resources"
            title="Psychiatric Rehabilitation Resources for Maryland"
            intro="Explore information about Maryland Medicaid, psychiatric rehabilitation, community-based mental health support, referrals, and the services available through Healing Horizons."
          />

          <ul className={styles.marylandGrid}>
            {MARYLAND_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={styles.marylandCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Icon name={link.icon} size={18} style={{ color: 'var(--blue-500)' }} />
                    <span>{link.label}</span>
                  </div>
                  <Icon name="arrowRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ 5. Bottom CTA -- */}
      <section id="get-started" className="section section--inverse" aria-labelledby="resources-cta-heading">
        <div className="container">
          <div className={styles.cta}>
            <SectionHeading
              eyebrow="Next Step"
              title="Ready to Explore Psychiatric Rehabilitation?"
              intro="If you're not sure where to begin, our intake team can help you understand your options and identify the appropriate next step."
              id="resources-cta-heading"
              align="center"
            />
            <div className={styles.ctaActions}>
              <Button to={paths.contact} variant="inverse" size="lg" iconRight="arrowRight">
                Talk With Our Intake Team
              </Button>
              <Button to={paths.programs} variant="inverseOutline" size="lg">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LeadArticle({ article }) {
  const category = exploreCategories.find((c) => c.id === article.category);

  return (
    <article className={styles.lead}>
      <div className={styles.leadArt} aria-hidden="true">
        <svg viewBox="0 0 400 300" className={styles.leadSvg} preserveAspectRatio="xMidYMid slice">
          <circle cx="300" cy="96" r="62" className={styles.leadSun} />
          <path d="M0 196C90 168 310 168 400 190V300H0Z" className={styles.leadBandFar} />
          <path d="M0 236C120 210 280 232 400 214V300H0Z" className={styles.leadBandNear} />
        </svg>
      </div>

      <div className={styles.leadBody}>
        <div className={styles.leadTop}>
          <Badge tone="brand" size="sm">
            {category?.label ?? 'Resource'}
          </Badge>
          <Badge tone="accent" size="sm" icon="sparkle">
            Featured Resource
          </Badge>
        </div>

        <h3 className={styles.leadTitle}>
          <Link to={paths.exploreArticle(article.slug)} className={styles.leadLink}>
            {article.title}
          </Link>
        </h3>

        <p className={styles.leadExcerpt}>{article.excerpt}</p>

        <div className={styles.bylineMeta} style={{ marginTop: 'var(--space-4)' }}>
          <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime} min read</span>
          <span aria-hidden="true">·</span>
          <span>Healing Horizons Clinical Team</span>
        </div>
      </div>
    </article>
  );
}

function ArticleCard({ article }) {
  const category = exploreCategories.find((c) => c.id === article.category);

  return (
    <article className={styles.card}>
      <Badge tone="neutral" size="sm">
        {category?.label ?? 'Resource'}
      </Badge>

      <h3 className={styles.cardTitle}>
        <Link to={paths.exploreArticle(article.slug)} className={styles.cardLink}>
          {article.title}
        </Link>
      </h3>

      <p className={styles.cardExcerpt}>{article.excerpt}</p>

      <div className={styles.cardFooter}>
        <span className={styles.bylineMeta}>
          <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime} min read</span>
        </span>
        <Icon name="arrowRight" size={18} className={styles.cardArrow} />
      </div>
    </article>
  );
}

export default ExplorePage;
