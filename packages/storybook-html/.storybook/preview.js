import TocDocs from "./custom/components/TocDocs";
import DocsHeader from "./custom/components/DocsHeader";
import DocsPage from "./custom/components/DocsPage";

import "./preview.scss";

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    docs: {
      components: { h1: DocsHeader },
      container: TocDocs,
      page: DocsPage,
      toc: true, // 👈 Enables the table of contents
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#000000" },
        { name: "UQ purple", value: "#51247a" },
        { name: "UQ Neutral 1", value: "#D7D1CC" },
        {
          name: "UQ gradient",
          value: "linear-gradient(90deg, #51247A 0%, 87%, #962A8B 100%)",
        },
        {
          name: "Diagonal stripes",
          value:
            "repeating-linear-gradient(45deg, #efedeb, #efedeb 10px, #f7f6f5 10px, #f7f6f5 20px)",
        },
      ],
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          ["Overview", "Get started"],
          "Core",
          ["Typography", "Space", "Breakpoints", "Colour"],
          "Layout",
          ["Container", "Sections", "Page layouts", "Card grid"],
          "Components",
          ["Body", ["Body", "Elements", "Utilities"], "Navigation"],
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
};
export default preview;
