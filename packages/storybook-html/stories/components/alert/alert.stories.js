import classNames from "classnames";
import { Alerts } from "@uqds/alert/src/js/main";

export default {
  title: "Components/Alert",
  argTypes: {
    status: {
      name: "status",
      options: ["info", "success", "warning", "error"],
      control: "select",
    },
    isDark: {
      name: "dark",
      control: "boolean",
    },
    isGlobal: {
      name: "global",
      control: "boolean",
    },
    title: {
      control: "text",
      table: {
        category: "Content",
      },
    },
    message: {
      control: "text",
      table: {
        category: "Content",
      },
    },
    button: {
      control: "text",
      table: {
        category: "Call to action",
      },
    },
    link: {
      control: "text",
      table: {
        category: "Call to action",
      },
    },
  },
  args: {
    status: "info",
    isGlobal: false,
    isDark: false,
    title: "",
    message: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>`,
    button: "",
    link: "",
  },
  render: ({ isGlobal, isDark, status, title, message, button, link }) => {
    return `
      <div 
        class="${classNames(
          "uq-alert",
          `uq-alert--${status}`,
          isGlobal === true && "uq-alert--global",
          isDark === true && "uq-alert--dark",
        )}"
        role="alert">
        ${isGlobal ? `<div class="uq-alert__container">` : ""}
        <div class="uq-alert__message">
          ${title ? `<h3 class="uq-alert__title">${title}</h3>` : ""}
          ${message}
          ${button ? `<p><a href="#" title="Button" class="uq-button">${button}</a></p>` : ""}
          ${link ? `<a href="#" title="Link" class="uq-button--inline">${link}</a>` : ""}
        </div>
        ${isGlobal ? `</div">` : ""}
      </div>
    `;
  },
};

export const alert = {};

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
