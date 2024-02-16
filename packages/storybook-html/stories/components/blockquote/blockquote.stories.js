// import styles
import "./blockquote.scss";

// import HTML template strings
import blockquoteHTML from "./blockquote.html";
import blockquoteLightHTML from "./blockquote-light.html";

// documentation
import docs from "./blockquote.mdx";

export default {
  title: "Components/Blockquote",
  parameters: {
    docs: {
      page: docs,
    },
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
  render: () => {
    return blockquoteLightHTML;
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
