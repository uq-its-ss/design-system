const initSearchInput = (element) => {
  const textInput = element.querySelector(
    '.uq-search-form__input > input[type="search"]',
  );
  const clearButton = element.querySelector(".uq-search-form__clear");

  if (!textInput || !clearButton) return;

  textInput.addEventListener("input", () => {
    clearButton.classList.toggle("hidden", textInput.value.length === 0);
  });

  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    textInput.value = "";
    textInput.focus();
    clearButton.classList.add("hidden");
  });
};

/**
 * Initialise search inputs. Accepts an element, a NodeList/array of elements,
 * or nothing (initialises every `.uq-search-form` in the document).
 */
export const searchInput = (
  elements = document.querySelectorAll(".uq-search-form"),
) => {
  if (!elements) return;
  const list = elements instanceof Element ? [elements] : Array.from(elements);
  list.forEach((element) => {
    if (!element) return;
    const forms = element.matches(".uq-search-form")
      ? [element]
      : element.querySelectorAll(".uq-search-form");
    forms.forEach(initSearchInput);
  });
};
