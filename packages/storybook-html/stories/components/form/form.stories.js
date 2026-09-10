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

<hr> 
<h2>Kitchen sink form</h2>

       <!-- Form content goes here -->
         <form action="#" method="POST" novalidate>

  <!-- ==========================================
       TEXT-BASED INPUTS (Labels, Help & Errors)
       ========================================== -->
  <fieldset>
    <legend>Text & Data Inputs</legend>

    <!-- Explicit Label + Standard Input -->
    <div>
      <label for="input-text">Standard Text (Explicit Label)</label>
      <input type="text" id="input-text" name="input_text" placeholder="John Doe">
    </div>

    <!-- Implicit Label + Required -->
    <div>
      <label>
        Username (Implicit Label, Required)
        <input type="text" name="username" required>
      </label>
    </div>

    <!-- Support Text (aria-describedby) -->
    <div>
      <label for="input-password">Password</label>
      <input type="password" id="input-password" name="password" aria-describedby="pwd-help">
      <small id="pwd-help">Must be at least 8 characters long.</small>
    </div>

    <!-- Error State (aria-invalid + aria-describedby) -->
    <div>
      <label for="input-email">Email Address</label>
      <input type="email" id="input-email" name="email" value="bad-email" aria-invalid="true" aria-describedby="email-error">
      <div id="email-error" role="alert" style="color: red;">Please enter a valid email address.</div>
    </div>

    <!-- Multiple Descriptors (Help Text + Error) -->
    <div>
      <label for="input-url">Website URL</label>
      <input type="url" id="input-url" name="url" aria-invalid="true" aria-describedby="url-help url-error">
      <small id="url-help">Include https://</small>
      <div id="url-error" role="alert" style="color: red;">URL is unreachable.</div>
    </div>

    <!-- States: Readonly & Disabled -->
    <div>
      <label for="input-readonly">Readonly Input</label>
      <input type="text" id="input-readonly" name="readonly_val" value="Cannot edit me" readonly>
    </div>
    
    <div>
      <label for="input-disabled">Disabled Input</label>
      <input type="text" id="input-disabled" name="disabled_val" value="Cannot interact" disabled>
    </div>

    <!-- HTML5 Specific Types -->
    <div>
      <label for="input-tel">Telephone</label>
      <input type="tel" id="input-tel" name="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
    </div>

    <div>
      <label for="input-number">Number (Min/Max/Step)</label>
      <input type="number" id="input-number" name="quantity" min="0" max="100" step="5">
    </div>

    <div>
      <label for="input-search">Search</label>
      <input type="search" id="input-search" name="search" placeholder="Search...">
    </div>
  </fieldset>

  <!-- ==========================================
       TEXTAREA
       ========================================== -->
  <fieldset>
    <legend>Multiline Text</legend>
    
    <div>
      <!-- aria-labelledby example -->
      <span id="textarea-label">Bio (aria-labelledby)</span>
      <textarea id="input-textarea" name="bio" rows="4" cols="50" aria-labelledby="textarea-label" placeholder="Tell us about yourself..."></textarea>
    </div>
  </fieldset>

  <!-- ==========================================
       CHOICE INPUTS (Radios & Checkboxes)
       ========================================== -->
  <fieldset>
    <legend>Radio Buttons (Explicit Labels)</legend>
    <p id="radio-group-desc">Select your preferred contact method:</p>
    
    <!-- Group described by a paragraph -->
    <div role="radiogroup" aria-describedby="radio-group-desc">
      <div>
        <input type="radio" id="contact-email" name="contact_pref" value="email" checked>
        <label for="contact-email">Email</label>
      </div>
      <div>
        <input type="radio" id="contact-phone" name="contact_pref" value="phone">
        <label for="contact-phone">Phone</label>
      </div>
      <div>
        <input type="radio" id="contact-mail" name="contact_pref" value="mail" disabled>
        <label for="contact-mail">Physical Mail (Disabled)</label>
      </div>
    </div>
  </fieldset>

  <fieldset aria-invalid="true" aria-describedby="checkbox-error">
    <legend>Checkboxes (Implicit Labels + Fieldset Error)</legend>
    <div id="checkbox-error" role="alert" style="color: red;">You must select at least one interest.</div>
    
    <div>
      <label>
        <input type="checkbox" name="interests" value="coding"> Coding
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" name="interests" value="design" checked> Design
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" name="interests" value="writing" indeterminate="true"> Writing (Indeterminate state requires JS, but attribute exists)
      </label>
    </div>
  </fieldset>

  <!-- ==========================================
       SELECT MENUS
       ========================================== -->
  <fieldset>
    <legend>Select Menus</legend>

    <!-- Standard Select -->
    <div>
      <label for="select-country">Country</label>
      <select id="select-country" name="country">
        <option value="">Choose a country...</option>
        <option value="au">Australia</option>
        <option value="uk">United Kingdom</option>
        <option value="us">United States</option>
      </select>
    </div>

    <!-- Select with Optgroups & Multiple -->
    <div>
      <label for="select-skills">Skills (Multiple with Optgroups)</label>
      <select id="select-skills" name="skills" multiple size="5">
        <optgroup label="Frontend">
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </optgroup>
        <optgroup label="Backend" disabled>
          <option value="node">Node.js</option>
          <option value="python">Python</option>
        </optgroup>
      </select>
    </div>
  </fieldset>

  <!-- ==========================================
       SPECIALTY INPUTS (Dates, Files, Colors, Range)
       ========================================== -->
  <fieldset>
    <legend>Specialty Inputs</legend>

    <div>
      <label for="input-date">Date</label>
      <input type="date" id="input-date" name="date">
    </div>

    <div>
      <label for="input-time">Time</label>
      <input type="time" id="input-time" name="time">
    </div>

    <div>
      <label for="input-datetime">Datetime Local</label>
      <input type="datetime-local" id="input-datetime" name="datetime">
    </div>

    <div>
      <label for="input-month">Month</label>
      <input type="month" id="input-month" name="month">
    </div>

    <div>
      <label for="input-week">Week</label>
      <input type="week" id="input-week" name="week">
    </div>

    <div>
      <label for="input-color">Color Picker</label>
      <input type="color" id="input-color" name="color" value="#ff0000">
    </div>

    <div>
      <label for="input-file">File Upload (Multiple, Accept)</label>
      <input type="file" id="input-file" name="file_upload" multiple accept="image/png, image/jpeg">
    </div>

    <div>
      <label for="input-range">Range Slider</label>
      <input type="range" id="input-range" name="volume" min="0" max="100" value="50" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
    </div>
    
    <!-- Hidden Input -->
    <input type="hidden" name="csrf_token" value="abc123xyz">
  </fieldset>

  <!-- ==========================================
       BUTTONS
       ========================================== -->
  <fieldset>
    <legend>Form Controls</legend>

    <!-- Standard Submit -->
    <button type="submit">Submit Form</button>
    
    <!-- Input Submit alternative -->
    <input type="submit" value="Alternative Submit">

    <!-- Reset Form -->
    <button type="reset">Reset Form</button>

    <!-- Generic Button -->
    <button type="button" aria-label="Custom action button">Custom Action</button>

    <!-- Disabled Button -->
    <button type="submit" disabled aria-disabled="true">Submit (Disabled)</button>
    
    <!-- Image Button -->
    <input type="image" src="https://via.placeholder.com/50x20?text=Submit" alt="Submit Form as Image">
  </fieldset>

</form>
    `;
  },
};
 
export const Default = {};