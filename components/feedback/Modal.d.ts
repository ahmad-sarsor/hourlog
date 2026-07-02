import * as React from 'react';

/**
 * HourLog IL — Modal
 *
 * A centered dialog over a dimmed ink overlay, scrollable to 88vh. In the
 * product this is the settings sheet (business details, invoice fields).
 * Verbatim from the source `.modal-back` / `.modal` rules.
 */
export interface ModalProps {
  /** Whether the dialog is shown. @default true */
  open?: boolean;
  /** Called when the backdrop is clicked or Escape is pressed. */
  onClose?: () => void;
  /** Heading text. */
  title?: React.ReactNode;
  /** Muted sub-heading beneath the title. */
  subtitle?: React.ReactNode;
  /** Action row pinned at the bottom (space-between) — e.g. reset link + save. */
  footer?: React.ReactNode;
  /** Panel max-width in px. @default 440 */
  width?: number;
  children?: React.ReactNode;
  className?: string;
}

export declare function Modal(props: ModalProps): JSX.Element | null;
