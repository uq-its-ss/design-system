import copy from "copy-to-clipboard";

export const copyButton = (element, string) => {
  if (element) {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      const label = element.textContent;

      // Copy string + provide text feedback.
      copy(string);
      element.textContent = "Copied";

      // Create icon.
      const icon = document.createElement("span");
      icon.classList.add("uq-icon", "uq-icon--standard--check");
      element.prepend(icon);

      // Reset button to previous state.
      setTimeout(() => {
        element.textContent = label;
      }, 1000);
    });
  }
};
