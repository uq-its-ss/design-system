// import styles
import './footer.scss';

// import HTML template strings
import footerHTML from './footer.html';

export default {
    title: 'Components/Footer',
    parameters: {
        layout: "fullscreen"
    }
};

export const footer = () => {
    return footerHTML;
};
