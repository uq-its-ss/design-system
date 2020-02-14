'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-8bde1c55.js');

const Footer = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error("pageUrl: required");
        }
    }
    hasLastUpdated() {
        return (typeof this.pageLastUpdated !== "undefined" && this.pageLastUpdated !== null && /\S/.test(this.pageLastUpdated));
    }
    render() {
        return (core.h(core.Host, null, core.h("div", { class: "site-footer" }, core.h("div", { class: "site-footer__content" }, core.h("div", { class: "row" }, core.h("div", { class: "columns large-9 medium-8" }, core.h("span", { class: "footer__copyright" }, "\u00A9 The University of Queensland"), core.h("div", { class: "footer__contact" }, "Enquiries: ", core.h("a", { href: "tel:+61733651111", class: "footer__link footer__enquiries-phone" }, "+61 7 3365 1111"), " \u00A0 | \u00A0 ", core.h("a", { href: "https://uq.edu.au/contacts", class: "footer__link footer__contacts-link" }, "Contact directory")), core.h("div", { class: "footer__meta" }, core.h("abbr", { title: "Australian Business Number" }, "ABN"), ": 63 942 912 684 \u00A0 | \u00A0 ", core.h("abbr", { title: "Commonwealth Register of Institutions and Courses for Overseas Students" }, "CRICOS"), " Provider No: ", core.h("a", { class: "footer__link cricos__link", href: "https://www.uq.edu.au/about/cricos-link", rel: "external" }, "00025B"))), core.h("div", { class: "columns large-3 medium-4" }, core.h("div", { class: "site-footer__emergency-contact" }, core.h("strong", { class: "site-footer__sub-title" }, "Emergency"), core.h("br", null), "Phone: ", core.h("a", { href: "tel:+61733653333", class: "footer__link footer__emergency-phone" }, "3365 3333")))), core.h("div", { class: "row" }, core.h("div", { class: "site-footer__footer" }, core.h("div", { class: "columns large-9 medium-8 end" }, core.h("a", { href: "https://www.uq.edu.au/terms-of-use/", rel: "external", class: "footer__link footer__terms-link" }, "Privacy & Terms of use"), " \u00A0 | \u00A0 ", core.h("a", { href: `http://www.uq.edu.au/feedback?r=${this.pageUrl}`, rel: "nofollow", class: "footer__link footer__feedback-link" }, "Feedback"), " ", this.hasLastUpdated() ? (core.h("span", null, "\u00A0 | \u00A0 ", core.h("span", { class: "footer__last-updated" }, "Updated: ", this.pageLastUpdated))) : "")))))));
    }
    static get watchers() { return {
        "pageUrl": ["validateName"]
    }; }
    static get style() { return ":host{display:block}"; }
};

exports.uq_footer_classic = Footer;
