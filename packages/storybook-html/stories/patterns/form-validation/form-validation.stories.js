import { useEffect } from "@storybook/addons";
import baddestForm from "./form-errors-kitchen-sink.html";
import passwordResetHTML from "./examples/password-reset.html";
import passwordResetInit from "./examples/password-reset.es6";
import "./examples/password-reset.scss";

const BadFormExample = () => {
  return baddestForm;
};

const PasswordForm = () => {
  useEffect(() => {
    var init = new passwordResetInit();
  });
  return passwordResetHTML;
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
  render: BadFormExample.bind({}),
  name: "Empty form submit example",
};

export const PasswordForm_ = {
  render: PasswordForm.bind({}),
  name: "Password form",
  inline: false,
  height: 600,

  parameters: {
    layout: "padded",
  },
};
