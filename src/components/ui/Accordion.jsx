import { useId, useState } from 'react';
import Icon from './Icon';
import styles from './Accordion.module.css';

/**
 * Accordion — used for FAQs and any progressive-disclosure list.
 *
 * Built on real buttons with aria-expanded / aria-controls rather than
 * <details>, because we need controlled open state (deep-linking to a
 * question, and "expand all"). Content stays in the DOM when collapsed so
 * in-page search still finds it.
 *
 * `allowMultiple` lets several panels stay open; the default is single-open.
 */
export function Accordion({ items = [], allowMultiple = false, defaultOpenId = null, className = '' }) {
  const [openIds, setOpenIds] = useState(() => (defaultOpenId ? [defaultOpenId] : []));

  const toggle = (id) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((openId) => openId !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  const generatedId = useId();
  const panelId = `${generatedId}-panel`;
  const buttonId = `${generatedId}-button`;

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`} id={item.id}>
      <h3 className={styles.heading}>
        <button
          type="button"
          id={buttonId}
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={styles.question}>{item.question ?? item.title}</span>
          <span className={styles.indicator} aria-hidden="true">
            <Icon name="chevronDown" size={20} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={styles.panel}
        hidden={!isOpen}
      >
        <div className={styles.panelInner}>
          {typeof (item.answer ?? item.content) === 'string' ? (
            <p>{item.answer ?? item.content}</p>
          ) : (
            (item.answer ?? item.content)
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
