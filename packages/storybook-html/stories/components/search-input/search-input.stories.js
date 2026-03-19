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
  render: ({ label, placeholder, expand }) => {
    return `<div class="${classNames("uq-search-input", { "uq-search-input--expand": expand })}">
  <label for="search-input-text" class="visually-hidden">${label}</label>
  <input type="text" id="search-input-text" placeholder="${placeholder}" class="uq-input" />
  <button type="submit" class="uq-search-input__submit">
    <span class="uq-icon uq-icon--standard--search"></span>
    <span class="visually-hidden">Submit</span>
  </button>
  <button class="uq-search-input__clear hidden">
    <span class="uq-icon uq-icon--standard--x"></span>
    <span class="visually-hidden">Clear</span>
  </button>
</div>`;
  },
};

export const SearchInput = {};

export const Expand = {
  args: {
    expand: true,
  },
};
