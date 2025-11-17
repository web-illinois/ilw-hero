import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './ilw-hero.styles';
import './ilw-hero.css';

@customElement('ilw-hero')
export default class Hero extends LitElement {
  @property({ type: String })
  theme: string = '';

  @property({ type: String, attribute: 'focus' })
  focusType: string = '';

  @property({ type: Boolean })
  shadow: boolean = false;

  @property({ type: Boolean })
  collapse: boolean = false;

  @property({ type: Boolean })
  alwayson: boolean = false;

  @property({ type: String })
  align: string = '';

  @property({ type: String })
  width: string = '';

  static override styles = styles;

  get outerWidth(): string {
    return this.width === 'full' || this.width === 'auto' ? 'fixed' : '';
  }

  override render() {
    return html`
      <div class="hero ${this.outerWidth} ${this.alwayson ? 'always-over' : ''}">
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

declare global {
  interface HTMLElementTagNameMap {
    'ilw-hero': Hero;
  }
}