// import styles
import './style.scss';

// import HTML template strings
import allHTML from './all.html';
import inputHTML from './input.html';
import textAreaHTML from './text-area.html';
import selectHTML from './select.html';

export default {
  title: 'Forms/Form'
};

export const all = () => {
  return document.createElement('div').innerHTML = allHTML;
};

export const input = () => {
  return document.createElement('div').innerHTML = inputHTML;
};

export const textArea = () => {
  return document.createElement('div').innerHTML = textAreaHTML;
};

export const select = () => {
  return document.createElement('div').innerHTML = selectHTML;
};

export const inlineValidationError = () => {
  return `
    <form id="passwordResetForm" method="post" class="form--full-width form--transparent-fieldsets">
      <fieldset>
        <label for="username" id="usernameLabel" class="form__label form__label--error">UQ username <span class="form__required">(required)</span></label>
        <input type="text" name="username" id="username" class="form__input form__input--error" aria-describedby="usernameError usernameDesc" aria-invalid="true">
        <div id="usernameError" aria-live="polite" class="form__inline-error-message">Enter your UQ username</div>
      </fieldset>
      <fieldset>
        <legend id="methodDesc" class="form__legend form__legend--error">We'll send you a verification code so you can regain access to your account.<br>Where should we send your verification code? <span class="form__required">(required)</span></legend>
        <div>
          <label id="methodEmailLabel" class="form__label form__label--error">
            <input type="radio" id="methodEmail" class="form__input form__input--error" name="method" value="email" title="Send verification code to personal email address" aria-describedby="methodError methodDesc" aria-invalid="true">
            Personal email
          </label>
          <label for="email" id="emailLabel" class="form__label form__label--disabled">The personal email address you had set in my.UQ dashboard</label>
          <input type="email" name="email" id="email" class="form__input" aria-describedby="emailError registeredDetailsDesc" disabled="" aria-invalid="false">
          <div id="emailError" aria-live="polite"></div>
        </div>
        <div>
          <label id="methodMobileLabel" class="form__label form__label--error">
            <input type="radio" id="methodMobile" class="form__input form__input--error" name="method" value="mobile" title="Send verification code to mobile number" aria-describedby="methodError methodDesc" aria-invalid="true">
            Mobile number
          </label>
          <label for="mobile" id="mobileLabel" class="form__label form__label--disabled">The mobile number you had set in my.UQ dashboard</label>
          <input type="text" name="mobile" id="mobile" class="form__input" aria-describedby="mobileError registeredDetailsDesc" disabled="" aria-invalid="false">
          <div id="mobileError" aria-live="polite"></div>
        </div>  
        <div id="methodError" aria-live="polite" class="form__inline-error-message">Select a verification method to complete</div>
      </fieldset>
    </form>
  `;
};

export const errorSummary = () => {
  return `
    <div id="errorSummary" role="alert" class="error-summary">
      <div class="error-summary__body">
        <h2 class="error-summary__title">Your form could not be submitted</h2>
        <ul class="error-summary__list">
          <li><a href="#password">Your password is shorter than eight characters</a></li>
          <li><a href="#password">Your password does not contain a digit or allowed special character</a></li>
          <li><a href="#confirmPassword">Confirm your new password by re-entering it</a></li>
        </ul>
      </div>
    </div>
  `;
};
