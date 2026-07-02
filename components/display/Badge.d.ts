import * as React from 'react';

/**
 * HourLog IL — Badge
 *
 * A small status marker. The app uses coloured text for the "not yet
 * reported" count and the red weekend day labels, and soft chips for
 * done / pending states. Tones map to the semantic palette.
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Semantic tone: `green` (reported / done), `gold` (pending), `red`
   * (weekend / overdue), `neutral`.
   * @default "neutral"
   */
  tone?: 'green' | 'gold' | 'red' | 'neutral';
  /** `chip` (soft rounded pill) or `text` (bold coloured text). @default "chip" */
  variant?: 'chip' | 'text';
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
