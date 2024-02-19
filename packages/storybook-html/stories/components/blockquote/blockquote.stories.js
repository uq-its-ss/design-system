// import styles
import "./blockquote.scss";

// import HTML template strings
import blockquoteHTML from "./blockquote.html";
import blockquoteLightHTML from "./blockquote-light.html";

export default {
  title: "Components/Blockquote",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const blockquote = {
  render: () => {
    return blockquoteHTML;
  },

  name: "Default",
};

export const blockquoteLight = {

  parameters: {
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

  render: () => {
    return blockquoteLightHTML;
  },

  name: "Light",
};
