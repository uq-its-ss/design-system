import { useEffect } from '@storybook/client-api';

// import decorators
import namedSection from '../../decorators/section.js';

// import styles
import './accordion.stories.scss';

// import scripts
import accordion from '@uq-uidf/accordion/src/js/accordion.es6';

// import HTML template strings
import defaultHTML from './accordion.stories.html';

export default {
  title: 'Components/Accordion'
};

export const all = () => {
  useEffect(() => {
    new accordion();  
  });
  return namedSection("Accordion", defaultHTML);
};
