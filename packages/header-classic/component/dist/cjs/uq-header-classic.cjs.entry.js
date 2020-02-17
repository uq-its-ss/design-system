'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f79c3606.js');

const GlobalMenuLinkClassic = ({ name, keyboardAccess, href }) => (core.h("li", { class: "global-menu__item" },
    core.h("a", { class: "global-menu__link", accessKey: keyboardAccess, href: href }, name)));

const Header = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.searchPlaceholder = "Search this site";
        this.value = this.searchPlaceholder;
    }
    handleSearchOnBlur(e) {
        if (e.target.value == '') {
            this.value = this.searchPlaceholder;
        }
        else {
            this.value = e.target.value;
        }
    }
    handleSearchOnFocus(e) {
        if (e.target.value == this.searchPlaceholder) {
            this.value = "";
        }
        else {
            this.value = e.target.value;
        }
    }
    render() {
        return (core.h(core.Host, null, core.h("a", { href: "#main-content", class: "show-on-focus" }, "Skip to main content"), core.h("div", { class: this.showGlobalMenu ? "site-header" : "site-header has-no-global-menu" }, this.showGlobalMenu ? (core.h("uq-global-menu-classic", null, core.h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/", keyboardAccess: "1", name: "UQ Home" }), core.h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/contacts/", keyboardAccess: "2", name: "Contacts" }), core.h(GlobalMenuLinkClassic, { href: "https://future-students.uq.edu.au/", keyboardAccess: "3", name: "Study" }), core.h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/maps/", keyboardAccess: "4", name: "Maps" }), core.h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/news/", keyboardAccess: "5", name: "News" }), core.h(GlobalMenuLinkClassic, { href: "http://www.uq.edu.au/events/", keyboardAccess: "6", name: "Events" }), core.h(GlobalMenuLinkClassic, { href: "http://www.library.uq.edu.au/", keyboardAccess: "7", name: "Library" }), core.h(GlobalMenuLinkClassic, { href: "http://my.uq.edu.au/", keyboardAccess: "8", name: "my.UQ" }))) : "", core.h("div", { class: "site-header__content" }, core.h("div", { class: "columns large-8" }, core.h("a", { href: "http://www.uq.edu.au/", title: "The University of Queensland", class: "uq-logo" }, "The University of Queensland"), core.h("div", { class: "site-title" }, core.h("slot", null))), this.showSearch ? (core.h("div", { class: "site-header__site-search" }, core.h("form", { action: "//www.uq.edu.au/search", method: "get", class: "search__form site-search__form" }, core.h("fieldset", { class: "site-search__fieldset" }, core.h("legend", { class: "site-search__legend" }, "Site search"), core.h("label", { class: "search__title site-search__title", htmlFor: "site-search__query" }, "Search"), core.h("input", { type: "text", tabindex: "1", onBlur: (e) => { this.handleSearchOnBlur(e); }, onFocus: (e) => { this.handleSearchOnFocus(e); }, placeholder: this.searchPlaceholder, name: "q", value: this.value, class: "site-search__input site-search__query" }), core.h("input", { type: "submit", title: "Search this site", class: "site-search__input site-search__submit", value: "\uF002", name: "submit" }), core.h("input", { type: "hidden", value: "xml_no_dtd", name: "output" }), core.h("input", { type: "hidden", value: "ws", name: "client" }), core.h("input", { type: "hidden", value: "ws", name: "proxystylesheet" }), core.h("input", { type: "hidden", value: "http://uq.edu.au", name: "as_sitesearch" }))))) : ""))));
    }
    static get style() { return ":host{display:block}"; }
};

exports.uq_header_classic = Header;
