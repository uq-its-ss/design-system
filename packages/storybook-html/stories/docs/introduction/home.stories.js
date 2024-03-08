// import HTML template strings
import HomePageHTML from "./home.html";
import "@uqds/grid/src/scss/main.scss";
import "@uqds/layout/src/scss/main.scss";
import "@uqds/hero/src/scss/main.scss";
import "@uqds/card/src/scss/main.scss";
import "@uqds/button/src/scss/main.scss";

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
