// import HTML template strings
import HomePageHTML from "./home.html";

export default {
  title: "Introduction",
  parameters: {
    layout: "fullscreen",
    viewMode: "story",
    tags: [""],
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
};
