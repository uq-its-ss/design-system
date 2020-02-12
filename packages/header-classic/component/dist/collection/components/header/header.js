import { Host, h } from "@stencil/core";
export class Header {
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error("name: required");
        }
        ;
    }
    render() {
        return (h(Host, null,
            h("a", { href: "#main-content", class: "show-on-focus" }, "Skip to main content"),
            h("div", { class: "site-header" },
                h("div", { class: "site-header__content" },
                    h("div", { class: "columns medium-7 large-8" },
                        h("a", { href: "http://www.uq.edu.au/", title: "The University of Queensland", class: "uq-logo" }, "The University of Queensland"),
                        h("div", { class: "site-title" }, this.name))))));
    }
    static get is() { return "uq-header-classic"; }
    static get originalStyleUrls() { return {
        "$": ["header.css"]
    }; }
    static get styleUrls() { return {
        "$": ["header.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        },
        "sticky": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "sticky",
            "reflect": false
        }
    }; }
    static get watchers() { return [{
            "propName": "name",
            "methodName": "validateName"
        }]; }
}
