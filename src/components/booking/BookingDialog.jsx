import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { useUI } from '../../context/UIContext';
import { services } from '../../data/services';
import { site } from '../../data/site';
import { therapistOptions } from '../../data/team';
import BookingProvider from '../../providers/BookingProvider';
import paths from '../../routes/paths';
import { formatPhone } from '../../utils/validators';
import {
  Alert,
  Button,
  CheckboxCardGroup,
  Checkbox,
  HoneypotField,
  Icon,
  Input,
  Modal,
  Select,
} from '../ui';
import styles from './BookingDialog.module.css';

/**
 * BookingDialog — the quick path to a consultation.
 *
 * Deliberately NOT the three-step wizard from /book. A wizard inside a modal
 * is a bad pattern: it hides progress, it traps people mid-flow, and a modal
 * should be something you can finish in under a minute. So this is one short
 * screen with the minimum the practice actually needs to call someone back,
 * and it links out to the full guided flow for anyone who wants it.
 *
 * It runs on the same `bookingController` as the page, so validation, payload
 * shaping and submission are shared rather than reimplemented.
 */
function BookingDialogInner() {
  const { isBookingOpen, closeBooking } = useUI();
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
    timeWindows,
    restart,
  } = useBooking();

  const confirmationRef = useRef(null);

  // Move focus to the confirmation so the outcome is announced rather than
  // leaving focus on a submit button that no longer exists.
  useEffect(() => {
    if (isSuccess) confirmationRef.current?.focus();
  }, [isSuccess]);

  // A fresh dialog should be a fresh form — but only once it has fully closed,
  // so the user never sees the fields blank out as it animates away.
  useEffect(() => {
    if (isBookingOpen || !isSuccess) return undefined;
    const timer = setTimeout(restart, 400);
    return () => clearTimeout(timer);
  }, [isBookingOpen, isSuccess, restart]);

  const serviceOptions = [
    { value: '', label: 'Choose what you are looking for' },
    ...services.map((service) => ({ value: service.slug, label: service.name })),
  ];

  return (
    <Modal
      open={isBookingOpen}
      onClose={closeBooking}
      title={isSuccess ? 'Your request is in' : 'Book a free 15-minute call'}
      description={
        isSuccess
          ? undefined
          : 'A short phone conversation with our intake coordinator. It costs nothing, it is not a therapy session, and nothing is booked until we call you to confirm.'
      }
    >
      {isSuccess ? (
        <div className={styles.confirmation}>
          <span className={styles.confirmationIcon} aria-hidden="true">
            <Icon name="check" size={26} strokeWidth={2.4} />
          </span>

          <h3 className={styles.confirmationHeading} ref={confirmationRef} tabIndex={-1}>
            Thank you — we will call you
          </h3>

          <p className={styles.confirmationBody}>
            Our intake coordinator calls within one business day to agree a time. Nothing is
            booked yet, and there is nothing else you need to do.
          </p>

          <p className={styles.reference}>
            <span className={styles.referenceLabel}>Your reference</span>
            <strong className={styles.referenceValue}>{result?.reference}</strong>
          </p>

          <div className={styles.confirmationActions}>
            <Button type="button" onClick={closeBooking}>
              Close
            </Button>
            <Button href={site.contact.phoneHref} variant="outline" iconLeft="phone">
              {site.contact.phone}
            </Button>
          </div>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Alert tone="warning" title="This form is not for emergencies">
            <p>
              Requests are read during office hours only. If you need support right now, call or
              text <a href="tel:988">988</a>, text HOME to <a href="sms:741741">741741</a>, or call{' '}
              <a href="tel:911">911</a> if you are in immediate danger.
            </p>
          </Alert>

          {formError ? (
            <Alert live tone="danger" title="We could not send your request">
              <p>{formError}</p>
              <p>
                Please try again, or call <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
              </p>
            </Alert>
          ) : null}

          <Select
            label="What are you looking for?"
            name="serviceSlug"
            required
            options={serviceOptions}
            value={values.serviceSlug}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorFor('serviceSlug')}
          />

          <CheckboxCardGroup
            legend="When could you take a call?"
            hint="Pick everything that could work — more options means a sooner start."
            columns={2}
            options={timeWindows}
            values={values.timeWindows}
            onToggle={(value) => toggleArrayValue('timeWindows', value)}
            error={errorFor('timeWindows')}
          />

          <div className={styles.row}>
            <Input
              label="First name"
              name="firstName"
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
              inputMode="tel"
              autoComplete="tel"
              required
              hint="The call happens on this number."
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
            label="Preferred therapist"
            name="preferredTherapist"
            options={therapistOptions}
            value={values.preferredTherapist}
            onChange={handleChange}
            error={errorFor('preferredTherapist')}
          />

          <Checkbox
            label="I understand this is a request, not a confirmed appointment, and that this form is not for urgent or clinical information."
            name="consent"
            checked={values.consent}
            onChange={handleChange}
            error={errorFor('consent')}
          />

          <HoneypotField value={values.website} onChange={handleChange} />

          <div className={styles.actions}>
            <Button type="submit" size="lg" loading={isSubmitting} iconRight="arrowRight">
              Request a call
            </Button>
            <Button type="button" variant="ghost" onClick={closeBooking}>
              Cancel
            </Button>
          </div>

          <p className={styles.footnote}>
            Prefer to take your time?{' '}
            <Link to={paths.book} onClick={closeBooking}>
              Use the full booking form
            </Link>{' '}
            — it asks about format, dates and how you plan to pay. Or just call{' '}
            <a href={site.contact.phoneHref}>{site.contact.phone}</a>.
          </p>
        </form>
      )}
    </Modal>
  );
}

/**
 * Mounted once, in Layout. The provider lives here rather than in AppProviders
 * so booking-form state exists only while the dialog is in the tree.
 */
export function BookingDialog() {
  return (
    <BookingProvider>
      <BookingDialogInner />
    </BookingProvider>
  );
}

export default BookingDialog;
