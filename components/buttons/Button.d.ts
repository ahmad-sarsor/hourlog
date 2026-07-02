import * as React from 'react';

/**
 * HourLog IL — Button
 *
 * The primary text button. Copied verbatim from the source app's `.btn`
 * rules: six colour variants and three sizes, all driven by design tokens.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Colour treatment.
   * - `primary` — brand green, the default call-to-action
   * - `gold`    — document / secondary emphasis
   * - `dark`    — ink navy, used for PDF export actions
   * - `teal`    — the tax-invoice / receipt action
   * - `ghost`   — white with a hairline border
   * - `utility` — elevated white chip (header controls) with hover lift
   * @default "primary"
   */
  variant?: 'primary' | 'gold' | 'dark' | 'teal' | 'ghost' | 'utility';
  /**
   * Size. `md` is default (9×18), `sm` is 8×18, `xs` is 7×14.
   * @default "md"
   */
  size?: 'md' | 'sm' | 'xs';
  /** Stretch to fill the container (flex/grid cell). @default false */
  block?: boolean;
  /** Leading unicode glyph, e.g. "＋" "✓" "⚙". */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
