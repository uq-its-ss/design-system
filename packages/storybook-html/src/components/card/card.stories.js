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

export const cardDefault = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="card">
        <div class="card__header"></div>
        <div class="card__body">
          <a class="card__link" href="#">
            <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg');"></div>
          </a>
          <div class="card__content">
            <h3 class="card__title">
              <a class="card__link" href="#">Title of item</a>
            </h3>
            <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div class="card__footer"></div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="card">
        <div class="card__header"></div>
        <div class="card__body">
          <a class="card__link" href="#">
            <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg');"></div>
          </a>
          <div class="card__content">
            <h3 class="card__title">
              <a class="card__link" href="#">Title of item</a>
            </h3>
            <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div class="card__footer"></div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="card">
        <div class="card__header"></div>
        <div class="card__body">
          <a class="card__link" href="#">
            <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg');"></div>
          </a>
          <div class="card__content">
            <h3 class="card__title">
              <a class="card__link" href="#">Title of item</a>
            </h3>
            <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div class="card__footer"></div>
      </div>
    </div>
  </div>
  `;
};

cardDefault.storyName = 'Card default';

export const CardCompact = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="card card--compact">
      <div class="card__body">
        <a class="card__link" href="#">
          <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg');"></div>
        </a>
        <div class="card__content">
          <h3 class="card__title">
            <a class="card__link" href="#">Title of item</a>
          </h3>
        </div>
      </div>
    </div>    
    </div>
  </div>
  `;
};

CardCompact.storyName = 'Card compact';


export const cardWithLinks = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="card">
        <div class="card__header"></div>
        <div class="card__body">
          <a class="card__link" href="#">
            <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')"></div>
          </a>
          <div class="card__content">
            <h3 class="card__title">
              Title of item
            </h3>
            <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div class="card__footer">
          <div class="uq-grid">
            <div class="uq-grid__col uq-grid__col--3">
              <a class="card__link" href="#">Action link A</a>
            </div>
            <div class="uq-grid__col uq-grid__col--3">
              <a class="card__link" href="#">Action link B</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

cardWithLinks.storyName = 'Card with links';

export const cardWithAdditionalText = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="card">
        <div class="card__header"></div>
        <div class="card__body">
          <a class="card__link" href="#">
            <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg');"></div>
          </a>
          <div class="card__content">
            <h3 class="card__title">
              <a class="card__link" href="#">Title of item</a>
            </h3>
            <div class="card__date">Sunday 16 August, 2015</div>
            <div class="card__location">
              <a class="card__link" href="#">Gatton campus</a>
            </div>
            <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div class="card__footer"></div>
      </div>
    </div>
  </div>
  `;
};

cardWithAdditionalText.storyName = 'Card with additional text';

export const overlayCardSquare = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <a class="card__primary-link" href="https://campuses.uq.edu.au/st-lucia">
        <div class="card card--square card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9492/stlucia-card.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <div class="card__title">Title of item</div>
              <div class="card__summary"></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
  `;
};

overlayCardSquare.storyName = 'Overlay card square';

export const overlayCardPortrait = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6">
      <div class="card card--portrait card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
        <div class="card__header"></div>
        <div class="card__body">
          <div class="card__content">
            <h3 class="card__title">
              <a class="card__link" href="#">Title of item</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

overlayCardPortrait.storyName = 'Overlay card portrait';

export const overlayCardLandscape = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6">
      <div class="card card--landscape card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
        <div class="card__header"></div>
        <div class="card__body">
          <div class="card__content">
            <h3 class="card__title">
              <a class="card__link" href="#">Title of item</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

overlayCardLandscape.storyName = 'Overlay card landscape';

export const overlayCardWithLink = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="card card--square card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
        <div class="card__header"></div>
        <div class="card__body">
          <div class="card__content">
            <h3 class="card__title">
              <a class="card__link" href="#">Title of item</a>
            </h3>
          </div>
        </div>
        <div class="card__footer">
          <a class="card__link" href="#">Action link</a>
        </div>
      </div>
    </div>
  </div>
  `;
};

overlayCardWithLink.storyName = 'Overlay card with link';

export const overlayCardWithAdditionalText = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
      <div class="card card--square card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
        <div class="card__header"></div>
        <div class="card__body">
          <div class="card__content">
            <h3 class="card__title">
              <a class="card__link" href="#">Title of item</a>
            </h3>
            <div class="card__date">
              <a class="card__link" href="#">Sunday 16 August, 2015</a>
            </div>
            <div class="card__location">
              <a class="card__link" href="#">Gatton campus</a>
            </div>
          </div>
        </div>
        <div class="card__footer"></div>
      </div>
    </div>
  </div>
  `;
};

overlayCardWithAdditionalText.storyName = 'Overlay card with additional text';

export const fsCardDefault = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__imagery__wrapper">
          <div class="fs-card__imagery">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description" class="fs-card__image">
          </div>
        </div>
        <div class="fs-card__content">
          <div class="fs-card__header">
            <h3 class="fs-card__title">Card title</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__imagery__wrapper">
          <div class="fs-card__imagery">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description" class="fs-card__image">
          </div>
        </div>
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
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <a class="fs-card__link__outer" href="#">Card title</a>
        <div class="fs-card__imagery__wrapper">
          <div class="fs-card__imagery">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description" class="fs-card__image">
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
        <div class="fs-card__actions">
          <p class="text--small text--grey">5 minute read</p>
        </div>
      </div>
    </div>
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
      <div class="fs-card">
        <div class="fs-card__imagery__wrapper">
          <div class="fs-card__imagery">
            <img src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" alt="Card image description" class="fs-card__image">
          </div>
        </div>
        <div class="fs-card__content">
          <div class="fs-card__header">
            <p class="fs-card__title__super fs-card__title__super--grey">Card sub-title</p>
            <h3 class="fs-card__title">Card title</h3>
          </div>
          <div class="fs-card__body">
              <p>Card summary text Card summary text Card summary text</p>
          </div>
        </div>
        <div class="fs-card__actions">
          <a href="#" class="fs-card__link">Card link</a>
        </div>
      </div>
    </div>
  </div>
  `;
};

fsCardDefault.storyName = 'FS card default';

export const fsCardBordered = () => {
  return `
  <div class="uq-grid">
    <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
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
  </div>
  `;
};

fsCardBordered.storyName = 'FS card bordered';