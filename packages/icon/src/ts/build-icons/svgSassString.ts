// Placeholder string using URL safe strings that are unreserved
export const colourPlaceholder = "~~COLOR~~";
// ADD THIS: Placeholder for stroke width
export const strokeWidthPlaceholder = "~~STROKEWIDTH~~";

// Define Sass functions to use the icons list
export const svgSassString = `
    @use "sass:map";
    @use "sass:string";
    @use "sass:meta";

    @function -str-replace($string, $search, $replace: "") {
      $index: string.index($string, $search);

      @if $index {
        @return string.slice($string, 1, $index - 1) + $replace +
          -str-replace(
            string.slice($string, $index + string.length($search)),
            $search,
            $replace
          );
      }

      @return $string;
    }

    @function get-icon($icon, $color: #000, $stroke-width: 1) {
      @if meta.type-of($color) != "color" and $color != "none" {
        @warn 'The requested color - "' + $color + '" - was not recognized as a Sass color value.';
        @return null;
      }

      // NEW: Basic check for stroke width
      @if meta.type-of($stroke-width) != "number" and meta.type-of($stroke-width) != "string" {
        @warn 'The requested stroke width - "' + $stroke-width + '" - was not a valid number or string value.';
        @return null;
      }

      @if map.has-key($-icons, $icon) {
        $icon-data: map.get($-icons, $icon);
        // Since we're inserting the colour into a data URI (which is made up
        // of URL-escaped SVG), we need to make sure the incoming value is
        // already escaped.
        $escapedColor: -str-replace("" + $color, "#", "%23");
        $data-uri: -str-replace($icon-data, "${colourPlaceholder}", $escapedColor);
        $escapedStrokeWidth: "" + $stroke-width;
        $data-uri: -str-replace($data-uri, "${strokeWidthPlaceholder}", $escapedStrokeWidth);

        @return string.unquote($data-uri);
      }

      @warn 'The requested icon - "' + $icon + '" - is not defined in the $icons map.';
      @return null;
    }\n`;
