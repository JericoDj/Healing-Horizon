import { Accordion, Button, SectionHeading } from '../ui';
import { homeFaqs } from '../../data/faqs';
import paths from '../../routes/paths';
import styles from './FaqPreview.module.css';

/**
 * FaqPreview — the four questions people ask before they get in touch.
 *
 * The first panel opens by default so the section reads as answered rather
 * than as four closed doors.
 */
export function FaqPreview() {
  return (
    <section className={`section ${styles.faq}`} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading
              id="faq-heading"
              eyebrow="Before you get in touch"
              title="The questions we are asked first"
              intro="Cost, privacy and what actually happens on day one. The full list covers insurance, cancellations and how confidentiality works for teenagers."
            />
            <Button to={paths.faq} variant="outline" iconRight="arrowRight">
              Read all questions
            </Button>
          </div>

          <div className={styles.panel}>
            <Accordion items={homeFaqs} defaultOpenId={homeFaqs[0]?.id} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqPreview;
