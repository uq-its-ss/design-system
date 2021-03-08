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
      page: docs
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
    <div class="uq-hero__content uq-grid">
      <div class="uq-hero__text uq-grid__col uq-grid__col--xl-12">
        <h1>Page title</h1>
      </div>
    </div>
  </div>
  `;
};

DefaultHero.storyName = 'Default hero';

export const FeatureHero = () => {
  return `
  <div class="uq-hero hero--feature-image">  
  <div class="uq-hero__image">
    <div class="uq-hero__image--small">
      <img src="/images/uq-image-01.jpeg" />
    </div>
    <div class="uq-hero__image--large">
      <img src="/images/uq-image-01.jpeg" />
    </div>
  </div>
  <div class="uq-hero__content uq-grid">
    <div class="uq-hero__text uq-grid__col--6 uq-grid__col--xl-6">
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
