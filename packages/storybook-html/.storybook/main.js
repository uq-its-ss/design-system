const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.@(stories|story).@(js|mdx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds'
  ],
  webpackFinal: async (config, { configType }) => {
    // Export a function. Accept the base config as the only param.
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    /* 
      Add JSX syntax support
      ----------------------
    */
    // Find the matching JavaScript module rule
    const jsRule = config.module.rules.find(rule => '.js'.match(rule.test));

    if(jsRule) {
      const options = jsRule.use[0].options;
      
      // Ensure the rule has presets
      if(!options.hasOwnProperty('presets')) {
        options.presets = [];
      }

      // Add Babel’s preset-react to the rule’s presets
      options.presets.push('@babel/preset-react');
    }

    /* 
      Add Sass/SCSS file import support
      ---------------------------------
    */
    config.module.rules.push(
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer 'dart-sass' as it supports Sass Modules
              implementation: require('sass'),
              sourceMap: true,
              sassOptions: {
                outputStyle: configType == 'PRODUCTION' ? "compressed" : "expanded",
                // TODO: we should implement `glob` here:
                includePaths: [
                  'node_modules/@uqds/core/node_modules',
                  'node_modules/@uqds/app-maps/node_modules',
                  'node_modules'
                ]
              }
            }
          }
        ]
      }
    );
    
    /* 
      From v6 migration
      -----------------
    */
    // Temporary workaround: https://github.com/storybookjs/storybook/issues/11255#issuecomment-673899817
    // Due to breaking change during Storybook v5.3 to v6.0 migration
    config.resolve.alias['core-js/modules'] = path.resolve(__dirname, '..', 'node_modules/core-js/modules');

    // Return the altered config
    return config;
  },
};
