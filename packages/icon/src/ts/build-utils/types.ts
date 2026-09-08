import { Config } from "svgo";

/**
 * Configuration for the buildIcons utility.
 */
export interface BuildIconsConfig {
    /**
     * Directory containing source SVG files organized in category folders.
     * Icons are discovered automatically by scanning subdirectories.
     */
    inputDir: string;

    /**
     * Directory where optimized SVGs will be written.
     * Structure: {outputDir}/{category}/{filename}.svg
     */
    outputDir: string;

    /**
     * Categories that should have color placeholders (~~COLOR~~) injected.
     * Default: all discovered categories receive placeholders.
     * Set to specific array to limit (e.g., ['ui'] for app-maps).
     */
    colorPlaceholderCategories?: string[];

    /**
     * Categories to export to output modules (Sass, JS, TS).
     * Default: all discovered categories are exported.
     * Set to specific array to limit (e.g., ['ui', 'logo'] for app-maps).
     */
    exportCategories?: string[];

    /**
     * Output file paths for generated modules.
     * Omit any output you don't need.
     */
    outputs?: {
        /** Sass module with $icons map */
        sass?: string;
        /** JavaScript module with icons array */
        js?: string;
        /** TypeScript type definitions */
        ts?: string;
        /** Sass mixins for emitting icon CSS classes */
        sassMixins?: string;
    };

    /**
     * SVGO configuration overrides.
     * If not provided, uses the default svgoConfig.
     */
    svgoConfig?: Config;
}

/**
 * Result from processing a single SVG file.
 */
export interface ProcessedIcon {
    /** Icon filename without extension */
    name: string;
    /** Category folder name */
    category: string;
    /** Data URI string (with color placeholders if applicable) */
    dataUri: string;
}
