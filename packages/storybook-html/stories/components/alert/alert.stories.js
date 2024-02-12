import { useEffect } from "@storybook/addons";

// import styles
import "./alert.scss";

// import scripts
import Alerts from "@uqds/alert/src/js/alerts";

// documentation
import docs from "./alert.mdx";

export default {
  title: "Components/Alert",
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

export const alertInfo = () => {
  return `
  <div class="uq-alert uq-alert--info" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  `;
};
alertInfo.storyName = "Info";

export const alertSuccess = () => {
  return `
  <div class="uq-alert uq-alert--success" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  `;
};
alertSuccess.storyName = "Success";

export const alertWarning = () => {
  return `
  <div class="uq-alert uq-alert--warning" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  `;
};
alertWarning.storyName = "Warning";

export const alertError = () => {
  return `
  <div class="uq-alert uq-alert--error" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  `;
};
alertError.storyName = "Error";

export const alertWithLink = () => {
  return `
  <div class="uq-alert" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" title="Link" class="uq-button--inline">Link</a>
    </div>
  </div>
  `;
};
alertWithLink.storyName = "with Link";

export const alertWithButton = () => {
  return `
  <div class="uq-alert" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" title="Button" class="uq-button">Button</a>
    </div>
  </div>
  `;
};
alertWithButton.storyName = "with Button";

export const alertWithTitle = () => {
  return `
  <div class="uq-alert" role="alert">
    <div class="uq-alert__message">
      <h3 class="uq-alert__title">Title goes here</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" title="Button" class="uq-button">Button</a>
    </div>
  </div>
  `;
};
alertWithTitle.storyName = "with Title";

export const infoGlobal = () => {
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
};
infoGlobal.storyName = "Info global";

export const successGlobal = () => {
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
};
successGlobal.storyName = "Success global";

export const warningGlobal = () => {
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
};
warningGlobal.storyName = "Warning global";

export const errorGlobal = () => {
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
};
errorGlobal.storyName = "Error global";

export const infoGlobalNoTitleOrDismiss = () => {
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
};
infoGlobalNoTitleOrDismiss.storyName = "Info global (no title, no dismiss)";

export const warningGlobalNoTitleOrDismiss = () => {
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
};
warningGlobalNoTitleOrDismiss.storyName =
  "Warning global (no title, no dismiss)";

export const loadedFromExternalUri = () => {
  useEffect(() => {
    new Alerts(document.getElementById("global-alerts-container"));
  });
  return `
  <div id="global-alerts-container" data-uri="/api/v1/alerts.json">
  </div>
  `;
};
loadedFromExternalUri.storyName = "Loaded via an API end-point";
