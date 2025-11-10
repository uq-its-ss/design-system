import "@uqds/react/src/scss/main.scss";
import "../../storybook-html/.storybook/preview.scss";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      options: {
        uq_purple: { name: "UQ purple", value: "#51247a" }
      },
    },
  },
};

export default preview;
