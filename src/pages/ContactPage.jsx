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
import { useUI } from '../context/UIContext';
import { allFaqs } from '../data/faqs';
import { crisisResources, site } from '../data/site';
import { therapistOptions } from '../data/team';
import { usePageMeta } from '../hooks/usePageMeta';
import ContactProvider from '../providers/ContactProvider';
import paths from '../routes/paths';
import { formatPhone } from '../utils/validators';
import styles from './ContactPage.module.css';

/** The four questions people actually ask before they write to us. */
const CONTACT_FAQ_IDS = ['what-is-prp', 'how-to-start', 'medicaid-covers-prp', 'who-is-eligible'];
const contactFaqs = CONTACT_FAQ_IDS.map((id) => allFaqs.find((faq) => faq.id === id)).filter(
  Boolean,
);

/**
 * ContactPage — the enquiry form, practice details, new participant paperwork,
 * and FAQs for Maryland Psychiatric Rehabilitation.
 */
function ContactPageInner() {
  const { openBooking } = useUI();

  usePageMeta({
    title: 'Contact Our Psychiatric Rehabilitation Team | Healing Horizons',
    description:
      'Have questions about PRP services, referrals, Medicaid coverage, or getting started? Our Maryland intake team is here to help.',
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
      {/* ------------------------------------------------------------- 1. Hero */}
      <section
        className={`section section--tight section--sunken ${styles.hero}`}
        aria-labelledby="contact-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">CONTACT HEALING HORIZONS · MARYLAND</p>
            <h1 id="contact-heading">Contact Our Psychiatric Rehabilitation Team</h1>
            <p className={styles.lede}>
              Have questions about PRP services, referrals, Medicaid coverage, or getting started?
              Our Maryland intake team is here to help.
            </p>
            <p className={styles.promise}>
              <Icon name="clock" size={18} />
              <span>
                Our intake coordinator typically replies within one business day. If you would
                rather talk, call{' '}
                <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- 2 & 3. Form & Details */}
      <section className={`section section--sunken ${styles.formSection}`} aria-labelledby="contact-section-heading">
        <div className="container">
          <SectionHeading
            id="contact-section-heading"
            eyebrow="Get In Touch"
            title="Contact Our Intake Team &amp; Office"
            intro="Have questions about PRP services, referrals, Maryland Medicaid, or getting started? Send our intake team a message or reach our Maryland office directly."
          />

          <div className={styles.layout}>
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
                email. Please do not include detailed psychiatric history. Your name, a way to reach
                you, and a brief description of what you are looking for is plenty — clinical
                assessments take place during the intake process.
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
                  Your message is with our intake team
                </h2>

                <p className={styles.confirmationLede}>
                  Thank you for reaching out. A Maryland intake coordinator will review your inquiry
                  shortly.
                </p>

                <p className={styles.reference}>
                  <span className={styles.referenceLabel}>Your reference</span>
                  <span className={styles.referenceValue}>{result?.reference}</span>
                </p>

                <h3 className={styles.confirmationSubheading}>What happens next</h3>
                <ol className={styles.nextSteps}>
                  <li>
                    Our intake coordinator reviews your message and replies within one business day,
                    using the method you preferred.
                  </li>
                  <li>
                    We will answer your questions regarding Maryland Medicaid authorization,
                    rehabilitation goals, and program components.
                  </li>
                  <li>
                    If you are ready to proceed, we will coordinate your clinical referral and
                    schedule your initial assessment.
                  </li>
                </ol>

                <p className={styles.confirmationFooter}>
                  If you need immediate assistance or would rather speak with someone now, call{' '}
                  <a href={site.contact.phoneHref}>{site.contact.phone}</a> during office hours.
                </p>

                <div className={styles.confirmationActions}>
                  <Button type="button" variant="primary" iconRight="arrowRight" onClick={openBooking}>
                    Book a Free Consultation
                  </Button>
                  <Button to={paths.explore} variant="outline">
                    Explore PRP Resources
                  </Button>
                </div>
              </Card>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <h2 id="contact-form-heading" className={styles.formHeading}>
                  Contact Our Intake Team
                </h2>

                {formError ? (
                  <Alert live tone="danger" title="We could not send your message">
                    <p>{formError}</p>
                    <p>
                      You can try again, or call us directly at{' '}
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
                  label="Is there a specialist you would like to work with?"
                  name="preferredTherapist"
                  hint="No preference is a perfectly good answer — our coordinator matches most participants."
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
                  hint="A sentence or two about your needs or referral. No confidential clinical details, please."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errorFor('message')}
                />

                <Checkbox
                  label="I understand this form is not monitored after hours, is not for emergencies, and should not be used to send confidential medical records."
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
                    Sending this inquiry does not establish an active rehabilitation enrollment. See our{' '}
                    <Link to={paths.privacy}>Privacy Policy</Link> and{' '}
                    <Link to={paths.terms}>Terms of Service</Link>.
                  </p>
                </div>
              </form>
            )}
          </div>

          <aside className={styles.aside} aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading" className={styles.asideHeading}>
              Healing Horizons Contact Information
            </h2>

            <Card tone="sunken" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="mapPin" size={19} />
                Our Maryland Office
              </h3>
              <address className={styles.address}>
                <a href={site.address.mapUrl} target="_blank" rel="noreferrer noopener">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.postalCode}
                  <Icon name="external" size={14} className={styles.externalIcon} />
                </a>
              </address>
              <p className={styles.detailNote}>
                Administrative office in Waldorf, MD. Rehabilitation services are delivered across
                Charles County, Prince George’s County, and surrounding Maryland communities in-home
                and on-site.
              </p>
            </Card>

            <Card tone="sunken" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="phone" size={19} />
                By Phone
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
                By Email
              </h3>
              <ul className={styles.emailList}>
                <li>
                  <span className={styles.emailLabel}>Intake &amp; Referrals</span>
                  <a href={`mailto:${site.contact.intakeEmail}`}>{site.contact.intakeEmail}</a>
                </li>
                <li>
                  <span className={styles.emailLabel}>General</span>
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </li>
                <li>
                  <span className={styles.emailLabel}>Billing &amp; Medicaid</span>
                  <a href={`mailto:${site.contact.billingEmail}`}>{site.contact.billingEmail}</a>
                </li>
                <li>
                  <span className={styles.emailLabel}>Privacy / Compliance</span>
                  <a href={`mailto:${site.contact.privacyEmail}`}>{site.contact.privacyEmail}</a>
                </li>
              </ul>
              <p className={styles.detailNote}>
                Email is not a secure channel for health records. Please submit referrals through our
                secure intake portal.
              </p>
            </Card>

            <Card tone="sunken" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="clock" size={19} />
                Office Hours
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
                Community rehabilitation sessions are scheduled flexibly to accommodate participant
                work, school, and family routines.
              </p>
            </Card>

            <Card tone="accent" padding="md" className={styles.detailCard}>
              <h3 className={styles.detailHeading}>
                <Icon name="shieldCheck" size={19} />
                What You Should Know
              </h3>
              <ul className={styles.expectList}>
                <li>You receive an on-screen reference number immediately upon submission.</li>
                <li>A dedicated Maryland intake specialist reads and replies to your message.</li>
                <li>We reply {site.responseTime}, through your preferred communication method.</li>
                <li>Services are 100% covered by Maryland Medicaid for eligible participants.</li>
              </ul>
            </Card>
          </aside>
          </div>
        </div>
      </section>

      {/* --------------------------------- 4. New Participant Paperwork */}
      <section
        className={`section ${styles.intake}`}
        id="intake"
        aria-labelledby="intake-heading"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Participant Onboarding"
            id="intake-heading"
            title="New Participant Information &amp; Paperwork"
            intro="Once you've agreed to start services, we'll help you complete the information needed for your psychiatric rehabilitation program."
          />

          <div className={styles.intakeGrid}>
            <Card tone="raised" padding="md">
              <h3 className={styles.intakeCardHeading}>What You'll Receive</h3>
              <ul className={styles.intakeList}>
                <li>Initial Functional Assessment packet — personal strengths, daily living goals, and support priorities.</li>
                <li>Participant Rights &amp; Responsibilities, consent for services, and program orientation guidelines.</li>
                <li>
                  Our{' '}
                  <Link to={`${paths.privacy}#hipaa`}>Notice of Privacy Practices</Link>, detailing how health information is protected under HIPAA.
                </li>
                <li>Consent for Release of Information to coordinate directly with your outpatient therapist and doctor.</li>
                <li>Maryland Medicaid eligibility verification documentation.</li>
              </ul>
            </Card>

            <Card tone="raised" padding="md">
              <h3 className={styles.intakeCardHeading}>How It Works</h3>
              <ul className={styles.intakeList}>
                <li>
                  Forms are completed electronically through our secure portal, or assisted in-person by your intake coordinator.
                </li>
                <li>Takes approximately 15 to 20 minutes to complete with guidance.</li>
                <li>
                  Completed prior to your first community session so your rehabilitation specialist can tailor your initial plan.
                </li>
                <li>
                  Questions about any section can be answered directly with your intake coordinator on the phone or in person.
                </li>
                <li>
                  Need large print, plain language, or language interpretation? Let us know — see our{' '}
                  <Link to={paths.accessibility}>accessibility statement</Link>.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- 5. FAQs */}
      <section className={`section section--tight section--accent ${styles.faqSection}`} aria-labelledby="contact-faq-heading">
        <div className="container">
          <div className={styles.faqInner}>
            <SectionHeading
              eyebrow="Quick Answers"
              id="contact-faq-heading"
              title="Frequently Asked Questions About Psychiatric Rehabilitation"
              intro="Have a question about PRP services, referrals, Medicaid coverage, or getting started? Find answers to common questions before contacting our team."
            />
            <Accordion items={contactFaqs} defaultOpenId={contactFaqs[0]?.id} />
            <p className={styles.faqMore}>
              <Link to={paths.faq}>Read All Psychiatric Rehabilitation FAQs →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- 6. Bottom CTA */}
      <section className={`section section--inverse ${styles.cta}`} aria-labelledby="contact-cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 id="contact-cta-heading">Have Questions About Psychiatric Rehabilitation?</h2>
            <p className={styles.ctaText}>
              A short call with our intake team can help you understand your options, referral process,
              and next steps.
            </p>
            <Button type="button" variant="accent" size="lg" iconRight="arrowRight" onClick={openBooking}>
              Book a Free Consultation
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
