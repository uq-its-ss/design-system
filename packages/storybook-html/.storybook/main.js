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

  //
  // --- Storybook composition configuration ---
  //
  refs: (config, { configType }) => {
    // --- Development Environment ---
    if (configType === "DEVELOPMENT") {
      console.log("Configuring Storybook refs for DEVELOPMENT");
      return {
        react: {
          title: "React (Localhost:6007)",
          url: "http://localhost:6007",
        },
      };
    }

    // --- Static Build Environment ---
    const targetEnv = process.env.STORYBOOK_TARGET_ENV || "production";

    // Read GitHub Actions specific variables ONLY when building for preview
    const githubRunId = process.env.GITHUB_RUN_ID;
    const bucketName = process.env.S3_BUCKET_TOOLS; // Get bucket name from env var

    console.log(
      `Configuring Storybook refs for static build, target environment: ${targetEnv}`,
    );
    if (targetEnv === "preview") {
      console.log(
        `Preview Build - GitHub Run ID: ${githubRunId}, Bucket: ${bucketName}`,
      );
    }

    let reactStorybookUrl; // URL for the Storybook you want to compose

    switch (targetEnv) {
      case "preview":
        // Check if required variables are present for preview URL construction
        if (!githubRunId || !bucketName) {
          console.error(
            "ERROR: Missing GITHUB_RUN_ID or S3_BUCKET_TOOLS environment variables for preview build!",
          );
          // Provide a fallback URL or handle the error appropriately
          reactStorybookUrl = "/error-preview-url-not-configured";
        } else {
          // Construct the dynamic URL based on the S3 deployment structure
          reactStorybookUrl = `https://${bucketName}.s3.amazonaws.com/preview/${githubRunId}/storybook-react/`;
          console.log(
            `Preview React Storybook URL set to: ${reactStorybookUrl}`,
          );
        }
        break;
      case "staging":
        // Use static URL or read from different env vars if needed
        reactStorybookUrl =
          process.env.STORYBOOK_REACT_STAGING_URL ||
          "https://design-system.ads-staging.aws.uq.edu.au/storybook-react/";
        break;
      case "production":
      default: // Default to production
        // Use static URL or read from different env vars if needed
        reactStorybookUrl =
          process.env.STORYBOOK_REACT_PROD_URL ||
          "https://design-system.uq.edu.au/storybook-react/";
        break;
    }

    // Return the refs configuration
    if (!reactStorybookUrl) {
      console.warn(
        `No valid URL found for react Storybook ref in environment: ${targetEnv}`,
      );
      return {}; // Return empty refs if URL construction failed
    }

    return {
      react: {
        // Make the title dynamic for preview and staging
        title: `React (${targetEnv === "preview" && githubRunId ? `Preview #${githubRunId}` : targetEnv === "staging" ? "staging" : targetEnv.charAt(0).toUpperCase() + targetEnv.slice(1)})`,
        url: reactStorybookUrl,
      },
      // Add other compositions if needed
    };
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
