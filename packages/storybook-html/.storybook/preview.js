import TocDocs from './custom/components/TocDocs';
import DocsHeader from './custom/components/DocsHeader';
import DocsPage from './custom/components/DocsPage';
import './preview.scss';

export const parameters = {
  layout: 'centered',
  viewMode: 'docs', // There's a bug, reproducable upon first-load of Storybook, where viewMode is ignored
  previewTabs: {
    'storybook/docs/panel': {index: -1},
    canvas: {hidden: true}
  },
  docs: {
    components: {h1: DocsHeader},
    container: TocDocs,
    page: DocsPage
  },
  backgrounds: {
    grid: {
      disable: true
    }
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        [
          'Welcome',
          'Getting started'
        ],
        'Core',
        [
          'Introduction',
          'Fonts',
          'Typography',
          'Space',
          'Breakpoints',
          'Colour',
          [
            'Applying colour',
            'Base colour palette'
          ]
        ],
        'Layout',
        [
          'Layout system',
          'Grid'
        ],
        'Components',
        [
          'Body',
          [
            'Body',
            'Elements',
            'Utilities'
          ]
        ],
        'Patterns'
      ]
    }
  }
};
