import React from 'react';

/* Square, icon-only action button — the row actions (edit / delete) in the
   records table. Verbatim from the source `.mini` / `.mini.del` rules. */
const HL_ICONBTN_CSS = `
.hl-iconbtn{
  border-radius:var(--radius-sm);border:1px solid var(--line);background:#fff;
  cursor:pointer;display:grid;place-items:center;color:var(--ink-2);
  transition:var(--transition);padding:0;line-height:1;
}
.hl-iconbtn--sm{width:var(--mini-size);height:var(--mini-size);font-size:14px}
.hl-iconbtn--md{width:var(--control-h);height:var(--control-h);font-size:15px;border-radius:var(--radius-md)}
.hl-iconbtn:hover{background:var(--surface-hover)}
.hl-iconbtn--danger:hover{color:var(--danger);border-color:var(--danger-border);background:var(--danger-soft)}
.hl-iconbtn:disabled{opacity:.45;cursor:not-allowed}
`;
let hlIconBtnDone = false;
function ensureHlIconBtn() {
  if (typeof document === 'undefined' || hlIconBtnDone) return;
  hlIconBtnDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'iconbutton');
  s.textContent = HL_ICONBTN_CSS;
  document.head.appendChild(s);
}

/**
 * IconButton — compact square button holding a single unicode glyph.
 * Used for the per-row edit (✎) and delete (✕) actions in the table.
 */
export function IconButton({
  glyph,
  variant = 'default',
  size = 'sm',
  className = '',
  ...rest
}) {
  ensureHlIconBtn();
  const cls = [
    'hl-iconbtn',
    'hl-iconbtn--' + size,
    variant === 'danger' ? 'hl-iconbtn--danger' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} {...rest}>
      <span aria-hidden="true">{glyph}</span>
    </button>
  );
}
