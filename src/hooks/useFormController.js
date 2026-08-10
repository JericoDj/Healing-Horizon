import { useCallback, useMemo, useRef, useState } from 'react';

/**
 * useFormController — the React half of the controller pattern.
 *
 * Holds values / errors / touched / submission status, and delegates every
 * decision (what is valid, what the payload looks like, what to call) to a
 * plain controller object. Providers wrap this; components never touch it
 * directly, they consume the context the provider exposes.
 *
 * @param {object} controller must expose { initialValues, validate, validateField?, submit }
 * @param {object} [options]
 * @param {(result: any) => void} [options.onSuccess]
 */
export function useFormController(controller, { onSuccess } = {}) {
  const [values, setValues] = useState(controller.initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  /** 'idle' | 'submitting' | 'success' | 'error' */
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [formError, setFormError] = useState(null);

  /** Read fresh values inside async callbacks without stale-closure bugs. */
  const valuesRef = useRef(values);
  valuesRef.current = values;

  const setValue = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear a field's error the moment the user starts fixing it.
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setFormError(null);
  }, []);

  /** Convenience for controlled inputs: onChange={handleChange}. */
  const handleChange = useCallback(
    (event) => {
      const { name, type, value, checked } = event.target;
      setValue(name, type === 'checkbox' ? checked : value);
    },
    [setValue],
  );

  /** Toggle a value inside an array field (checkbox groups). */
  const toggleArrayValue = useCallback((field, value) => {
    setValues((prev) => {
      const current = Array.isArray(prev[field]) ? prev[field] : [];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [field]: next };
    });
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  /** Validate one field on blur, so errors appear after the user leaves it. */
  const handleBlur = useCallback(
    (event) => {
      const field = event.target.name;
      if (!field) return;
      setTouched((prev) => ({ ...prev, [field]: true }));
      if (typeof controller.validateField !== 'function') return;
      const message = controller.validateField(field, valuesRef.current);
      setErrors((prev) => {
        const next = { ...prev };
        if (message) next[field] = message;
        else delete next[field];
        return next;
      });
    },
    [controller],
  );

  const reset = useCallback(() => {
    setValues(controller.initialValues);
    setErrors({});
    setTouched({});
    setStatus('idle');
    setResult(null);
    setFormError(null);
  }, [controller]);

  const submit = useCallback(async () => {
    setStatus('submitting');
    setFormError(null);

    const outcome = await controller.submit(valuesRef.current);

    if (outcome.status === 'rejected') {
      setErrors(outcome.errors ?? {});
      setTouched((prev) => ({
        ...prev,
        ...Object.fromEntries(Object.keys(outcome.errors ?? {}).map((k) => [k, true])),
      }));
      setStatus('idle');
      return outcome;
    }

    if (outcome.status === 'error') {
      setErrors(outcome.errors ?? {});
      setFormError(outcome.message);
      setStatus('error');
      return outcome;
    }

    setResult(outcome);
    setStatus('success');
    onSuccess?.(outcome);
    return outcome;
  }, [controller, onSuccess]);

  /** Drop-in for <form onSubmit>. */
  const handleSubmit = useCallback(
    (event) => {
      event?.preventDefault?.();
      return submit();
    },
    [submit],
  );

  /** Only surface an error once the field has been touched. */
  const errorFor = useCallback(
    (field) => (touched[field] ? errors[field] ?? null : null),
    [errors, touched],
  );

  return useMemo(
    () => ({
      values,
      errors,
      touched,
      status,
      result,
      formError,
      isSubmitting: status === 'submitting',
      isSuccess: status === 'success',
      hasErrors: Object.keys(errors).length > 0,
      setValue,
      setValues,
      setErrors,
      setTouched,
      setStatus,
      handleChange,
      handleBlur,
      handleSubmit,
      toggleArrayValue,
      errorFor,
      submit,
      reset,
    }),
    [
      values,
      errors,
      touched,
      status,
      result,
      formError,
      setValue,
      handleChange,
      handleBlur,
      handleSubmit,
      toggleArrayValue,
      errorFor,
      submit,
      reset,
    ],
  );
}

export default useFormController;
