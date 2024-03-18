import baddestForm from "./form-errors-kitchen-sink.html";
import passwordResetHTML from "./examples/password-reset.html";

// import scripts
import passwordResetInit from "./examples/password-reset.es6";

import "./examples/password-reset.scss";

const BadFormExample = {
  render: () => {
    return baddestForm;
  },
};

const PasswordForm = {
  render: () => {
    return passwordResetHTML;
  },
  play: () => { 
    new passwordResetInit();
  },
};

export default {
  title: "Patterns/Form validation",

  parameters: {
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
  },
};

export const EmptyFormSubmitExample = {
  render: () => {
    return `
      ${BadFormExample.render()}
    `;
  },
  name: "Empty form submit example",
};

export const PasswordForm_ = {
  render: () => {
    return `
      ${PasswordForm.render()}
    `;
  },
  play: () => { 
    new passwordResetInit();
  },
  name: "Password form",
  inline: false,
  height: 600,

  parameters: {
    layout: "padded",
  },
};
