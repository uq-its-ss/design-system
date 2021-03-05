// import styles
import './alert.scss';

// import HTML template strings
import alertHTML from './alert.html';

export default {
  title: 'Components/Alert',
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const all = () => {
  return alertHTML;
};

export const error = () => {
  return `
    <div class="uq-alert uq-alert--danger" role="alert">
      <div class="uq-alert__message">
        Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>--danger</strong>
      </div>
      <a href="javascript:void(0)" class="uq-alert__close">&times;</a>
    </div>
  `;
}

export const errorSlim = () => {
  return `
    <div class="uq-alert uq-alert--danger uq-alert--slim" role="alert">
      <div class="uq-alert__message">
        Lorem ipsum dolor sit amet. <strong>--danger --slim</strong>
      </div>
      <a href="javascript:void(0)" class="uq-alert__close">&times;</a>
    </div>
  `;
}

errorSlim.storyName = 'Error slim';

export const success = () => {
  return `
    <div class="uq-alert uq-alert--success" role="alert">
      <div class="uq-alert__message">
        Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>--success</strong>.
      </div>
      <a href="javascript:void(0)" class="uq-alert__close">&times;</a>
    </div>
  `;
}

export const successSlim = () => {
  return `
    <div class="uq-alert uq-alert--success uq-alert--slim" role="alert">
      <div class="uq-alert__message">
        Lorem ipsum dolor sit amet.
      </div>
      <a href="javascript:void(0)" class="uq-alert__close">&times;</a>
    </div>
  `;
}

successSlim.storyName = 'Success slim';
