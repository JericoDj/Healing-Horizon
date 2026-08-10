import { Link, useParams } from 'react-router-dom';
import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Icon,
  SectionHeading,
} from '../components/ui';
import { crisisResources, site } from '../data/site';
import { getResourceBySlug, resourceCategories, resources } from '../data/resources';
import { getTherapistBySlug } from '../data/team';
import { usePageMeta } from '../hooks/usePageMeta';
import paths from '../routes/paths';
import { formatArticleDate } from './ResourcesPage';
import styles from './ResourceDetailPage.module.css';

/**
 * ResourceDetailPage — a single article.
 *
 * The standing disclaimer at the foot of the body is not optional. Anything
 * that reads like clinical guidance has to carry the caveat and the crisis
 * lines, because articles are the most likely page for someone to land on
 * from a search made at a bad moment.
 */
export function ResourceDetailPage() {
  const { slug } = useParams();
  const article = getResourceBySlug(slug);

  if (!article) return <ArticleNotFound slug={slug} />;

  const author = getTherapistBySlug(article.author);
  const category = resourceCategories.find((c) => c.id === article.category);
  const related = resources.filter((item) => item.slug !== article.slug).slice(0, 3);

  return <ArticleView article={article} author={author} category={category} related={related} />;
}

function ArticleView({ article, author, category, related }) {
  usePageMeta({ title: article.title, description: article.excerpt });

  return (
    <>
      <article>
        <header className={`section section--tight ${styles.header}`}>
          <div className="container container--narrow">
            <Breadcrumbs
              items={[
                { label: 'Home', to: paths.home },
                { label: 'Resources', to: paths.resources },
                { label: article.title },
              ]}
            />

            <Badge tone="brand" size="sm">
              {category?.label ?? 'Article'}
            </Badge>

            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.excerpt}>{article.excerpt}</p>

            <div className={styles.byline}>
              {author ? (
                <>
                  <Avatar
                    size="sm"
                    initials={author.initials}
                    accent={author.accent}
                    alt=""
                    className={styles.bylineAvatar}
                  />
                  <div className={styles.bylineText}>
                    <Link to={paths.therapist(author.slug)} className={styles.bylineName}>
                      {author.name}
                    </Link>
                    <span className={styles.bylineCreds}>{author.credentials}</span>
                  </div>
                </>
              ) : null}

              <span className={styles.bylineMeta}>
                <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                <span aria-hidden="true">·</span>
                {article.readingTime} min read
              </span>
            </div>
          </div>
        </header>

        <div className={`section section--tight ${styles.bodySection}`}>
          <div className="container container--narrow">
            <div className={styles.body}>
              {article.body.map((paragraph, index) => (
                // Paragraph order is fixed and content is static, so index is a stable key here.
                // eslint-disable-next-line react/no-array-index-key
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <aside className={styles.disclaimer} aria-labelledby="article-disclaimer-heading">
              <h2 id="article-disclaimer-heading" className={styles.disclaimerHeading}>
                <Icon name="info" size={19} />
                About this article
              </h2>
              <p className={styles.disclaimerBody}>
                This is general information written by a clinician at {site.name}. It is not a
                diagnosis, not a treatment plan, and not a substitute for care from someone who
                knows your situation. If any of it applies uncomfortably closely to you, that is a
                reason to talk to someone rather than to draw a conclusion.
              </p>

              <p className={styles.crisisLead}>
                <strong>If you need support right now:</strong>
              </p>
              <ul className={styles.crisisList}>
                {crisisResources.map((resource) => (
                  <li key={resource.label}>
                    <a href={resource.href} className={styles.crisisLink}>
                      {resource.action}
                    </a>
                    <span className={styles.crisisDetail}>— {resource.label}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </article>

      {/* ---------------------------------------------------------------- */}
      {author ? (
        <section className="section section--sunken" aria-labelledby="article-author-heading">
          <div className="container container--narrow">
            <h2 id="article-author-heading" className={styles.sectionHeading}>
              About the author
            </h2>

            <Card tone="raised" padding="lg" className={styles.authorCard}>
              <Avatar
                size="md"
                initials={author.initials}
                accent={author.accent}
                alt=""
                className={styles.authorAvatar}
              />
              <div className={styles.authorBody}>
                <h3 className={styles.authorName}>{author.name}</h3>
                <p className={styles.authorRole}>
                  {author.credentials} · {author.role}
                </p>
                <p className={styles.authorBio}>{author.shortBio}</p>
                <div className={styles.authorActions}>
                  <Button to={paths.therapist(author.slug)} variant="secondary" size="sm">
                    Read full profile
                  </Button>
                  <Button to={paths.book} size="sm" iconRight="arrowRight">
                    Book with {author.name.split(' ').slice(-1)[0]}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ) : null}

      {/* ---------------------------------------------------------------- */}
      {related.length > 0 ? (
        <section className="section" aria-labelledby="article-related-heading">
          <div className="container">
            <SectionHeading
              eyebrow="Keep reading"
              title="More from our team"
              id="article-related-heading"
            />

            <ul className={styles.relatedGrid}>
              {related.map((item) => {
                const itemCategory = resourceCategories.find((c) => c.id === item.category);
                return (
                  <li key={item.slug} className={styles.relatedItem}>
                    <article className={styles.relatedCard}>
                      <Badge tone="neutral" size="sm">
                        {itemCategory?.label ?? 'Article'}
                      </Badge>
                      <h3 className={styles.relatedTitle}>
                        <Link to={paths.resource(item.slug)} className={styles.relatedLink}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className={styles.relatedExcerpt}>{item.excerpt}</p>
                      <span className={styles.relatedMeta}>
                        <time dateTime={item.date}>{formatArticleDate(item.date)}</time>
                        <span aria-hidden="true">·</span>
                        {item.readingTime} min read
                      </span>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ---------------------------------------------------------------- */}
      <section className="section section--inverse" aria-labelledby="article-cta-heading">
        <div className="container">
          <div className={styles.cta}>
            <h2 id="article-cta-heading" className={styles.ctaHeading}>
              If this is something you would like to work on
            </h2>
            <p className={styles.ctaBody}>
              Start with a free 15-minute call. We will listen, tell you honestly whether we are
              the right place, and match you with the clinician who fits.
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

function ArticleNotFound({ slug }) {
  usePageMeta({
    title: 'Article not found',
    description: 'We could not find that article.',
    noIndex: true,
  });

  return (
    <section className={`section ${styles.notFound}`} aria-labelledby="article-missing-heading">
      <div className="container container--narrow">
        <Breadcrumbs
          items={[
            { label: 'Home', to: paths.home },
            { label: 'Resources', to: paths.resources },
            { label: 'Not found' },
          ]}
        />
        <h1 id="article-missing-heading">We could not find that article</h1>
        <p className={styles.notFoundBody}>
          {slug ? (
            <>
              Nothing here matches <code className={styles.code}>{slug}</code>.{' '}
            </>
          ) : null}
          It may have been renamed, or the link may be incomplete. Everything we have published is
          on the resources page.
        </p>
        <div className={styles.notFoundActions}>
          <Button to={paths.resources} iconLeft="arrowLeft">
            All resources
          </Button>
          <Button to={paths.contact} variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ResourceDetailPage;
