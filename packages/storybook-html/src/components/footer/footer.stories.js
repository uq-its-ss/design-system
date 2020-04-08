// import styles
import './footer.scss';

// import HTML template strings
import footerHTML from './footer.html';

export default {
    title: 'Components/Footer'
};

export const footer = () => {
    return document.createElement('div').innerHTML = footerHTML;
};
