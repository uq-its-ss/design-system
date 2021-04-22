// import styles
import './hero.scss';

// import HTML template strings
import heroHTML from './hero.html';

// import Docs
import docs from './hero.docs.mdx';

export default {
  title: 'Components/Hero',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "fullscreen",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const DefaultHero = () => {
  return `
  <div class="uq-hero">  
    <div class="uq-hero__container">
      <div class="uq-hero__content">
        <div class="uq-hero__title">Page title</div>
      </div>
    </div>
  </div>
  `;
};

DefaultHero.storyName = 'Default hero';

export const FeatureHero = () => {
  return `
  <div class="uq-hero uq-hero--banner">  
    <div class="uq-hero__image">
      <div class="uq-hero__image--small">
        <img src="/images/hero/hero-example--small.jpg" />
      </div>
      <div class="uq-hero__image--large">
        <img src="/images/hero/hero-example--large.jpg" />
      </div>
    </div>
    <div class="uq-hero__container">
      <div class="uq-hero__content">
        <h1 class="uq-hero__title">Start postgraduate study online</h1>
        <p class="uq-hero__subtext">Apply by June 30</p>
        <div class="uq-hero__action">
          <p><a class="uq-button" href="#">Learn more</a></p>
        </div>
      </div>
    </div>
  </div>
  `;
};

FeatureHero.storyName = 'Feature image hero';

// export const hero = () => {
//   return heroHTML;
// };

// hero.storyName = 'All';
