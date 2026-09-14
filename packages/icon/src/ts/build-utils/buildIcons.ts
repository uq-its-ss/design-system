import { createSVGWindow } from "svgdom";
import { registerWindow, SVG as createSVGElement } from "@svgdotjs/svg.js";
import { optimize } from "svgo";
import glob from "glob";
import { promises as FS } from "fs";
import svgConverter from "mini-svg-data-uri";
import { svgoConfig as defaultSvgoConfig } from "../build-icons/svgoOptions";
import { BuildIconsConfig, ProcessedIcon } from "./types";

// Color placeholder constant - must match value in Sass utilities
const COLOR_PLACEHOLDER = "~~COLOR~~";

/**
 * Optimizes an SVG string using SVGO.
 */
function optimizeSVG(svgInput: string, config = defaultSvgoConfig): string {
    const result = optimize(svgInput, config);
    if ("error" in result) {
        throw new Error(`SVGO optimization failed: ${result.error}`);
    }
    return result.data;
}

/**
 * Parses category and filename from a file path.
 * Expected format: {baseDir}/{category}/{filename}.svg
 */
function parseFilePath(filePath: string): [string, string] {
    const parts = filePath.split("/");
    if (parts.length < 2) {
        throw new Error(`Invalid file path format: "${filePath}". Expected: {dir}/{category}/{filename}.svg`);
    }
    const category = parts[parts.length - 2];
    const filename = parts[parts.length - 1].replace(".svg", "");
    return [category, filename];
}

/**
 * Gets all SVG file paths from the input directory.
 */
async function getSVGFiles(inputDir: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        glob(`${inputDir}/**/*.svg`, (err, files) => {
            if (err) {
                reject(new Error(`Failed to find SVG files in "${inputDir}": ${err.message}`));
            } else {
                resolve(files);
            }
        });
    });
}

/**
 * Applies color placeholders to an SVG string.
 * Replaces fill and stroke attributes (except when set to "none").
 */
function applyColorPlaceholders(svgString: string): string {
    const canvas = createSVGElement(svgString);

    // Apply placeholder to root svg element (unless explicitly "none")
    if (canvas.attr("fill") !== "none") {
        canvas.attr({ fill: COLOR_PLACEHOLDER });
    }

    let result = canvas.svg();

    // Replace all fill and stroke attributes except "none"
    result = result.replace(/fill="(?!none")[^"]+"/g, `fill="${COLOR_PLACEHOLDER}"`);
    result = result.replace(/stroke="(?!none")[^"]+"/g, `stroke="${COLOR_PLACEHOLDER}"`);

    return result;
}

/**
 * Processes a single SVG file: optimize, apply color placeholders (if applicable), generate data URI.
 */
async function processSVGFile(
    filePath: string,
    outputDir: string,
    applyPlaceholders: boolean,
    svgoConfig = defaultSvgoConfig
): Promise<ProcessedIcon> {
    // Read and parse
    const svgContent = await FS.readFile(filePath, "utf8");
    const [category, name] = parseFilePath(filePath);

    // Optimize
    const optimized = optimizeSVG(svgContent, svgoConfig);

    // Write optimized SVG to output directory
    const outputPath = `${outputDir}/${category}`;
    await FS.mkdir(outputPath, { recursive: true });
    await FS.writeFile(`${outputPath}/${name}.svg`, optimized);

    // Apply color placeholders if requested
    const finalSVG = applyPlaceholders ? applyColorPlaceholders(optimized) : optimized;

    // Generate data URI
    const dataUri = svgConverter(finalSVG);

    return { name, category, dataUri };
}

/**
 * Generates Sass module output.
 */
async function generateSassModule(icons: ProcessedIcon[], outputPath: string): Promise<void> {
    let content = "$icons: (\n";
    for (const icon of icons) {
        content += `  "${icon.category}--${icon.name}": "${icon.dataUri}",\n`;
    }
    content += ");";

    await FS.writeFile(outputPath, content, "utf8");
}

/**
 * Generates JavaScript module output.
 */
async function generateJSModule(icons: ProcessedIcon[], outputPath: string): Promise<void> {
    const data = icons.map(({ name, category }) => ({ name, category }));
    const content = `export default ${JSON.stringify(data, null, 2)};`;

    await FS.writeFile(outputPath, content, "utf8");
}

/**
 * Generates TypeScript type definitions.
 */
async function generateTSModule(icons: ProcessedIcon[], outputPath: string): Promise<void> {
    const iconCodes = icons.map(({ name, category }) => `${category}--${name}`);
    const content = `export type IconCode =\n  "${iconCodes.join('"\n    | "')}";\n`;

    await FS.writeFile(outputPath, content, "utf8");
}

/**
 * Generates Sass mixins for emitting icon CSS classes.
 */
async function generateSassMixins(icons: ProcessedIcon[], outputPath: string): Promise<void> {
    let content = '@use "../global" as *;\n\n';
    for (const icon of icons) {
        content += `@include icon("${icon.category}--${icon.name}");\n`;
    }

    await FS.writeFile(outputPath, content, "utf8");
}

/**
 * Main build function for icon processing.
 *
 * @param config - Build configuration
 * @returns Promise that resolves when build completes
 *
 * @example
 * ```typescript
 * // Icon package (all categories with placeholders)
 * await buildIcons({
 *   inputDir: './src/images/',
 *   outputDir: './dist/images/',
 *   outputs: {
 *     sass: './src/scss/_build/_icons.scss',
 *     js: './src/js/_build/_icons.js',
 *     ts: './src/ts/_build/_icons.d.ts',
 *     sassMixins: './src/scss/_build/_icons-emit.scss'
 *   }
 * });
 *
 * // App-maps (selective categories)
 * await buildIcons({
 *   inputDir: './src/images/',
 *   outputDir: './dist/images/',
 *   colorPlaceholderCategories: ['ui'],
 *   exportCategories: ['ui', 'logo'],
 *   outputs: {
 *     sass: './src/scss/_icons.scss'
 *   }
 * });
 * ```
 */
export async function buildIcons(config: BuildIconsConfig): Promise<void> {
    // Initialize svgdom for SVG manipulation
    const window = createSVGWindow();
    const document = window.document;
    registerWindow(window, document);

    // Get all SVG files
    const svgFiles = await getSVGFiles(config.inputDir);

    if (svgFiles.length === 0) {
        throw new Error(`No SVG files found in "${config.inputDir}"`);
    }

    // Process all SVGs in parallel
    const processPromises = svgFiles.map(async filePath => {
        const [category] = parseFilePath(filePath);

        // Determine if this category should get color placeholders
        const applyPlaceholders = config.colorPlaceholderCategories
            ? config.colorPlaceholderCategories.includes(category)
            : true; // Default: all categories get placeholders

        return processSVGFile(filePath, config.outputDir, applyPlaceholders, config.svgoConfig);
    });

    const allIcons = await Promise.all(processPromises);

    // Filter icons for export based on configuration
    const iconsToExport = config.exportCategories
        ? allIcons.filter(icon => config.exportCategories!.includes(icon.category))
        : allIcons; // Default: export all

    // Generate output modules
    const outputPromises: Promise<void>[] = [];

    if (config.outputs?.sass) {
        outputPromises.push(generateSassModule(iconsToExport, config.outputs.sass));
    }

    if (config.outputs?.js) {
        outputPromises.push(generateJSModule(iconsToExport, config.outputs.js));
    }

    if (config.outputs?.ts) {
        outputPromises.push(generateTSModule(iconsToExport, config.outputs.ts));
    }

    if (config.outputs?.sassMixins) {
        outputPromises.push(generateSassMixins(iconsToExport, config.outputs.sassMixins));
    }

    await Promise.all(outputPromises);
}
