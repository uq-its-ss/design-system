import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.@(stories|story).mdx",
    "../stories/**/*.@(stories|story).@(js|jsx|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    {
      name: getAbsolutePath("@storybook/addon-styling-webpack"),
      options: {
        rules: [
          {
            test: /\.s?css$/,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  implementation: require.resolve("sass"),
                  sassOptions: {
                    includePaths: [
                      "node_modules/@uqds/app-maps/node_modules",
                      "node_modules",
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ],

  staticDirs: ["../public"],

  features: {
    postcss: false,
  },

  framework: {
    name: getAbsolutePath("@storybook/html-webpack5"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  docs: {
    autodocs: true
  }
};
export default config;
