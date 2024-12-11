export const searchInput = (element) => {
  if (element) {
    const textInput = element.querySelector(".uq-search-input__input");
    const clearButton = element.querySelector(".uq-search-input__clear");

    if (textInput && clearButton) {
      textInput.addEventListener("input", (event) => {
        const value = event.currentTarget.value;
        if (value.length > 0) {
          clearButton.classList.remove("hidden");
        } else {
          clearButton.classList.add("hidden");
        }
      });

      clearButton.addEventListener("click", (event) => {
        event.preventDefault();
        textInput.value = "";
        textInput.focus();
        clearButton.classList.add("hidden");
      });
    }
  }
};
