// import styles
import "./progression.scss";

// import HTML template strings
import progressionHTML from "./progression.html";

// documentation
import docs from "./progression.docs.mdx";

export default {
  title: "Components/Progression",
  parameters: {
    docs: {
      page: docs,
      inlineStories: false,
    },
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const progressionInitial = () => {
  return progressionHTML;
};

progressionInitial.storyName = "Progression initial";

export const progressionMiddle = () => {
  return `
  <div class="uqds-progression-wrapper">
    <ul class="uq-progression">
        <li class="uq-progression__step is-complete">
            <div class="uq-progression__step-marker">
                <a class="uq-progression__link" href="#">
                    <span class="uq-progression__step-number">1</span>
                    <span class="uq-progression__step-label">Step 1</span>
                </a>
            </div>
            <div class="uq-progression__bar">&nbsp;</div>
        </li>
        <li class="uq-progression__step is-complete">
            <div class="uq-progression__step-marker">
                <a class="uq-progression__link" href="#">
                    <span class="uq-progression__step-number">2</span>
                    <span class="uq-progression__step-label">Step 2</span>
                </a>
            </div>
            <div class="uq-progression__bar">
                <ul class="uq-progression__sub-step">
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar">&nbsp;</li>
                </ul>
            </div>
        </li>
        <li class="uq-progression__step">
            <div class="uq-progression__step-marker">
                <a class="uq-progression__link" href="#">
                    <span class="uq-progression__step-number">3</span>
                    <span class="uq-progression__step-label">Step 3</span>
                </a>
            </div>
            <div class="uq-progression__bar">
                <ul class="uq-progression__sub-step">
                    <li class="uq-progression__bar">&nbsp;</li>
                    <li class="uq-progression__bar">&nbsp;</li>
                    <li class="uq-progression__bar">&nbsp;</li>
                    <li class="uq-progression__bar">&nbsp;</li>
                    <li class="uq-progression__bar">&nbsp;</li>
                    <li class="uq-progression__bar">&nbsp;</li>
                </ul>
            </div>
        </li>
        <li class="uq-progression__step">
            <div class="uq-progression__step-marker">
                <a class="uq-progression__link" href="#">
                    <span class="uq-progression__step-number">4</span>
                    <span class="uq-progression__step-label">Step 4</span>
                </a>
            </div>
        </li>
    </ul>
</div>
  `;
};

progressionMiddle.storyName = "Progression middle";

export const progressionFinal = () => {
  return `
  <div class="uqds-progression-wrapper">
    <ul class="uq-progression">
        <li class="uq-progression__step is-complete">
            <div class="uq-progression__step-marker">
                <a class="uq-progression__link" href="#">
                    <span class="uq-progression__step-number">1</span>
                    <span class="uq-progression__step-label">Step 1</span>
                </a>
            </div>
            <div class="uq-progression__bar">&nbsp;</div>
        </li>
        <li class="uq-progression__step is-complete">
            <div class="uq-progression__step-marker">
                <a class="uq-progression__link" href="#">
                    <span class="uq-progression__step-number">2</span>
                    <span class="uq-progression__step-label">Step 2</span>
                </a>
            </div>
            <div class="uq-progression__bar">
                <ul class="uq-progression__sub-step">
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                </ul>
            </div>
        </li>
        <li class="uq-progression__step is-complete">
            <div class="uq-progression__step-marker">
                <a class="uq-progression__link" href="#">
                    <span class="uq-progression__step-number">3</span>
                    <span class="uq-progression__step-label">Step 3</span>
                </a>
            </div>
            <div class="uq-progression__bar">
                <ul class="uq-progression__sub-step">
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                    <li class="uq-progression__bar is-complete">&nbsp;</li>
                </ul>
            </div>
        </li>
        <li class="uq-progression__step is-complete">
            <div class="uq-progression__step-marker">
                <a class="uq-progression__link" href="#">
                    <span class="uq-progression__step-number">4</span>
                    <span class="uq-progression__step-label">Step 4</span>
                </a>
            </div>
        </li>
    </ul>
</div>
  `;
};

progressionFinal.storyName = "Progression final";
