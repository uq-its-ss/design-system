// import decorators
import namedSection from '../src/decorators/section.js';

// import styles
import '../src/components/alert/style.scss';

// import HTML template strings
import defaultHTML from '../src/components/alert/default.html';

export default {
  title: 'Alert'
};

export const all = () => {
  return namedSection("Alerts", defaultHTML);
};
