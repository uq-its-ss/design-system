import { buildIcons } from "../build-utils";

/**
 * Icon package build script.
 * Uses default behavior: all categories get color placeholders and are exported.
 */
async function main(): Promise<void> {
    await buildIcons({
        inputDir: "./src/images/",
        outputDir: "./dist/images/",
        // Default behavior: all discovered categories get color placeholders
        // Default behavior: all discovered categories are exported
        outputs: {
            sass: "./src/scss/_build/_icons.scss",
            js: "./src/js/_build/_icons.js",
            ts: "./src/ts/_build/_icons.d.ts",
            sassMixins: "./src/scss/_build/_icons-emit.scss"
        }
    });
}

main().catch(error => {
    console.error("Icon build failed:", error.message);
    if (error.stack) {
        console.error(error.stack);
    }
    process.exit(1);
});
