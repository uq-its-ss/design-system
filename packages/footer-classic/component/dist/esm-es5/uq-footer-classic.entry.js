import { r as registerInstance, h, H as Host } from './core-d7d91b34.js';
var Footer = /** @class */ (function () {
    function Footer(hostRef) {
        registerInstance(this, hostRef);
    }
    Footer.prototype.validateName = function (newValue) {
        var isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error("pageUrl: required");
        }
    };
    Footer.prototype.hasLastUpdated = function () {
        return (typeof this.pageLastUpdated !== "undefined" && this.pageLastUpdated !== null && /\S/.test(this.pageLastUpdated));
    };
    Footer.prototype.render = function () {
        return (h(Host, null, h("div", { class: "site-footer" }, h("div", { class: "site-footer__content" }, h("div", { class: "row" }, h("div", { class: "columns large-9 medium-8" }, h("span", { class: "footer__copyright" }, "\u00A9 The University of Queensland"), h("div", { class: "footer__contact" }, "Enquiries: ", h("a", { href: "tel:+61733651111", class: "footer__link footer__enquiries-phone" }, "+61 7 3365 1111"), " \u00A0 | \u00A0 ", h("a", { href: "https://uq.edu.au/contacts", class: "footer__link footer__contacts-link" }, "Contact directory")), h("div", { class: "footer__meta" }, h("abbr", { title: "Australian Business Number" }, "ABN"), ": 63 942 912 684 \u00A0 | \u00A0 ", h("abbr", { title: "Commonwealth Register of Institutions and Courses for Overseas Students" }, "CRICOS"), " Provider No: ", h("a", { class: "footer__link cricos__link", href: "https://www.uq.edu.au/about/cricos-link", rel: "external" }, "00025B"))), h("div", { class: "columns large-3 medium-4" }, h("div", { class: "site-footer__emergency-contact" }, h("strong", { class: "site-footer__sub-title" }, "Emergency"), h("br", null), "Phone: ", h("a", { href: "tel:+61733653333", class: "footer__link footer__emergency-phone" }, "3365 3333")))), h("div", { class: "row" }, h("div", { class: "site-footer__footer" }, h("div", { class: "columns large-9 medium-8 end" }, h("a", { href: "https://www.uq.edu.au/terms-of-use/", rel: "external", class: "footer__link footer__terms-link" }, "Privacy & Terms of use"), " \u00A0 | \u00A0 ", h("a", { href: "http://www.uq.edu.au/feedback?r=" + this.pageUrl, rel: "nofollow", class: "footer__link footer__feedback-link" }, "Feedback"), " ", this.hasLastUpdated() ? (h("span", null, "\u00A0 | \u00A0 ", h("span", { class: "footer__last-updated" }, "Updated: ", this.pageLastUpdated))) : "")))))));
    };
    Object.defineProperty(Footer, "watchers", {
        get: function () {
            return {
                "pageUrl": ["validateName"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Footer, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return Footer;
}());
export { Footer as uq_footer_classic };
