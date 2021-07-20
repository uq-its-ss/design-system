// import styles
import './sections.scss';

// import HTML template strings
import sectionsHTML from './sections.html';

export const sections = () => {
  return sectionsHTML;
};

import docs from './sections.docs.mdx';

export default {
  title: 'Layout/Sections',
  parameters: {
    docs: {
      page: docs
    },
    layout: "fullscreen",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const sectionsDefault = () => {
  return `
  <div class="uq-section">
  <div class="uq-section__container">
    <div class="uq-section__header">
      <h2 class="uq-section__title">Section title</h2>
    </div>

    <div class="uq-section__content">
      <p>Section content</p>
    </div>
  </div>
  </div>
`;
};

sectionsDefault.storyName = 'Default';

export const sectionsCentered = () => {
  return `
  <div class="uq-section uq-section--centered">
  <div class="uq-section__container">
    <div class="uq-section__header">
      <h2 class="uq-section__title">Section header title</h2>

      <p class="uq-section__summary">Section header summary. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.</p>
    </div>

    <div class="uq-section__content">
      <p>section content. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
  </div>
  `;
};

sectionsCentered.storyName = 'Centered';

export const sectionsNarrow = () => {
  return `
  <div class="uq-section uq-section--narrow">
  <div class="uq-section__container">
    <div class="uq-section__header">
      <h2 class="uq-section__title">Section header title</h2>

      <p class="uq-section__summary">Section header summary. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.</p>
    </div>

    <div class="uq-section__content">
      <p>section content. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
  </div>
  `;
};

sectionsNarrow.storyName = 'Narrow';

export const sectionsShaded = () => {
  return `
<div class="uq-section uq-section--shaded uq-section--centered">
  <div class="uq-section__container">
    <div class="uq-section__header">
      <h2 class="uq-section__title">Section title</h2>

      <p class="uq-section__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.</p>
    </div>

    <div class="uq-section__content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>
`;
};

sectionsShaded.storyName = 'Shaded';

export const sectionsSpacing = () => {
  return `
<div class="uq-section uq-section--shaded uq-section--centered uq-section--extra-large-spacing">
  <div class="uq-section__container">
    <div class="uq-section__header">
      <h2 class="uq-section__title">Section with extra large spacing</h2>

      <p class="uq-section__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
    </div>

    <div class="uq-section__content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>
`;
};

sectionsSpacing.storyName = 'Sections spacing';
