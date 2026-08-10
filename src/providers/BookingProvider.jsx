import { useCallback, useMemo, useState } from 'react';
import { BookingContext } from '../context/BookingContext';
import { useToast } from '../context/ToastContext';
import { bookingController } from '../controllers/bookingController';
import { useFormController } from '../hooks/useFormController';

/**
 * BookingProvider — form state plus the step machine for /book.
 *
 * `next()` refuses to advance past an invalid step and marks that step's
 * fields as touched, so errors appear exactly where the user is looking.
 */
export function BookingProvider({ children }) {
  const toast = useToast();
  const [stepIndex, setStepIndex] = useState(0);

  const onSuccess = useCallback(
    (outcome) => {
      if (outcome.silent) return;
      toast.success(
        'Consultation request sent',
        `We will call to confirm. Your reference is ${outcome.reference}.`,
      );
    },
    [toast],
  );

  const form = useFormController(bookingController, { onSuccess });
  const { values, setErrors, setTouched, submit } = form;

  const step = bookingController.getStep(stepIndex);
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === bookingController.stepCount - 1;

  const next = useCallback(() => {
    const { isValid, errors } = bookingController.validateStep(stepIndex, values);
    if (!isValid) {
      setErrors((prev) => ({ ...prev, ...errors }));
      setTouched((prev) => ({
        ...prev,
        ...Object.fromEntries(Object.keys(errors).map((field) => [field, true])),
      }));
      return false;
    }
    setStepIndex((index) => Math.min(index + 1, bookingController.stepCount - 1));
    return true;
  }, [stepIndex, values, setErrors, setTouched]);

  const back = useCallback(() => {
    setStepIndex((index) => Math.max(index - 1, 0));
  }, []);

  /** Only allow jumping back to a step already completed. */
  const goToStep = useCallback(
    (index) => {
      if (index <= stepIndex) setStepIndex(index);
    },
    [stepIndex],
  );

  const handleSubmit = useCallback(
    async (event) => {
      event?.preventDefault?.();
      const outcome = await submit();
      if (outcome?.status === 'rejected' && typeof outcome.stepIndex === 'number') {
        setStepIndex(outcome.stepIndex);
      }
      return outcome;
    },
    [submit],
  );

  const restart = useCallback(() => {
    form.reset();
    setStepIndex(0);
  }, [form]);

  const value = useMemo(
    () => ({
      ...form,
      handleSubmit,
      step,
      stepIndex,
      stepCount: bookingController.stepCount,
      steps: bookingController.steps,
      isFirstStep,
      isLastStep,
      next,
      back,
      goToStep,
      restart,
      formats: bookingController.formats,
      timeWindows: bookingController.timeWindows,
      paymentOptions: bookingController.paymentOptions,
    }),
    [form, handleSubmit, step, stepIndex, isFirstStep, isLastStep, next, back, goToStep, restart],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export default BookingProvider;
