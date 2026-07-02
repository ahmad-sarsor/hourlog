import * as React from 'react';

/**
 * HourLog IL — SummaryRow
 *
 * A label/value line for the summary and totals cards (hours, subtotal, VAT,
 * grand total). Consecutive rows get a hairline divider; the `total` row is
 * separated by a heavier rule and shows the value in accent green at 18px.
 * Verbatim from the source `.sum-row` rules.
 */
export interface SummaryRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Left-hand label, e.g. `סכום לפני מע"מ`. */
  label: React.ReactNode;
  /** Right-hand value (tabular figures), e.g. `4,680.00 ₪`. */
  value: React.ReactNode;
  /** Render as the grand-total row (heavier rule, accent value). @default false */
  total?: boolean;
}

export declare function SummaryRow(props: SummaryRowProps): JSX.Element;
