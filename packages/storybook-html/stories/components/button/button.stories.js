// import styles
import "./button.scss";

export default {
  title: "Components/Button",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const primary = {
  render: () => {
    return `
      <button class="uq-button">Button</button>
      <button class="uq-button uq-button--outline">Button</button>
      <button class="uq-button uq-button--text">Button</button>
    `;
  },

  name: "Primary (base)",
};

export const secondary = {
  render: () => {
    return `
      <button class="uq-button uq-button--secondary">Button</button>
      <button class="uq-button uq-button--secondary uq-button--outline">Button</button>
      <button class="uq-button uq-button--secondary uq-button--text">Button</button>
    `;
  },

  name: "Secondary",
};

export const secondaryLight = {
  render: () => {
    return `
      <button class="uq-button uq-button--secondary uq-button--outline uq-button--light">Button</button>
      <button class="uq-button uq-button--secondary uq-button--text uq-button--light">Button</button>
    `;
  },

  name: "Secondary light",

  parameters: {
    docs: {
      inlineStories: false,
    },
    backgrounds: {
      default: "Dark",
    },
  },
};

export const purple = () => {
  return `
    <button class="uq-button uq-button--purple">Button</button>
    <button class="uq-button uq-button--purple uq-button--outline">Button</button>
    <button class="uq-button uq-button--purple uq-button--text">Button</button>
  `;
};

export const expand = () => {
  return `
    <button class="uq-button uq-button--expand">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--expand uq-button--outline">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--expand uq-button--text">Button</button>
  `;
};

export const size = () => {
  return `
    <button class="uq-button">Button</button>
    <button class="uq-button uq-button--outline">Button</button>
    <button class="uq-button uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--tiny">Button</button>
    <button class="uq-button uq-button--tiny uq-button--outline">Button</button>
    <button class="uq-button uq-button--tiny uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--small">Button</button>
    <button class="uq-button uq-button--small uq-button--outline">Button</button>
    <button class="uq-button uq-button--small uq-button--text">Button</button>
    <br/><br/>
    <button class="uq-button uq-button--large">Button</button>
    <button class="uq-button uq-button--large uq-button--outline">Button</button>
    <button class="uq-button uq-button--large uq-button--text">Button</button>    
  `;
};
