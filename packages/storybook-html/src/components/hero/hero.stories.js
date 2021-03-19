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
    <div class="uq-hero__content">
      <div class="uq-hero__text">
        <h1>Page title</h1>
      </div>
    </div>
  </div>
  `;
};

DefaultHero.storyName = 'Default hero';

export const FeatureHero = () => {
  return `
<div class="uq-hero uq-hero--feature-image">  
  <div class="uq-hero__image">
    <div class="uq-hero__image--small">
      <img src="/images/hero/hero_example--small.jpg" />
    </div>
    <div class="uq-hero__image--large">
      <img src="/images/hero/hero_example--large.jpg" />
    </div>
  </div>
  <div class="uq-hero__content">
    <div class="uq-hero__text">
      <h1>Start postgraduate study online</h1>
      <p class="uq-hero__subtext">Apply by June 30</p>
      <p><a class="uq-button" href="#">Learn more</a></p>
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
