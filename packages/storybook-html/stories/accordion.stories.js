import { useEffect } from '@storybook/client-api';

// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/accordion/accordion.scss';

// import scripts
import accordion from '@uq-uidf/accordion/src/js/accordion.es6';

// import HTML template strings
import defaultHTML from '../src/components/accordion/accordion.html';

export default {
  title: 'Components|Accordion'
};

export const all = () => {
  useEffect(() => {
    new accordion();  
  });
  return namedSection("Accordion", defaultHTML);
};
