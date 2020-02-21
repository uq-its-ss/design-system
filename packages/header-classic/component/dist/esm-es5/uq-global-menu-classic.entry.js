import { r as registerInstance, h, H as Host } from './core-6472e3d3.js';
var GlobalMenuClassic = /** @class */ (function () {
    function GlobalMenuClassic(hostRef) {
        registerInstance(this, hostRef);
    }
    GlobalMenuClassic.prototype.render = function () {
        return (h(Host, null, h("div", { class: "site-header__global-menu" }, h("div", { class: "site-header__global-menu" }, h("div", { class: "global-menu hide-for-small-only" }, h("ul", { class: "global-menu__list" }, h("slot", null)))))));
    };
    Object.defineProperty(GlobalMenuClassic, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return GlobalMenuClassic;
}());
export { GlobalMenuClassic as uq_global_menu_classic };
