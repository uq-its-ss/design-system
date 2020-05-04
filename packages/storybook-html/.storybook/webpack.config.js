const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        }
      ],
    }, {
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
              outputStyle: mode == 'PRODUCTION' ? "compressed" : "expanded",
            }
          }
        }
      ]
    }
  );

  // Return the altered config
  return config;
};
