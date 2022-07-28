module.exports = {
    extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
    rules: {
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