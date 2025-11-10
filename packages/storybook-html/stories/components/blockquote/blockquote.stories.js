import classNames from "classnames";
import "@uqds/blockquote/src/scss/main.scss";

export default {
  title: "Components/Blockquote",
  argTypes: {
    content: {
      control: "text",
    },
    citation: {
      control: "text",
    },
    light: {
      control: "boolean",
    },
  },
  args: {
    content: `<p>Words can be like X-rays, if you use them properly—they'll go through anything.</p><p>You read and you're pierced.</p>`,
    citation: `Aldous Huxley, <a href="https://www.huxley.net/bnw/four.html">Brave New World</a>`,
    light: false,
  },
  render: ({ content, citation, light }) => {
    return `
<blockquote class="${classNames({ "blockquote--light": light })}">
  ${content}
  ${citation ? `<cite>${citation}</cite>` : ""}
</blockquote>`;
  },
};

export const Blockquote = {};

export const Light = {
  args: {
    light: true,
  },
  globals: {
    backgrounds: {
      value: "uq_purple"
    }
  },
};
