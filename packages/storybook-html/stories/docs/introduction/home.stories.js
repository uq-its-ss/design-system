// import HTML template strings
import HomePageHTML from "./home.html";

export default {
  title: "Introduction",
  parameters: {
    layout: "fullscreen",
    viewMode: "story",
    tags: [""],
    docs: {
      toc: false, // 👈 Enables the table of contents
      autodocs: "false",
    },
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
      canvas: { hidden: false },
    },
  },
};

export const HomePage = {
  render: () => {
    return HomePageHTML;
  },

  name: "Overview",

  parameters: {
    docs: {
      page: null,
    },
  },
};
