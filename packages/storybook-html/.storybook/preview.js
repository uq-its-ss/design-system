// import DocsHeader from "./custom/components/DocsHeader";
import "./preview.scss";

export const parameters = {
  layout: "centered",
  viewMode: "docs", // There's a bug, reproducable upon first-load of Storybook, where viewMode is ignored
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
    canvas: { hidden: true },
  },
  docs: {
    toc: true, // 👈 Enables the table of contents
  //  components: { h1: DocsHeader },
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
    grid: {
      disable: true,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        ["Overview", "Get started"],
        "Core",
        [
          "Fonts",
          "Typography",
          "Space",
          "Breakpoints",
          "Colour",
          ["Applying colour", "Base colour palette"],
        ],
        "Layout",
        ["Layout system", "Grid"],
        "Components",
        ["Body", ["Body", "Elements", "Utilities"]],
        "Patterns",
        "Gallery & Examples",
        "Deliverables",
        ["UQ Maps", ["Overview", "UX models"]],
        "Legacy",
      ],
    },
  },
};
