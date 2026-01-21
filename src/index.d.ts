/**
 * Type definitions for @devzenix-ui/react-select
 * A lightweight, customizable Web Component for enhanced dropdown/select elements
 */

export interface SelectOption {
  value: string;
  label: string;
}

export class Select extends HTMLElement {
  /**
   * The currently selected value
   */
  value: string;

  /**
   * Sets the available options for the select dropdown
   * @param options - Array of option objects with value and label properties
   */
  setOptions(options: SelectOption[]): void;

  /**
   * Observed attributes for the custom element
   */
  static get observedAttributes(): string[];
}

/**
 * Fired when the selected value changes
 */
export interface ValueChangeEvent extends CustomEvent<{ value: string }> {}

declare global {
  interface HTMLElementTagNameMap {
    'select-component': Select;
  }
  
  interface HTMLElementEventMap {
    'value-change': ValueChangeEvent;
  }
  
  interface Window {
    Select: typeof Select;
  }
}

/**
 * Default export for the web component
 */
export default Select;
