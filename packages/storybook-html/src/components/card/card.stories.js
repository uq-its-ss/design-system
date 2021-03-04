// import styles
import './card.scss';

// import documentation
import docs from './card.docs.mdx';

export default {
  title: 'Components/Cards',
  parameters: {
    layout: "fullscreen",
    docs: {
      page: docs
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const DefaultCard = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCard.storyName = 'Default card';

export const DefaultCardWithLink = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </div>  
  `;
};

DefaultCardWithLink.storyName = 'Default card with link';

export const DefaultCardNoImage = () => {
  return `
  <div class="uq-grid uq-grid--full-width height-non-equalised">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCardNoImage.storyName = 'Default card, no image';

export const DefaultCardNoImageShaded = () => {
  return `
  <div class="uq-grid uq-grid--full-width height-non-equalised">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--shaded">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--shaded">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--shaded">
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--shaded">
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCardNoImageShaded.storyName = 'Default card, no image, shaded';

export const DefaultCardNoImageButton = () => {
  return `
  <div class="uq-grid uq-grid--full-width height-non-equalised">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
          <div class="uq-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCardNoImageButton.storyName = 'Default card, no image, button';

export const DefaultCardNoImageButtonShaded = () => {
  return `
  <div class="uq-grid uq-grid--full-width height-non-equalised">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--shaded">
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
          <div class="uq-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--shaded">
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCardNoImageButtonShaded.storyName = 'Default card, no image, button, shaded';

export const DefaultCardImage = () => {
  return `
  <div class="uq-grid uq-grid--full-width height-non-equalised">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCardImage.storyName = 'Default card, image';

export const DefaultCardImageButton = () => {
  return `
  <div class="uq-grid uq-grid--full-width height-non-equalised">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
          <div class="uq-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCardImageButton.storyName = 'Default card, image, button';

export const DefaultCard1Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-8 uq-grid__col--xl-12">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCard1Col.storyName = 'Default card, 1 column';

export const DefaultCard2Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCard2Col.storyName = 'Default card, 2 column';

export const DefaultCard3Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCard3Col.storyName = 'Default card, 3 column';

export const DefaultCard4Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card">
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-stlucia-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCard4Col.storyName = 'Default card, 4 column';






export const StoryCard = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

StoryCard.storyName = 'Story card';

export const StoryCard1Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-8 uq-grid__col--xl-12">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

StoryCard1Col.storyName = 'Story card, 1 column';

export const StoryCard2Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

StoryCard2Col.storyName = 'Story card, 2 column';

export const StoryCard3Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

StoryCard3Col.storyName = 'Story card, 3 column';

export const StoryCard4Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--story">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-gatton-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super uq-card__title-super--grey">SUB-TITLE</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>3 min read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

StoryCard4Col.storyName = 'Story card, 4 column';

export const EventCard = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

EventCard.storyName = 'Event card';

export const EventCard1Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-8 uq-grid__col--xl-12">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

EventCard1Col.storyName = 'Event card, 1 column';

export const EventCard2Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

EventCard2Col.storyName = 'Event card, 2 column';

export const EventCard3Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

EventCard3Col.storyName = 'Event card, 3 column';

export const EventCard4Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="uq-card uq-card--event">
        <a class="uq-card__link" href="#">Card title</a>
        <div class="uq-card__image-wrapper">
          <div class="uq-card__image">
            <img src="../images/uq-image-herston-campus.jpg" alt="Card image description">
          </div>
        </div>
        <div class="uq-card__content-wrapper">
          <div class="uq-card__content">
            <div class="uq-card__header">
              <p class="uq-card__title-super">DD MONTH</p>
              <h3 class="uq-card__title">Card title</h3>
            </div>
            <div class="uq-card__body">
              <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="uq-card__actions">
            <p>Online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

EventCard4Col.storyName = 'Event card, 4 column';
