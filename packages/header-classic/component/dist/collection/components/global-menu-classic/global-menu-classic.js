import { Host, h } from "@stencil/core";
export class GlobalMenuClassic {
    render() {
        return (h(Host, null,
            h("div", { class: "site-header__global-menu" },
                h("div", { class: "site-header__global-menu" },
                    h("div", { class: "global-menu hide-for-small-only" },
                        h("ul", { class: "global-menu__list" },
                            h("slot", null)))))));
    }
    static get is() { return "uq-global-menu-classic"; }
    static get originalStyleUrls() { return {
        "$": ["global-menu-classic.css"]
    }; }
    static get styleUrls() { return {
        "$": ["global-menu-classic.css"]
    }; }
}
