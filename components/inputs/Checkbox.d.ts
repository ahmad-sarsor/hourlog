import * as React from 'react';

/**
 * HourLog IL — Checkbox
 *
 * The square toggle that marks a work record as "reported" (דווח). Off is a
 * hairline outline; on fills brand-green with a white check. Verbatim from
 * the source `.chk` rule — it is a button, not a native checkbox, so it
 * animates cleanly and stays 26px square.
 */
export interface CheckboxProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Whether the box is checked (reported). @default false */
  checked?: boolean;
  /** Called with the next boolean when toggled. */
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** Tooltip — e.g. "סמן כדווח" / "דווח — לחץ לביטול". */
  title?: string;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
