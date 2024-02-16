// import styles
import "./card.scss";

// import documentation
import docs from "./card.mdx";

export default {
  title: "Components/Cards",
  parameters: {
    docs: {
      page: docs,
    },
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const DefaultCard = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
  },

  name: "Default card",
};

export const DefaultCardWithLink = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card">
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
  },

  name: "Default card with link",
};

export const DefaultCardNoImage = {
  render: () => {
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
  },

  name: "Default card, no image",
};

export const DefaultCardNoImageShaded = {
  render: () => {
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
  },

  name: "Default card, no image, shaded",
};

export const DefaultCardNoImageButton = {
  render: () => {
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
  },

  name: "Default card, no image, button",
};

export const DefaultCardNoImageButtonShaded = {
  render: () => {
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
  },

  name: "Default card, no image, button, shaded",
};

export const DefaultCardImage = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width height-non-equalised">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
  },

  name: "Default card, image",
};

export const DefaultCardImageButton = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width height-non-equalised">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card">
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
  },

  name: "Default card, image, button",
};

export const DefaultCard1Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-8 uq-grid__col--xl-12">
        <div class="uq-card">
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
  },

  name: "Default card, 1 column",
};

export const DefaultCard2Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
        <div class="uq-card">
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
  },

  name: "Default card, 2 column",
};

export const DefaultCard3Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="uq-card">
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
  },

  name: "Default card, 3 column",
};

export const DefaultCard4Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card">
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-st-lucia-campus.jpg" alt="Card image description">
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
  },

  name: "Default card, 4 column",
};

export const StoryCard = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card uq-card--story">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
  },

  name: "Story card",
};

export const StoryCard1Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-8 uq-grid__col--xl-12">
        <div class="uq-card uq-card--story">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
  },

  name: "Story card, 1 column",
};

export const StoryCard2Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
        <div class="uq-card uq-card--story">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
  },

  name: "Story card, 2 column",
};

export const StoryCard3Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="uq-card uq-card--story">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
  },

  name: "Story card, 3 column",
};

export const StoryCard4Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card uq-card--story">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-gatton-campus.jpg" alt="Card image description">
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
  },

  name: "Story card, 4 column",
};

export const EventCard = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card uq-card--event">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
  },

  name: "Event card",
};

export const EventCard1Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-8 uq-grid__col--xl-12">
        <div class="uq-card uq-card--event">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
  },

  name: "Event card, 1 column",
};

export const EventCard2Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-6">
        <div class="uq-card uq-card--event">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
  },

  name: "Event card, 2 column",
};

export const EventCard3Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="uq-card uq-card--event">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
  },

  name: "Event card, 3 column",
};

export const EventCard4Col = {
  render: () => {
    return `
    <div class="uq-grid uq-grid--full-width">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-3">
        <div class="uq-card uq-card--event">
          <a class="uq-card__link" href="#">Card title</a>
          <div class="uq-card__image-wrapper">
            <div class="uq-card__image">
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
              <img src="/images/card/card-example-herston-campus.jpg" alt="Card image description">
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
  },

  name: "Event card, 4 column",
};
