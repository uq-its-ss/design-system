import { Config } from "svgo";

/**
 * SVGO 4.x configuration for icon optimization.
 *
 * Uses preset-default with minimal overrides:
 * - sortAttrs: disabled (explicitly disabled in original config)
 *
 * Additional plugins not in preset-default:
 * - convertStyleToAttrs: converts style attributes to presentation attributes
 * - removeDimensions: removes width/height attributes for flexibility
 */
export const svgoConfig: Config = {
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    // Disable sortAttrs (was explicitly disabled in original config)
                    sortAttrs: false
                }
            }
        },
        // Additional plugins not included in preset-default
        "convertStyleToAttrs",
        "removeDimensions"
    ]
};

// Legacy export for backward compatibility during migration
export const svgoOptions = svgoConfig;
