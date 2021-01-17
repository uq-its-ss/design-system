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
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCard.storyName = 'Default card';

export const DefaultCardNoImage = () => {
  return `
  <div class="uq-grid uq-grid--full-width height-non-equalised">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
          <div class="fs-card__actions">
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
      <div class="fs-card fs-card--shaded">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card fs-card--shaded">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card fs-card--shaded">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card fs-card--shaded">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
          <div class="fs-card__actions">
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
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
          <div class="fs-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
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
      <div class="fs-card fs-card--shaded height-non-equalised">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
          <div class="fs-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card fs-card--shaded">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
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
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
          <div class="fs-card__actions">
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
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
          </div>
          <div class="fs-card__actions">
            <button class="uq-button uq-button--purple" href="#">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
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
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCard1Col.storyName = 'Default card, 1 column';

export const fsCardDefault2Col = () => {
  return `
  <div class="uq-grid uq-grid--full-width">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
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
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
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
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content__wrapper">
          <div class="fs-card__content">
            <div class="fs-card__header">
              <h3 class="fs-card__title">Card title</h3>
            </div>
            <div class="fs-card__body">
                <p>Card summary text Card summary text Card summary text</p>
            </div>
          </div>
          <div class="fs-card__actions">
            <a class="text--link" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

DefaultCard4Col.storyName = 'Default card, 4 column';









export const fsCardBordered = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="fs-card fs-card--bordered">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content">
          <div class="fs-card__header">
            <p class="fs-card__title__super">Card sub-title</p>
            <h3 class="fs-card__title">Card title</h3>
          </div>
          <div class="fs-card__body">
            <p>Card summary text Card summary text Card summary text</p>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="fs-card fs-card--bordered">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__content">
          <div class="fs-card__header">
            <h3 class="fs-card__title">Card title</h3>
            <p class="fs-card__title__sub">Card sub-title</p>
          </div>
          <div class="fs-card__body">
            <p>Card summary text Card summary text Card summary text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

fsCardBordered.storyName = 'FS card bordered';

export const fsCardHorizontalLeft = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-8 uq-grid__col--xl-12">
      <div class="fs-card fs-card--horizontal fs-card--horizontal-left">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content">
          <div class="fs-card__header">
            <p class="fs-card__title__super">Card sub-title</p>
            <h3 class="fs-card__title">Card title</h3>
          </div>
          <div class="fs-card__body">
            <p>Card summary text Card summary text Card summary text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

fsCardHorizontalLeft.storyName = 'FS card horizontal left';

export const fsCardHorizontalRight = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-8 uq-grid__col--xl-12">
      <div class="fs-card fs-card--horizontal fs-card--horizontal-right">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__image__wrapper">
          <div class="fs-card__image">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description">
          </div>
        </div>
        <div class="fs-card__content">
          <div class="fs-card__header">
            <p class="fs-card__title__super">Card sub-title</p>
            <h3 class="fs-card__title">Card title</h3>
          </div>
          <div class="fs-card__body">
            <p>Card summary text Card summary text Card summary text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

fsCardHorizontalRight.storyName = 'FS card horizontal right';