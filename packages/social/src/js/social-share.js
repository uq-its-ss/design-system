import copy from "copy-to-clipboard";

export const socialShare = (element) => {
  if (element) {
    const copyButton = element.querySelector(".uq-social-share__copy");
    if (copyButton) {
      copyButton.addEventListener("click", (event) => {
        event.preventDefault();

        copyButton.classList.add("is-active");

        // Copy string + provide text feedback.
        copy(copyButton.dataset.copy);

        // Created copied feedback element.
        const feedback = document.createElement("div");
        feedback.classList.add("uq-social-share__tooltip");
        feedback.setAttribute("role", "alert");
        feedback.textContent = "Link copied";
        copyButton.parentNode.appendChild(feedback);

        // Change icon.
        const icon = copyButton.querySelector(".uq-icon");
        icon.classList.remove("uq-icon--standard--link");
        icon.classList.add("uq-icon--standard--check");

        // Reset button to previous state.
        setTimeout(() => {
          icon.classList.add("uq-icon--standard--link");
          icon.classList.remove("uq-icon--standard--check");
          feedback.remove();
          copyButton.classList.remove("is-active");
        }, 2500);
      });
    }
  }
};
