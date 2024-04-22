// import HTML template strings
import WrittenStyleHTML from "./written-style.html";

export default {
  title: "Core/Standards/Written style guide",
  parameters: {
    layout: "fullscreen",
    viewMode: "story",
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
      canvas: { hidden: false },
    },
  },
};

export const WrittenStyle = {
  render: () => {
    return WrittenStyleHTML;
  },

  name: "Written style guide",

  parameters: {
    docs: {
      page: null,
    },
  },
};
