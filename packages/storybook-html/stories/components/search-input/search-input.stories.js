import classNames from "classnames";
import { searchInput } from "@uqds/form/src/js/search-input";

export default {
  title: "Components/Form/SearchInput",
  play: async ({ canvasElement }) => {
    const component = canvasElement.querySelector(".uq-search-input");
    searchInput(component);
  },
  argTypes: {
    label: "text",
    placeholder: "text",
    wide: "boolean",
  },
  args: {
    label: "Search",
    placeholder: "Search by keyword",
    wide: false,
  },
  render: ({ label, placeholder, wide }) => {
    return `<div class="${classNames("uq-search-input", { "uq-search-input--wide": wide })}">
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

export const Wide = {
  args: {
    wide: true,
  },
};
