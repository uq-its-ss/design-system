import TocDocs from './custom/components/TocDocs';
import './preview.scss';

export const parameters = {
  layout: 'centered',
  viewMode: 'docs', // There's a bug, reproducable upon first-load of Storybook, where viewMode is ignored
  previewTabs: {
    'storybook/docs/panel': {index: -1},
    canvas: {hidden: true}
  },
  docs: {
    container: TocDocs
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
        'Forms',
        [
          'Form',
          'Form errors',
          'Form validation',
          'Working examples'
        ],
        'Patterns'
      ]
    }
  }
};
