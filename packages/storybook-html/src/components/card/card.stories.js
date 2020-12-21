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

export const defaultCard = () => {
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
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date" tabindex="0">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary" tabindex="0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
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
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date" tabindex="0">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary" tabindex="0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
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
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date" tabindex="0">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary" tabindex="0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
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

defaultCard.storyName = 'Default card';

export const defaultCardWithLink = () => {
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
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date" tabindex="0">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary" tabindex="0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
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

defaultCardWithLink.storyName = 'Default card with link';





export const overlayCardSquare = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <a class="card__primary-link" href="https://campuses.uq.edu.au/st-lucia">
          <div class="entity entity-paragraphs-item paragraphs-item-card-custom card--square view-mode-card_overlay card card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9492/stlucia-card.jpg')">
            <div class="card__header"></div>
            <div class="card__body">
              <div class="card__content">
                <div class="card__title">
                  <span tabindex="0">St Lucia</span>
                </div>
                <div class="card__summary" tabindex="0"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  `;
};

overlayCardSquare.storyName = 'Overlay card square';

export const overlayCardSquareWithAdditionalText = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card card--background-image card--square" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
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

overlayCardSquareWithAdditionalText.storyName = 'Overlay card square with additional text';

export const overlayCardSquareWithLink = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card card--background-image card--square" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
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

overlayCardSquareWithLink.storyName = 'Overlay card square with link';



export const overlayCardPortrait = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6">
        <div class="card card--background-image card--portrait" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
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
        <div class="card card--background-image card--landscape" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

overlayCardLandscape.storyName = 'Overlay card landscape';
