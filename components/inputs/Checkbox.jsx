import React from 'react';

/* The reported-toggle checkbox: a 26px square that fills brand-green with a
   white check when on. Verbatim from the source `.chk` rule. */
const HL_CHECK_CSS = `
.hl-check{
  width:var(--check-size);height:var(--check-size);border-radius:var(--radius-xs);
  border:1.5px solid var(--line);background:#fff;cursor:pointer;display:grid;place-items:center;
  font-size:15px;font-weight:var(--fw-extrabold);color:transparent;transition:var(--transition);
  padding:0;line-height:1;
}
.hl-check:hover{border-color:var(--accent)}
.hl-check.on{background:var(--accent);border-color:var(--accent);color:#fff}
.hl-check:disabled{opacity:.45;cursor:not-allowed}
`;
let hlCheckDone = false;
function ensureHlCheck() {
  if (typeof document === 'undefined' || hlCheckDone) return;
  hlCheckDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'checkbox');
  s.textContent = HL_CHECK_CSS;
  document.head.appendChild(s);
}

/**
 * Checkbox — the square toggle used to mark a record as "reported". Off is a
 * hairline outline; on fills brand-green with a white check. Controlled via
 * `checked` / `onChange`.
 */
export function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  title,
  className = '',
  ...rest
}) {
  ensureHlCheck();
  const cls = ['hl-check', checked ? 'on' : '', className].filter(Boolean).join(' ');
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      className={cls}
      disabled={disabled}
      title={title}
      onClick={() => onChange && onChange(!checked)}
      {...rest}
    >
      <span aria-hidden="true">{checked ? '✓' : ''}</span>
    </button>
  );
}
