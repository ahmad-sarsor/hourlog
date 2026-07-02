import React from 'react';

/* A label/value line for the summary & totals cards. Consecutive rows get a
   hairline divider; the `total` row gets a heavier rule and an accent value.
   Verbatim from the source `.sum-row` rules (sibling divider preserved). */
const HL_SUMROW_CSS = `
.hl-sumrow{display:flex;justify-content:space-between;align-items:baseline;padding:8px 0;
  font-size:var(--fs-body);color:var(--ink-2)}
.hl-sumrow + .hl-sumrow{border-top:1px solid var(--line-softer)}
.hl-sumrow b{font-size:var(--fs-value);font-weight:var(--fw-bold);color:var(--ink)}
.hl-sumrow.hl-sumrow--total{margin-top:4px;border-top:2px solid var(--line);padding-top:12px}
.hl-sumrow.hl-sumrow--total span{font-weight:var(--fw-bold)}
.hl-sumrow.hl-sumrow--total b{font-size:var(--fs-lead);color:var(--accent)}
`;
let hlSumrowDone = false;
function ensureHlSumrow() {
  if (typeof document === 'undefined' || hlSumrowDone) return;
  hlSumrowDone = true;
  const s = document.createElement('style');
  s.setAttribute('data-hl', 'summaryrow');
  s.textContent = HL_SUMROW_CSS;
  document.head.appendChild(s);
}

/**
 * SummaryRow — a label/value line for the summary and totals cards. Stack
 * several inside a Card; the last one with `total` shows the accent-green
 * grand total. Values are tabular-figure aligned.
 */
export function SummaryRow({
  label,
  value,
  total = false,
  className = '',
  ...rest
}) {
  ensureHlSumrow();
  const cls = ['hl-sumrow', total ? 'hl-sumrow--total' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <span>{label}</span>
      <b className="num">{value}</b>
    </div>
  );
}
