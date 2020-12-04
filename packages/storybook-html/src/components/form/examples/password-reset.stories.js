import { useEffect } from '@storybook/client-api';
import docs from './password-reset.docs.mdx';

import passwordResetInit from './password-reset.es6';

// import styles
import './password-reset.scss';

export default {
  title: 'Forms/Working examples',
  parameters: {
    docs: {
      page: docs
    },
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const passwordForm = () => {
  useEffect(() => {
    var init = new passwordResetInit();
  });

  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4">
        <h1>Try me!</h1>
        <div id="errorSummary" role="alert">
          <!-- error summary contents will be populated here -->
        </div>
        <form id="passwordResetForm" method="post" class="form--full-width form--transparent-fieldsets">
          <label for="password" id="passwordLabel" class="form__label">Password</label>
          <input type="password" name="password" id="password" class="form__input" aria-describedby="passwordError passwordStrengthMeterText" />
          <div id="passwordError" aria-live="polite"></div>
          <div class="story-password-strength-meter">
            <div id="passwordStrengthMeter" class="story-password-strength-meter-indicator" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div id="passwordStrengthMeterText" aria-live="polite"></div>
          </div>
          <div id="passwordStrengthMeterTextTemplate" class="story-password-strength-meter-text" style="display: none">
            <span class="story-password-strength-meter-text-rating"></span>
          </div>
          <label for="confirmPassword" id="confirmPasswordLabel" class="form__label">Confirm password</label>
          <input type="password" name="confirmpassword" id="confirmPassword" class="form__input" aria-describedby="confirmPasswordError" />
          <div id="confirmPasswordError" aria-live="polite"></div>
          <br/>
          <button class="uq-button "type="submit" value="Set password">Save password</button>
          <button class="uq-button uq-button--text" value="Cancel" onclick="document.location.href='/password/cancel'">Cancel</button>
        </form>
      </div>
    </div>
  `;
};

passwordForm.storyName = 'Password form';