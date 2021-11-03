// Placeholder string using URL safe strings that are unreserved
export const colourPlaceholder = "~~COLOR~~";

// Define Sass functions to use the icons list
export const svgSassString = `
    @function -str-replace($string, $search, $replace: "") {
      $index: str-index($string, $search);
    
      @if $index {
        @return str-slice($string, 1, $index - 1) + $replace +
          -str-replace(
            str-slice($string, $index + str-length($search)),
            $search,
            $replace
          );
      }
    
      @return $string;
    }
    
    @function get-icon($icon, $color: #000) {
      @if type-of($color) != "color" and $color != "none" {
        @warn 'The requested color - "' + $color + '" - was not recognized as a Sass color value.';
        @return null;
      }
    
      @if map-has-key($-icons, $icon) {
        $icon: map-get($-icons, $icon);
        $data-uri: -str-replace($icon, "${colourPlaceholder}", $color);
    
        @return -str-replace($data-uri, "#", "%23");
      }
    
      @warn 'The requested icon - "' + $icon + '" - is not defined in the $icons map.';
      @return null;
    }\n`;
