import * as React from 'react';

/**
 * HourLog IL — Input
 *
 * A labelled text / number / date field. The default forms layout stacks a
 * 12.5px semibold label above a 14.5px input with the brand's accent focus
 * ring. Verbatim from the source `input` + `.form-row label` rules.
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. Omit for a bare input. */
  label?: React.ReactNode;
  /** Muted helper text rendered beneath the input. */
  note?: React.ReactNode;
  /** Input type — `text`, `number`, `date`, etc. @default "text" */
  type?: string;
}

export declare function Input(props: InputProps): JSX.Element;
