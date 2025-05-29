import { createSVGWindow } from "svgdom";
import { registerWindow, SVG as createSVGElement } from "@svgdotjs/svg.js";
import { optimize } from "svgo";
import { colourPlaceholder, svgSassString } from "./svgSassString";
import glob from "glob";
import { promises as FS } from "fs";
import svgConverter from "mini-svg-data-uri";
import { svgoOptions } from "./svgoOptions";

/** Takes and SVG input string and spits out an optimised version
 *
 * @param svgInput SVG string to optimise
 * @returns The optimsed/cleaned svg output string
 * @throws Will throw an error if optimisation fails for any reason
 */
const optimiseSVG = (svgInput: string): string => {
    const result = optimize(svgInput, svgoOptions);
    //@ts-ignore
    if (result.data) {
        //@ts-ignore
        return result.data;
    }
    throw new Error("Failed to optimise SVG using SVGO dependency.");
};

/** Takes an SVG's filepath and parses out the category and filename.
 *
 * @param filePath - the full file path to parse. Needs to be of the form "[baseDir]/[category]/[filename].svg"
 * @returns [category: string, filename: string] tuple
 */
const parseFilePath = (filePath: string): [string, string] => {
    const exploded = filePath.split("/");
    if (exploded.length < 2) {
        throw new Error(`Cannot parse category and filename from the filepath "${filePath}"`);
    }
    const category = exploded[exploded.length - 2];
    const fileName = exploded[exploded.length - 1].replace(".svg", "");
    return [category, fileName];
};

/**
 * Gets a list of all the SVG files that are contained under the given directory (recursive)
 * @param startingDir the directory which contains the SVG files.
 * @returns a string array promise of the found files.
 */
const getSVGFilePaths = async (startingDir: string): Promise<string[]> => {
    return new Promise<string[]>(resolve => {
        glob(`${startingDir}/**/*.svg`, (err, files) => {
            if (err) throw new Error("Error occurred while matching glob pattern while looking for SVG files.");
            resolve(files);
        });
    });
};

/** Takes an SVG string input and spits out a URI version, ready for consumption in Sass etc.
 *
 * @param svgInput
 * @returns a URI string
 */
const svgToURI = (svgInput: string): string => {
    /**
     * Trial strategy to implement colour options via Sass functions using a
     * special string placeholder. Ideally we want it to do more than
     * postcss-inline-svg does by design for monochromatic (UI) icon work.
     *
     * Related reading:
     * https://css-tricks.com/creating-a-maintainable-icon-system-with-sass/
     * https://www.w3.org/TR/SVG/painting.html#SpecifyingStrokePaint
     * https://www.w3.org/TR/SVG/painting.html#FillProperty
     */

    // create canvas (svg root node but also the children)
    const canvas = createSVGElement(svgInput);

    // Apply the fill placeholder to the `<svg>` node except when value is explicitly set to `none`.
    // Importantly, set the placeholder even if fill attr. wasn't originally set — to override default setting.
    if (canvas.attr("fill") !== "none") {
        canvas.attr({
            fill: colourPlaceholder
        });
    }
    let svg = canvas.svg();

    // Replace all fill and stroke attributes except when value is explicitly set to `none`.
    svg = svg.replace(/fill="(?!none")[^"]+"/g, `fill="${colourPlaceholder}"`);
    svg = svg.replace(/stroke="(?!none")[^"]+"/g, `stroke="${colourPlaceholder}"`);

    return svgConverter(svg);
};

interface ProcessSVGResult {
    name: string;
    category: string;
    svgSassData: string;
}

/** Processes a single SVG file and spits out its final name, category and URI data.
 *
 * @param inputFilePath the filepath of the SVG to process
 * @param outputDir the directory to save the result SVG to.
 */
const processSVG = async (inputFilePath: string, outputDir: string): Promise<ProcessSVGResult> => {
    // read file into memory
    const svgString = await FS.readFile(inputFilePath, "utf8");

    // optimise
    const optimisedSVG = optimiseSVG(svgString);

    // write to dist
    const [category, name] = parseFilePath(inputFilePath);
    const dir = `${outputDir}/${category}`;
    try {
        await FS.mkdir(dir, { recursive: true });
        await FS.writeFile(`${dir}/${name}.svg`, optimisedSVG);
    } catch (err) {
        throw new Error(`Error saving file to dist. Category: "${category}". File: "${name}"`);
    }

    // generate URI string
    const svgSassData = svgToURI(optimisedSVG);

    // done
    return { name, category, svgSassData };
};

/** Takes an array of processed SVGs and builds the additional outputs required for the icon library.
 *
 * @param results process SVGs
 * @param jsModule filepath to save the JavaScript module to
 * @param sassModule filepath to save the Sass module to
 * @param sassMixins filepath to save the Sass mixins to
 */
const createAdditionalOutputs = async (
    results: ProcessSVGResult[],
    jsModule: string,
    tsModule: string,
    sassModule: string,
    sassMixins: string
): Promise<void> => {
    // Map new array for JS module API
    const iconArrModule = results.map(({ name, category }) => ({ name, category }));
    try {
        await FS.writeFile(jsModule, `export default ${JSON.stringify(iconArrModule, null, 2)};`);
    } catch (e: any) {
        throw new Error(`Error creating JS Module output: ${e.message}`);
    }

    const iconTypes = results.map(({ name, category }) => `${category}--${name}`);
    try {
        await FS.writeFile(tsModule, `export type IconCode =\n  "${iconTypes.join('"\n    | "')}"\n;\n`);
    } catch (e: any) {
        throw new Error(`Error creating Typescript output: ${e.message}`);
    }

    // Accumulating string for Sass module API
    let icons = results.reduce((acc, { name, category, svgSassData }) => {
        return `${acc}  "${category}--${name}": "${svgSassData}",\n`;
    }, "$-icons: (\n");
    icons += ");";
    try {
        await FS.writeFile(sassModule, `${icons}\n${svgSassString}`);
    } catch (e: any) {
        throw new Error(`Error creating Sass Module output: ${e.message}`);
    }

    // Accumulating string for emitting icons using Sass mixins
    const iconsMixins = results.reduce((acc, { name, category }) => {
        return `${acc}@include icon("${category}--${name}");\n`;
    }, "@use \"../global\" as *;\n\n");
    try {
        await FS.writeFile(sassMixins, `${iconsMixins}`);
    } catch (e: any) {
        throw new Error(`Error creating Sass Mixins output: ${e.message}`);
    }
};

const main = async (): Promise<void> => {
    // Set up `svgdom` to manipulate SVG data
    const window: Window = createSVGWindow();
    const document = window.document;
    registerWindow(window, document);

    // Grab our files
    const svgFilePaths = await getSVGFilePaths("./src/images/");

    // Divide and conquer, kick off all the processes at once
    const processes = svgFilePaths.map(async filePath => processSVG(filePath, "./dist/images/"));
    // wait for them all to finish
    const results = await Promise.all(processes);
    await createAdditionalOutputs(
        results,
        "./src/js/_build/_icons.js",
        "./src/ts/_build/_icons.d.ts",
        "./src/scss/_build/_icons.scss",
        "./src/scss/_build/_icons-emit.scss"
    );
};

main();
