// import styles
import "./loading-spinner.scss";

// import HTML template strings
import loadingSpinnerHTML from "./loading-spinner.html";
import loadingSpinnerLightHTML from "./loading-spinner-light.html";
import loadingSpinnerSmallHTML from "./loading-spinner-small.html";

export default {
  title: "Components/Loading spinner",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const loadingSpinner = {
  render: () => {
    return loadingSpinnerHTML;
  },

  name: "Default",
};

export const loadingSpinnerLight = {
  render: () => {
    return loadingSpinnerLightHTML;
  },

  name: "Light",

  parameters: {
    docs: {
      inlineStories: false,
    },
    backgrounds: {
      default: "Purple",
      values: [
        {
          name: "Purple",
          value: "#51247A",
        },
      ],
    },
  },
};

export const loadingSpinnerSmall = {
  render: () => {
    return loadingSpinnerSmallHTML;
  },

  name: "Small",
};
