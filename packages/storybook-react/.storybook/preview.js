import "@uqds/react/src/scss/main.scss";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "UQ purple", value: "#51247a" },
      ],
    },
  },
};

export default preview;
