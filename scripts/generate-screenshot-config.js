// scripts/generate-screenshot-config.js
const fs = require("fs");
const path = require("path");

const storybookStaticDir = path.join(
  __dirname,
  "../packages/storybook-html/storybook-static",
); // Adjust if your build directory is different
const storiesJsonPath = path.join(storybookStaticDir, "stories.json");
const outputConfigPath = path.join(__dirname, "./screenshot.config.json");

console.log(`Generating ${outputConfigPath} from ${storiesJsonPath}...`);

try {
  const storiesData = JSON.parse(fs.readFileSync(storiesJsonPath, "utf8"));
  const stories = storiesData.stories;

  // Initialize the 'uris' object
  const uris = {};

  Object.keys(stories)
    .filter((key) => stories[key].type === "story") // Only include actual stories
    .forEach((key) => {
      const story = stories[key];
      // Use the story ID as the key for the 'uris' object
      // Construct the iframe URL for the story
      const url = `/iframe.html?id=${story.id}`;
      uris[story.id] = url; // Assign the URL to the story ID key
    });

  // Define the static viewports settings
  const viewports = {
    mobile: { width: 375, height: 932 },
    desktop: { width: 1280, height: 900 },
  };

  // Combine uris and viewports into the final configuration object
  const finalConfig = {
    uris: uris,
    viewports: viewports,
  };

  fs.writeFileSync(
    outputConfigPath,
    JSON.stringify(finalConfig, null, 2),
    "utf8",
  );

  console.log(
    `Successfully generated ${outputConfigPath} with ${Object.keys(uris).length} URIs.`,
  );
} catch (error) {
  console.error("Error generating screenshot config:", error);
  console.error(
    "Ensure Storybook has been built and stories.json exists at:",
    storiesJsonPath,
  );
  process.exit(1); // Exit with an error code
}
