import { Alert, Icon } from '../../components/ui';
import { site } from '../../data/site';
import styles from './LegalLayout.module.css';

/**
 * LegalLayout — the shared shell for Privacy, Terms and Accessibility.
 *
 * Legal pages are read in two ways: linearly by someone who is worried, and
 * by jumping to one clause by someone who already knows what they are looking
 * for. So: a narrow measure for the first, a sticky contents list for the
 * second, and section anchors that clear the sticky header.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.lastUpdated       human-readable, e.g. '9 August 2026'
 * @param {string} props.effectiveDate     ISO date for the <time> element
 * @param {React.ReactNode} props.intro
 * @param {{id: string, heading: string, body: React.ReactNode}[]} props.sections
 * @param {React.ReactNode} [props.children]  rendered after the sections
 */
export function LegalLayout({
  eyebrow = 'Legal',
  title,
  lastUpdated,
  effectiveDate,
  intro,
  sections = [],
  hideTemplateWarning = false,
  customNotice = null,
  children,
}) {
  return (
    <>
      <section className={`section section--tight ${styles.hero}`} aria-labelledby="legal-heading">
        <div className={styles.containerLegal}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="legal-heading" className={styles.title}>
            {title}
          </h1>

          <p className={styles.updated}>
            <Icon name="clock" size={16} />
            Last updated{' '}
            <time dateTime={effectiveDate}>
              <strong>{lastUpdated}</strong>
            </time>
          </p>

          <div className={styles.intro}>{intro}</div>

          {customNotice ? (
            <Alert
              tone="warning"
              title="Important Notice"
              className={styles.templateWarning}
            >
              {customNotice}
            </Alert>
          ) : !hideTemplateWarning ? (
            <Alert
              tone="warning"
              title="This is a template, not finished legal advice"
              className={styles.templateWarning}
            >
              <p>
                {site.name} is a fictional demonstration practice, and this document is a starting
                point written to be edited — not a policy any practice should publish as-is. Have a
                licensed healthcare attorney in your state review and adapt it before you rely on
                it. Names, licence numbers, addresses and phone numbers on this site are
                placeholders.
              </p>
            </Alert>
          ) : null}
        </div>
      </section>

      <div className={`section ${styles.body}`}>
        <div className={styles.containerLegal}>
          {/* Mobile Collapsible Navigation */}
          <div className={styles.tocMobileWrapper}>
            <details className={styles.tocDetails}>
              <summary className={styles.tocSummary}>
                <span>On this page ({sections.length} sections)</span>
                <Icon name="chevronDown" size={16} />
              </summary>
              <ol className={styles.tocList}>
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className={styles.tocLink}>
                      <span className={styles.tocNumber} aria-hidden="true">
                        {index + 1}
                      </span>
                      {section.tocHeading || section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </div>

          <div className={styles.layout}>
            {/* Desktop Sticky Navigation */}
            <nav className={`${styles.toc} ${styles.tocDesktop}`} aria-label="On this page">
              <p className={styles.tocHeading}>On this page</p>
              <ol className={styles.tocList}>
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className={styles.tocLink}>
                      <span className={styles.tocNumber} aria-hidden="true">
                        {index + 1}
                      </span>
                      {section.tocHeading || section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className={styles.content}>
              {sections.map((section, index) => {
                const cardClass =
                  section.cardTone === 'warning'
                    ? `${styles.highlightCard} ${styles.highlightCardWarning}`
                    : section.cardTone === 'accent'
                    ? `${styles.highlightCard} ${styles.highlightCardAccent}`
                    : section.cardTone === 'default'
                    ? styles.highlightCard
                    : '';

                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className={`${styles.section} ${cardClass}`}
                    aria-labelledby={`${section.id}-heading`}
                  >
                    <h2 id={`${section.id}-heading`} className={styles.sectionHeading}>
                      <span className={styles.sectionNumber} aria-hidden="true">
                        {index + 1}.
                      </span>
                      {section.heading}
                    </h2>
                    <div className="prose">{section.body}</div>
                  </section>
                );
              })}

              {children}

              <footer className={styles.contact}>
                <h2 className={styles.contactHeading}>Questions about this document</h2>
                <p className={styles.contactBody}>
                  We would rather answer a question than have you guess. Contact us any of these
                  ways and a person will reply.
                </p>
                <ul className={styles.contactList}>
                  <li>
                    <Icon name="mail" size={17} />
                    <a href={`mailto:${site.contact.privacyEmail}`}>{site.contact.privacyEmail}</a>
                  </li>
                  <li>
                    <Icon name="phone" size={17} />
                    <a href={site.contact.phoneHref}>{site.contact.phone}</a>
                  </li>
                  <li>
                    <Icon name="mapPin" size={17} />
                    <span>
                      {site.legalName}
                      <br />
                      {site.address.line1}, {site.address.line2}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.postalCode}
                    </span>
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LegalLayout;
