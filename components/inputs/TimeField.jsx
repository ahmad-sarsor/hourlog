import React from 'react';

/* The signature 24-hour time picker: two inline selects (HH : MM) forced to
   LTR inside the RTL layout, from the source `.time-inline` rule. */
const HL_TIME_CSS = `
.hl-time{display:inline-flex;direction:ltr;align-items:center;gap:5px;justify-content:flex-start}
.hl-time__sel{
  font-family:var(--font-sans);font-size:var(--fs-body);color:var(--ink);background:#fff;
  border:1px solid var(--line);border-radius:var(--radius-md);padding:8px 6px;
  width:auto;min-width:60px;text-align:center;transition:var(--transition);cursor:pointer;
}
.hl-time__sel:focus{outline:none;border-color:var(--accent);box-shadow:var(--shadow-focus)}
.hl-time__sep{font-weight:var(--fw-bold);color:var(--muted)}
`;
let hlTimeDone = false;
function ensureHlTime() {
  if (typeof document === 'undefined' || hlTimeDone) return;
  hlTimeDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'timefield');
  s.textContent = HL_TIME_CSS;
  document.head.appendChild(s);
}

const pad = (n) => String(n).padStart(2, '0');

/**
 * TimeField — a 24-hour inline time picker (HH : MM) built from two selects.
 * Value is an "HH:MM" string. Minutes step by `minuteStep` (default 5).
 * The control is always LTR even inside the RTL page, matching the app.
 */
export function TimeField({
  value = '09:00',
  onChange,
  minuteStep = 5,
  disabled = false,
  className = '',
}) {
  ensureHlTime();
  const [h, m] = (value || '09:00').split(':');
  const hours = [];
  for (let i = 0; i < 24; i++) hours.push(pad(i));
  const mins = [];
  for (let i = 0; i < 60; i += minuteStep) mins.push(pad(i));
  if (m && !mins.includes(m)) mins.push(m); // preserve an off-step value

  const emit = (nh, nm) => onChange && onChange(nh + ':' + nm);

  return (
    <div className={['hl-time', className].filter(Boolean).join(' ')}>
      <select className="hl-time__sel" value={h} disabled={disabled}
        onChange={(e) => emit(e.target.value, m)} aria-label="שעה">
        {hours.map((x) => <option key={x} value={x}>{x}</option>)}
      </select>
      <span className="hl-time__sep">:</span>
      <select className="hl-time__sel" value={m} disabled={disabled}
        onChange={(e) => emit(h, e.target.value)} aria-label="דקות">
        {mins.map((x) => <option key={x} value={x}>{x}</option>)}
      </select>
    </div>
  );
}
