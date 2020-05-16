import expandedStory from '../../../.storybook/decorators/expanded.js';

// import styles
import './style.scss';

// import HTML template strings
import defaultHTML from './default.html';

export default {
  title: 'Components/Alert'
};

export const all = () => {
  return defaultHTML;
};

all.story = {
  decorators: [expandedStory]
}

export const error = () => {
  return `
    <div class="alert alert--danger" role="alert">
      <div class="alert__message">
        Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>--danger</strong>
      </div>
      <a href="javascript:void(0)" class="alert__close">&times;</a>
    </div>
  `;
}

export const errorSlim = () => {
  return `
    <div class="alert alert--danger alert--slim" role="alert">
      <div class="alert__message">
        Lorem ipsum dolor sit amet. <strong>--danger --slim</strong>
      </div>
      <a href="javascript:void(0)" class="alert__close">&times;</a>
    </div>
  `;
}

export const success = () => {
  return `
    <div class="alert alert--success" role="alert">
      <div class="alert__message">
        Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>--success</strong>.
      </div>
      <a href="javascript:void(0)" class="alert__close">&times;</a>
    </div>
  `;
}

export const successSlim = () => {
  return `
    <div class="alert alert--success alert--slim" role="alert">
      <div class="alert__message">
        Lorem ipsum dolor sit amet.
      </div>
      <a href="javascript:void(0)" class="alert__close">&times;</a>
    </div>
  `;
}
