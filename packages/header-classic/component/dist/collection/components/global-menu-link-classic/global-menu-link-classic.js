import { h } from "@stencil/core";
export const GlobalMenuLinkClassic = ({ name, keyboardAccess, href }) => (h("li", { class: "global-menu__item" },
    h("a", { class: "global-menu__link", accessKey: keyboardAccess, href: href }, name)));
