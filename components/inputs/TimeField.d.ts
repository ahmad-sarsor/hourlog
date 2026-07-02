import * as React from 'react';

/**
 * HourLog IL — TimeField
 *
 * The product's signature 24-hour time picker: two inline selects (HH : MM)
 * forced to LTR inside the RTL page. Used for the "from" / "to" times when
 * logging a work session. Verbatim from the source `.time-inline` markup.
 */
export interface TimeFieldProps {
  /** Current value as an "HH:MM" 24-hour string. @default "09:00" */
  value?: string;
  /** Called with the new "HH:MM" string when either select changes. */
  onChange?: (value: string) => void;
  /** Minute granularity. @default 5 */
  minuteStep?: number;
  disabled?: boolean;
  className?: string;
}

export declare function TimeField(props: TimeFieldProps): JSX.Element;
