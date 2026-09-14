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
    titleElement: {
      name: "title element",
      options: ["h2", "h3", "h4", "h5", "h6"],
      control: "select",
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
    title: "",
    titleElement: "h3",
    message: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>`,
    button: "",
    link: "",
  },
  render: ({
    isGlobal,
    status,
    title,
    titleElement,
    message,
    button,
    link,
  }) => {
    return `
      <div 
        class="${classNames(
          "uq-alert",
          `uq-alert--${status}`,
          isGlobal === true && "uq-alert--global",
        )}"
        role="alert">
        <div class="uq-alert__message">
          ${title ? `<${titleElement}>${title}</${titleElement}>` : ""}
          ${message}
          ${button ? `<p><a href="#" title="Button" class="uq-button">${button}</a></p>` : ""}
          ${link ? `<p><a href="#" title="Link" class="uq-button--inline">${link}</a></p>` : ""}
        </div>
      </div>
    `;
  },
};

export const Alert = {};

// Examples
export const AlertPageInfo = {
  args: {
    status: "info",
    message: `<p>A info page alert</p>`,
  },
};

export const AlertPageSuccess = {
  args: {
    status: "success",
    title: "Success!",
    message: `<p>A success page alert</p>`,
  },
};

export const AlertPageWarning = {
  args: {
    status: "warning",
    message: `<p>A warning page alert including link. <a href='#'>Call to action</a></p>`,
  },
};

export const AlertPageError = {
  args: {
    status: "error",
    title: "A problem",
    message: `<p>A error page alert</p>`,
    button: "Call to action",
  },
};

export const AlertGlobalInfo = {
  args: {
    status: "info",
    isGlobal: true,
    message: `<p>A info global alert</p>`,
  },
};

export const AlertGlobalWarning = {
  args: {
    status: "warning",
    isGlobal: true,
    message: `<p>A warning global alert including link. <a href='#'>Call to action</a></p>`,
  },
};

export const LoadedFromExternalUri = {
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
