import { LitElement, html } from 'lit';
import styles from './ilw-hero.styles';
import './ilw-hero.css';

class Hero extends LitElement {

  static get properties() {
    return {
      theme: { type: String, attribute: true },
      focus: { type: String, attribute: true },
      shadow: { type: Boolean, attribute: true },
      collapse: { type: Boolean, attribute: true },
      align: { type: String, attribute: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.align = '';
    this.focus = '';
    this.shadow = false;
    this.collapse = false;
    this.theme = '';
  }

  render() {
    return html`
      <div class="hero">
        <div role="presentation" class="background ${this.collapse ? 'collapse' : ''}">
          <slot name="background"></slot>
        </div>
        <div class="content-outer">
          <div class="content-inner ${this.align.replace('-', ' ')}">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('ilw-hero', Hero);