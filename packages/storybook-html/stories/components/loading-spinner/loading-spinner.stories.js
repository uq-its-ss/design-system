// import styles
import "./loading-spinner.scss";

// import HTML template strings
import loadingSpinnerHTML from "./loading-spinner.html?raw";
import loadingSpinnerLightHTML from "./loading-spinner-light.html?raw";
import loadingSpinnerSmallHTML from "./loading-spinner-small.html?raw";

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
      options: {
        purple: {
          name: "Purple",
          value: "#51247A",
        }
      }
    },
  },

  globals: {
    backgrounds: {
      value: "purple"
    }
  }
};

export const loadingSpinnerSmall = {
  render: () => {
    return loadingSpinnerSmallHTML;
  },

  name: "Small",
};
