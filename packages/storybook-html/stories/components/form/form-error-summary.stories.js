const ErrorSummary = () => {
  return `
    <div class="uq-grid uq-grid--golden uq-grid--full-width">
      <div class="uq-grid__col">
        <div id="errorSummary" role="alert" class="uq-error-summary">
          <div class="uq-error-summary__body">
            <h2 class="uq-error-summary__title">Your form could not be submitted</h2>
            <ul class="uq-error-summary__list">
              <li class="uq-error-summary__list__item"><a href="#password">Your password is shorter than eight characters</a></li>
              <li class="uq-error-summary__list__item"><a href="#password">Your password does not contain a digit or allowed special character</a></li>
              <li class="uq-error-summary__list__item"><a href="#confirmPassword">Confirm your new password by re-entering it</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default {
  title: "Components/Form/Error summary",

  parameters: {
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
  },
};

export const ErrorSummary_ = {
  render: ErrorSummary.bind({}),
  name: "Error summary",
};
