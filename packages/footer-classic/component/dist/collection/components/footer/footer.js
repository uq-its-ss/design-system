import { Host, h } from "@stencil/core";
export class Footer {
    render() {
        return (h(Host, null,
            h("div", { class: "site-footer" },
                h("div", { class: "site-footer__content" },
                    h("div", { class: "row" },
                        h("div", { class: "columns large-9 medium-8" },
                            h("span", { class: "footer__copyright" }, "\u00A9 The University of Queensland"),
                            h("div", { class: "footer__contact" },
                                "Enquiries: ",
                                h("a", { href: "tel:+61733651111", class: "footer__link footer__enquiries-phone" }, "+61 7 3365 1111"),
                                "\u00A0 | \u00A0 ",
                                h("a", { href: "https://uq.edu.au/contacts", class: "footer__link footer__contacts-link" }, "Contact directory")),
                            h("div", { class: "footer__meta" },
                                h("abbr", { title: "Australian Business Number" }, "ABN"),
                                ": 63 942 912 684 \u00A0 | \u00A0",
                                h("abbr", { title: "Commonwealth Register of Institutions and Courses for Overseas Students" }, "CRICOS"),
                                "Provider No: ",
                                h("a", { class: "footer__link cricos__link", href: "https://www.uq.edu.au/about/cricos-link", rel: "external" }, "00025B"))),
                        h("div", { class: "columns large-3 medium-4" },
                            h("div", { class: "site-footer__emergency-contact" },
                                h("strong", { class: "site-footer__sub-title" }, "Emergency"),
                                h("br", null),
                                "Phone: ",
                                h("a", { href: "tel:+61733653333", class: "footer__link footer__emergency-phone" }, "3365 3333")))),
                    h("div", { class: "row" },
                        h("div", { class: "site-footer__footer" },
                            h("div", { class: "columns large-9 medium-8 end" },
                                h("a", { href: "https://www.uq.edu.au/terms-of-use/", rel: "external", class: "footer__link footer__terms-link" }, "Privacy & Terms of use"),
                                " \u00A0 | \u00A0",
                                h("a", { href: "http://www.uq.edu.au/feedback?r=uq.edu.au/password/reset", rel: "external", class: "footer__link footer__feedback-link" }, "Feedback"))))))));
    }
    static get is() { return "uq-footer-classic"; }
    static get originalStyleUrls() { return {
        "$": ["footer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["footer.css"]
    }; }
}
