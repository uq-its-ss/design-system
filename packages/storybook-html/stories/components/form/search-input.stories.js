import classNames from "classnames";
import { searchInput } from "@uqds/form/src/js/search-input";
import { initJs } from "../../../lib/initJs";

export default {
  title: "Components/Form/SearchInput",
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        searchInput(component);
      }),
  ],
  argTypes: {
    label: "text",
    placeholder: "text",
    expand: "boolean",
  },
  args: {
    label: "Search",
    placeholder: "Search by keyword",
    expand: false,
  },
  render: ({ expand }) => {
    return `
    <div class="${classNames("uq-form uq-search-input", { "uq-search-input--expand": expand })}">
      <div style="padding: 2rem;">
      <div class="uq-search-form">
        <div class="uq-search-form__search">
          <div class="uq-search-form__input">
            <label class="sr-only" for="search">Search</label>
            <input id="search" type="search" name="search" placeholder="Search by keyword">
            <button class="uq-search-form__clear hidden">Clear</button>
          </div>
          <button type="submit" class="uq-button">Search</button>
        </div>
      </div>
      <br>
      <div class="uq-search-form">
        <div class="uq-search-form__search">
          <div class="uq-search-form__input">
            <label class="sr-only" for="search">Search</label>
            <input id="search" type="search" name="search" placeholder="Search by keyword">
            <button class="uq-search-form__clear hidden">Clear</button>
          </div>
          <button type="submit" class="uq-button"><span class="uq-icon uq-icon--standard--search"></span> <span class="sr-only">Search</span></button>
        </div>
      </div>
      <br>
      <div class="uq-search-form">
        <div class="uq-search-form__search">
          <div class="uq-search-form__input">
            <label class="sr-only" for="search">Search</label>
            <input id="search" type="search" name="search" placeholder="Search by keyword">
            <button class="uq-search-form__clear hidden">Clear</button>
          </div>
          <button type="submit" class="uq-button"><span class="uq-icon uq-icon--standard--search"></span> <span class="sr-only">Search</span></button>
        </div>
        <div class="uq-search-form__scope">
          <select id="search-scope" name="search-scope">
            <option value="1">https://www.about.uq.edu.au</option>
            <option value="2">uq.edu.au</option>
          </select>
        </div>
      </div>
    </div>

    <div style="background-color: #51247a; padding: 2rem;">
      <div class="uq-search-form uq-search-form--on-purple">
        <div class="uq-search-form__search">
          <div class="uq-search-form__input">
            <label class="sr-only" for="search">Search</label>
            <input id="search" type="search" name="search" placeholder="Search by keyword">
            <button class="uq-search-form__clear hidden">Clear</button>
          </div>
          <button type="submit" class="uq-button">Search</button>
        </div>
      </div>
      <br>
      <div class="uq-search-form uq-search-form--on-purple">
        <div class="uq-search-form__search">
          <div class="uq-search-form__input">
            <label class="sr-only" for="search">Search</label>
            <input id="search" type="search" name="search" placeholder="Search by keyword">
            <button class="uq-search-form__clear hidden">Clear</button>
          </div>
          <button type="submit" class="uq-button"><span class="uq-icon uq-icon--standard--search"></span> <span class="sr-only">Search</span></button>
        </div>
      </div>
      <br>
      <div class="uq-search-form uq-search-form--on-purple">
        <div class="uq-search-form__search">
          <div class="uq-search-form__input">
            <label class="sr-only" for="search">Search</label>
            <input id="search" type="search" name="search" placeholder="Search by keyword">
            <button class="uq-search-form__clear hidden">Clear</button>
          </div>
          <button type="submit" class="uq-button"><span class="uq-icon uq-icon--standard--search"></span> <span class="sr-only">Search</span></button>
        </div>
        <div class="uq-search-form__scope">
          <select id="search-scope" name="search-scope">
            <option value="1">https://www.about.uq.edu.au</option>
            <option value="2">uq.edu.au</option>
          </select>
        </div>
      </div>
    </div>
    </div>`;
  },
};

export const SearchInput = {};

export const Expand = {
  args: {
    expand: true,
  },
};
