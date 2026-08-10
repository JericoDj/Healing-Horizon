import { useCallback, useEffect, useId, useRef } from 'react';
import Icon from './Icon';
import styles from './Modal.module.css';

/**
 * Modal — built on the native <dialog> element.
 *
 * `showModal()` gives us, from the browser rather than from hand-rolled code:
 * a focus trap, Escape-to-close, the rest of the page marked inert, and focus
 * restored to whatever opened it. Every one of those is a thing custom modal
 * implementations get subtly wrong, so we do not reimplement them.
 *
 * What we still have to do ourselves:
 *   · sync the native `cancel` event (Escape) back into React state;
 *   · lock body scroll, which <dialog> does not do;
 *   · close on backdrop click, which is a convention rather than a default.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  closeLabel = 'Close',
}) {
  const dialogRef = useRef(null);
  const headingId = useId();
  const descriptionId = useId();

  // Drive the native dialog from the `open` prop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  // Escape fires `cancel`; let React own the state rather than the DOM.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const handleCancel = (event) => {
      event.preventDefault();
      onClose();
    };
    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  }, [onClose]);

  // <dialog> does not stop the page behind it from scrolling.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /**
   * Backdrop click. The ::backdrop pseudo-element is not a node we can listen
   * on, so we compare the click point against the dialog's own box — a click
   * outside it landed on the backdrop.
   */
  const handleClick = useCallback(
    (event) => {
      if (event.target !== dialogRef.current) return;
      const box = dialogRef.current.getBoundingClientRect();
      const outside =
        event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom;
      if (outside) onClose();
    },
    [onClose],
  );

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.dialog} ${styles[size]}`}
      aria-labelledby={headingId}
      aria-describedby={description ? descriptionId : undefined}
      onClick={handleClick}
    >
      <div className={styles.panel}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h2 id={headingId} className={styles.title}>
              {title}
            </h2>
            {description ? (
              <p id={descriptionId} className={styles.description}>
                {description}
              </p>
            ) : null}
          </div>

          <button type="button" className={styles.close} onClick={onClose} title={closeLabel}>
            <Icon name="close" size={20} strokeWidth={2} />
            <span className="visually-hidden">{closeLabel}</span>
          </button>
        </header>

        <div className={styles.body}>{children}</div>

        {footer ? <footer className={styles.footer}>{footer}</footer> : null}
      </div>
    </dialog>
  );
}

export default Modal;
