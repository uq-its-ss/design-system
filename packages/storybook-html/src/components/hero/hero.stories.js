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
  <div class="hero">  
    <div class="hero__content">
      <div class="hero__text">
        <h1>Page title with a really long title that goes over two lines maybe even three when on mobile</h1>
      </div>
    </div>
  </div>
  `;
};

DefaultHero.storyName = 'Default hero';

export const FeatureHero = () => {
  return `
  <div class="hero hero--feature-image">  
  <div class="hero__image">
    <div class="hero__image--small">
      <img src="https://picsum.photos/375/250" />
    </div>
    <div class="hero__image--large">
      <img src="https://picsum.photos/1920/540" />
    </div>
  </div>
  <div class="hero__content">
    <div class="hero__text">
      <h1>Start postgraduate study online</h1>
      <p class="hero__subtext">Apply by June 30</p>
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
