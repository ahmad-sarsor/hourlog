import React from 'react';

/* Native <select>, styled to match the inputs. Shares the field-label
   layout with Input. Verbatim from the source `select` rules. */
const HL_SELECT_CSS = `
.hl-selfield{display:flex;flex-direction:column;gap:5px;font-size:var(--fs-label);
  font-weight:var(--fw-semibold);color:var(--ink-2);min-width:0}
.hl-select{
  font-family:var(--font-sans);font-size:var(--fs-body);color:var(--ink);background:#fff;
  border:1px solid var(--line);border-radius:var(--radius-md);padding:8px 10px;width:100%;
  transition:var(--transition);cursor:pointer;
}
.hl-select:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.hl-select:disabled{background:var(--surface-hover);color:var(--muted);cursor:not-allowed}
`;
let hlSelectDone = false;
function ensureHlSelect() {
  if (typeof document === 'undefined' || hlSelectDone) return;
  hlSelectDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'select');
  s.textContent = HL_SELECT_CSS;
  document.head.appendChild(s);
}

/**
 * Select — a native <select> styled to match Input. Pass `options` as an
 * array of `{value,label}` (or plain strings), or provide <option> children.
 * `label` gives the stacked field layout used in the filter panel.
 */
export function Select({
  label,
  options,
  children,
  className = '',
  style,
  ...rest
}) {
  ensureHlSelect();
  const opts = options
    ? options.map((o, i) => {
        const v = typeof o === 'string' ? o : o.value;
        const l = typeof o === 'string' ? o : o.label;
        return <option key={i} value={v}>{l}</option>;
      })
    : children;
  const select = (
    <select className={['hl-select', label ? '' : className].filter(Boolean).join(' ')} {...rest}>
      {opts}
    </select>
  );
  if (!label) return select;
  return (
    <label className={['hl-selfield', className].filter(Boolean).join(' ')} style={style}>
      {label}
      {select}
    </label>
  );
}
