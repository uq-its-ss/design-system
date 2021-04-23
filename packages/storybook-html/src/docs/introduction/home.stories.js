


// import HTML template strings
import HomePageHTML from './home.html';

export default {
  title: 'Introduction',
  parameters: {
    layout: "fullscreen",
    viewMode: 'story',
    previewTabs: {
      'storybook/docs/panel': {hidden: true},
      canvas: {hidden: false}
    }
  }
};

export const HomePage = () => {
  return HomePageHTML;
};

HomePage.storyName = 'Overview';

HomePage.parameters = {
  docs: {
    page: null
  }
};
