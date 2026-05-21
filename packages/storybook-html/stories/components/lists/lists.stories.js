// import styles
import "./lists.scss";

// import HTML template strings
import listsHTML from "./lists.html?raw";

export default {
  title: "Components/Lists",
  parameters: {
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const all = () => {
  return listsHTML;
};
