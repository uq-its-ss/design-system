// scripts/generate-screenshot-config.js
const fs = require('fs');
const path = require('path');

const outputConfigPath = path.join(__dirname, './screenshot.config.json');

// Define paths to your Storybook static build directories
const storybookBuildPaths = [
  path.join(__dirname, '../packages/storybook-html/storybook-static'),
  path.join(__dirname, '../packages/storybook-react/storybook-static')
];

console.log('Generating screenshot config from multiple Storybook builds...');

try {
  let combinedEntries = {}; // This will hold all unique stories from both builds

  for (const buildPath of storybookBuildPaths) {
    const indexJsonPath = path.join(buildPath, 'index.json');

    console.log(`Processing: ${indexJsonPath}`);

    if (!fs.existsSync(indexJsonPath)) {
      console.warn(`Warning: index.json not found at ${indexJsonPath}. Skipping this build.`);
      continue; // Skip to the next path if index.json doesn't exist
    }

    const storiesData = JSON.parse(fs.readFileSync(indexJsonPath, 'utf8'));

    if (storiesData && storiesData.entries) {
      // Merge entries from the current build into the combinedEntries object
      // If there are duplicate story IDs (unlikely but possible), the last one processed will win.
      Object.assign(combinedEntries, storiesData.entries);
      console.log(`Found ${Object.keys(storiesData.entries).length} entries in ${path.basename(buildPath)}.`);
    } else {
      console.warn(`Warning: 'entries' key not found in ${indexJsonPath}. Skipping this build.`);
    }
  }

  // Initialize the 'uris' object from the combined entries
  const uris = {};

  Object.keys(combinedEntries)
    .filter(key => combinedEntries[key].type === 'story') // Only include actual stories (not docs)
    .forEach(key => {
      const story = combinedEntries[key];
      // Construct the iframe URL for the story
      const url = `/iframe.html?id=${story.id}`;
      uris[story.id] = url; // Assign the URL to the story ID key
    });

  // Define the static viewports settings
  const viewports = {
    "mobile": { "width": 375, "height": 932 },
    "desktop": { "width": 1280, "height": 900 }
  };

  // Combine uris and viewports into the final configuration object
  const finalConfig = {
    uris: uris,
    viewports: viewports
  };

  fs.writeFileSync(outputConfigPath, JSON.stringify(finalConfig, null, 2), 'utf8');

  console.log(`Successfully generated ${outputConfigPath} with ${Object.keys(uris).length} unique URIs from all builds.`);
} catch (error) {
  console.error('Error generating screenshot config:', error);
  console.error('Ensure all Storybook builds have completed and index.json files exist in their respective directories.');
  process.exit(1); // Exit with an error code
}