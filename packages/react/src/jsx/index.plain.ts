/**
 * Plain CSS build entry point
 * 
 * This entry uses the same components as the main index,
 * but Vite is configured to output non-scoped CSS class names.
 * 
 * The css["uq-button"] syntax will resolve to plain "uq-button"
 * class names instead of scoped ones like "index-module__uq-button___AbC12"
 * 
 * Use this build when:
 * - You compile SCSS locally in your application
 * - You want standard, predictable class names
 * - You don't need CSS isolation/scoping
 */

// Re-export all components from the main index
export * from "./index";
