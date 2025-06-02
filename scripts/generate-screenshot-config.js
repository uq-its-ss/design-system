// scripts/generate-screenshot-config.js
const fs = require("fs");
const path = require("path");

const outputConfigPath = path.join(__dirname, "./screenshot.config.json");

// Define paths to your Storybook static build directories ALONG WITH THEIR BASE URLs
const storybookBuildConfigs = [
  {
    name: "html", // Optional: for logging/identification
    path: path.join(__dirname, "../packages/storybook-html/storybook-static"),
    baseUrl: "http://localhost:6006",
  },
  {
    name: "react", // Optional: for logging/identification
    path: path.join(__dirname, "../packages/storybook-react/storybook-static"),
    baseUrl: "http://localhost:6007",
  },
];

console.log("Generating screenshot config from multiple Storybook builds...");

try {
  let combinedEntries = {}; // This will hold all unique stories from both builds

  for (const buildConfig of storybookBuildConfigs) {
    const buildPath = buildConfig.path;
    const baseUrl = buildConfig.baseUrl; // Get the base URL for the current build
    const indexJsonPath = path.join(buildPath, "index.json");

    console.log(
      `Processing build: ${buildConfig.name || buildPath} from ${indexJsonPath}`,
    );

    if (!fs.existsSync(indexJsonPath)) {
      console.warn(
        `Warning: index.json not found at ${indexJsonPath}. Skipping this build.`,
      );
      continue; // Skip to the next path if index.json doesn't exist
    }

    const storiesData = JSON.parse(fs.readFileSync(indexJsonPath, "utf8"));

    if (storiesData && storiesData.entries) {
      // Merge entries from the current build into the combinedEntries object
      // We'll store the story object along with its base URL for later use
      Object.keys(storiesData.entries).forEach((key) => {
        const story = storiesData.entries[key];
        // Only include actual stories here if you want to avoid docs pages in your combined list
        if (story.type === "story") {
          combinedEntries[key] = {
            ...story, // Spread existing story properties
            _baseUrl: baseUrl, // Add the base URL specific to this story's origin
          };
        }
      });
      console.log(
        `Found ${Object.keys(storiesData.entries).length} entries in ${buildConfig.name || buildPath}.`,
      );
    } else {
      console.warn(
        `Warning: 'entries' key not found or empty in ${indexJsonPath}. Skipping this build.`,
      );
    }
  }

  // Initialize the 'uris' object from the combined entries
  const uris = {};

  Object.keys(combinedEntries).forEach((key) => {
    const story = combinedEntries[key];
    // Use the stored _baseUrl to construct the full URL
    const url = `${story._baseUrl}/iframe.html?id=${story.id}`;
    uris[story.id] = url; // Assign the full URL to the story ID key
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
    `Successfully generated ${outputConfigPath} with ${Object.keys(uris).length} unique URIs from all builds.`,
  );
} catch (error) {
  console.error("Error generating screenshot config:", error);
  console.error(
    "Ensure all Storybook builds have completed and index.json files exist in their respective directories.",
  );
  process.exit(1); // Exit with an error code
}
