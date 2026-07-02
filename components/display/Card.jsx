import React from 'react';

/* The surface card — floating white paper on the blue-grey canvas, with an
   optional uppercase eyebrow title and an optional right-aligned action.
   Verbatim from the source `.card` / `.card-title` / `.card-head` rules. */
const HL_CARD_CSS = `
.hl-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-2xl);
  padding:18px 18px 20px;box-shadow:var(--shadow-card)}
.hl-card__title{margin:0 0 14px;font-size:var(--fs-card-title);font-weight:var(--fw-bold);
  letter-spacing:var(--ls-eyebrow);color:var(--muted);text-transform:uppercase}
.hl-card__head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px}
.hl-card__head .hl-card__title{margin:0}
`;
let hlCardDone = false;
function ensureHlCard() {
  if (typeof document === 'undefined' || hlCardDone) return;
  hlCardDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'card');
  s.textContent = HL_CARD_CSS;
  document.head.appendChild(s);
}

/**
 * Card — the primary surface container. Provide `title` for the uppercase
 * muted eyebrow; provide `action` alongside `title` to get the header row
 * (title on one side, a control on the other).
 */
export function Card({
  title,
  action,
  children,
  className = '',
  style,
  ...rest
}) {
  ensureHlCard();
  return (
    <section className={['hl-card', className].filter(Boolean).join(' ')} style={style} {...rest}>
      {title && action ? (
        <div className="hl-card__head">
          <h2 className="hl-card__title">{title}</h2>
          {action}
        </div>
      ) : title ? (
        <h2 className="hl-card__title">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}
