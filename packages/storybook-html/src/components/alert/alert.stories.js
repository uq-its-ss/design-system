// import decorators
import namedSection from '../../decorators/section.js';

// import styles
import './style.scss';

// import HTML template strings
import defaultHTML from './default.html';

export default {
  title: 'Components/Alert'
};

export const all = () => {
  return namedSection("Alerts", defaultHTML);
};
