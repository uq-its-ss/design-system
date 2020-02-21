import { r as registerInstance, h, H as Host } from './core-6472e3d3.js';

const GlobalMenuClassic = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "site-header__global-menu" }, h("div", { class: "site-header__global-menu" }, h("div", { class: "global-menu hide-for-small-only" }, h("ul", { class: "global-menu__list" }, h("slot", null)))))));
    }
    static get style() { return ":host{display:block}"; }
};

export { GlobalMenuClassic as uq_global_menu_classic };
