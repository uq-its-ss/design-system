import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'uq-header-classic',
  styleUrl: 'header.css',
  shadow: false
})
export class Header {
  @Prop() name: string;
  @Prop() sticky: boolean;

  @Watch('name')
  validateName(newValue: string) {
    const isBlank = typeof newValue == null;
    if (isBlank) { throw new Error("name: required") };
  }

  render() {
    return (
      <Host>
        <a href="#main-content" class="show-on-focus">Skip to main content</a>
        <div class="site-header">
          <div class="site-header__content">
            <div class="columns medium-7 large-8">
              <a href="http://www.uq.edu.au/" title="The University of Queensland" class="uq-logo">The University of Queensland</a>
              <div class="site-title">{this.name}</div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
