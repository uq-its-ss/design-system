import "@uqds/captcha/src/scss/main.scss";
import { captcha } from "@uqds/captcha/src/js/main";
import { useEffect } from "storybook/preview-api";

const SITEKEY = "FCMGETO5UETK6BA9";
const SDK_VERSION = "1.0.2";

export default {
  title: "Components/Captcha",
};

// Example 1: JavaScript SDK (programmatic)
export const Captcha = {
  render: () => {
    const form = document.createElement("form");
    form.className = "uq-form";

    const mount = document.createElement("div");
    mount.className = "uq-captcha";
    form.appendChild(mount);

    // Dispose of the widget when the canvas is replaced or re-rendered
    useEffect(() => {
      const widget = captcha(mount, SITEKEY);
      return () => widget.destroy();
    }, [mount]);

    return form;
  },
};

// Example 2: HTML scripts and widget
export const CaptchaHtmlScripts = {
  name: "Captcha (HTML Scripts)",
  render: () => `
    <script type="module" src="https://cdn.jsdelivr.net/npm/@friendlycaptcha/sdk@${SDK_VERSION}/site.min.js" async defer></script>
    <script nomodule src="https://cdn.jsdelivr.net/npm/@friendlycaptcha/sdk@${SDK_VERSION}/site.compat.min.js" async defer></script>
    <form class="uq-form">
      <div class="uq-captcha frc-captcha" data-sitekey="${SITEKEY}"></div>
    </form>
  `,
};
