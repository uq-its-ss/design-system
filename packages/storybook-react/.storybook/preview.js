import "@uqds/react/css";
import "../../storybook-html/.storybook/preview.scss";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      values: [{ name: "UQ purple", value: "#51247a" }],
    },
  },
};

export default preview;
