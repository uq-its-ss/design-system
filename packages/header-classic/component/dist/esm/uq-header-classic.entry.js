import { r as registerInstance, h, H as Host } from './core-ca671b55.js';

const Header = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error("name: required");
        }
    }
    render() {
        return (h(Host, null, h("a", { href: "#main-content", class: "show-on-focus" }, "Skip to main content"), h("div", { class: "site-header" }, h("div", { class: "site-header__content" }, h("div", { class: "columns medium-7 large-8" }, h("a", { href: "http://www.uq.edu.au/", title: "The University of Queensland", class: "uq-logo" }, "The University of Queensland"), h("div", { class: "site-title" }, this.name))))));
    }
    static get watchers() { return {
        "name": ["validateName"]
    }; }
    static get style() { return ":host{display:block}"; }
};

export { Header as uq_header_classic };
