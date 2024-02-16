// import styles
import "./previous-next.scss";

// import HTML template strings
import previousNextHTML from "./previous-next.html";

// documentation
import docs from "./previous-next.mdx";

export default {
  title: "Components/Previous next",
  parameters: {
    docs: {
      page: docs,
    },
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const previousNextInitial = {
  render: () => {
    return `
      <div class="uq-previous-next">
        <div class="uq-previous-next__item uq-previous-next__item--hidden">
          <a href="#" class="uq-previous-next__link-previous">Enrolment basics <span class="uq-previous-next__description">Previous</span></a>
        </div>

        <div class="uq-previous-next__item">
          <a href="#" class="uq-previous-next__link-next">How to enrol <span class="uq-previous-next__description">Next</span></a>
        </div>
      </div>
    `;
  },

  name: "Previous next initial",
};

export const previousNextMiddle = {
  render: () => {
    return previousNextHTML;
  },

  name: "Previous next middle",
};

export const previousNextFinal = {
  render: () => {
    return `
      <div class="uq-previous-next">
        <div class="uq-previous-next__item">
          <a href="#" class="uq-previous-next__link-previous">Enrolment basics <span class="uq-previous-next__description">Previous</span></a>
        </div>

        <div class="uq-previous-next__item uq-previous-next__item--hidden">
          <a href="#" class="uq-previous-next__link-next">How to enrol <span class="uq-previous-next__description">Next</span></a>
        </div>
      </div>
    `;
  },

  name: "Previous next final",
};
