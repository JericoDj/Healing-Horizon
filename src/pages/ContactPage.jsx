import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  Alert,
  Button,
  Card,
  Checkbox,
  HoneypotField,
  Icon,
  Input,
  RadioCardGroup,
  SectionHeading,
  Select,
  Textarea,
} from '../components/ui';
import { useContactForm } from '../context/ContactContext';
import { allFaqs } from '../data/faqs';
import { crisisResources, site } from '../data/site';
import { therapistOptions } from '../data/team';
import { usePageMeta } from '../hooks/usePageMeta';
import ContactProvider from '../providers/ContactProvider';
import paths from '../routes/paths';
import { formatPhone } from '../utils/validators';
import styles from './ContactPage.module.css';

/** The four questions people actually ask before they write to us. */
const CONTACT_FAQ_IDS = ['first-step', 'choose-therapist', 'website-data', 'emergency'];
const contactFaqs = CONTACT_FAQ_IDS.map((id) => allFaqs.find((faq) => faq.id === id)).filter(
  Boolean,
);

/**
 * ContactPage — the enquiry form, the practice's details, and the things a
 * person needs to know before they type anything into a box on the internet.
 *
 * Everything below the crisis block is driven by useContactForm(); the page
 * itself holds no form state.
 */
function ContactPageInner() {
  usePageMeta({
    title: 'Contact us',
    description:
      'Send the practice a message and we will reply within one business day. Not for emergencies — if you are in crisis, call or text 988.',
  });

  const {
    values,
    errorFor,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    isSubmitting,
    isSuccess,
    result,
    formError,
    reasons,
    methods,
  } = useContactForm();

  const confirmationRef = useRef(null);

  useEffect(() => {
    if (isSuccess) confirmationRef.current?.focus();
  }, [isSuccess]);

  const wantsCall = values.preferredContact === 'phone' || values.preferredContact === 'text';

  return (
    <>
      <section
        className={`section section--tight section--sunken ${styles.hero}`}
        aria-labelledby="contact-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">Contact</p>
            <h1 id="contact-heading">Contact us</h1>
            <p className={styles.lede}>
              Tell us a little about what you are looking for and we will point you to the right
              person. You do not need to have it figured out first — a sentence is enough.
            </p>
            <p className={styles.promise}>
              <Icon name="clock" size={18} />
              <span>
                Our intake coordinator replies <strong>{site.responseTime}</strong>. If you would
                rather talk, call{' '}
                <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.formSection}`} aria-labelledby="contact-form-heading">
        <div className={`container ${styles.layout}`}>
          <div className={styles.main}>
            <Alert
              tone="danger"
              title="This form is not for emergencies"
              className={styles.crisisAlert}
            >
              <p>
                Messages are read during office hours only and are not monitored overnight, at
                weekends or on holidays. If you are in danger or thinking about ending your life,
                use one of these instead — they are free, confidential and answered 24/7.
              </p>
              {/* One tappable card per line, action first. The previous version
                  set the action as an inline pill with the description running
                  around it, which wrapped badly and repeated itself — every row
                  read "Call or text 988 … Call or text 988". */}
              <ul className={styles.crisisList}>
                {crisisResources.map((resource) => (
                  <li key={resource.label}>
                    <a href={resource.href} className={styles.crisisLink}>
                      <span className={styles.crisisAction}>{resource.action}</span>
                      <span className={styles.crisisDetail}>{resource.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Alert>

            <Alert tone="info" title="Please keep clinical details out of this form">
              <p>
                This form is encrypted in transit, but treat it the way you would treat ordinary
                email. Please do not include diagnoses, medication, symptoms or history. Your name,
                a way to reach you, and one sentence about what you are looking for is plenty — the
                rest belongs in a conversation.
              </p>
            </Alert>

            {isSuccess ? (
              <Card tone="raised" padding="lg" className={styles.confirmation}>
                <h2
                  className={styles.confirmationHeading}
                  ref={confirmationRef}
                  tabIndex={-1}
                  id="contact-form-heading"
                >
                  <Icon name="check" size={26} className={styles.confirmationIcon} />
                  Your message is with us
                </h2>

                <p className={styles.confirmationLede}>
                  Thank you for writing. We know that sending this is not always an easy thing to
                  do.
                </p>

                <p className={styles.reference}>
                  <span className={styles.referenceLabel}>Your reference</span>
                  <span className={styles.referenceValue}>{result?.reference}</span>
                </p>

                <h3 className={styles.confirmationSubheading}>What happens next</h3>
                <ol className={styles.nextSteps}>
                  <li>
                    Our intake coordinator reads your message and replies {site.responseTime},
                    using the method you chose.
                  </li>
                  <li>
                    If you are looking to start therapy, she will offer you a free 15-minute phone
                    consultation. That call is not a therapy session and there is no obligation.
                  </li>
                  <li>
                    If we are not the right fit, we will say so and give you two or three other
                    places to try.
                  </li>
                </ol>

                <p className={styles.confirmationFooter}>
                  If anything changes, or you would rather talk sooner, call{' '}
                  <a href={site.contact.phoneHref}>{site.contact.phone}</a> during office hours.
                </p>

                <div className={styles.confirmationActions}>
                  <Button to={paths.book} variant="primary" iconRight="arrowRight">
                    Book a free consultation
                  </Button>
                  <Button to={paths.resources} variant="outline">
                    Read while you wait
                  </Button>
                </div>
              </Card>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <h2 id="contact-form-heading" className={styles.formHeading}>
                  Send us a message
                </h2>

                {formError ? (
                  <Alert live tone="danger" title="We could not send your message">
                    <p>{formError}</p>
                    <p>
                      You can try again, or call us on{' '}
                      <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
                    </p>
                  </Alert>
                ) : null}

                <div className={styles.row}>
                  <Input
                    label="First name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errorFor('firstName')}
                  />
                  <Input
                    label="Last name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errorFor('lastName')}
                  />
                </div>

                <div className={styles.row}>
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errorFor('email')}
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required={wantsCall}
                    hint={
                      wantsCall
                        ? 'You have asked us to reach you this way, so we need a number.'
                        : 'Only if you would like the option of a call.'
                    }
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={(event) => {
                      // Tidy the number once they leave the field. Doing this on
                      // every keystroke fights the caret; on blur it just works.
                      setValue('phone', formatPhone(event.target.value));
                      handleBlur(event);
                    }}
                    error={errorFor('phone')}
                  />
                </div>

                <Select
                  label="What is this about?"
                  name="reason"
                  required
                  options={reasons}
                  value={values.reason}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errorFor('reason')}
                />

                <RadioCardGroup
                  legend="How should we reply?"
                  name="preferredContact"
                  columns={3}
                  options={methods}
                  value={values.preferredContact}
                  onChange={(value) => setValue('preferredContact', value)}
                  error={errorFor('preferredContact')}
                  hint="We will use this and nothing else. Say if a voicemail is not safe to leave."
                />

                <Select
                  label="Is there a therapist you would like to see?"
                  name="preferredTherapist"
                  hint="No preference is a perfectly good answer — our coordinator matches most people."
                  options={therapistOptions}
                  value={values.preferredTherapist}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errorFor('preferredTherapist')}
                />

                <Textarea
                  label="What are you looking for?"
                  name="message"
                  required
                  rows={6}
                  maxLength={2000}
                  hint="A sentence or two. No clinical detail, please — we will cover that on the phone."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errorFor('message')}
                />

                <Checkbox
                  label="I understand this form is not monitored after hours, is not for emergencies, and should not be used to send clinical information."
                  name="consent"
                  checked={values.consent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errorFor('consent')}
                />

                <HoneypotField value={values.website} onChange={handleChange} />

                <div className={styles.submitRow}>
                  <Button type="submit" size="lg" loading={isSubmitting} iconRight="arrowRight">
                    Send message
                  </Button>
                  <p className={styles.submitNote}>
                    Sending this does not create a therapist–client relationship. See our{' '}
                    <Link to={paths.privacy}>Privacy Policy</Link> and{' '}
                    <Link to={paths.terms}>Terms of Service</Link>.
                  </p>
                </div>
              </form>
            )}
          </div>

          <aside className={styles.aside} aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading" className={styles.asideHeading}>
              Practice details
            </h2>

            <Card tone="sunken" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="mapPin" size={19} />
                Our office
              </h3>
              <address className={styles.address}>
                <a href={site.address.mapUrl} target="_blank" rel="noreferrer noopener">
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.postalCode}
                  <Icon name="external" size={14} className={styles.externalIcon} />
                </a>
              </address>
              <p className={styles.detailNote}>
                Step-free from the street, with an elevator to the third floor. Metered street
                parking and a garage on the same block.
              </p>
            </Card>

            <Card tone="sunken" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="phone" size={19} />
                By phone
              </h3>
              <p className={styles.detailBig}>
                <a href={site.contact.phoneHref}>{site.contact.phone}</a>
              </p>
              <p className={styles.detailNote}>
                Answered during office hours. Leave a voicemail outside them and we return it the
                next business day. Fax: {site.contact.fax}.
              </p>
            </Card>

            <Card tone="sunken" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="mail" size={19} />
                By email
              </h3>
              <ul className={styles.emailList}>
                <li>
                  <span className={styles.emailLabel}>General</span>
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </li>
                <li>
                  <span className={styles.emailLabel}>New clients</span>
                  <a href={`mailto:${site.contact.intakeEmail}`}>{site.contact.intakeEmail}</a>
                </li>
                <li>
                  <span className={styles.emailLabel}>Billing</span>
                  <a href={`mailto:${site.contact.billingEmail}`}>{site.contact.billingEmail}</a>
                </li>
                <li>
                  <span className={styles.emailLabel}>Privacy</span>
                  <a href={`mailto:${site.contact.privacyEmail}`}>{site.contact.privacyEmail}</a>
                </li>
              </ul>
              <p className={styles.detailNote}>
                Email is not a secure channel for health information. Please keep clinical detail
                out of it.
              </p>
            </Card>

            <Card tone="sunken" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="clock" size={19} />
                Office hours
              </h3>
              <dl className={styles.hours}>
                {site.hours.map((entry) => (
                  <div key={entry.day} className={styles.hoursRow}>
                    <dt>{entry.day}</dt>
                    <dd>{entry.open && entry.close ? `${entry.open} – ${entry.close}` : 'Closed'}</dd>
                  </div>
                ))}
              </dl>
              <p className={styles.detailNote}>
                Sessions run outside these hours by arrangement with your therapist. The front desk
                does not.
              </p>
            </Card>

            <Card tone="accent" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="heartHand" size={19} />
                After you send
              </h3>
              <ul className={styles.expectList}>
                <li>You get an on-screen reference straight away. Keep it if you like.</li>
                <li>A real person reads your message — not an autoresponder.</li>
                <li>We reply {site.responseTime}, in the way you asked us to.</li>
                <li>Nothing is booked, and nothing is charged, until you say so.</li>
              </ul>
            </Card>
          </aside>
        </div>
      </section>

      <section
        className={`section section--sunken ${styles.intake}`}
        id="intake"
        aria-labelledby="intake-heading"
      >
        <div className="container">
          <SectionHeading
            eyebrow="New clients"
            id="intake-heading"
            title="New client paperwork"
            intro="Once you and a therapist have agreed to start, we send a short set of forms. Here is what to expect, so none of it arrives as a surprise."
          />

          <div className={styles.intakeGrid}>
            <Card tone="raised" padding="md">
              <h3 className={styles.intakeCardHeading}>What you receive</h3>
              <ul className={styles.intakeList}>
                <li>An intake questionnaire — history, current concerns, what you want from therapy.</li>
                <li>Consent to treatment, and our practice policies in full.</li>
                <li>
                  Our{' '}
                  <Link to={`${paths.privacy}#hipaa`}>Notice of Privacy Practices</Link>, which sets
                  out how your clinical record is handled under HIPAA.
                </li>
                <li>
                  A Good Faith Estimate, if you are uninsured or choosing not to use insurance.
                </li>
                <li>Card-on-file authorisation, and your insurance details if you are using them.</li>
              </ul>
            </Card>

            <Card tone="raised" padding="md">
              <h3 className={styles.intakeCardHeading}>How it works</h3>
              <ul className={styles.intakeList}>
                <li>
                  Everything arrives through our secure client portal, never as an email
                  attachment.
                </li>
                <li>It takes most people about fifteen minutes.</li>
                <li>
                  Please complete it at least 24 hours before your first session so your therapist
                  can read it beforehand.
                </li>
                <li>
                  Questions you would rather answer in person can be left blank. Say so, and your
                  therapist will pick them up in the room.
                </li>
                <li>
                  Need large print, plain language, or a paper copy? Ask, and we will send it that
                  way. See our{' '}
                  <Link to={paths.accessibility}>accessibility statement</Link>.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`} aria-labelledby="contact-faq-heading">
        <div className="container">
          <div className={styles.faqInner}>
            <SectionHeading
              eyebrow="Before you write"
              id="contact-faq-heading"
              title="Questions people ask first"
              intro="If one of these answers it, you do not need to send anything at all."
            />
            <Accordion items={contactFaqs} defaultOpenId={contactFaqs[0]?.id} />
            <p className={styles.faqMore}>
              <Link to={paths.faq}>Read all frequently asked questions</Link>
            </p>
          </div>
        </div>
      </section>

      <section className={`section section--inverse ${styles.cta}`} aria-labelledby="contact-cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 id="contact-cta-heading">Would a short call be easier?</h2>
            <p className={styles.ctaText}>
              Fifteen minutes, by phone, at no cost. It is not a therapy session and it does not
              commit you to anything.
            </p>
            <Button to={paths.book} variant="accent" size="lg" iconRight="arrowRight">
              Book a free consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <ContactProvider>
      <ContactPageInner />
    </ContactProvider>
  );
}
