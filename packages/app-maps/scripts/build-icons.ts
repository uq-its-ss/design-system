import { buildIcons } from "@uqds/icon/build-utils";

/**
 * App-maps icon build script.
 *
 * Selective behavior:
 * - Only 'ui' icons get color placeholders (~~COLOR~~)
 * - Only 'ui' and 'logo' icons are exported to Sass
 * - 'map' icons are optimized but not exported to Sass
 */
async function main(): Promise<void> {
  await buildIcons({
    inputDir: "./src/images/",
    outputDir: "./dist/images/",

    // Only ui icons get color placeholders for runtime control
    colorPlaceholderCategories: ["ui"],

    // Only ui and logo icons exported to Sass module
    // map icons are optimized but not included in Sass output
    exportCategories: ["ui", "logo"],

    outputs: {
      // Single Sass output (no JS/TS modules needed for app-maps)
      sass: "./src/scss/_icons.scss",
    },
  });

  console.log("✓ App-maps icons built successfully");
}

main().catch((error) => {
  console.error("App-maps icon build failed:", error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
});
