import Joi from "joi-browser";
import _ from "underscore";
import zxcvbn from "zxcvbn";

var passwordResetValidation = (function () {
  "use strict";

  /**
   * Password reset validation
   * @constructor
   */
  function passwordResetValidation() {
    this.form = document.getElementById("passwordResetForm");
    this.labelDisabledClass = "uq-label--disabled";
    this.errorSummary = document.getElementById("errorSummary");

    this.passwordInput = document.getElementById("password");
    this.passwordLabel = document.getElementById("passwordLabel");
    this.passwordError = document.getElementById("passwordError");
    this.confirmPasswordInput = document.getElementById("confirmPassword");
    this.confirmPasswordLabel = document.getElementById("confirmPasswordLabel");
    this.confirmPasswordError = document.getElementById("confirmPasswordError");
    this.passwordStrengthMeterText = document.getElementById(
      "passwordStrengthMeterText",
    );
    this.passwordStrengthMeterTextTemplate = document.getElementById(
      "passwordStrengthMeterTextTemplate",
    );
    this.passwordStrengthMeter = document.getElementById(
      "passwordStrengthMeter",
    );

    if (passwordStrengthMeter) {
      this.indicators = this.passwordStrengthMeter.getElementsByTagName("span");
    }

    this.passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[\d#$%'()*+,\-\/:;<=>\[\]^_`{|}~])(?!.*[&?!"@\\\s]).{8,40}$/;
    this.invertedAlphaRegex = /^(?!.*[a-zA-Z]).{1,}$/;
    this.invertedNonAlphaRegex =
      /^(?!.*[\d#$%'()*+,\-\/:;<=>\[\]^_`{|}~]).{1,}$/;
    this.invertedForbidden = /^(?=.*[&?!"@\\\s]).{1,}$/;
    this.strengthTerms = [
      "too guessable",
      "very guessable",
      "somewhat guessable",
      "strong",
      "very strong",
    ];

    // form errors
    this.choosePasswordFormErrors = {};
    // form state
    this.choosePasswordFormState = {};
    // validation schema (requires joi-browser)
    this.choosePasswordSchema = Joi.object({
      passwordStrength: Joi.any().when("password", {
        is: Joi.string()
          .empty("")
          .regex(this.passwordRegex, { invert: true })
          .optional(),
        then: Joi.any().optional(),
        otherwise: Joi.number()
          .min(2)
          .required() // must always be assessed by password strength library
          .label("password")
          .error((errors) => {
            errors.forEach((err) => {
              err.message = "Enter a stronger password";
            });
            return errors;
          }),
      }),
      password: Joi.string()
        .empty("")
        .min(8)
        .max(40)
        .regex(this.invertedAlphaRegex, { name: "alpha", invert: true })
        .regex(this.invertedNonAlphaRegex, { name: "nonAlpha", invert: true })
        .regex(this.invertedForbidden, { name: "forbidden", invert: true })
        .required()
        .error((errors) => {
          errors.forEach((err) => {
            switch (err.type) {
              case "string.min":
                err.message = "Your password is shorter than eight characters";
                break;
              case "string.max":
                err.message = "Your password is too long";
                break;
              case "string.regex.invert.name":
                switch (err.context.name) {
                  case "alpha":
                    err.message = "Your password does not contain a letter";
                    break;
                  case "nonAlpha":
                    err.message =
                      "Your password does not contain a digit or allowed special character";
                    break;
                  case "forbidden":
                    err.message =
                      'Your password contains a forbidden character: & ? ! " @ \\ or a space';
                    break;
                }
                break;
              default:
                err.message = "Enter a new password";
            }
          });
          return errors;
        }),
      confirmPassword: Joi.string()
        .empty("")
        .valid(Joi.ref("password"))
        .required()
        .error((errors) => {
          errors.forEach((err) => {
            switch (err.type) {
              case "any.allowOnly":
                err.message = "Your passwords don't match";
                break;
              default:
                err.message = "Confirm your new password by re-entering it";
            }
          });
          return errors;
        }),
    });

    this.init();
  }

  passwordResetValidation.prototype.setChoosePasswordFormErrors = function (
    joiResult,
  ) {
    // empty the error object
    this.choosePasswordFormErrors = {};

    // populate errors object w/ keys based on schema labels
    if (joiResult.error) {
      joiResult.error.details.forEach((detail) => {
        var key = detail.context.label,
          value = detail.message;
        if (_.has(this.choosePasswordFormErrors, key)) {
          if (_.isArray(this.choosePasswordFormErrors[key])) {
            // if key already exists and values is array, add to array of strings
            this.choosePasswordFormErrors[key].push(value);
          } else {
            // if key already exists, convert value to array of strings
            this.choosePasswordFormErrors[key] = [
              this.choosePasswordFormErrors[key],
            ];
            this.choosePasswordFormErrors[key].push(value);
          }
        } else {
          // otherwise set new error key
          this.choosePasswordFormErrors[key] = value;
        }
      });
    }
  };

  passwordResetValidation.prototype.handleChangePassword = function (
    key,
    labelElem,
    inputElem,
    errorElem,
  ) {
    return (e) => {
      // update the form state
      this.choosePasswordFormState[key] = e.target.value;
      var result = this.choosePasswordSchema.validate(
        this.choosePasswordFormState,
        {
          abortEarly: false,
        },
      );

      // map to error object
      this.setChoosePasswordFormErrors(result);

      // render inline errors
      this.renderChoosePasswordErrors(key, labelElem, inputElem, errorElem);
    };
  };

  passwordResetValidation.prototype.handleChangePasswordPreStep = function (e) {
    // clear all
    while (this.passwordStrengthMeterText.firstChild) {
      this.passwordStrengthMeterText.removeChild(
        this.passwordStrengthMeterText.firstChild,
      );
    }
    for (var i = 0; i < 5; i++) {
      this.indicators[i].removeAttribute("class");
    }
    this.passwordStrengthMeter.setAttribute(
      "class",
      "story-password-strength-meter-indicator",
    );

    // check for criteria issues and password strength
    if (e.target.value.length > 0) {
      var clonedNode = this.passwordStrengthMeterTextTemplate.cloneNode(true);
      var clonedNodeScoreElem = clonedNode.querySelector(
        ".story-password-strength-meter-text-rating",
      );

      // display basic password criteria issues
      var match = e.target.value.match(this.passwordRegex);

      if (match == null) {
        // don't perform strength test if basic criteria is not met
        return false;
      }

      // run zxcvbn check (would be good to get some user related terms in there for checking)
      var result = zxcvbn(this.passwordInput.value);

      this.choosePasswordFormState.passwordStrength = result.score;

      // output zxcvbn results to user
      if (clonedNode) {
        if (clonedNodeScoreElem) {
          clonedNode.insertBefore(
            document.createTextNode("Your password is "),
            clonedNodeScoreElem,
          );
          clonedNodeScoreElem.appendChild(
            document.createTextNode(this.strengthTerms[result.score]),
          );
          if (result.score <= 2) {
            if (result.feedback.warning && result.feedback.warning !== "") {
              clonedNode.appendChild(document.createElement("br"));
              var warning = document.createElement("div");
              warning.setAttribute(
                "class",
                "story-password-strength-meter-warning",
              );
              warning.appendChild(
                document.createTextNode(result.feedback.warning),
              );
              clonedNode.appendChild(warning);
            }
            if (
              result.feedback.suggestions &&
              result.feedback.suggestions.length > 0
            ) {
              var suggestions = document.createElement("ul");
              suggestions.setAttribute(
                "class",
                "story-password-strength-meter-suggestions",
              );
              for (var k = 0; k < result.feedback.suggestions.length; k++) {
                var suggestion = document.createTextNode(
                    result.feedback.suggestions[k],
                  ),
                  suggestionElem = document.createElement("li");
                suggestionElem.appendChild(suggestion);
                suggestions.appendChild(suggestionElem);
              }
              clonedNode.appendChild(suggestions);
            }
            if (result.sequence && result.sequence.length > 0) {
              var sequences = document.createElement("ul");
              var count = 0;
              sequences.setAttribute(
                "class",
                "story-password-strength-meter-sequences",
              );
              for (var l = 0; l < result.sequence.length; l++) {
                var sequence,
                  sequenceElem = document.createElement("li"),
                  obfuscatedToken =
                    result.sequence[l].token[0] +
                    result.sequence[l].token.slice(1).replace(/./g, "*");
                switch (result.sequence[l].pattern) {
                  case "dictionary":
                    switch (result.sequence[l].dictionary_name) {
                      case "passwords":
                        sequence = document.createTextNode(
                          "Password contains a commonly used word or phrase: " +
                            obfuscatedToken,
                        );
                        break;
                      case "female_names":
                        sequence = document.createTextNode(
                          "Password contains a name: " + obfuscatedToken,
                        );
                        break;
                      case "male_names":
                        sequence = document.createTextNode(
                          "Password contains a name: " + obfuscatedToken,
                        );
                        break;
                      default:
                        sequence = document.createTextNode(
                          "Password contains a common word or phrase: " +
                            obfuscatedToken,
                        );
                    }
                    count++;
                    sequenceElem.appendChild(sequence);
                    sequences.appendChild(sequenceElem);
                    break;
                  case "sequence":
                    sequence = document.createTextNode(
                      "Password contains a sequence of characters: " +
                        obfuscatedToken,
                    );
                    count++;
                    sequenceElem.appendChild(sequence);
                    sequences.appendChild(sequenceElem);
                    break;
                  case "repeat":
                    sequence = document.createTextNode(
                      "Password contains a repeated word, phrase, or sequence of characters: " +
                        obfuscatedToken,
                    );
                    count++;
                    sequenceElem.appendChild(sequence);
                    sequences.appendChild(sequenceElem);
                }
              }

              if (count > 0) {
                clonedNode.appendChild(sequences);
              }
            }
            if (result.score <= 1) {
              clonedNode.setAttribute(
                "class",
                "story-password-strength-meter-text story-password-strength-meter-text--fail",
              );
              this.passwordStrengthMeter.setAttribute(
                "class",
                "story-password-strength-meter-indicator story-password-strength-meter-indicator--fail",
              );
            }
          } else {
            clonedNode.setAttribute(
              "class",
              "story-password-strength-meter-text story-password-strength-meter-text--strong",
            );
            this.passwordStrengthMeter.setAttribute(
              "class",
              "story-password-strength-meter-indicator story-password-strength-meter-indicator--strong",
            );
          }
          clonedNode.removeAttribute("id");
          clonedNode.style.display = "block";
          this.passwordStrengthMeterText.appendChild(clonedNode);
        }
      }

      if (this.indicators) {
        for (var m = 0; m < result.score + 1; m++) {
          this.indicators[m].setAttribute("class", "fill");
        }
      }

      return true;
    }
  };

  passwordResetValidation.prototype.renderChoosePasswordErrors = function (
    errorKey,
    labelElem,
    inputElem,
    errorElem,
  ) {
    if (_.has(this.choosePasswordFormErrors, errorKey)) {
      // set error state
      var error = this.choosePasswordFormErrors[errorKey];

      labelElem.classList.add("uq-label--error");
      inputElem.classList.add("uq-input--error");
      inputElem.setAttribute("aria-invalid", "true");
      errorElem.classList.add("uq-error-message");

      if (_.isArray(error)) {
        var error = error.join(",<br/>");
      }

      errorElem.innerHTML = error;
    } else {
      // remove error state
      labelElem.classList.remove("uq-label--error");
      inputElem.classList.remove("uq-input--error");
      inputElem.setAttribute("aria-invalid", "false");
      errorElem.classList.remove("uq-error-message");
      errorElem.innerHTML = "";
    }
  };

  passwordResetValidation.prototype.renderChoosePasswordErrorSummary =
    function () {
      this.errorSummary.innerHTML = "";
      var errorSummaryHeading = document.createElement("h2");
      errorSummaryHeading.className = "uq-error-summary__title";
      errorSummaryHeading.innerText = "Your form could not be submitted";
      var errorSummaryBody = document.createElement("div");
      errorSummaryBody.className = "uq-error-summary__body";
      var errorSummaryList = document.createElement("ul");
      errorSummaryList.className = "uq-error-summary__list";

      // error keys to render
      var itemsToRenderProcess = [
        ["password", this.passwordInput.id],
        ["confirmPassword", this.confirmPasswordInput.id],
      ];

      itemsToRenderProcess.forEach((item) => {
        var value = this.choosePasswordFormErrors[item[0]];
        if (value) {
          if (_.isArray(value)) {
            value.forEach((line) => {
              var link = document.createElement("li");
              link.classList.add("uq-error-summary__list__item");
              link.innerHTML = '<a href="#' + item[1] + '">' + line + "</a>";
              errorSummaryList.appendChild(link);
            });
          } else {
            var link = document.createElement("li");
            link.classList.add("uq-error-summary__list__item");
            link.innerHTML = '<a href="#' + item[1] + '">' + value + "</a>";
            errorSummaryList.appendChild(link);
          }
        }
      });

      // render
      errorSummaryBody.appendChild(errorSummaryHeading);
      errorSummaryBody.appendChild(errorSummaryList);
      errorSummary.appendChild(errorSummaryBody);
      errorSummary.classList.add("uq-error-summary");
    };

  passwordResetValidation.prototype.renderAllInlineChoosePasswordErrors =
    function () {
      var itemsToRenderProcess = [
        [
          "password",
          this.passwordLabel,
          this.passwordInput,
          this.passwordError,
        ],
        [
          "confirmPassword",
          this.confirmPasswordLabel,
          this.confirmPasswordInput,
          this.confirmPasswordError,
        ],
      ];
      itemsToRenderProcess.forEach((item) => {
        this.renderChoosePasswordErrors(item[0], item[1], item[2], item[3]);
      });
    };

  passwordResetValidation.prototype.handleChoosePasswordSubmit = function () {
    return (e) => {
      e.preventDefault();
      if (_.isEmpty(this.choosePasswordFormErrors)) {
        // submit the form
        this.form.submit();
      } else {
        // display error summary and all inline errors
        this.renderChoosePasswordErrorSummary();
        this.renderAllInlineChoosePasswordErrors();
        return false;
      }
    };
  };

  passwordResetValidation.prototype.init = function () {
    // init errors
    var initErrorResults = this.choosePasswordSchema.validate(
      this.choosePasswordFormState,
      {
        abortEarly: false,
      },
    );
    this.setChoosePasswordFormErrors(initErrorResults);
    this.passwordInput.addEventListener(
      "input",
      _.throttle((e) => {
        // run field validation and strength testing
        this.handleChangePasswordPreStep(e);
        this.handleChangePassword(
          "password",
          this.passwordLabel,
          this.passwordInput,
          this.passwordError,
        )(e);
      }, 1200),
    );
    this.confirmPasswordInput.addEventListener(
      "change",
      this.handleChangePassword(
        "confirmPassword",
        this.confirmPasswordLabel,
        this.confirmPasswordInput,
        this.confirmPasswordError,
      ),
    );
    this.form.addEventListener("submit", this.handleChoosePasswordSubmit());
  };

  return passwordResetValidation;
})();

export { passwordResetValidation as default };
