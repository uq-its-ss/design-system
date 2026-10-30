import { FriendlyCaptchaSDK } from "@friendlycaptcha/sdk";

let sdk;

/**
 * Create a Friendly Captcha widget inside the given element.
 * The SDK instance is shared between widgets.
 *
 * @param {HTMLElement} element Mount element
 * @param {string} sitekey Friendly Captcha sitekey
 * @param {object} [options] Additional createWidget options
 */
export const captcha = (element, sitekey, options = {}) => {
  sdk = sdk || new FriendlyCaptchaSDK();
  return sdk.createWidget({ element, sitekey, ...options });
};
