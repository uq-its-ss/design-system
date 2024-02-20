// import styles
import "./button.scss";

// documentation
import docs from "./button.docs.mdx";

export default {
  title: "Components/Button",
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

export const primary = () => {
  return `
  <div class="uq-section uq-section--centered">
    <div class="uq-section__container">
      <div class="uq-section__content">
        <button class="uq-button">Button</button>
    </div>
    </div>
  </div>
  <div class="uq-section uq-section--centered" style="background-color: #3a1f53;">
    <div class="uq-section__container">
      <div class="uq-section__content">
      <button class="uq-button">Button</button>
    </div>
    </div>
  </div>
  `;
};

primary.parameters = {
  docs: {
    source: {
      code: '<button class="uq-button">Button</button>',
      language: "html",
      type: "auto",
    },
  },
};

export const secondary = () => {
  return `
  <div class="uq-section uq-section--centered">
  <div class="uq-section__container">
    <div class="uq-section__content">
      <button class="uq-button uq-button--secondary">Button</button>
  </div>
  </div>
</div>
<div class="uq-section uq-section--centered" style="background-color: #3a1f53;">
  <div class="uq-section__container">
    <div class="uq-section__content">
    <button class="uq-button uq-button--secondary">Button</button>
  </div>
  </div>
</div>
  `;
};
secondary.parameters = {
  docs: {
    source: {
      code: '<button class="uq-button uq-button--secondary">Button</button>',
      language: "html",
      type: "auto",
    },
  },
};

export const tertiary = () => {
  return `
  <div class="uq-section uq-section--centered">
  <div class="uq-section__container">
    <div class="uq-section__content">
    <button class="uq-button uq-button--tertiary">Button</button> 
  </div>
  </div>
</div>
<div class="uq-section uq-section--centered" style="background-color: #3a1f53;">
  <div class="uq-section__container">
    <div class="uq-section__content">
    <button class="uq-button uq-button--tertiary">Button</button>
  </div>
  </div>
</div>
  `;
};

tertiary.parameters = {
  docs: {
    source: {
      code: '<button class="uq-button uq-button--tertiary">Button</button>',
      language: "html",
      type: "auto",
    },
  },
};

export const expand = () => {
  return `
    <button class="uq-button uq-button--expand">Button</button>
  `;
};

export const size = () => {
  return `
    <button class="uq-button">uq-button</button>
    <br/><br/>
    <button class="uq-button uq-button--tiny">uq-button--tiny</button>
    <br/><br/>
    <button class="uq-button uq-button--small">uq-button--small</button>
    <br/><br/>
    <button class="uq-button uq-button--large">uq-button--large</button>
  `;
};
