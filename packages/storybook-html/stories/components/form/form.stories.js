export default {
  title: "Components/Form",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
  },
  render: () => {
    return `
      <div>
        <form class="uq-form">
          <fieldset class="uq-form__fieldset">
            <legend class="uq-form__legend">
              <h3>Text Inputs</h3>
            </legend>
            <div class="uq-form__group">
              <label class="uq-form__label" for="text-input">Text input</label>
              <span class="uq-form__helper">Help text or description under label</span>
              <input class="uq-form__input" id="text-input" type="text" name="text-input">
            </div>

            <div class="uq-form__group uq-form__group--inline">
              <label class="uq-form__label" for="email-address">In-line text input</label>
              <input class="uq-form__input" id="email-address" type="email" name="email-address">
            </div>

            <div class="uq-form__group uq-form__group--inline">
              <label class="uq-form__label" for="email-address">Email</label>
              <input class="uq-form__input" id="email-address" type="email" name="email-address">
            </div>
          </fieldset>
          <fieldset class="uq-form__fieldset">
            <legend class="uq-form__legend">
              <h3>Select Inputs</h3>
            </legend>
            <div class="uq-form__group">
              <label class="uq-form__label" for="course">Select</label>
              <span class="uq-form__helper">Help text or description under label</span>
              <select class="uq-form__select" id="course" name="course">
                <option value="">Select a course</option>
                <option value="bachelor-of-commerce">Bachelor of Commerce</option>
                <option value="bachelor-of-engineering">Bachelor of Engineering</option>
                <option value="bachelor-of-science">Bachelor of Science</option>
              </select>
            </div>

            <div class="uq-form__group uq-form__group--inline">
              <label class="uq-form__label" for="course">In-line select</label>
              <select class="uq-form__select" id="course" name="course">
                <option value="">Select a course</option>
                <option value="bachelor-of-commerce">Bachelor of Commerce</option>
                <option value="bachelor-of-engineering">Bachelor of Engineering</option>
                <option value="bachelor-of-science">Bachelor of Science</option>
              </select>
            </div>
          </fieldset>
          
          <fieldset class="uq-form__fieldset">
            <legend class="uq-form__legend">
              <h3>Input groups</h3>
            </legend>
            <div class="uq-form__group">
              <div class="uq-form__input-group">
                <label class="sr-only" for="search">Search</label>
                <input id="search" type="text" name="search">
                <button type="submit" class="uq-button">Search</button>
              </div>
            </div>

            <div class="uq-form__group">
              <div class="uq-form__input-group">
                <input id="email" type="text" name="email">
                <div class="uq-form-input__suffix" aria-hidden="true">@uq.edu.au</div>
              </div>
            </div>

            <div class="uq-form__group">
              <div class="uq-form__input-group">
                <div class="uq-form-input__prefix" aria-hidden="true">uq.edu.au/</div>
                <input id="url" type="text" name="url">
              </div>
            </div>

            <div class="uq-form__group">
              <div class="uq-form__input-group">
                <div class="uq-form-input__prefix" aria-hidden="true">$</div>
                <input id="price" type="text" name="price">
                <div class="uq-form-input__suffix" aria-hidden="true">.00</div>
              </div>
            </div>
          </fieldset>

          <fieldset class="uq-form__fieldset">
            <legend class="uq-form__legend">
              <h3>Multiline Text Input</h3>
            </legend>
            <div class="uq-form__group">
              <label class="uq-form__label" for="message">Multiline text input</label>
              <span class="uq-form__helper">Helper text for the message</span>
              <textarea class="uq-form__input" id="message" name="message" rows="4" placeholder="Tell us about your enquiry"></textarea>
            </div>
          </fieldset>

        </form>
      </div>
    `;
  },
};

export const Default = {};
