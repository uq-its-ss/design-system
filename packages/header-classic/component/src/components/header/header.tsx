import { Component, Host, h, Prop, State } from '@stencil/core';
import { GlobalMenuLinkClassic } from '../global-menu-link-classic/global-menu-link-classic';

@Component({
  tag: 'uq-header-classic',
  styleUrl: 'header.css',
  shadow: false
})
export class Header {
  @Prop() showGlobalMenu: boolean;
  @Prop() showSearch: boolean;

  @State() value: string;

  searchPlaceholder: string;

  constructor() {
    this.searchPlaceholder = "Search this site";
    this.value = this.searchPlaceholder;
  }

  handleSearchOnBlur(e) {
    if (e.target.value == '') {
      this.value = this.searchPlaceholder;
    } else {
      this.value = e.target.value;
    }
  }

  handleSearchOnFocus(e) {
    if (e.target.value == this.searchPlaceholder) {
      this.value = "";
    } else {
      this.value = e.target.value;
    }
  }

  render() {
    return (
      <Host>
        <a href="#main-content" class="show-on-focus">Skip to main content</a>
        <div class={this.showGlobalMenu ? "site-header" : "site-header has-no-global-menu"}>
          {this.showGlobalMenu ? (
            <uq-global-menu-classic>
              <GlobalMenuLinkClassic href="http://www.uq.edu.au/" keyboardAccess="1" name="UQ Home" />
              <GlobalMenuLinkClassic href="http://www.uq.edu.au/contacts/" keyboardAccess="2" name="Contacts" />
              <GlobalMenuLinkClassic href="https://future-students.uq.edu.au/" keyboardAccess="3" name="Study" />
              <GlobalMenuLinkClassic href="http://www.uq.edu.au/maps/" keyboardAccess="4" name="Maps" />
              <GlobalMenuLinkClassic href="http://www.uq.edu.au/news/" keyboardAccess="5" name="News" />
              <GlobalMenuLinkClassic href="http://www.uq.edu.au/events/" keyboardAccess="6" name="Events" />
              <GlobalMenuLinkClassic href="http://www.library.uq.edu.au/" keyboardAccess="7" name="Library" />
              <GlobalMenuLinkClassic href="http://my.uq.edu.au/" keyboardAccess="8" name="my.UQ" />
            </uq-global-menu-classic>
          ) : ""}
          <div class="site-header__content">
            <div class="columns large-8">
              <a href="http://www.uq.edu.au/" title="The University of Queensland" class="uq-logo">The University of Queensland</a>
              <div class="site-title"><slot></slot></div>
            </div>
            {this.showSearch ? (
              <div class="site-header__site-search">
                <form action="//www.uq.edu.au/search" method="get" class="search__form site-search__form">
                  <fieldset class="site-search__fieldset">
                    <legend class="site-search__legend">Site search</legend>
                    <label class="search__title site-search__title" htmlFor="site-search__query">Search</label>
                    <input type="text" tabindex="1" onBlur={(e) => {this.handleSearchOnBlur(e)}} onFocus={(e) => {this.handleSearchOnFocus(e)}} placeholder={this.searchPlaceholder} name="q" value={this.value} class="site-search__input site-search__query" />
                    <input type="submit" title="Search this site" class="site-search__input site-search__submit" value="" name="submit" />
                    <input type="hidden" value="xml_no_dtd" name="output" />
                    <input type="hidden" value="ws" name="client" />
                    <input type="hidden" value="ws" name="proxystylesheet" />
                    <input type="hidden" value="http://uq.edu.au" name="as_sitesearch" />
                  </fieldset>
                </form>
              </div>
            ) : ""}
          </div>
        </div>
      </Host>
    );
  }
};
