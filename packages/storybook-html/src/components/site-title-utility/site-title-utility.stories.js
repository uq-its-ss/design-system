import expandedStory from '../../../.storybook/decorators/expanded.js';

// import supporting component markup
import headerHTML from '../header/header.html';
import navHTML from '../main-menu/main-menu2.html';

// import styles
import '@uq-uidf/site-title-utility/src/scss/_component.scss';

export default {
  title: 'Components/Site title',
  decorators: [expandedStory]
};

export const siteTitleDefault = () => {
  return `
    <div class="uq-site-title">
      <div class="uq-site-title__content">
        <div class="uq-site-title__title">
          <a class="uq-site-title__title__link" href="https://uq.edu.au">Site title</a>
        </div>
        <div class="uq-site-title__actions">
          <div>[Site utilities go here]</div>
        </div>
      </div>
    </div>
  `;
};

siteTitleDefault.story = {
  name: "Default (use with site navigation)"
}

export const siteTitleUseWithoutNav = () => {
  return `
    <div class="uq-site-title uq-site-title--no-nav">
      <div class="uq-site-title__content">
        <div class="uq-site-title__title">
          <a class="uq-site-title__title__link" href="https://uq.edu.au">Site title</a>
        </div>
        <div class="uq-site-title__actions">
          <div>[Site utilities go here]</div>
        </div>
      </div>
    </div>
  `;
};

siteTitleUseWithoutNav.story = {
  name: "Variant for use without site navigation"
}

export const siteTitleUsageExample1 = () => {
  return `
    ${headerHTML}
    <div class="uq-site-title">
      <div class="uq-site-title__content">
        <div class="uq-site-title__title">
          <a class="uq-site-title__title__link" href="https://uq.edu.au">Site title</a>
        </div>
        <div class="uq-site-title__actions">
          <div>[Site utilities go here]</div>
        </div>
      </div>
    </div>
    ${navHTML}
  `;
};

siteTitleUsageExample1.story = {
  name: "Example 1: with site header and site navigation"
};

export const siteTitleUsageExample2 = () => {
  return `
    ${headerHTML}
    <div class="uq-site-title uq-site-title--no-nav">
      <div class="uq-site-title__content">
        <div class="uq-site-title__title">
          <a class="uq-site-title__title__link" href="https://uq.edu.au">Site title</a>
        </div>
        <div class="uq-site-title__actions">
          <div>[Site utilities go here]</div>
        </div>
      </div>
    </div>
  `;
};

siteTitleUsageExample2.story = {
  name: "Example 2: with site header"
};
