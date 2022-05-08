module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  rules: {
    "selector-class-pattern": [
      "^([a-z])([a-z0-9]+)((-[a-z0-9]+)+)?(((--)?(__)?)([a-z0-9]+)((-[a-z0-9]+)+)?)?$",
      {
        message:
          "Expected class selector to be BEM selector matching either .block__element or .block--modifier",
      },
    ],
    "function-no-unknown": [
      true,
      { ignoreFunctions: ["/token/", "/svg-load/"] },
    ],
    "custom-property-empty-line-before": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
  plugins: ["stylelint-scss"],
};
