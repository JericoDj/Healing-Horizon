import { useCallback, useMemo } from 'react';
import { ContactContext } from '../context/ContactContext';
import { useToast } from '../context/ToastContext';
import { contactController } from '../controllers/contactController';
import { useFormController } from '../hooks/useFormController';

/**
 * ContactProvider — wires contactController to React state and to the toast
 * system, then exposes the whole thing to the /contact page.
 *
 * The page component ends up almost entirely presentational, which is the
 * point of splitting controller from provider from view.
 */
export function ContactProvider({ children }) {
  const toast = useToast();

  const onSuccess = useCallback(
    (outcome) => {
      if (outcome.silent) return;
      toast.success(
        'Message sent',
        `We will reply ${'within one business day'}. Your reference is ${outcome.reference}.`,
      );
    },
    [toast],
  );

  const form = useFormController(contactController, { onSuccess });

  const value = useMemo(
    () => ({
      ...form,
      reasons: contactController.reasons,
      methods: contactController.methods,
    }),
    [form],
  );

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}

export default ContactProvider;
