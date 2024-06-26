import { css } from 'lit';

const baseStyle = css`
  :host {
    width: 100%;
    display: block;

    --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f06e0b);
  }

  mwc-textfield {
    width: 100%;
  }
`;

export const styles = [baseStyle];