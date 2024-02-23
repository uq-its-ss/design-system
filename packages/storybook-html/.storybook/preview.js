import "./preview.scss";

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
