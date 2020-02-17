import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uq-global-menu-classic',
  styleUrl: 'global-menu-classic.css',
  shadow: false
})
export class GlobalMenuClassic {
  render() {
    return (
      <Host>
        <div class="site-header__global-menu">
          <div class="site-header__global-menu">
            <div class="global-menu hide-for-small-only">
              <ul class="global-menu__list">
                <slot></slot>
              </ul>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
