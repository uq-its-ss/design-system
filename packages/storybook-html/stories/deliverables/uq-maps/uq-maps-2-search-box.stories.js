import { useEffect } from "@storybook/addons";
import { MDCCircularProgress } from "@material/circular-progress";
//import './uq-maps.scss';
import docs from "./uq-maps-2-search-box.mdx";

export default {
  title: "Deliverables/UQ Maps/2 Search field",
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
    docs: {
      page: docs,
      inlineStories: false,
    },
  },
};

export const searchField = () => {
  return `
    <div class="uq-maps__search-field">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" id="search" class="uq-maps__search-field__input" placeholder="Search" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
  `;
};

searchField.storyName = "2A Search field (initial)";

export const searchFieldFocused = () => {
  return `
    <div class="uq-maps__search-field uq-maps__search-field--is-focused">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
    <div class="uq-maps__search-field uq-maps__search-field--is-focused">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search or click on map</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search or click on map" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
  `;
};

searchFieldFocused.storyName =
  "2B Search field on focus or selecting origin/destination";

export const searchFieldSearching = () => {
  return `
    <div class="uq-maps__search-field uq-maps__search-field--is-searching">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" value="Bagels" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
  `;
};

searchFieldSearching.storyName = "2C Search field with search value";

export const searchFieldWorking = () => {
  useEffect(() => {
    const circularProgress = new MDCCircularProgress(
      document.querySelector("#searchProgressIndicator")
    );
    circularProgress.determinate = false;
    circularProgress.open();
  });

  return `
    <div class="uq-maps__search-field uq-maps__search-field--is-working">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" id="search" class="uq-maps__search-field__input" placeholder="Search" value="Bagels" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
      <div class="uq-maps__search-field__progress-indicator">

        <!-- START MDC circular-progress component -->

        <div id="searchProgressIndicator" class="mdc-circular-progress" style="width:1.75rem;height:1.75rem;" role="progressbar" aria-label="Please wait" aria-valuemin="0" aria-valuemax="1">
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
};

searchFieldWorking.storyName =
  "2D Search field with circular progress indicator";
