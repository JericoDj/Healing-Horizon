import { useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Alert,
  Button,
  Card,
  Checkbox,
  CheckboxCardGroup,
  HoneypotField,
  Icon,
  Input,
  RadioCardGroup,
  Select,
  Textarea,
} from '../components/ui';
import { useBooking } from '../context/BookingContext';
import { services } from '../data/services';
import { crisisResources, site } from '../data/site';
import { therapistOptions } from '../data/team';
import { usePageMeta } from '../hooks/usePageMeta';
import BookingProvider from '../providers/BookingProvider';
import paths from '../routes/paths';
import { formatPhone } from '../utils/validators';
import styles from './BookingPage.module.css';

/** `<input type="date" min>` wants a local YYYY-MM-DD, not a UTC one. */
function todayAsInputValue() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return null;
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * BookingPage — the free 15-minute consultation request.
 *
 * Three steps, because one long form is where people give up. Every piece of
 * state, validation and step logic comes from useBooking(); this file decides
 * only what the steps look like.
 */
function BookingPageInner() {
  usePageMeta({
    title: 'Book a free consultation',
    description:
      'Request a free 15-minute phone consultation with Healing Horizon. No cost, no obligation, and nothing is booked until we call to confirm.',
  });

  const {
    values,
    errorFor,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    toggleArrayValue,
    isSubmitting,
    isSuccess,
    result,
    formError,
    step,
    stepIndex,
    stepCount,
    steps,
    isFirstStep,
    isLastStep,
    next,
    back,
    goToStep,
    restart,
    formats,
    timeWindows,
    paymentOptions,
  } = useBooking();

  const minDate = useMemo(todayAsInputValue, []);
  const serviceOptions = useMemo(
    () =>
      services.map((service) => ({
        value: service.slug,
        label: service.name,
        detail: service.summary,
      })),
    [],
  );

  const stepHeadingRef = useRef(null);
  const confirmationRef = useRef(null);
  const hasRenderedRef = useRef(false);

  /* Move focus to the new step's heading, but never on first paint. */
  useEffect(() => {
    if (!hasRenderedRef.current) {
      hasRenderedRef.current = true;
      return;
    }
    stepHeadingRef.current?.focus();
  }, [stepIndex]);

  useEffect(() => {
    if (isSuccess) confirmationRef.current?.focus();
  }, [isSuccess]);

  /**
   * Enter inside a field fires submit. Mid-wizard that must advance a step,
   * not send an incomplete request.
   */
  const onSubmit = (event) => {
    event.preventDefault();
    if (!isLastStep) {
      next();
      return;
    }
    handleSubmit(event);
  };

  const chosenService = services.find((service) => service.slug === values.serviceSlug);
  const chosenFormat = formats.find((format) => format.value === values.format);
  const chosenTherapist = therapistOptions.find(
    (option) => option.value === values.preferredTherapist,
  );
  const chosenPayment = paymentOptions.find((option) => option.value === values.payment);
  const chosenWindows = timeWindows.filter((window) => values.timeWindows.includes(window.value));

  return (
    <>
      <section
        className={`section section--tight section--sunken ${styles.hero}`}
        aria-labelledby="booking-heading"
      >
        <div className="container">
          <div className={styles.heroInner}>
            <p className="eyebrow">Get started</p>
            <h1 id="booking-heading">Book a free consultation</h1>
            <p className={styles.lede}>
              Fifteen minutes on the phone with our intake coordinator. It costs nothing, it is not
              a therapy session, and nothing is booked until we call you to confirm.
            </p>
            <ul className={styles.heroFacts}>
              <li>
                <Icon name="clock" size={19} />
                <span>15 minutes</span>
              </li>
              <li>
                <Icon name="phone" size={19} />
                <span>By phone</span>
              </li>
              <li>
                <Icon name="heartHand" size={19} />
                <span>No cost, no obligation</span>
              </li>
            </ul>
            <p className={styles.heroNote}>
              Prefer to write instead? <Link to={paths.contact}>Send us a message</Link>, or call{' '}
              <a href={site.contact.phoneHref}>{site.contact.phone}</a> during office hours.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.formSection}`} aria-labelledby="booking-form-heading">
        <div className={`container ${styles.layout}`}>
          <div className={styles.main}>
            <Alert
              tone="danger"
              title="This form is not for emergencies"
              className={styles.crisisAlert}
            >
              <p>
                Requests are read during office hours only and are not monitored overnight, at
                weekends or on holidays. If you are in danger or thinking about ending your life,
                use one of these instead — they are free, confidential and answered 24/7.
              </p>
              <ul className={styles.crisisList}>
                {crisisResources.map((resource) => (
                  <li key={resource.label}>
                    <a href={resource.href} className={styles.crisisLink}>
                      {resource.action}
                    </a>{' '}
                    <span className={styles.crisisDetail}>
                      {resource.label} — {resource.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </Alert>

            {isSuccess ? (
              <Card tone="raised" padding="lg" className={styles.confirmation}>
                <h2
                  id="booking-form-heading"
                  className={styles.confirmationHeading}
                  ref={confirmationRef}
                  tabIndex={-1}
                >
                  <Icon name="check" size={26} className={styles.confirmationIcon} />
                  Your request is in
                </h2>

                <p className={styles.confirmationLede}>
                  Nothing is booked yet. We will call you to confirm a time that works.
                </p>

                <p className={styles.reference}>
                  <span className={styles.referenceLabel}>Your reference</span>
                  <span className={styles.referenceValue}>{result?.reference}</span>
                </p>

                <h3 className={styles.confirmationSubheading}>What you asked for</h3>
                <dl className={styles.summary}>
                  <div className={styles.summaryRow}>
                    <dt>Kind of support</dt>
                    <dd>{chosenService?.name ?? 'Not specified'}</dd>
                  </div>
                  <div className={styles.summaryRow}>
                    <dt>Format</dt>
                    <dd>{chosenFormat?.label ?? 'Not specified'}</dd>
                  </div>
                  <div className={styles.summaryRow}>
                    <dt>Therapist</dt>
                    <dd>{chosenTherapist?.label ?? 'No preference — match me'}</dd>
                  </div>
                  <div className={styles.summaryRow}>
                    <dt>Times that could work</dt>
                    <dd>
                      {chosenWindows.length > 0
                        ? chosenWindows.map((window) => window.label).join(', ')
                        : 'Not specified'}
                    </dd>
                  </div>
                  {values.earliestDate ? (
                    <div className={styles.summaryRow}>
                      <dt>Earliest date</dt>
                      <dd>{formatDate(values.earliestDate)}</dd>
                    </div>
                  ) : null}
                  <div className={styles.summaryRow}>
                    <dt>Paying</dt>
                    <dd>{chosenPayment?.label ?? 'Not specified'}</dd>
                  </div>
                  <div className={styles.summaryRow}>
                    <dt>We will call</dt>
                    <dd>{formatPhone(values.phone)}</dd>
                  </div>
                </dl>

                <h3 className={styles.confirmationSubheading}>What happens next</h3>
                <ol className={styles.nextSteps}>
                  <li>
                    Our intake coordinator calls you {site.responseTime} to agree a time for the
                    consultation.
                  </li>
                  <li>
                    The call itself is fifteen minutes. She asks what you are looking for, answers
                    your questions about cost and availability, and suggests a therapist.
                  </li>
                  <li>
                    If you want to go ahead, she books your first session and sends the new client
                    paperwork. If you do not, that is a complete answer and nothing further
                    happens.
                  </li>
                </ol>

                <p className={styles.confirmationFooter}>
                  If you need to change anything, call{' '}
                  <a href={site.contact.phoneHref}>{site.contact.phone}</a> and quote your
                  reference.
                </p>

                <div className={styles.confirmationActions}>
                  <Button to={paths.resources} variant="primary" iconRight="arrowRight">
                    Read while you wait
                  </Button>
                  <Button type="button" variant="outline" onClick={restart}>
                    Send another request
                  </Button>
                </div>
              </Card>
            ) : (
              <Card tone="raised" padding="lg" className={styles.wizardCard}>
                <h2 id="booking-form-heading" className={styles.wizardHeading}>
                  Request a consultation
                </h2>

                <nav aria-label="Booking steps" className={styles.stepper}>
                  <ol className={styles.stepList}>
                    {steps.map((item, index) => {
                      const isComplete = index < stepIndex;
                      const isCurrent = index === stepIndex;
                      const inner = (
                        <>
                          <span className={styles.stepMarker} aria-hidden="true">
                            {isComplete ? (
                              <Icon name="check" size={14} strokeWidth={2.6} />
                            ) : (
                              index + 1
                            )}
                          </span>
                          <span className={styles.stepText}>
                            <span className={styles.stepIndex}>Step {index + 1}</span>
                            <span className={styles.stepTitle}>{item.title}</span>
                          </span>
                        </>
                      );

                      return (
                        <li
                          key={item.id}
                          className={[
                            styles.stepItem,
                            isComplete ? styles.stepComplete : '',
                            isCurrent ? styles.stepCurrent : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          aria-current={isCurrent ? 'step' : undefined}
                        >
                          {isComplete ? (
                            <button
                              type="button"
                              className={styles.stepButton}
                              onClick={() => goToStep(index)}
                            >
                              {inner}
                              <span className="visually-hidden">— done, go back and change it</span>
                            </button>
                          ) : (
                            <span className={styles.stepStatic}>
                              {inner}
                              {isCurrent ? (
                                <span className="visually-hidden">— current step</span>
                              ) : (
                                <span className="visually-hidden">— not started</span>
                              )}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </nav>

                <p className="visually-hidden" aria-live="polite">
                  Step {stepIndex + 1} of {stepCount}: {step.title}
                </p>

                <form className={styles.form} onSubmit={onSubmit} noValidate>
                  <div className={styles.stepHeader}>
                    <p className={styles.stepProgress}>
                      Step {stepIndex + 1} of {stepCount}
                    </p>
                    <h3 className={styles.stepHeading} ref={stepHeadingRef} tabIndex={-1}>
                      {step.title}
                    </h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>

                  {formError ? (
                    <Alert live tone="danger" title="We could not send your request">
                      <p>{formError}</p>
                      <p>
                        Please try again, or call{' '}
                        <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
                      </p>
                    </Alert>
                  ) : null}

                  <div className={styles.fields}>
                    {step.id === 'care' ? (
                      <>
                        <RadioCardGroup
                          legend="What kind of support are you looking for?"
                          name="serviceSlug"
                          columns={2}
                          options={serviceOptions}
                          value={values.serviceSlug}
                          onChange={(value) => setValue('serviceSlug', value)}
                          error={errorFor('serviceSlug')}
                          hint="Pick the closest fit. If you are not sure, choose individual therapy and we will sort it out on the call."
                        />

                        <RadioCardGroup
                          legend="In person or online?"
                          name="format"
                          columns={3}
                          options={formats}
                          value={values.format}
                          onChange={(value) => setValue('format', value)}
                          error={errorFor('format')}
                          hint="Online sessions are available to residents of Oregon and Washington."
                        />

                        <Select
                          label="Is there a therapist you would like to see?"
                          name="preferredTherapist"
                          hint="Not everyone has a preference, and that is fine."
                          options={therapistOptions}
                          value={values.preferredTherapist}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errorFor('preferredTherapist')}
                        />
                      </>
                    ) : null}

                    {step.id === 'availability' ? (
                      <>
                        <CheckboxCardGroup
                          legend="When could a session usually work?"
                          columns={3}
                          options={timeWindows}
                          values={values.timeWindows}
                          onToggle={(value) => toggleArrayValue('timeWindows', value)}
                          error={errorFor('timeWindows')}
                          hint="Choose everything that could work. More options usually means a sooner start."
                        />

                        <Input
                          label="Earliest date you would like to begin"
                          name="earliestDate"
                          type="date"
                          min={minDate}
                          hint="Leave this blank if you are flexible."
                          value={values.earliestDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errorFor('earliestDate')}
                        />
                      </>
                    ) : null}

                    {step.id === 'details' ? (
                      <>
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
                            required
                            hint="The consultation happens on this number."
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={(event) => {
                              // Tidy the number once they leave the field. Doing this
                              // on every keystroke fights the caret; on blur it just works.
                              setValue('phone', formatPhone(event.target.value));
                              handleBlur(event);
                            }}
                            error={errorFor('phone')}
                          />
                        </div>

                        <RadioCardGroup
                          legend="How are you thinking about paying?"
                          name="payment"
                          columns={2}
                          options={paymentOptions}
                          value={values.payment}
                          onChange={(value) => setValue('payment', value)}
                          error={errorFor('payment')}
                          hint="Nothing here is binding. It just tells us what to have ready on the call."
                        />

                        <Textarea
                          label="Anything else we should know?"
                          name="notes"
                          rows={4}
                          maxLength={1000}
                          hint="Scheduling notes, access needs, or when not to call. Please leave out clinical detail — that belongs in session."
                          value={values.notes}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errorFor('notes')}
                        />

                        <Checkbox
                          label="I understand this is a request for a free consultation, not a confirmed appointment, and that this form is not monitored after hours or used for emergencies."
                          name="consent"
                          checked={values.consent}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errorFor('consent')}
                        />

                        <HoneypotField value={values.website} onChange={handleChange} />
                      </>
                    ) : null}
                  </div>

                  <div className={styles.nav}>
                    {!isFirstStep ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={back}
                        iconLeft="arrowLeft"
                        className={styles.backButton}
                      >
                        Back
                      </Button>
                    ) : null}

                    <Button
                      type="submit"
                      size="lg"
                      loading={isSubmitting}
                      iconRight="arrowRight"
                      className={styles.forwardButton}
                    >
                      {isLastStep ? 'Send request' : 'Continue'}
                    </Button>
                  </div>

                  {isLastStep ? (
                    <p className={styles.legalNote}>
                      Sending this does not create a therapist–client relationship and does not
                      confirm an appointment. See our <Link to={paths.privacy}>Privacy Policy</Link>{' '}
                      and <Link to={paths.terms}>Terms of Service</Link>.
                    </p>
                  ) : null}
                </form>
              </Card>
            )}
          </div>

          <aside className={styles.aside} aria-labelledby="booking-aside-heading">
            <h2 id="booking-aside-heading" className={styles.asideHeading}>
              What the call is
            </h2>

            <Card tone="sunken" padding="md" className={styles.asideCard}>
              <h3 className={styles.asideCardHeading}>
                <Icon name="check" size={19} />
                The fifteen minutes covers
              </h3>
              <ul className={styles.asideList}>
                <li>What brings you here, in your own words.</li>
                <li>Which therapist is the right match, and when they have space.</li>
                <li>What it costs, and how your insurance is likely to work.</li>
                <li>Any question you have about how we do things.</li>
              </ul>
            </Card>

            <Card tone="sunken" padding="md" className={styles.asideCard}>
              <h3 className={styles.asideCardHeading}>
                <Icon name="info" size={19} />
                It is not
              </h3>
              <ul className={styles.asideList}>
                <li>A therapy session, an assessment, or a diagnosis.</li>
                <li>A commitment to book anything.</li>
                <li>A place to give clinical history — keep it brief.</li>
                <li>A crisis service. Please use the lines above for that.</li>
              </ul>
            </Card>

            <Card tone="accent" padding="md" className={styles.asideCard}>
              <h3 className={styles.asideCardHeading}>
                <Icon name="phone" size={19} />
                Rather just call?
              </h3>
              <p className={styles.asideText}>
                Forms are not for everyone. Call the practice during office hours and ask for the
                intake coordinator.
              </p>
              <p className={styles.asidePhone}>
                <a href={site.contact.phoneHref}>{site.contact.phone}</a>
              </p>
              <p className={styles.asideText}>
                Office hours are listed on the <Link to={paths.contact}>contact page</Link>. Leave a
                voicemail outside them and we return it the next business day.
              </p>
            </Card>

            <Card tone="outline" padding="md" className={styles.asideCard}>
              <h3 className={styles.asideCardHeading}>
                <Icon name="shieldCheck" size={19} />
                What we do with this
              </h3>
              <p className={styles.asideText}>
                Your request goes to our intake team and nowhere else. We do not sell it, and we do
                not add you to a mailing list. Read the{' '}
                <Link to={paths.privacy}>Privacy Policy</Link> for the detail.
              </p>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}

export default function BookingPage() {
  return (
    <BookingProvider>
      <BookingPageInner />
    </BookingProvider>
  );
}
