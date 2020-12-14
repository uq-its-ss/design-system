import { useEffect } from '@storybook/client-api';
import { MDCCircularProgress } from '@material/circular-progress';
import './uq-maps.scss';

export default {
  title: 'Deliverables/UQ Maps',
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      canvas: {hidden: false}
    },
    backgrounds: {
      default: 'Diagonal stripes'
    }
  }
};

export const searchField = () => {
  return `
    <div class="uq-maps__search-field">
      <button class="uq-maps__icon-button uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" id="search" class="uq-maps__search-field__input" placeholder="Search" autocomplete="off" />
      <button class="uq-maps__icon-button uq-maps__search-field__clear">Clear</button>
    </div>
  `;
};

searchField.storyName = "Search field (initial)";

export const searchFieldFocused = () => {
  return `
    <div class="uq-maps__search-field uq-maps__search-field--is-focused">
      <button class="uq-maps__icon-button uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" autocomplete="off" />
      <button class="uq-maps__icon-button uq-maps__search-field__clear">Clear</button>
    </div>
    <div class="uq-maps__search-field uq-maps__search-field--is-focused">
      <button class="uq-maps__icon-button uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search or click on map</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search or click on map" autocomplete="off" />
      <button class="uq-maps__icon-button uq-maps__search-field__clear">Clear</button>
    </div>
  `;
};

searchFieldFocused.storyName = "Search field on focus or selecting origin/destination";

export const searchFieldSearching = () => {
  return `
    <div class="uq-maps__search-field uq-maps__search-field--is-searching">
      <button class="uq-maps__icon-button uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" value="Bagels" autocomplete="off" />
      <button class="uq-maps__icon-button uq-maps__search-field__clear">Clear</button>
    </div>
  `;
};

searchFieldSearching.storyName = "Search field with search value";

export const searchFieldWorking = () => {
  useEffect(() => {
    const circularProgress = new MDCCircularProgress(document.querySelector('#searchProgressIndicator'));
    circularProgress.determinate = false;
    circularProgress.open();
  });
  
  return `
    <div class="uq-maps__search-field uq-maps__search-field--is-working">
      <button class="uq-maps__icon-button uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" id="search" class="uq-maps__search-field__input" placeholder="Search" value="Bagels" autocomplete="off" />
      <button class="uq-maps__icon-button uq-maps__search-field__clear">Clear</button>
      <div class="uq-maps__search-field__progress-indicator">

        <!-- START MDC circular-progress component -->

        <div id="searchProgressIndicator" class="mdc-circular-progress" style="width:28px;height:28px;" role="progressbar" aria-label="Please wait" aria-valuemin="0" aria-valuemax="1">
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

        <!-- START MDC circular-progress component -->

      </div>
    </div>
  `;
};

searchFieldWorking.storyName = "Search field with circular progress indicator";

export const wayfindingControl = () => `
  <div class="uq-maps__wayfinding-controls">
    <div class="uq-maps__wayfinding-controls__main">
      <div class="uq-maps__wayfinding-controls__row">
        <button class="uq-maps__icon-button uq-maps__wayfinding-controls__back">Back</button>
        <button class="uq-maps__wayfinding-controls__text-button uq-maps__wayfinding-controls__text-button--placeholder">Starting point</button>
      </div>
      <div class="uq-maps__wayfinding-controls__row">
        <button class="uq-maps__icon-button uq-maps__wayfinding-controls__swap">Swap starting point and destination</button>
        <button class="uq-maps__wayfinding-controls__text-button">Phizz Food Court</button>
      </div>
      <div class="uq-maps__wayfinding-controls__row uq-maps__wayfinding-controls__stairs-toggle">
        <input id="AvoidStairs0" class="uq-maps__wayfinding-controls__stairs-toggle__input" type="checkbox" name="avoidstairs" />
        <label for="AvoidStairs0" class="uq-maps__wayfinding-controls__stairs-toggle__label">Avoid stairs</label>
      </div>
    </div>
    <div class="uq-maps__wayfinding-controls__decoration"></div>
  </div>
`;

wayfindingControl.storyName = "Wayfinding control";

export const wayfindingControlWorking = () => {
  useEffect(() => {
    const circularProgress = new MDCCircularProgress(document.querySelector('#wayfindingProgressIndicator'));
    circularProgress.determinate = false;
    circularProgress.open();
  });

  return `
    <div class="uq-maps__wayfinding-controls uq-maps__wayfinding-controls--is-working">
      <div class="uq-maps__wayfinding-controls__main">
        <div class="uq-maps__wayfinding-controls__row">
          <button class="uq-maps__icon-button uq-maps__wayfinding-controls__back">Back</button>
          <button class="uq-maps__wayfinding-controls__text-button">UQ Intercampus Bus Stop</button>
        </div>
        <div class="uq-maps__wayfinding-controls__row">
          <button class="uq-maps__icon-button uq-maps__wayfinding-controls__swap">Swap starting point and destination</button>
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

        <div id="wayfindingProgressIndicator" class="mdc-circular-progress" style="width:28px;height:28px;" role="progressbar" aria-label="Please wait" aria-valuemin="0" aria-valuemax="1">
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

        <!-- START MDC circular-progress component -->

      </div>
    </div>
  `;
};

wayfindingControlWorking.storyName = "Wayfinding control with circular progress indicator";
