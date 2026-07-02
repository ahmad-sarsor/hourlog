import React from 'react';

/* Text/number/date field with optional stacked label. Verbatim from the
   source `input` + `.form-row label` rules, including the accent focus ring. */
const HL_INPUT_CSS = `
.hl-field{display:flex;flex-direction:column;gap:5px;font-size:var(--fs-label);
  font-weight:var(--fw-semibold);color:var(--ink-2);min-width:0}
.hl-input{
  font-family:var(--font-sans);font-size:var(--fs-body);color:var(--ink);background:#fff;
  border:1px solid var(--line);border-radius:var(--radius-md);padding:8px 10px;width:100%;
  transition:var(--transition);
}
.hl-input::placeholder{color:var(--muted)}
.hl-input:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.hl-input:disabled{background:var(--surface-hover);color:var(--muted);cursor:not-allowed}
.hl-field__note{font-size:var(--fs-caption);font-weight:var(--fw-regular);color:var(--muted);margin-top:1px}
`;
let hlInputDone = false;
function ensureHlInput() {
  if (typeof document === 'undefined' || hlInputDone) return;
  hlInputDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'input');
  s.textContent = HL_INPUT_CSS;
  document.head.appendChild(s);
}

/**
 * Input — a labelled text / number / date field. Pass `label` to get the
 * stacked field-label layout used throughout the forms; omit it for a bare
 * input. `note` renders muted helper text beneath.
 */
export function Input({
  label,
  note,
  type = 'text',
  className = '',
  style,
  ...rest
}) {
  ensureHlInput();
  const input = (
    <input type={type} className={['hl-input', label ? '' : className].filter(Boolean).join(' ')} {...rest} />
  );
  if (!label) return input;
  return (
    <label className={['hl-field', className].filter(Boolean).join(' ')} style={style}>
      {label}
      {input}
      {note && <span className="hl-field__note">{note}</span>}
    </label>
  );
}
