import { dirname, join } from "path";

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.@(stories|story).@(js|jsx|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: getAbsolutePath("@storybook/addon-styling-webpack"),
      options: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
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
                      "../../node_modules",
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-babel"),
  ],

  staticDirs: ["../public"],

  features: {
    postcss: false,
    previewMdx2: false,
  },

  framework: {
    name: getAbsolutePath("@storybook/html-webpack5"),
    options: {},
  },

  refs: (config, { configType }) => {
    if (configType === "DEVELOPMENT") {
      return {
        react: {
          title: "React",
          url: "http://localhost:6007",
        },
      };
    }
    return { }
  },
};

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

export default config;
