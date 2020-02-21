'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f79c3606.js');

const GlobalMenuClassic = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("div", { class: "site-header__global-menu" }, core.h("div", { class: "site-header__global-menu" }, core.h("div", { class: "global-menu hide-for-small-only" }, core.h("ul", { class: "global-menu__list" }, core.h("slot", null)))))));
    }
    static get style() { return ":host{display:block}"; }
};

exports.uq_global_menu_classic = GlobalMenuClassic;
