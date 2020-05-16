import './style.scss';
import kitchenSinkHTML from './form-errors-kitchen-sink.html';
import docs from './form-errors.docs.mdx';

export default {
  title: 'Forms/Form errors',
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const errorSummary = () => {
  return `
    <div id="errorSummary" role="alert" class="error-summary">
      <div class="error-summary__body">
        <h2 class="error-summary__title">Your form could not be submitted</h2>
        <ul class="error-summary__list">
          <li class="error-summary__list__item"><a href="#password">Your password is shorter than eight characters</a></li>
          <li class="error-summary__list__item"><a href="#password">Your password does not contain a digit or allowed special character</a></li>
          <li class="error-summary__list__item"><a href="#confirmPassword">Confirm your new password by re-entering it</a></li>
        </ul>
      </div>
    </div>
  `;
};

export const textInput = () => {
  return `
    <form class="form form--full-width">  
      <p class="form__help-text">Where the <code>input</code> element sits inside the <code>label</code></p>
      <!-- Before error -->
      <label>Mobile number <span class="form__required">(required)</span> <input type="text" /></label>
      <!-- After error -->
      <label class="form__label form__label--error">Mobile number <span class="form__required">(required)</span>
        <input type="text" class="form__input form__input--error" />
        <span class="form__inline-error-message">Enter a valid mobile number</span>
      </label>

      <p class="form__help-text">Where the <code>input</code> element sits outside the <code>label</code></p>
      <!-- Before error -->
      <label for="mobile1">Mobile number <span class="form__required">(required)</span></label>
      <input type="text" id="mobile1" />
      <!-- After error -->
      <label for="mobile2" class="form__label form__label--error">Mobile number <span class="form__required">(required)</span></label>
      <input type="text" id="mobile2" class="form__input form__input--error" />
      <label for="mobile2" class="form__inline-error-message">Enter a valid mobile number</label>
    </form>
  `;
};

export const checkbox = () => {
  return `
    <form class="form form--full-width">  
      <p class="form__help-text">Where the <code>input</code> element sits inside the <code>label</code></p>
      <!-- Before error -->
      <label class="form__label">
        <input id="checkbox1" name="checkbox1" type="checkbox" /> I agree to the <a href="#">terms of service</a>
      </label>
      <!-- After error -->
      <label class="form__label form__label--error">
        <input name="checkbox2" type="checkbox" class="form__input form__input--error" /> 
        I agree to the <a href="#">terms of service</a>
      </label>
      <span class="form__inline-error-message">You need to agree to the terms of service</span>

      <p class="form__help-text">Where the <code>input</code> element sits outside the <code>label</code></p>
      <!-- Before error -->
      <input id="checkbox3" name="checkbox3" type="checkbox" class="form__input" />
      <label for="checkbox3" class="form__label">I agree to the <a href="#">terms of service</a></label>
      <!-- After error -->
      <input id="checkbox4" name="checkbox4" type="checkbox" class="form__input form__input--error" />
      <label for="checkbox4" class="form__label form__label--error">I agree to the <a href="#">terms of service</a></label>
      <span class="form__inline-error-message">You need to agree to the terms of service</span>
    </form>
  `;
};

export const radioButton = () => {
  return `
    <form class="form form--full-width">  
      <p class="form__help-text">Where the <code>input</code> element sits inside the <code>label</code></p>
      <!-- Before error -->
      <label>Choose your favourite:</label>
      <label><input type="radio" name="radio1" value="red" /> Red</label>
      <label><input type="radio" name="radio1" value="blue" /> Blue</label>
      <!-- After error -->
      <label class="form__label form__label--error">Choose your favourite:</label>
      <label class="form__label form__label--error"><input type="radio" name="radio2" value="red" class="form__input form__input--error" /> Red</label>
      <label class="form__label form__label--error"><input type="radio" name="radio2" value="blue" class="form__input form__input--error" /> Blue</label>
      <span class="form__inline-error-message">Select a favourite</span>

      <p class="form__help-text">Where the <code>input</code> element sits outside the <code>label</code></p>
      <!-- Before error -->
      <label>Choose your favourite:</label>
      <input id="pokemonRed1" type="radio" name="radio3" value="red" /><label for="pokemonRed1">Red</label>
      <input id="pokemonBlue1" type="radio" name="radio3" value="blue" /><label for="pokemonBlue1">Blue</label>
      <!-- After error -->
      <label class="form__label form__label--error">Choose your favourite:</label>
      <input id="pokemonRed2" type="radio" name="radio4" value="red" class="form__input form__input--error" />
      <label for="pokemonRed2" class="form__label form__label--error">Red</label>
      <input id="pokemonBlue2" type="radio" name="radio4" value="blue" class="form__input form__input--error" />
      <label for="pokemonBlue2" class="form__label form__label--error">Blue</label>
      <span class="form__inline-error-message">Select a favourite</span>
    </form>
  `;
};

export const select = () => {
  return `
    <form class="form form--full-width">  
      <p class="form__help-text">Where the <code>select</code> element sits inside the <code>label</code></p>
      <!-- Before error -->
      <label>Choose a thing
        <select>
          <option value="husker">Husker</option>
          <option value="starbuck">Starbuck</option>
          <option value="hotdog">Hot Dog</option>
          <option value="apollo">Apollo</option>
        </select>
      </label>
      <!-- After error -->
      <label class="form__label form__label--error">Choose a thing
        <select class="form__input form__input--error">
          <option value="husker">Husker</option>
          <option value="starbuck">Starbuck</option>
          <option value="hotdog">Hot Dog</option>
          <option value="apollo">Apollo</option>
        </select>
        <span class="form__inline-error-message">Choose a thing</span>
      </label>

      <p class="form__help-text">Where the <code>select</code> element sits outside the <code>label</code></p>
      <!-- Before error -->
      <label>Choose a thing</label>
      <select>
        <option value="husker">Husker</option>
        <option value="starbuck">Starbuck</option>
        <option value="hotdog">Hot Dog</option>
        <option value="apollo">Apollo</option>
      </select>
      <!-- After error -->
      <label class="form__label form__label--error">Choose a thing</label>
      <select class="form__input form__input--error">
        <option value="husker">Husker</option>
        <option value="starbuck">Starbuck</option>
        <option value="hotdog">Hot Dog</option>
        <option value="apollo">Apollo</option>
      </select>
      <label class="form__inline-error-message">Choose a thing</label>
    </form>
  `;
};

export const textarea = () => {
  return `
    <form class="form form--full-width">  
      <p class="form__help-text">Where the <code>textarea</code> element sits inside the <code>label</code></p>
      <!-- Before error -->
      <label>Biography <textarea></textarea></label>
      <!-- After error -->
      <label class="form__label form__label--error">Biography
        <textarea class="form__input form__input--error"></textarea>
        <span class="form__inline-error-message">Enter a brief biography</span>
      </label>

      <p class="form__help-text">Where the <code>textarea</code> element sits outside the <code>label</code></p>
      <!-- Before error -->
      <label for="bio1">Biography</label>
      <textarea id="bio1"></textarea>
      <!-- After error -->
      <label for="bio2" class="form__label form__label--error">Biography</label>
      <textarea id="bio2" class="form__input form__input--error"></textarea>
      <label for="bio2" class="form__inline-error-message">Enter a brief biography</label>
    </form>
  `;
};

export const kitchenSink = () => {
  // See other stories for markup examples
  return kitchenSinkHTML;
};

kitchenSink.story = {
  parameters: {
    docs: {
      page: null
    }
  }
}
