import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ToastContext } from '../context/ToastContext';
import Toaster from '../components/ui/Toaster';

const DEFAULT_DURATION = 5200;

/**
 * ToastProvider — transient confirmations and errors.
 *
 * The visible region is an aria-live="polite" log so screen-reader users hear
 * the same confirmation sighted users see. Errors use role="alert".
 * Timers are tracked and cleared on unmount so a fast route change cannot
 * leave a setTimeout pointing at a dead component.
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef(new Map());

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const push = useCallback(
    ({ title, description, tone = 'info', duration = DEFAULT_DURATION }) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setToasts((prev) => [...prev, { id, title, description, tone }]);

      if (duration > 0) {
        const timer = setTimeout(() => dismiss(id), duration);
        timers.current.set(id, timer);
      }
      return id;
    },
    [dismiss],
  );

  useEffect(() => {
    const tracked = timers.current;
    return () => {
      tracked.forEach((timer) => clearTimeout(timer));
      tracked.clear();
    };
  }, []);

  const value = useMemo(
    () => ({
      toasts,
      push,
      dismiss,
      success: (title, description) => push({ title, description, tone: 'success' }),
      error: (title, description) => push({ title, description, tone: 'danger', duration: 8000 }),
      info: (title, description) => push({ title, description, tone: 'info' }),
    }),
    [toasts, push, dismiss],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toaster toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

export default ToastProvider;
