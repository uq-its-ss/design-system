import copy from "copy-to-clipboard";

export const socialShare = (element) => {
  if (element) {
    const copyButton = element.querySelector(".uq-social-share__copy");
    if (copyButton) {
      copyButton.addEventListener("click", (event) => {
        event.preventDefault();

        const labelText = copyButton.getAttribute("aria-label");

        // Copy string + provide text feedback.
        copy(copyButton.dataset.copy);
        copyButton.setAttribute("aria-label", "Link copied");

        // Change icon.
        const icon = copyButton.querySelector(".uq-icon");
        icon.classList.remove("uq-icon--standard--link");
        icon.classList.add("uq-icon--standard--check");

        // Reset button to previous state.
        setTimeout(() => {
          icon.classList.add("uq-icon--standard--link");
          icon.classList.remove("uq-icon--standard--check");
          copyButton.setAttribute("aria-label", labelText);
        }, 1000);
      });
    }
  }
};
