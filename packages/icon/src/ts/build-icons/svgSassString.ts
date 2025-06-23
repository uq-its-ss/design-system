// Placeholder string using URL safe strings that are unreserved
export const colourPlaceholder = "~~COLOR~~";

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

    @function get-icon($icon, $color: #000) {
      @if meta.type-of($color) != "color" and $color != "none" {
        @warn 'The requested color - "' + $color + '" - was not recognized as a Sass color value.';
        @return null;
      }

      @if map.has-key($-icons, $icon) {
        $icon: map.get($-icons, $icon);
        $data-uri: -str-replace($icon, "${colourPlaceholder}", $color);

        @return $data-uri;
      }

      @warn 'The requested icon - "' + $icon + '" - is not defined in the $icons map.';
      @return null;
    }\n`;
