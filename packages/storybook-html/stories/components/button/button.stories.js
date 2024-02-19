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
  <div class="uq-section uq-section--centered" style="background-color: #3b383e;">
    <div class="uq-section__container">
      <div class="uq-section__content">
      <button class="uq-button">Button</button>
    </div>
    </div>
  </div>
  `;
};

primary.storyName = "Primary (base)";

export const secondary = () => {
  return `
  <div class="uq-section uq-section--centered">
  <div class="uq-section__container">
    <div class="uq-section__content">
      <button class="uq-button uq-button--secondary">Button</button>
  </div>
  </div>
</div>
<div class="uq-section uq-section--centered" style="background-color: #3b383e;">
  <div class="uq-section__container">
    <div class="uq-section__content">
    <button class="uq-button uq-button--secondary">Button</button>
  </div>
  </div>
</div>
  `;
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
<div class="uq-section uq-section--centered" style="background-color: #3b383e;">
  <div class="uq-section__container">
    <div class="uq-section__content">
    <button class="uq-button uq-button--tertiary">Button</button>
  </div>
  </div>
</div>
  `;
};

tertiary.storyName = "Tertiary";



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
