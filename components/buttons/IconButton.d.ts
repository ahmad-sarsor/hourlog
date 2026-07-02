import * as React from 'react';

/**
 * HourLog IL — IconButton
 *
 * A compact, square, icon-only button. In the product these are the
 * per-row edit (✎) and delete (✕) actions in the records table. Verbatim
 * from the source `.mini` rule; the `danger` variant matches `.mini.del`.
 */
export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** The unicode glyph to display, e.g. "✎" "✕" "⚙". */
  glyph: React.ReactNode;
  /**
   * `default` (neutral hover) or `danger` (red hover — destructive actions).
   * @default "default"
   */
  variant?: 'default' | 'danger';
  /** `sm` = 30px square (table rows), `md` = 38px. @default "sm" */
  size?: 'sm' | 'md';
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
