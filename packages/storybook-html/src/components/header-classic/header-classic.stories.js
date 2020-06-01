import expandedStory from '../../../.storybook/decorators/expanded.js';

// define the uq-header custom component
import {defineCustomElements as defineUQHeader} from '@uq-uidf/header-classic/component/dist/custom-elements-bundle';
defineUQHeader();

// import styles
import '@uq-uidf/header-classic/src/scss/_component.scss';

export default {
  title: 'Components/Header/Classic',
  decorators: [expandedStory]
};

export const header = () => {
  return `
    <uq-header-classic>Header title</uq-header-classic>
    <br/>
    <uq-header-classic><a class="site-title__link" href="#">Header title as link</a></uq-header-classic>
    <br/>
    <uq-header-classic show-global-menu=""><a class="site-title__link" href="#">Header w/ global menu</a></uq-header-classic>
    <br/>
    <uq-header-classic show-global-menu="" show-search=""><a class="site-title__link" href="#">Header w/ the works</a></uq-header-classic>
  `;
};
