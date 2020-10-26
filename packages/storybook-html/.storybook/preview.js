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
