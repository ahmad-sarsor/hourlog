import React from 'react';

/* The live-hours pill: a soft-green rounded chip showing the computed
   duration, with a red "warn" tone for invalid ranges. Verbatim from the
   source `.hours-pill` / `.hours-pill.warn` rules. */
const HL_PILL_CSS = `
.hl-pill{display:inline-flex;align-items:center;gap:6px;background:var(--accent-soft);
  color:var(--accent-strong);font-size:var(--fs-table);font-weight:var(--fw-bold);
  border-radius:var(--radius-md);padding:9px 13px;line-height:1;white-space:nowrap}
.hl-pill--warn{background:var(--danger-soft);color:var(--danger)}
.hl-pill--gold{background:var(--gold-soft);color:var(--gold-ink)}
.hl-pill__i{font-size:1.05em;line-height:1}
`;
let hlPillDone = false;
function ensureHlPill() {
  if (typeof document === 'undefined' || hlPillDone) return;
  hlPillDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'pill');
  s.textContent = HL_PILL_CSS;
  document.head.appendChild(s);
}

/**
 * HoursPill — a soft rounded chip. In the product it shows the live computed
 * session length ("⏱ 8.5 שעות") next to the add button; the `warn` tone
 * flags an invalid time range. `gold` is available for document contexts.
 */
export function HoursPill({
  tone = 'default',
  icon = null,
  children,
  className = '',
  ...rest
}) {
  ensureHlPill();
  const cls = [
    'hl-pill',
    tone === 'warn' ? 'hl-pill--warn' : '',
    tone === 'gold' ? 'hl-pill--gold' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {icon != null && <span className="hl-pill__i" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
