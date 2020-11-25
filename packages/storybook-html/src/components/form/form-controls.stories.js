import './form.scss';
import docs from './form-controls.docs.mdx';

export default {
  title: 'Components/Form/Controls',
  parameters: {
    docs: {
      page: docs
    },
    previewTabs: {
      canvas: {
        hidden: false
      }
    }
  }
};

const layout = (states = ['N/A', 'N/A', 'N/A']) => `
  <div class="uq-table__wrapper uqds-table__wrapper">
    <table>
      <thead>
        <tr>
          <th>Default</th>
          <th>Disabled</th>
          <th>Read-only</th>
        <tr>
      </thead>
      <tbody>
        <tr>
          <td>${states[0]}</td>
          <td>${states[1]}</td>
          <td>${states[2]}</td>
        </tr>
      </tbody>
    </table>
  </div>
`;

const gridLayout = (main, aside) => `
  <div class="uq-grid uq-grid--golden uq-grid--full-width">
    <div class="uq-grid__col">
      ${main}
    </div>
    ${aside ? `
      <div class="uq-grid__col">
        ${aside}
      </div>
    `: ''}
  </div>
`;

export const inputText = () => layout([
  `<label for="text1">First name</label>
  <input type="text" id="text1" placeholder="Optional placeholder text" />`,
  `<label for="text2" class="label--disabled">First name</label>
  <input type="text" id="text2" disabled value="can't edit or submit me" />`,
  `<label for="text3" class="label--readonly">First name</label>
  <input type="text" id="text3" readonly value="can't edit me" />`
]);

inputText.storyName = "Text input";

export const inputTextAlt = () => layout([
  `<label>Label <input type="text" /></label>`,
  `<label class="label--disabled">Label <input type="text" disabled value="can't edit or submit me" /></label>`,
  `<label class="label--readonly">Label <input type="text" readonly value="can't edit me" /></label>`
]);

inputTextAlt.storyName = "Text input (nested)";

export const inputTextInline = () => `
  <div style="display: inline-block"><label class="label--inline">Keyword</label><input type="text" /></div>
  <div style="display: inline-block"><label class="label--inline">Author</label><input type="text" /></div>
`;

inputTextInline.storyName = "Text input (inline)";

export const inputTextInlineAlt = () => `
  <label class="label--inline">Keyword <input type="text" /></label>
  <label class="label--inline">Author <input type="text" /></label>
`;

inputTextInlineAlt.storyName = "Text input (inline & nested)";

export const inputTextLarge = () => `
  <input type="text" class="input--large" placeholder="Optional placeholder" />
`;

inputTextLarge.storyName = "Text input (large)";

export const inputTextError = () => gridLayout(`
  <label class="label--error" for="textError1">First name</label>
  <input type="text" id="textError1" class="input--error" aria-describedby="textError1Error" aria-invalid="true" />
  <span id="textError1Error" class="inline-error-message" aria-live="polite">Enter your first name</span>
`);

inputTextError.storyName = "Text input (error)";

export const inputTextSuccess = () => gridLayout(`
  <label class="label--success" for="textSuccess1">Mobile number</label>
  <input type="text" id="textSuccess1" value="0421 234 456" class="input--success" aria-describedby="textSuccess1Feedback" />
  <span id="textSuccess1Feedback" class="inline-success-message" aria-live="polite">That number looks correct. It will still need to be verified via SMS.</span>
`);

inputTextSuccess.storyName = "Text input (success)";

export const select = () => layout([
  `<label for="select1">Begin study in</label>
  <select id="select1">
    <option value=""></option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
  </select>`,
  `<label for="select1">Begin study in</label>
  <select id="select1" disabled>
    <option value=""></option>
    <option value="2021" selected>2021</option>
    <option value="2022">2022</option>
  </select>`, `N/A`
]);

export const selectAlt = () => layout([
  `
  <label>Begin study in
    <select>
      <option value=""></option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
  </label>`,
  `<label>Begin study in
    <select disabled>
      <option value=""></option>
      <option value="2021" selected>2021</option>
      <option value="2022">2022</option>
    </select>
  </label>`, `N/A`
]);

selectAlt.storyName = "Select (nested)";

export const selectError = () => gridLayout(`
  <label for="selectError1" class="label--error">Begin study in</label>
  <select id="selectError1" class="input--error" aria-describedby="selectError1Error" aria-invalid="true">
    <option value=""></option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
  </select>
  <span id="selectError1Error" aria-live="polite" class="inline-error-message">Select the year you will commence study at UQ</span>
`);

selectError.storyName = "Select (error)";

export const selectErrorAlt = () => gridLayout(`
  <label class="label--error">Begin study in
    <select class="input--error" aria-describedby="selectError2Error" aria-invalid="true">
      <option value=""></option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
    <span id="selectError2Error" aria-live="polite" class="inline-error-message">Select the year you will commence study at UQ</span>
  </label>
`);

selectErrorAlt.storyName = "Select (nested & error)";

export const selectInline = () => `
  <div style="display: inline-block">
    <label class="label--inline">Begin study in</label>
    <select>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
  </div>
`;

selectInline.storyName = "Select (inline)";

export const selectInlineAlt = () => `
  <label class="label--inline">Begin study in
    <select>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
  </label>
`;

selectInlineAlt.storyName = "Select (inline & nested)";

export const checkbox = () => layout([
  `
    <input id="singleCheckbox1" type="checkbox" />
    <label for="singleCheckbox1">I declare that the information I've provided is correct and true</label><br/>
    <input id="singleCheckbox2" type="checkbox" />
    <label for="singleCheckbox2">I want to be notified about university events<br/>and student offers (multi-line example)</label>
  `,
  `
    <input id="singleCheckbox3" type="checkbox" disabled />
    <label for="singleCheckbox3" class="label--disabled">Potato</label><br/>
    <input id="singleCheckbox4" type="checkbox" checked disabled />
    <label for="singleCheckbox4" class="label--disabled">Potato</label>
  `,
  'N/A'
]);

export const checkboxAlt = () => layout([
  `
    <label>
      <input type="checkbox" />
      <span>I declare that the information I've provided is correct and true</span>
    </label>
    <label>
      <input type="checkbox" />
      <span>I want to be notified about university events<br/>and student offers (multi-line example)</span>
    </label>
  `,
  `
    <label class="label--disabled">
      <input type="checkbox" disabled />
      <span>Potato</span>
    </label>
    <label class="label--disabled">
      <input type="checkbox" checked disabled />
      <span>Potato</span>
    </label>
  `,
  'N/A'
]);

checkboxAlt.storyName = "Checkbox (nested)";

export const checkboxError = () => gridLayout(`
  <input id="singleCheckboxError1" type="checkbox" class="input--error" aria-describedby="singleCheckboxError1Feedback" aria-invalid="true" />
  <label for="singleCheckboxError1" class="label--error">I declare that the information I've provided is correct and true</label>
  <span id="singleCheckboxError1Feedback" aria-live="polite" class="inline-error-message">Make sure your details are correct and then check the declaration statement</span>
`);

checkboxError.storyName = "Checkbox (error)";

export const checkboxErrorAlt = () => gridLayout(`
  <label class="label--error">
    <input type="checkbox" class="input--error" aria-describedby="singleCheckboxError2Feedback" aria-invalid="true" />
    <span>I declare that the information I've provided is correct and true</span>
  </label>
  <span id="singleCheckboxError2Feedback" aria-live="polite" class="inline-error-message">Make sure your details are correct and then check the declaration statement</span>
`);

checkboxErrorAlt.storyName = "Checkbox (nested & error)";

export const radio = () => layout([
  `
    <fieldset>
      <legend>Radio group label</legend>
      <input id="singleRadio1" type="radio" name="radioGroup1" />
      <label for="singleRadio1">Option one</label><br/>
      <input id="singleRadio2" type="radio" name="radioGroup1" />
      <label for="singleRadio2">Option two</label><br/>
      <input id="singleRadio3" type="radio" name="radioGroup1" />
      <label for="singleRadio3">Option three</br>(multi-line)</label>
    </fieldset>
  `,
  `
    <fieldset>
      <legend>Radio group label</legend>
      <input id="singleRadio4" type="radio" checked disabled>
      <label for="singleRadio4" class="label--disabled">Option one</label><br/>
      <input id="singleRadio5" type="radio" disabled>
      <label for="singleRadio5" class="label--disabled">Option two</label><br/>
      <input id="singleRadio6" type="radio" disabled>
      <label for="singleRadio6" class="label--disabled">Option three</br>(multi-line)</label>
    </fieldset>
  `,
  'N/A'
]);

radio.storyName = "Radio buttons";

export const radioAlt = () => layout([
  `
    <fieldset>
      <legend>Radio group label</legend>
      <label>
        <input type="radio" name="radioGroup2" />  
        <span>Option one</span>
      </label>
      <label>
        <input type="radio" name="radioGroup2" />  
        <span>Option two</span>
      </label>
      <label>
        <input type="radio" name="radioGroup2" />  
        <span>Option three<br/>(multi-line)</span>
      </label>
    </fieldset>
  `,
  `
    <fieldset>
      <legend>Radio group label</legend>
      <label class="label--disabled">
        <input type="radio" checked disabled />  
        <span>Option one</span>
      </label>
      <label class="label--disabled">
        <input type="radio" disabled />  
        <span>Option two</span>
      </label>
      <label class="label--disabled">
        <input type="radio" disabled />  
        <span>Option three<br/>(multi-line)</span>
      </label>
    </fieldset>
  `,
  'N/A'
]);

radioAlt.storyName = "Radio buttons (nested)";

export const radioError = () => gridLayout(`
  <fieldset>
    <legend>What semester will you start?</legend>
    <input id="singleRadio7" type="radio" name="radioGroup3" class="input--error" aria-invalid="true" aria-describedby="radioButtonFeedback">
    <label for="singleRadio7" class="label--error">Semester 1</label><br/>
    <input id="singleRadio8" type="radio" name="radioGroup3" class="input--error" aria-invalid="true" aria-describedby="radioButtonFeedback">
    <label for="singleRadio8" class="label--error">Semester 2</label>
    <span id="radioButtonFeedback" aria-live="polite" class="inline-error-message">Please select a semester</label>
  </fieldset>
`);

radioError.storyName = "Radio buttons (error)";

export const radioErrorAlt = () => gridLayout(`
  <fieldset>
    <legend>What semester will you start?</legend>
    <label class="label--error">
      <input type="radio" name="radioGroup4" class="input--error" aria-invalid="true" aria-describedby="radioButtonFeedback">
      <span>Semester 1</span>
    </label>
    <label class="label--error">
      <input type="radio" name="radioGroup4" class="input--error" aria-invalid="true" aria-describedby="radioButtonFeedback">
      <span>Semester 2</span>
    </label>
    <span id="radioButtonFeedback" aria-live="polite" class="inline-error-message">Please select a semester</label>
  </fieldset>
`);

radioErrorAlt.storyName = "Radio buttons (nested & error)";

export const textArea = () => layout([
  `<label>Label</label><textarea placeholder="Placeholder text"></textarea>`,
  `<label>Label</label><textarea disabled>can't edit or submit me</textarea>`,
  `<label>Label</label><textarea readonly>can't edit me</textarea>`
]);

textArea.storyName = "Textarea";

export const inputNumber = () => layout([
  `<label>Label</label><input type="number" />`,
  `<label>Label</label><input type="number" disabled value="999"/>`,
  `<label>Label</label><input type="number" readonly value="999" />`
]);

inputNumber.storyName = "Number input";

export const inputPassword = () => layout([
  `<label>Label</label><input type="password" />`,
  'N/A',
  'N/A'
]);

inputPassword.storyName = "Password input";
