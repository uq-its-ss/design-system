// import styles
import "./previous-next.scss";

// import HTML template strings
import previousNextHTML from "./previous-next.html?raw";

export default {
  title: "Components/Previous next",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const previousNextInitial = {
  render: () => {
    return `

      <h2>Previous next with link</h2>


      <p>Don't choose just any path – choose your future. Discover study options to match your interests, passions and career goals. </p>
      <nav class="uq-previous-next" aria-label="someName">
        <div class="uq-previous-next__item">
          <a class="uq-icon  uq-icon uq-icon--standard--arrow-right" href="#">Next</a>
        </div>
      </nav>
 
      <hr>
      <p>Don't choose just any path – choose your future. Discover study options to match your interests, passions and career goals. </p>
      <nav class="uq-previous-next" aria-label="someName">
        <div class="uq-previous-next__item">
          <a class="uq-icon  uq-icon uq-icon--standard--arrow-right" href="#">Next</a>
        </div>

        <div class="uq-previous-next__item">
          <a class="uq-icon  uq-icon uq-icon--standard--arrow-left" href="#">Previous</a>
        </div>
      </nav>

      <hr>
      <p>Don't choose just any path – choose your future. Discover study options to match your interests, passions and career goals. </p>
      <nav class="uq-previous-next" aria-label="someName">
        <div class="uq-previous-next__item">
          <a class="uq-icon  uq-icon uq-icon--standard--arrow-left" href="#">Previous</a>
        </div>
      </nav>

      <h2>Previous next with button</h2>

      <p>Don't choose just any path – choose your future. Discover study options to match your interests, passions and career goals. </p>
      
      <nav class="uq-previous-next" aria-label="someName">
        <div class="uq-previous-next__item">
          <button class="uq-button uq-button--tertiary">
            <span class="uq-icon uq-icon--standard--arrow-left"></span>Next
          </button>
        </div>
      </nav>
 
      <hr>
      <p>Don't choose just any path – choose your future. Discover study options to match your interests, passions and career goals. </p>
      <nav class="uq-previous-next" aria-label="someName">
        <div class="uq-previous-next__item">
          <button class="uq-button uq-button--tertiary">
            <span class="uq-icon uq-icon--standard--arrow-left"></span>Next
          </button>
        </div>

        <div class="uq-previous-next__item">
          <button class="uq-button uq-button--tertiary">
            <span class="uq-icon uq-icon--standard--arrow-right"></span> Previous
          </button>
        </div>
      </nav>

      <hr>
      <p>Don't choose just any path – choose your future. Discover study options to match your interests, passions and career goals. </p>
      <nav class="uq-previous-next" aria-label="someName">
        <div class="uq-previous-next__item">
          <button class="uq-button uq-button--tertiary">
            <span class="uq-icon uq-icon--standard--arrow-right"></span> Previous
          </button>
        </div>
      </nav>
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
