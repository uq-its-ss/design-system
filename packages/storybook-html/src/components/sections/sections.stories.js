import expandedStory from '../../../.storybook/decorators/expanded.js';

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
    }
  },
  decorators: [expandedStory]
};



export const sectionsBasic = () => {
  return `
  <div class="section">
  <div class="section__container">
    <div class="section__header">
      <h2 class="section__title">Section header title</h2>

      <p class="section__summary">Section header summary.</p>
    </div>

    <div class="section__content">
      <p>section content.</p>
    </div>
    <div class="section__footer">section footer.</div>
  </div>
  </div>
`;
};

export const sectionsCentered = () => {
  return `
  <div class="section section--centered">
  <div class="section__container">
    <div class="section__header">
      <h2 class="section__title">Section header title</h2>

      <p class="section__summary">Section header summary. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.</p>
    </div>

    <div class="section__content">
      <p>section content. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="section__footer">section footer. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore.</div>
  </div>
  </div>
  `;
};

export const sectionsHorizontal = () => {
  return `
<div class="section section--horizontal">
  <div class="section__container">
    <div class="section__header">
      <h2 class="section__title">Section title</h2>

      <p class="section__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.</p>
    </div>

    <div class="section__content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="section__footer">section footer. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore.</div>
  </div>
</div>
`;
};

export const sectionsShaded = () => {
  return `
<div class="section section--shaded section--centered">
  <div class="section__container">
    <div class="section__header">
      <h2 class="section__title">Section title</h2>

      <p class="section__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.</p>
    </div>

    <div class="section__content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="section__footer">section footer. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore.</div>
  </div>
</div>
`;
};

export const sectionsBackground = () => {
  return `
<div class="section section--centered section--image-behind section--light-text light-palette">
  <div class="section__background"><img src="http://lorempixel.com/1920/1080" /></div>

  <div class="section__container">
    <div class="section__header">
      <h2 class="section__title">Section title</h2>

      <p class="section__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
    </div>

    <div class="section__content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="section__footer"></div>
  </div>
</div>
`;
};

export const sectionsLightTint = () => {
  return `
<div class="section section--centered section--background-image section--light-tint section--dark-text" style="background-image: url('//lorempixel.com/1920/600/abstract/3');">
  <div class="section__container">
    <div class="section__header">
      <h2 class="section__title">Section title</h2>

      <p class="section__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
    </div>

    <div class="section__content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="section__footer"></div>
  </div>
</div>
`;
};

export const sectionsDarkTint = () => {
  return `
<div class="section section--centered section--dark-tint section--light-text light-palette" style="background-image: url('//lorempixel.com/1920/600/abstract/3');">
  <div class="section__container">
    <div class="section__header">
      <h2 class="section__title">Section title</h2>

      <p class="section__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
    </div>

    <div class="section__content">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="section__footer"></div>
  </div>
</div>
`;
};
