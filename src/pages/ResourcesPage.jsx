import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Avatar, Badge, Button, Icon, SectionHeading } from '../components/ui';
import { resourceCategories, resources } from '../data/resources';
import { getTherapistBySlug } from '../data/team';
import { usePageMeta } from '../hooks/usePageMeta';
import paths from '../routes/paths';
import styles from './ResourcesPage.module.css';

/** "2026-05-14" → "14 May 2026". Parsed as local time to avoid a day-off error. */
export function formatArticleDate(iso) {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * ResourcesPage — the article index.
 *
 * Filtering is client-side and deliberately dependency-free: six articles do
 * not need a search library. The result count lives in an aria-live region so
 * a screen-reader user hears the list change; without it, pressing a filter is
 * silent.
 */
export function ResourcesPage() {
  usePageMeta({
    title: 'Resources',
    description:
      'Articles written by the clinicians at Healing Horizon — starting therapy, anxiety and stress, relationships, families and teens, and practical guides.',
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const visible = useMemo(
    () =>
      activeCategory === 'all'
        ? resources
        : resources.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const [lead, ...rest] = visible;

  return (
    <>
      <section className={`section ${styles.hero}`} aria-labelledby="resources-heading">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h1 id="resources-heading" className={styles.title}>
            Written by the people who do the work
          </h1>
          <p className={styles.lede}>
            Short, practical pieces from our clinicians — mostly answers to the questions we get
            asked in first sessions. No listicles, no "10 signs you might have", nothing written
            to rank in a search engine.
          </p>

          <Alert tone="info" title="General information, not clinical advice" className={styles.disclaimer}>
            <p>
              These articles describe how we think about common difficulties. They are not a
              diagnosis, not a treatment plan, and not a substitute for working with a clinician
              who knows your situation. If something here worries you about yourself or someone
              close to you, that is a good reason to talk to someone — not to self-diagnose.
            </p>
          </Alert>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="section section--sunken" aria-labelledby="articles-heading">
        <div className="container">
          <h2 id="articles-heading" className="visually-hidden">
            All articles
          </h2>

          <div className={styles.filterBar}>
            <span className={styles.filterLabel} id="category-filter-label">
              Filter by topic
            </span>
            <div className={styles.filterChips} role="group" aria-labelledby="category-filter-label">
              {resourceCategories.map((category) => {
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
            Showing {visible.length} of {resources.length} articles
            {activeCategory !== 'all'
              ? ` in ${resourceCategories.find((c) => c.id === activeCategory)?.label}`
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

      {/* ---------------------------------------------------------------- */}
      <section className="section section--inverse" aria-labelledby="resources-cta-heading">
        <div className="container">
          <div className={styles.cta}>
            <SectionHeading
              eyebrow="Next step"
              title="Reading about it is a reasonable place to start"
              intro="It is also where a lot of people stay for a year. If something here landed, the next step is fifteen minutes on the phone with someone who can tell you what would actually help."
              id="resources-cta-heading"
              align="center"
            />
            <div className={styles.ctaActions}>
              <Button to={paths.book} variant="inverse" size="lg" iconRight="arrowRight">
                Book a free consultation
              </Button>
              <Button to={paths.therapists} variant="inverseOutline" size="lg">
                Meet the team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Byline({ authorSlug, date, readingTime, tone = 'default' }) {
  const author = getTherapistBySlug(authorSlug);

  return (
    <div className={`${styles.byline} ${tone === 'lead' ? styles.bylineLead : ''}`}>
      {author ? (
        <Avatar
          size="sm"
          initials={author.initials}
          accent={author.accent}
          alt=""
          className={styles.bylineAvatar}
        />
      ) : null}
      <div className={styles.bylineText}>
        {author ? <span className={styles.bylineName}>{author.name}</span> : null}
        <span className={styles.bylineMeta}>
          <time dateTime={date}>{formatArticleDate(date)}</time>
          <span aria-hidden="true">·</span>
          {readingTime} min read
        </span>
      </div>
    </div>
  );
}

function LeadArticle({ article }) {
  const category = resourceCategories.find((c) => c.id === article.category);

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
            {category?.label ?? 'Article'}
          </Badge>
          <Badge tone="accent" size="sm" icon="sparkle">
            Featured
          </Badge>
        </div>

        <h3 className={styles.leadTitle}>
          <Link to={paths.resource(article.slug)} className={styles.leadLink}>
            {article.title}
          </Link>
        </h3>

        <p className={styles.leadExcerpt}>{article.excerpt}</p>

        <Byline
          authorSlug={article.author}
          date={article.date}
          readingTime={article.readingTime}
          tone="lead"
        />
      </div>
    </article>
  );
}

function ArticleCard({ article }) {
  const category = resourceCategories.find((c) => c.id === article.category);

  return (
    <article className={styles.card}>
      <Badge tone="neutral" size="sm">
        {category?.label ?? 'Article'}
      </Badge>

      <h3 className={styles.cardTitle}>
        <Link to={paths.resource(article.slug)} className={styles.cardLink}>
          {article.title}
        </Link>
      </h3>

      <p className={styles.cardExcerpt}>{article.excerpt}</p>

      <div className={styles.cardFooter}>
        <Byline
          authorSlug={article.author}
          date={article.date}
          readingTime={article.readingTime}
        />
        <Icon name="arrowRight" size={18} className={styles.cardArrow} />
      </div>
    </article>
  );
}

export default ResourcesPage;
