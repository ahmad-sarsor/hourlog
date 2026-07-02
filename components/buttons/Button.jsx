import React from 'react';

/* Self-contained styles, injected once. Values copied verbatim from the
   source app's .btn rules so consumers get pixel-identical controls. */
const HL_BTN_CSS = `
.hl-btn{
  font-family:var(--font-sans);font-size:var(--fs-body);font-weight:var(--fw-semibold);
  line-height:1;border-radius:var(--radius-lg);padding:9px 18px;cursor:pointer;
  border:1px solid transparent;transition:var(--transition);display:inline-flex;
  align-items:center;justify-content:center;gap:7px;white-space:nowrap;
}
.hl-btn__i{font-size:1.05em;line-height:1;display:inline-flex}
.hl-btn--primary{background:var(--accent);color:#fff}
.hl-btn--primary:hover{background:var(--accent-strong)}
.hl-btn--gold{background:var(--gold);color:#fff}
.hl-btn--gold:hover{filter:brightness(.94)}
.hl-btn--dark{background:var(--ink);color:#fff}
.hl-btn--dark:hover{background:#0d1720}
.hl-btn--teal{background:var(--teal);color:#fff}
.hl-btn--teal:hover{filter:brightness(.95)}
.hl-btn--ghost{background:#fff;color:var(--ink-2);border-color:var(--line)}
.hl-btn--ghost:hover{border-color:#c3cdd6}
.hl-btn--utility{background:var(--surface);color:var(--ink-2);border-color:var(--line);box-shadow:var(--shadow-card)}
.hl-btn--utility:hover{border-color:#c3cdd6;transform:var(--lift)}
.hl-btn--sm{padding:8px 18px;font-size:var(--fs-control-sm)}
.hl-btn--xs{padding:7px 14px;font-size:var(--fs-table)}
.hl-btn--block{width:100%}
.hl-btn:disabled{opacity:.45;cursor:not-allowed;transform:none;filter:none}
`;
let hlBtnDone = false;
function ensureHlBtn() {
  if (typeof document === 'undefined' || hlBtnDone) return;
  hlBtnDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'button');
  s.textContent = HL_BTN_CSS;
  document.head.appendChild(s);
}

/**
 * Button — the workhorse text button. Six brand variants, three sizes.
 * `icon` renders a leading unicode glyph (the app has no icon font).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon = null,
  children,
  className = '',
  ...rest
}) {
  ensureHlBtn();
  const cls = [
    'hl-btn',
    'hl-btn--' + variant,
    size !== 'md' ? 'hl-btn--' + size : '',
    block ? 'hl-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} {...rest}>
      {icon != null && <span className="hl-btn__i" aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
}
