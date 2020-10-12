import './preview.scss';

export const parameters = {
  layout: 'centered',
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
            'Colour usage',
            'Purple gradient',
            'Base colour palette'
          ]
        ],
        'Base',
        [
          'Body',
          [
            'Body',
            'Elements',
            'Utilities'
          ]
        ],
        'Layout',
        [
          'Layout',
          'Grid'
        ],
        'Components',
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
