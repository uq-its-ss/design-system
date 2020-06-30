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
            webpackImporter: false, // Required on 30/06/2020 to fix some dart-sass features
            sassOptions: {
              outputStyle: mode == 'PRODUCTION' ? "compressed" : "expanded",
              includePaths: ['node_modules/@uqmchu/core/node_modules', 'node_modules']
            }
          }
        }
      ]
    }
  );

  // Return the altered config
  return config;
};
