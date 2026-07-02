import * as React from 'react';

/**
 * HourLog IL — Select
 *
 * A native <select> styled to match Input, used for the month / client
 * filters and every dropdown in the settings modal. Verbatim from the
 * source `select` rules.
 */
export interface SelectOption {
  value: string;
  label: React.ReactNode;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label rendered above the select. Omit for a bare select. */
  label?: React.ReactNode;
  /**
   * Options as `{value,label}` objects or plain strings. Alternatively pass
   * <option> children directly.
   */
  options?: Array<SelectOption | string>;
  children?: React.ReactNode;
}

export declare function Select(props: SelectProps): JSX.Element;
