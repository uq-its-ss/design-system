const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      {
        loader: 'sass-loader',
        options: {
          // Prefer 'dart-sass'
          implementation: require('sass')
        }
      }
    ],
    include: path.resolve(__dirname, 
      '../node_modules/compass-mixins/lib',
      '../node_modules/foundation-sites/scss',
      '../node_modules/font-awesome/scss',
      '../')
  });

  // Return the altered config
  return config;
};

/*
Default Storybook Webpack config (generated for my machine):
{
  mode: 'development',
  bail: false,
  devtool: '#cheap-module-source-map',
  entry: [
    '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/@storybook/core/dist/server/common/polyfills.js',
    '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/@storybook/core/dist/server/preview/globals.js',
    '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/.storybook/config.js',
    '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/webpack-hot-middleware/client.js?reload=true&quiet=true'
  ],
  output: {
    path: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/@storybook/core/dist/public',
    filename: '[name].[hash].bundle.js',
    publicPath: ''
  },
  plugins: [
    HtmlWebpackPlugin {
      options: {
        template: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/@storybook/core/dist/server/templates/index.ejs',
        templateContent: false,
        templateParameters: [Function: templateParameters],
        filename: 'iframe.html',
        hash: false,
        inject: false,
        compile: true,
        favicon: false,
        minify: 'auto',
        cache: true,
        showErrors: true,
        chunks: 'all',
        excludeChunks: [],
        chunksSortMode: 'none',
        meta: {},
        base: false,
        title: 'Webpack App',
        xhtml: false,
        alwaysWriteToDisk: true
      },
      childCompilerHash: undefined,
      childCompilationOutputName: undefined,
      assetJson: undefined,
      hash: undefined,
      version: 4
    },
    DefinePlugin {
      definitions: {
        'process.env': {
          NODE_ENV: '"development"',
          NODE_PATH: '""',
          PUBLIC_URL: '"."'
        },
        NODE_ENV: '"development"'
      }
    },
    WatchMissingNodeModulesPlugin {
      nodeModulesPath: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules'
    },
    HotModuleReplacementPlugin {
      options: {},
      multiStep: undefined,
      fullBuildTimeout: 200,
      requestTimeout: 10000
    },
    CaseSensitivePathsPlugin {
      options: {},
      pathCache: {},
      fsOperations: 0,
      primed: false
    },
    ProgressPlugin {
      profile: false,
      handler: undefined,
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    DefinePlugin { definitions: {} },
    NormalModuleReplacementPlugin {
      resourceRegExp: /core-js/,
      newResource: [Function]
    }
  ],
  module: {
    rules: [
      {
        test: /\.(mjs|jsx?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/.cache/storybook',
              presets: [
                [
                  '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/@babel/preset-env/lib/index.js',
                  {
                    shippedProposals: true,
                    useBuiltIns: 'usage',
                    corejs: '3'
                  }
                ]
              ],
              plugins: [
                '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js',
                '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/@babel/plugin-proposal-class-properties/lib/index.js',
                '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js',
                [
                  '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.js',
                  { sourceMap: true, autoLabel: true }
                ],
                '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/babel-plugin-macros/dist/index.js'
              ]
            }
          }
        ],
        include: [
          '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html'
        ],
        exclude: [
          '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules'
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/raw-loader/dist/cjs.js'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/html-loader/index.js'
          }
        ]
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/style-loader/index.js',
          {
            loader: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/css-loader/dist/cjs.js',
            options: { importLoaders: 1 }
          },
          {
            loader: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              postcss: {},
              plugins: [Function: plugins]
            }
          }
        ]
      },
      {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        loader: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/file-loader/dist/cjs.js',
        query: { name: 'static/media/[name].[hash:8].[ext]' }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/url-loader/dist/cjs.js',
        query: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' }
      }
    ]
  },
  resolve: {
    extensions: [ '.mjs', '.js', '.jsx', '.json' ],
    modules: [ 'node_modules' ],
    alias: {
      'babel-runtime/core-js/object/assign': '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/core-js/es/object/assign.js',
      react: '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/react',
      'react-dom': '/Volumes/Working/Github/uqmchu/uq-uidf-components/packages/storybook-html/node_modules/react-dom'
    }
  },
  optimization: {
    splitChunks: { chunks: 'all' },
    runtimeChunk: true,
    minimizer: [
      TerserPlugin {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: [Function: chunkFilter],
          warningsFilter: [Function: warningsFilter],
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: [Function: cacheKeys],
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: { comments: /^\**!|@preserve|@license|@cc_on/i },
            mangle: false,
            keep_fnames: true
          }
        }
      }
    ]
  },
  performance: { hints: false }
}
*/
