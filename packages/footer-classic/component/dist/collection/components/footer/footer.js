import { Host, h } from "@stencil/core";
export class Footer {
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error("pageUrl: required");
        }
        ;
    }
    showLoginOrLogout() {
        return (this.showLogin || this.showLogout);
    }
    hasLastUpdated() {
        return (typeof this.pageLastUpdated !== "undefined" && this.pageLastUpdated !== null && /\S/.test(this.pageLastUpdated));
    }
    render() {
        return (h(Host, null,
            h("div", { class: "site-footer" },
                h("div", { class: "site-footer__content" },
                    h("div", { class: "row" },
                        h("div", { class: "columns medium-8 large-9" },
                            h("span", { class: "footer__copyright" }, "\u00A9 The University of Queensland"),
                            h("div", { class: "footer__contact" },
                                "Enquiries: ",
                                h("a", { href: "tel:+61733651111", class: "footer__link footer__enquiries-phone" }, "+61 7 3365 1111"),
                                " \u00A0 | \u00A0 ",
                                h("a", { href: "https://uq.edu.au/contacts", class: "footer__link footer__contacts-link" }, "Contact directory")),
                            h("div", { class: "footer__meta" },
                                h("abbr", { title: "Australian Business Number" }, "ABN"),
                                ": 63 942 912 684 \u00A0 | \u00A0 ",
                                h("abbr", { title: "Commonwealth Register of Institutions and Courses for Overseas Students" }, "CRICOS"),
                                " Provider No: ",
                                h("a", { class: "footer__link cricos__link", href: "https://www.uq.edu.au/about/cricos-link", rel: "external" }, "00025B"))),
                        h("div", { class: "columns medium-4 large-3" },
                            h("div", { class: "site-footer__emergency-contact" },
                                h("strong", { class: "site-footer__sub-title" }, "Emergency"),
                                h("br", null),
                                "Phone: ",
                                h("a", { href: "tel:+61733653333", class: "footer__link footer__emergency-phone" }, "3365 3333")))),
                    h("div", { class: "row" },
                        h("div", { class: "site-footer__footer" },
                            h("div", { class: this.showLoginOrLogout() ? "columns medium-8 large-9 end" : "columns medium-8 large-9" },
                                h("a", { href: "https://www.uq.edu.au/terms-of-use/", rel: "external", class: "footer__link footer__terms-link" }, "Privacy & Terms of use"),
                                " \u00A0 | \u00A0 ",
                                h("a", { href: `http://www.uq.edu.au/feedback?r=${this.pageUrl}`, rel: "nofollow", class: "footer__link footer__feedback-link" }, "Feedback"),
                                " ",
                                this.hasLastUpdated() ? (h("span", null,
                                    "\u00A0 | \u00A0 ",
                                    h("span", { class: "footer__last-updated" },
                                        "Updated: ",
                                        this.pageLastUpdated))) : ""),
                            this.showLoginOrLogout() ? (h("div", { class: "columns large-3 medium-4" },
                                this.showLogin ? (h("a", { class: "footer__link footer__login-link", href: this.loginUrl }, "Login")) : "",
                                this.showLogout ? (h("a", { class: "footer__link footer__logout-link", href: this.logoutUrl }, "Logout")) : "")) : ""))))));
    }
    static get is() { return "uq-footer-classic"; }
    static get originalStyleUrls() { return {
        "$": ["footer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["footer.css"]
    }; }
    static get properties() { return {
        "pageUrl": {
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
            "attribute": "page-url",
            "reflect": false
        },
        "pageLastUpdated": {
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
            "attribute": "page-last-updated",
            "reflect": false
        },
        "showLogin": {
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
            "attribute": "show-login",
            "reflect": false
        },
        "loginUrl": {
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
            "attribute": "login-url",
            "reflect": false
        },
        "showLogout": {
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
            "attribute": "show-logout",
            "reflect": false
        },
        "logoutUrl": {
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
            "attribute": "logout-url",
            "reflect": false
        }
    }; }
    static get watchers() { return [{
            "propName": "pageUrl",
            "methodName": "validateName"
        }]; }
}
