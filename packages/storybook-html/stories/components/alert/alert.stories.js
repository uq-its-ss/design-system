import classNames from "classnames";
import { Alerts } from "@uqds/alert/src/js/main";

export default {
  title: "Components/Alert",
  argTypes: {
    title: { control: "text" },
    message: { control: "text" },
    button: { control: "text" },
    status: {
      options: ["info", "success", "warning", "error"],
      control: "select",
    },
  },
  args: {
    status: "info",
    title: "",
    message: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>`,
    button: "",
    link: "",
  },
  render: ({ title, message, status, button, link }) => {
    return `
      <div class="${classNames("uq-alert", `uq-alert--${status}`)}" role="alert">
        <div class="uq-alert__message">
          ${title ? `<h3 class="uq-alert__title">${title}</h3>` : ""}
          ${message}
          ${button ? `<p><a href="#" title="Button" class="uq-button">${button}</a></p>` : ""}
          ${link ? `<a href="#" title="Link" class="uq-button--inline">${link}</a>` : ""}
        </div>
      </div>
    `;
  },
};

export const alertInfo = {};

export const alertSuccess = {
  args: {
    status: "success",
  },
};

export const alertWarning = {
  args: {
    status: "warning",
  },
};

export const alertError = {
  args: {
    status: "error",
  },
};

export const alertWithLink = {
  args: {
    link: "Link",
  },
};

export const alertWithButton = {
  args: {
    button: "Button",
  },
};

export const alertWithTitle = {
  args: {
    title: "Title",
  },
};

export const infoGlobal = {
  render: () => {
    return `
    <div class="uq-alert uq-alert--info uq-alert--dark uq-alert--global" role="alert">
      <div class="uq-alert__container">
        <div class="uq-alert__message">
          <h3 class="uq-alert__title">Title goes here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <p><a href="#" title="Link" class="uq-button--inline">Link</a></p>
          <button class="uq-alert__close">close</button>
        </div>
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
          <p><a href="#" title="Link" class="uq-button--inline">Link</a></p>
          <button class="uq-alert__close">close</button>
        </div>
      </div>
    </div>
    `;
  },

  name: "Success global",
};

export const warningGlobal = {
  render: () => `
    <div class="uq-alert uq-alert--warning uq-alert--dark uq-alert--global" role="alert">
      <div class="uq-alert__container">
        <div class="uq-alert__message">
          <h3 class="uq-alert__title">Title goes here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p><a href="#" title="Link" class="uq-button--inline">Link</a></p>
        </div>
      </div>
    </div>
    `,
    play: ({ canvasElement }) => {
      const alert = canvasElement.querySelector("#global-alerts-container");
      if (alert) new Alerts(alert);
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
          <p><a href="#" title="Link" class="uq-button--inline">Link</a></p>
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
  render: () => `
    <div id="global-alerts-container" data-uri="/api/v1/alerts.json">
    </div>
    `,
  play: ({ canvasElement }) => {
    const alert = canvasElement.querySelector("#global-alerts-container");
    if (alert) new Alerts(alert);
  },

  name: "Loaded via an API end-point",
};
