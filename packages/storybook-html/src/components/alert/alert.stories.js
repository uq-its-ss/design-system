// import styles
import './alert.scss';

// documentation
import docs from './alert.docs.mdx';

export default {
  title: 'Components/Alert',
  parameters: {
    docs: {
      page: docs
    },
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const alertInfo = () => {
  return `
  <div class="uq-alert" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  `;
}
alertInfo.storyName = 'Info';

export const alertSuccess = () => {
  return `
  <div class="uq-alert uq-alert--success" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  `;
}
alertSuccess.storyName = 'Success';

export const alertWarning = () => {
  return `
  <div class="uq-alert uq-alert--warning" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  `;
}
alertWarning.storyName = 'Warning';

export const alertError = () => {
  return `
  <div class="uq-alert uq-alert--error" role="alert">
    <div class="uq-alert__message">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
  `;
}
alertError.storyName = 'Error';

export const alertWithLink = () => {
  return `
  <div class="uq-alert" role="alert">
    <div class="uq-alert__container">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Link" class="uq-button--text uq-button--inline">Link</a>
      </div>
    </div>
  </div>
  `;
}
alertWithLink.storyName = 'with Link';

export const alertWithButton = () => {
  return `
  <div class="uq-alert" role="alert">
    <div class="uq-alert__container">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Button" class="uq-button">Button</a>
      </div>
    </div>
  </div>
  `;
}
alertWithButton.storyName = 'with Button';

export const alertWithTitle = () => {
  return `
  <div class="uq-alert" role="alert">
    <div class="uq-alert__container">
      <div class="uq-alert__message">
        <h3 class="uq-alert__title">Title goes here</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Button" class="uq-button">Button</a>
      </div>
    </div>
  </div>
  `;
}
alertWithTitle.storyName = 'with Title';

export const infoGlobal = () => {
  return `
  <div class="uq-alert uq-alert--info uq-alert--dark" role="alert">
    <div class="uq-alert__container">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Link" class="uq-button--inline">Link</a>
      </div>
      <a href="javascript:void(0)" class="uq-alert__close">Close</a>
    </div>
  </div>
  `;
}
infoGlobal.storyName = 'Info global';

export const successGlobal = () => {
  return `
  <div class="uq-alert uq-alert--success uq-alert--dark" role="alert">
    <div class="uq-alert__container">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Link" class="uq-button--inline">Link</a>
      </div>
      <a href="javascript:void(0)" class="uq-alert__close">Close</a>
    </div>
  </div>
  `;
}
successGlobal.storyName = 'Success global';

export const warningGlobal = () => {
  return `
  <div class="uq-alert uq-alert--warning uq-alert--dark" role="alert">
    <div class="uq-alert__container">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Link" class="uq-button--inline">Link</a>
      </div>
    </div>
  </div>
  `;
}
warningGlobal.storyName = 'Warning global';

export const errorGlobal = () => {
  return `
  <div class="uq-alert uq-alert--error uq-alert--dark" role="alert">
    <div class="uq-alert__container">
      <div class="uq-alert__message">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" title="Link" class="uq-button--inline">Link</a>
      </div>
    </div>
  </div>
  `;
}
errorGlobal.storyName = 'Error global';
