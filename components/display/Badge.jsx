import React from 'react';

/* Small status marker. In the app these appear as coloured text ("טרם דווחו",
   the red weekend day) and as soft chips. Tones map to the semantic palette:
   green = reported/done, gold = pending, red = weekend/overdue, neutral. */
const HL_BADGE_CSS = `
.hl-badge{display:inline-flex;align-items:center;gap:5px;font-size:var(--fs-card-title);
  font-weight:var(--fw-semibold);line-height:1;white-space:nowrap}
.hl-badge--chip{border-radius:999px;padding:4px 10px}
.hl-badge--text{padding:0}
.hl-badge--green.hl-badge--chip{background:var(--accent-soft);color:var(--accent-strong)}
.hl-badge--green.hl-badge--text{color:var(--accent-strong)}
.hl-badge--gold.hl-badge--chip{background:var(--gold-soft);color:var(--gold-ink)}
.hl-badge--gold.hl-badge--text{color:var(--gold-ink)}
.hl-badge--red.hl-badge--chip{background:var(--danger-soft);color:var(--danger)}
.hl-badge--red.hl-badge--text{color:var(--weekend)}
.hl-badge--neutral.hl-badge--chip{background:var(--surface-hover);color:var(--muted)}
.hl-badge--neutral.hl-badge--text{color:var(--muted)}
`;
let hlBadgeDone = false;
function ensureHlBadge() {
  if (typeof document === 'undefined' || hlBadgeDone) return;
  hlBadgeDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'badge');
  s.textContent = HL_BADGE_CSS;
  document.head.appendChild(s);
}

/**
 * Badge — a small status marker. `variant="chip"` is a soft pill; `"text"` is
 * bold coloured text (the app's `טרם דווחו` count and red weekend labels).
 */
export function Badge({
  tone = 'neutral',
  variant = 'chip',
  children,
  className = '',
  ...rest
}) {
  ensureHlBadge();
  const cls = [
    'hl-badge',
    'hl-badge--' + variant,
    'hl-badge--' + tone,
    className,
  ].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{children}</span>;
}
