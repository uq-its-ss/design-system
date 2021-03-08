const FS = require('fs').promises;
const GLOB = require('glob');
const SVGO = require('svgo/lib/svgo');
const svgConverter = require('mini-svg-data-uri');
const YAML = require('js-yaml');
const { createSVGWindow } = require('svgdom');
const { SVG, registerWindow } = require('@svgdotjs/svg.js');

// Set up `svgdom` to manipulate SVG data
const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

// SVGO config
const optimiserConfigPath = './.svgo.yml';

// Placeholder string using URL safe strings that are unreserved
const colorPlaceholder = "~~COLOR~~";

// Define Sass functions to use the icons list
const svgSassFn = `
  @function -str-replace($string, $search, $replace: '') {
    $index: str-index($string, $search);

    @if $index {
      @return str-slice( $string, 1, $index - 1 ) + $replace + -str-replace( str-slice( $string, $index + str-length( $search ) ), $search, $replace);
    }

    @return $string;
  }

  @function get-icon($icon, $color: #000) {
    @if type-of($color) != 'color' and $color != 'none' {
      @warn 'The requested color - "' + $color + '" - was not recognized as a Sass color value.';
      @return null;
    }

    @if map-has-key($-icons, $icon) {
      $icon: map-get($-icons, $icon);
      $data-uri: -str-replace($icon, '${colorPlaceholder}', $color);

      @return -str-replace( $data-uri, '#', '%23' );
    }

    @warn 'The requested icon - "' + $icon + '" - is not defined in the $icons map.';
    @return null;
  }\n`;

(async () => {

  // Create SVG optimiser
  let optimiser = await new Promise((resolve) => {
    FS.readFile(optimiserConfigPath, 'utf8')
      .then(optimiserConfigData => {

        const optimiserConfig = YAML.safeLoad(optimiserConfigData);
        resolve(new SVGO(optimiserConfig));

      }).catch(err => {
        
        if (err.code === 'ENOENT') {
          console.error(`Error: couldn't find config file '${optimiserConfigPath}'. Optimising with default configuration.`);
        } else if (err.code === 'EISDIR') {
          console.error(`Error: directory '${optimiserConfigPath}' is not a config file. Optimising with default configuration.`);
        }

        resolve(new SVGO());
      });
  }).catch(err => {
    // This may be unnecessary as the idea is that the promise doesn't get rejected ever
    console.error(`Unable to instantiate optimiser: ${err}`);
  });

  GLOB('./src/images/**/*.svg', (err, files) => {
    (async (err, files) => {
      let iconArr = await Promise.all(files.map((file) => new Promise(async (resolve) => {
        // Get filename and remove file extension
        const explode = file.replace('./src/images/', '').split('/'),
          category = explode[0],
          filename = explode[explode.length - 1].split('.')[0];

        // Read file
        let fileData = await FS.readFile(file, 'utf8')
          .catch((err) => { throw err; });
        
        // Optimise SVGs
        let svg = await optimiser.optimize(fileData)
          .catch((err) => { throw err; });
        
        // Write to dist
        const dir = `./dist/images/${category}`;

        await FS.mkdir(dir, { recursive: true })
          .catch((err) => { throw err });

        await FS.writeFile(`${dir}/${filename}.svg`, svg.data)
          .catch((err) => { throw err });
        
        // Create data URI's for Sass module
        let svgDataURI;

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
        const canvas = SVG(svg.data);
        
        // Apply the fill placeholder to the `<svg>` node except when value is explicitly set to `none`.
        // Importantly, set the placeholder even if fill attr. wasn't originally set — to override default setting.
        if (canvas.attr('fill') != 'none') {
          canvas.attr({
            fill: colorPlaceholder
          });
        }

        svg = canvas.svg();

        // Replace all fill and stroke attributes except when value is explicitly set to `none`.
        svg = svg.replace(/fill="(?!none")[^"]+"/g, `fill="${colorPlaceholder}"`);
        svg = svg.replace(/stroke="(?!none")[^"]+"/g, `stroke="${colorPlaceholder}"`);

        // Convert data to URI string
        svgDataURI = svgConverter(svg);

        resolve({
          name: filename,
          category,
          svgSassData: svgDataURI
        });
      })));

      // Map new array for JS module API
      const iconArrModule = iconArr.map(({name, category}) => {
        return {name, category}
      });

      await FS.writeFile('./src/js/_build/_icons.js', `export default ${JSON.stringify(iconArrModule, null, 2)};`)
        .catch((err) => { throw err });

      // Accumulating string for Sass module API
      let icons = iconArr.reduce((acc, {name, category, svgSassData}) => {
        return acc + `  "${category}--${name}": "${svgSassData}",\n`
      }, '$-icons: (\n');

      icons += ');';

      await FS.writeFile('./src/scss/_build/_icons.scss', `${icons}\n${svgSassFn}`)
        .catch((err) => { throw err });

      // Accumulating string for emitting icons using Sass mixins
      const iconsMixins = iconArr.reduce((acc, {name, category}) => {
        return acc + `@include icon('${category}--${name}');\n`
      }, `@use '../global' as *;\n\n`);

      await FS.writeFile('./src/scss/_build/_icons-emit.scss', `${iconsMixins}`)
        .catch((err) => { throw err });

    })(err, files).catch(err => {
      console.error(err);
    });
  });

})().catch(err => {
  console.error(err);
});
