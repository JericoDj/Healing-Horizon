import { useId } from 'react';
import Icon from './Icon';
import styles from './Field.module.css';

/**
 * Form primitives.
 *
 * Accessibility rules baked in, so no caller has to remember them:
 *   · every control has a real <label>, never a placeholder-as-label;
 *   · hint and error text are wired via aria-describedby;
 *   · errors set aria-invalid and are announced with role="alert";
 *   · required fields are marked in the label and with the required attribute;
 *   · focus rings come from the global :focus-visible rule and are never removed.
 */

function FieldShell({ id, label, hint, error, required, children, className = '' }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={`${styles.field} ${error ? styles.hasError : ''} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required ? (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        ) : (
          <span className={styles.optional}>optional</span>
        )}
      </label>

      {hint ? (
        <p className={styles.hint} id={hintId}>
          {hint}
        </p>
      ) : null}

      {children({ describedBy: [hintId, errorId].filter(Boolean).join(' ') || undefined })}

      {error ? (
        <p className={styles.error} id={errorId} role="alert">
          <Icon name="alert" size={15} />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Input({ label, hint, error, required, className, id: providedId, ...rest }) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required} className={className}>
      {({ describedBy }) => (
        <input
          id={id}
          className={styles.control}
          required={required}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
      )}
    </FieldShell>
  );
}

export function Textarea({
  label,
  hint,
  error,
  required,
  rows = 5,
  maxLength,
  value = '',
  className,
  id: providedId,
  ...rest
}) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required} className={className}>
      {({ describedBy }) => (
        <>
          <textarea
            id={id}
            rows={rows}
            maxLength={maxLength}
            value={value}
            className={`${styles.control} ${styles.textarea}`}
            required={required}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={describedBy}
            {...rest}
          />
          {maxLength ? (
            <p className={styles.counter} aria-live="polite">
              {value.length} / {maxLength}
            </p>
          ) : null}
        </>
      )}
    </FieldShell>
  );
}

export function Select({
  label,
  hint,
  error,
  required,
  options = [],
  className,
  id: providedId,
  ...rest
}) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={required} className={className}>
      {({ describedBy }) => (
        <div className={styles.selectWrap}>
          <select
            id={id}
            className={`${styles.control} ${styles.select}`}
            required={required}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={describedBy}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Icon name="chevronDown" size={18} className={styles.selectIcon} />
        </div>
      )}
    </FieldShell>
  );
}

export function Checkbox({ label, hint, error, id: providedId, className = '', ...rest }) {
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={`${styles.checkboxField} ${error ? styles.hasError : ''} ${className}`}>
      <div className={styles.checkboxRow}>
        <input
          type="checkbox"
          id={id}
          className={styles.checkbox}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
          {...rest}
        />
        <label className={styles.checkboxLabel} htmlFor={id}>
          {label}
        </label>
      </div>
      {hint ? (
        <p className={styles.hint} id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className={styles.error} id={errorId} role="alert">
          <Icon name="alert" size={15} />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * A set of mutually exclusive choices rendered as selectable cards.
 * Uses a real radiogroup underneath so keyboard and screen-reader behaviour
 * is the browser's, not ours.
 */
export function RadioCardGroup({
  legend,
  hint,
  error,
  name,
  value,
  onChange,
  options = [],
  columns = 3,
  className = '',
}) {
  const groupId = useId();
  const hintId = hint ? `${groupId}-hint` : undefined;
  const errorId = error ? `${groupId}-error` : undefined;

  return (
    <fieldset
      className={`${styles.fieldset} ${error ? styles.hasError : ''} ${className}`}
      aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
    >
      <legend className={styles.legend}>{legend}</legend>
      {hint ? (
        <p className={styles.hint} id={hintId}>
          {hint}
        </p>
      ) : null}

      <div className={styles.optionGrid} data-columns={columns}>
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`;
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={`${styles.optionCard} ${checked ? styles.optionChecked : ''}`}
            >
              <input
                type="radio"
                id={optionId}
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className={styles.visuallyHiddenInput}
              />
              <span className={styles.optionIndicator} aria-hidden="true">
                {checked ? <Icon name="check" size={13} strokeWidth={2.6} /> : null}
              </span>
              <span className={styles.optionText}>
                <span className={styles.optionLabel}>{option.label}</span>
                {option.detail ? (
                  <span className={styles.optionDetail}>{option.detail}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>

      {error ? (
        <p className={styles.error} id={errorId} role="alert">
          <Icon name="alert" size={15} />
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

/** The multi-select twin of RadioCardGroup. */
export function CheckboxCardGroup({
  legend,
  hint,
  error,
  values = [],
  onToggle,
  options = [],
  columns = 3,
  className = '',
}) {
  const groupId = useId();
  const hintId = hint ? `${groupId}-hint` : undefined;
  const errorId = error ? `${groupId}-error` : undefined;

  return (
    <fieldset
      className={`${styles.fieldset} ${error ? styles.hasError : ''} ${className}`}
      aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
    >
      <legend className={styles.legend}>{legend}</legend>
      {hint ? (
        <p className={styles.hint} id={hintId}>
          {hint}
        </p>
      ) : null}

      <div className={styles.optionGrid} data-columns={columns}>
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`;
          const checked = values.includes(option.value);
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={`${styles.optionCard} ${checked ? styles.optionChecked : ''}`}
            >
              <input
                type="checkbox"
                id={optionId}
                value={option.value}
                checked={checked}
                onChange={() => onToggle(option.value)}
                className={styles.visuallyHiddenInput}
              />
              <span className={`${styles.optionIndicator} ${styles.optionIndicatorSquare}`} aria-hidden="true">
                {checked ? <Icon name="check" size={13} strokeWidth={2.6} /> : null}
              </span>
              <span className={styles.optionText}>
                <span className={styles.optionLabel}>{option.label}</span>
                {option.detail ? (
                  <span className={styles.optionDetail}>{option.detail}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>

      {error ? (
        <p className={styles.error} id={errorId} role="alert">
          <Icon name="alert" size={15} />
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

/**
 * Honeypot — an off-screen field bots fill in and humans never see.
 * Cheap, and it does not make real people solve a puzzle to reach a therapist.
 */
export function HoneypotField({ value, onChange }) {
  return (
    <div className={styles.honeypot} aria-hidden="true">
      <label htmlFor="website-hp">Leave this field empty</label>
      <input
        id="website-hp"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
