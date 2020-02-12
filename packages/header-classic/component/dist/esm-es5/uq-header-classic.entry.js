import { r as registerInstance, h, H as Host } from './core-ca671b55.js';
var Header = /** @class */ (function () {
    function Header(hostRef) {
        registerInstance(this, hostRef);
    }
    Header.prototype.validateName = function (newValue) {
        var isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error("name: required");
        }
    };
    Header.prototype.render = function () {
        return (h(Host, null, h("a", { href: "#main-content", class: "show-on-focus" }, "Skip to main content"), h("div", { class: "site-header" }, h("div", { class: "site-header__content" }, h("div", { class: "columns medium-7 large-8" }, h("a", { href: "http://www.uq.edu.au/", title: "The University of Queensland", class: "uq-logo" }, "The University of Queensland"), h("div", { class: "site-title" }, this.name))))));
    };
    Object.defineProperty(Header, "watchers", {
        get: function () {
            return {
                "name": ["validateName"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Header, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return Header;
}());
export { Header as uq_header_classic };
