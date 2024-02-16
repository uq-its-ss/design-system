import { useEffect } from "@storybook/addons";
import { MDCCircularProgress } from "@material/circular-progress";

export default {
  title: "Deliverables/UQ Maps/3 Wayfinding controls",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
    backgrounds: {
      values: [
        {
          name: "Static map",
          value:
            '#D7D1CC url("/images/app-maps/map-sample-bg.jpg") center top / 1920px 969px repeat',
        },
        {
          name: "Diagonal stripes",
          value:
            "repeating-linear-gradient(45deg, #efedeb, #efedeb 10px, #f7f6f5 10px, #f7f6f5 20px)",
        },
      ],
      default: "Static map",
    },
  },
};

export const wayfindingControl = {
  render: () => `
    <div class="uq-maps__wayfinding-controls">
      <div class="uq-maps__wayfinding-controls__main">
        <div class="uq-maps__wayfinding-controls__row">
          <button class="uq-maps__wayfinding-controls__back">Back</button>
          <button class="uq-maps__wayfinding-controls__text-button uq-maps__wayfinding-controls__text-button--placeholder">Starting point</button>
        </div>
        <div class="uq-maps__wayfinding-controls__row">
          <button class="uq-maps__wayfinding-controls__swap">Swap starting point and destination</button>
          <button class="uq-maps__wayfinding-controls__text-button">Phizz Food Court</button>
        </div>
        <div class="uq-maps__wayfinding-controls__row uq-maps__wayfinding-controls__stairs-toggle">
          <input id="AvoidStairs0" class="uq-maps__wayfinding-controls__stairs-toggle__input" type="checkbox" name="avoidstairs" />
          <label for="AvoidStairs0" class="uq-maps__wayfinding-controls__stairs-toggle__label">Avoid stairs</label>
        </div>
      </div>
      <div class="uq-maps__wayfinding-controls__decoration"></div>
    </div>
  `,

  name: "3A Wayfinding controls",
};

export const wayfindingControlWorking = {
  render: () => {
    useEffect(() => {
      const circularProgress = new MDCCircularProgress(
        document.querySelector("#wayfindingProgressIndicator")
      );
      circularProgress.determinate = false;
      circularProgress.open();
    });

    return `
      <div class="uq-maps__wayfinding-controls uq-maps__wayfinding-controls--is-working">
        <div class="uq-maps__wayfinding-controls__main">
          <div class="uq-maps__wayfinding-controls__row">
            <button class="uq-maps__wayfinding-controls__back">Back</button>
            <button class="uq-maps__wayfinding-controls__text-button">UQ Intercampus Bus Stop</button>
          </div>
          <div class="uq-maps__wayfinding-controls__row">
            <button class="uq-maps__wayfinding-controls__swap">Swap starting point and destination</button>
            <button class="uq-maps__wayfinding-controls__text-button">Phizz Food Court</button>
          </div>
          <div class="uq-maps__wayfinding-controls__row uq-maps__wayfinding-controls__stairs-toggle">
            <input id="AvoidStairs1" class="uq-maps__wayfinding-controls__stairs-toggle__input" type="checkbox" name="avoidstairs" />
            <label for="AvoidStairs1" class="uq-maps__wayfinding-controls__stairs-toggle__label">Avoid stairs</label>
          </div>
        </div>
        <div class="uq-maps__wayfinding-controls__decoration"></div>
        <div class="uq-maps__wayfinding-controls__progress-indicator">

          <!-- START MDC circular-progress component -->

          <div id="wayfindingProgressIndicator" class="mdc-circular-progress" style="width:1.75rem;height:1.75rem;" role="progressbar" aria-label="Please wait" aria-valuemin="0" aria-valuemax="1">
            <div class="mdc-circular-progress__determinate-container">
              <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle class="mdc-circular-progress__determinate-track" cx="16" cy="16" r="12.5" stroke-width="1.33"/>
                <circle class="mdc-circular-progress__determinate-circle" cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="78.54" stroke-width="3"/>
              </svg>
            </div>
            <div class="mdc-circular-progress__indeterminate-container">
              <div class="mdc-circular-progress__spinner-layer">
                <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
                  <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27" stroke-width="1.33"/>
                  </svg>
                </div>
                <div class="mdc-circular-progress__gap-patch">
                  <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27" stroke-width="1"/>
                  </svg>
                </div>
                <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
                  <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27" stroke-width="1.33"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- END MDC circular-progress component -->

        </div>
      </div>
    `;
  },

  name: "3B Wayfinding controls with circular progress indicator",
};
