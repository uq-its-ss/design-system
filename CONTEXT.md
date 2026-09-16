# SVGO Icon Build System

Build infrastructure for optimizing SVG icons and generating consumable outputs (Sass modules, JavaScript/TypeScript APIs) from source SVG files organized in category folders.

## Language

**Icon Category**:
A folder under `src/images/` that groups related icons (e.g., `ui`, `logo`, `transport`, `agriculture-and-environment`). Categories are auto-discovered from the directory structure and determine icon naming (`{category}--{filename}`).

**Color Placeholder**:
A special string (`~~COLOR~~`) injected into SVG `fill` and `stroke` attributes during build, allowing runtime color control via Sass functions. Applied selectively based on category.
_Avoid_: Color variable, dynamic color, placeholder color

**Build Utility**:
Shared TypeScript functions in the `icon` package that handle SVG optimization, color placeholder injection, and output generation. Consumed by both `icon` and `app-maps` packages.
_Avoid_: Build script, optimizer, builder

**SVGO Configuration**:
TypeScript-defined optimization settings using `preset-default` with overrides (`sortAttrs: false`) plus additional plugins (`convertStyleToAttrs`, `removeDimensions`). Stored in the `icon` package and shared across consuming packages. Uses SVGO 4.x API.
_Avoid_: SVGO config, optimization settings

**Export Category**:
A category whose icons are included in the generated Sass module output. Non-exported categories are optimized and saved to `dist/images/` but excluded from Sass/JS APIs.

## Package Roles

**icon** (`@uqds/icon`):
Public, published package. The canonical implementation containing build utilities, SVGO configuration, and 18+ icon categories. All discovered categories receive color placeholders and are exported to Sass/JS/TypeScript modules. Serves as the build infrastructure provider for other packages.

**app-maps** (`@uqds/app-maps`):
Private, legacy application package for UQ Maps. Contains 3 categories (`ui`, `logo`, `map`). Only `ui` icons receive color placeholders. Only `ui` and `logo` are exported to Sass. Consumes build utilities from `icon` package.

## Convention

**Default behavior**: All auto-discovered categories receive color placeholders and are exported to all output formats (Sass, JavaScript, TypeScript).

**Override for selective behavior**: Packages explicitly specify `colorPlaceholderCategories` and `exportCategories` arrays to restrict which categories receive color placeholders or are exported.

**SVGO version**: 4.10 with preset-default configuration, overriding only essential differences (e.g., preserving viewBox).

**Versioning**: SVGO migration warrants a major version bump (4.x → 5.0.0) for the icon package due to SVG markup changes and new build-utils export surface area.

## Example Dialogue

**Dev**: "Should we add color placeholders to the new `map` category icons in app-maps?"

**Domain Expert**: "No. In app-maps, only `ui` icons get color placeholders because they're the only ones that need runtime color control. The `logo` icons preserve their original colors, and `map` icons aren't even exported to the Sass module—they're just optimized for direct use."

**Dev**: "So when I add a new folder to the icon package, like `accessibility`, it automatically gets color placeholders and exports?"

**Domain Expert**: "Exactly. The icon package uses default behavior—all discovered categories are treated the same. App-maps is the exception because it's a legacy app with specific requirements."

**Dev**: "What if someone creates `src/images/test/icon.svg` during development?"

**Domain Expert**: "It becomes a valid category called `test`. The icon gets named `test--icon` and processed with the defaults. If that's not desired, they should keep test files outside `src/images/` or use `.gitignore`."
