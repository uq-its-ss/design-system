import { useEffect } from "@storybook/addons";

// import styles
import "./alert.scss";

// import scripts
import Alerts from "@uqds/alert/src/js/alerts";

export default {
  title: "Components/Alert",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const alertInfo = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--info" role="alert">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    `;
  },

  name: "Info",
};

export const alertSuccess = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--success" role="alert">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    `;
  },

  name: "Success",
};

export const alertWarning = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--warning" role="alert">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    `;
  },

  name: "Warning",
};

export const alertError = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--error" role="alert">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    `;
  },

  name: "Error",
};

export const alertWithLink = {
  render: () => {
    return `
    <div class="uq-alert" role="alert">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Link" class="uq-button--inline">Link</a>
      </div>
    </div>
    `;
  },

  name: "with Link",
};

export const alertWithButton = {
  render: () => {
    return `
    <div class="uq-alert" role="alert">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Button" class="uq-button">Button</a>
      </div>
    </div>
    `;
  },

  name: "with Button",
};

export const alertWithTitle = {
  render: () => {
    return `
    <div class="uq-alert" role="alert">
      <div class="uq-alert__message">
        <h3 class="uq-alert__title">Title goes here</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Button" class="uq-button">Button</a>
      </div>
    </div>
    `;
  },

  name: "with Title",
};

export const infoGlobal = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--info uq-alert--dark uq-alert--global" role="alert">
      <div class="uq-alert__container">
        <div class="uq-alert__message">
          <h3 class="uq-alert__title">Title goes here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" title="Link" class="uq-button--inline">Link</a>
        </div>
        <button class="uq-alert__close">Close</button>
      </div>
    </div>
    `;
  },

  name: "Info global",
};

export const successGlobal = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--success uq-alert--dark uq-alert--global" role="alert">
      <div class="uq-alert__container">
        <div class="uq-alert__message">
          <h3 class="uq-alert__title">Title goes here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" title="Link" class="uq-button--inline">Link</a>
        </div>
        <button class="uq-alert__close">Close</button>
      </div>
    </div>
    `;
  },

  name: "Success global",
};

export const warningGlobal = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--warning uq-alert--dark uq-alert--global" role="alert">
      <div class="uq-alert__container">
        <div class="uq-alert__message">
          <h3 class="uq-alert__title">Title goes here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" title="Link" class="uq-button--inline">Link</a>
        </div>
      </div>
    </div>
    `;
  },

  name: "Warning global",
};

export const errorGlobal = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--error uq-alert--dark uq-alert--global" role="alert">
      <div class="uq-alert__container">
        <div class="uq-alert__message">
          <h3 class="uq-alert__title">Title goes here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" title="Link" class="uq-button--inline">Link</a>
        </div>
      </div>
    </div>
    `;
  },

  name: "Error global",
};

export const infoGlobalNoTitleOrDismiss = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--info uq-alert--dark uq-alert--global uq-alert" role="alert">
      <div class="uq-alert__container">
        <div class="uq-alert__message">
          <h3 class="uq-alert__title visually-hidden">Title goes here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#" title="Link" class="uq-button--inline">Link</a></p>
        </div>
      </div>
    </div>
    `;
  },

  name: "Info global (no title, no dismiss)",
};

export const warningGlobalNoTitleOrDismiss = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--warning uq-alert--dark uq-alert--global uq-alert" role="alert">
      <div class="uq-alert__container">
        <div class="uq-alert__message">
          <h3 class="uq-alert__title visually-hidden">Title goes here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#" title="Link" class="uq-button--inline">Link</a></p>
        </div>
      </div>
    </div>
    `;
  },

  name: "Warning global (no title, no dismiss)",
};

export const loadedFromExternalUri = {
  render: () => {
    useEffect(() => {
      new Alerts(document.getElementById("global-alerts-container"));
    });
    return `
    <div id="global-alerts-container" data-uri="/api/v1/alerts.json">
    </div>
    `;
  },

  name: "Loaded via an API end-point",
};
