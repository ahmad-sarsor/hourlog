import * as React from 'react';

/**
 * HourLog IL — HoursPill
 *
 * A soft rounded chip. Its signature use is the live session-length readout
 * beside the "add record" button ("⏱ 8.5 שעות"), turning red when the time
 * range is invalid. Verbatim from the source `.hours-pill` rules.
 */
export interface HoursPillProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Tone: `default` (soft green), `warn` (red — invalid range), or `gold`.
   * @default "default"
   */
  tone?: 'default' | 'warn' | 'gold';
  /** Leading unicode glyph, e.g. "⏱". */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function HoursPill(props: HoursPillProps): JSX.Element;
