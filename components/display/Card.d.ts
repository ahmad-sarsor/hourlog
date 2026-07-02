import * as React from 'react';

/**
 * HourLog IL — Card
 *
 * The primary surface container: white paper with a hairline border, 16px
 * radius and the soft ink-tinted card shadow. Every panel in the app (form,
 * records, filter, summary, export) is a Card. Verbatim from `.card`.
 */
export interface CardProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase, letter-spaced, muted eyebrow title. */
  title?: React.ReactNode;
  /**
   * A control (e.g. a Button) rendered opposite the title in a header row.
   * Only used when `title` is also present.
   */
  action?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
