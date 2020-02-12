'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3f3fd861.js');

const Header = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error("name: required");
        }
    }
    render() {
        return (core.h(core.Host, null, core.h("a", { href: "#main-content", class: "show-on-focus" }, "Skip to main content"), core.h("div", { class: "site-header" }, core.h("div", { class: "site-header__content" }, core.h("div", { class: "columns medium-7 large-8" }, core.h("a", { href: "http://www.uq.edu.au/", title: "The University of Queensland", class: "uq-logo" }, "The University of Queensland"), core.h("div", { class: "site-title" }, this.name))))));
    }
    static get watchers() { return {
        "name": ["validateName"]
    }; }
    static get style() { return ":host{display:block}"; }
};

exports.uq_header_classic = Header;
