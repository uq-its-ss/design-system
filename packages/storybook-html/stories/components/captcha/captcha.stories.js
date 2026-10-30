import "@uqds/captcha/src/scss/main.scss";
import { captcha } from "@uqds/captcha/src/js/main";

const SITEKEY = "FCMGETO5UETK6BA9";
const SDK_VERSION = "1.0.2";

export default {
  title: "Components/Captcha",
};

// Example 1: JavaScript SDK (programmatic)
export const Captcha = {
  render: () => {
    const mount = document.createElement("div");
    mount.className = "uq-captcha";

    captcha(mount, SITEKEY);

    return mount;
  },
};

// Example 2: HTML scripts and widget
export const CaptchaHtmlScripts = {
  name: "Captcha (HTML Scripts)",
  render: () => `
    <script type="module" src="https://cdn.jsdelivr.net/npm/@friendlycaptcha/sdk@${SDK_VERSION}/site.min.js" async defer></script>
    <script nomodule src="https://cdn.jsdelivr.net/npm/@friendlycaptcha/sdk@${SDK_VERSION}/site.compat.min.js" async defer></script>
    <div class="uq-captcha frc-captcha" data-sitekey="${SITEKEY}"></div>
  `,
};
