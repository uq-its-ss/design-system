// import styles
import '../src/components/footer/footer.scss';

// import HTML template strings
import footerHTML from '../src/components/footer/footer.html';

export default {
    title: 'Footer'
};

export const footer = () => {
    return document.createElement('div').innerHTML = footerHTML;
};