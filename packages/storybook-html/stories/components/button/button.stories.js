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
      <div class="uq-section text--center" style="padding: 3rem;">
            <button class="uq-button">Button</button>
      </div>
      <div class="uq-section text--center" style="background-color: #3a1f53; padding: 3rem;">
          <button class="uq-button">Button</button>
      </div>
    `;
  },
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

export const secondary = {
  render: () => {
    return `
      <div class="uq-section text--center" style="padding: 3rem;">
          <button class="uq-button uq-button--secondary">Button</button>
      </div>
      <div class="uq-section text--center" style="background-color: #3a1f53; padding: 3rem;">
        <button class="uq-button uq-button--secondary">Button</button>
      </div>
    `;
  },
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

export const tertiary = {
  render: () => {
    return `
      <div class="uq-section text--center" style="padding: 3rem;">
        <button class="uq-button uq-button--tertiary">Button</button> 
      </div>
      <div class="uq-section text--center" style="background-color: #3a1f53; padding: 3rem;">
        <button class="uq-button uq-button--tertiary">Button</button> 
      </div>
    `;
  },
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

export const expand = {
  render: () => {
    return `
      <button class="uq-button uq-button--expand">Button</button>
    `;
  },
};

export const size = {
  render: () => {
    return `
      <button class="uq-button">uq-button</button>
      <br/><br/>
      <button class="uq-button uq-button--tiny">uq-button--tiny</button>
      <br/><br/>
      <button class="uq-button uq-button--small">uq-button--small</button>
      <br/><br/>
      <button class="uq-button uq-button--large">uq-button--large</button>
    `;
  },
};
