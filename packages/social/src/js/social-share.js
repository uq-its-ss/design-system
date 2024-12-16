import copy from "copy-to-clipboard";

export const socialShare = (element) => {
  if (element) {
    const copyButton = element.querySelector(".uq-social-share__copy");
    if (copyButton) {
      copyButton.addEventListener("click", (event) => {
        event.preventDefault();

        const label = element.querySelector(".visually-hidden");
        const labelText = label.textContent;

        // Copy string + provide text feedback.
        copy(copyButton.dataset.copy);
        label.textContent = "Copied";

        // Change icon.
        const icon = copyButton.querySelector(".uq-icon");
        icon.classList.remove("uq-icon--standard--link");
        icon.classList.add("uq-icon--standard--check");

        // Reset button to previous state.
        setTimeout(() => {
          label.textContent = labelText;
          icon.classList.add("uq-icon--standard--link");
          icon.classList.remove("uq-icon--standard--check");
        }, 1000);
      });
    }
  }
};
