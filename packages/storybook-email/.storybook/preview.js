import TocDocs from "./custom/components/TocDocs";
import DocsHeader from "./custom/components/DocsHeader";
import DocsPage from "./custom/components/DocsPage";

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
        },
      },
    },
    options: {
      storySort: {
        order: ["Design guidelines", "Templates", "Components"],
      },
    },
  },
};
export default preview;
