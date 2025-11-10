import TocDocs from "./custom/components/TocDocs";
import DocsHeader from "./custom/components/DocsHeader";
import DocsPage from "./custom/components/DocsPage";

import "@uqds/layout/src/scss/main.scss";
import "@uqds/sections/src/scss/main.scss";
import "@uqds/hero/src/scss/main.scss";
import "@uqds/card/src/scss/main.scss";
import "@uqds/pane/src/scss/main.scss";
import "@uqds/button/src/scss/main.scss";
import "@uqds/icon/src/scss/main.scss";
import "@uqds/alert/src/scss/main.scss";
import "@uqds/accordion/src/scss/main.scss";
import "@uqds/form/src/scss/main.scss";
import "@uqds/table/src/scss/main.scss";
import "@uqds/social/src/scss/main.scss";
import "@uqds/pagination/src/scss/main.scss";

import "./preview.scss";

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    docs: {
      components: { h1: DocsHeader },
      container: TocDocs,
      page: DocsPage,
      toc: true, // 👈 Enables the table of contents
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#000000" },
        uq_purple: { name: "UQ purple", value: "#51247a" },
        uq_neutral_1: { name: "UQ Neutral 1", value: "#D7D1CC" },

        uq_gradient: {
          name: "UQ gradient",
          value: "linear-gradient(90deg, #51247A 0%, 87%, #962A8B 100%)",
        },

        diagonal_stripes: {
          name: "Diagonal stripes",
          value:
            "repeating-linear-gradient(45deg, #efedeb, #efedeb 10px, #f7f6f5 10px, #f7f6f5 20px)",
        }
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          ["Overview", "Get started"],
          "Core",
          ["Typography", "Space", "Breakpoints", "Colour"],
          "Layout",
          ["Container", "Page layouts", "Card grid"],
          "Components",
          ["Body", ["Body", "Elements", "Utilities"], "Navigation", "Section"],
          "Patterns",
          ["Kitchen sink", "Basic page"],
          "Templates",
          "Deliverables",
          ["UQ Maps", ["Overview", "UX models"]],
          "Deprecated",
        ],
      },
    },
  },

  tags: ["autodocs"],
};
export default preview;
