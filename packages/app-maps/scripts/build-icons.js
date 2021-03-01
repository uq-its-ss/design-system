const CHALK = require('chalk');
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

let icons = '$-icons: (\n';
const svgSassFn = `
@function -str-replace($string, $search, $replace: '') {
  $index: str-index($string, $search);

  @if $index {
    @return str-slice( $string, 1, $index - 1 ) + $replace + -str-replace( str-slice( $string, $index + str-length( $search ) ), $search, $replace);
  }

  @return $string;
}

@function get-icon($icon, $color: #51247a) {
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

  let optimiser = await (() => new Promise(async (resolve, reject) => {
    try {
      const optimiserConfigData = await FS.readFile(optimiserConfigPath, 'utf8');
      const optimiserConfig = YAML.safeLoad(optimiserConfigData);

      resolve(new SVGO(optimiserConfig));

    } catch (err) {
      if (err.code === 'ENOENT') {
        console.error(CHALK.red(`Error: couldn't find config file '${optimiserConfigPath}'. Optimising with default configuration.`));
      } else if (err.code === 'EISDIR') {
        console.error(CHALK.red(`Error: directory '${optimiserConfigPath}' is not a config file. Optimising with default configuration.`));
      }

      resolve(new SVGO());
    }
  }))();

  GLOB('./src/images/**/*.svg', async (err, files) => {
    let svgStringsArr = await Promise.all(files.map((file) => new Promise(async (resolve, reject) => {
      // Get filename and remove file extension
      const explode = file.replace('./src/images/', '').split('/');
      const category = explode[0];
      const filename = explode[explode.length - 1].split('.')[0];
      let svg;
      let svgDataURI;

      // Read file
      await FS.readFile(file, 'utf8')
        .then(async (data) => {
          // Optimise SVGs
          svg = await optimiser.optimize(data);
        })
        .catch((err) => {
          throw err;
        });
      
      // Write to dist
      const dir = `./dist/images/${category}`;

      await FS.mkdir(dir, { recursive: true })
        .catch((err) => { throw err });

      await FS.writeFile(`${dir}/${filename}.svg`, svg.data)
        .catch((err) => { throw err });
      
      // Create data URI's for Sass use
      if (category == 'ui') {
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
        // TODO: improve regex to only require one replace step.
        svg = svg.replace(/fill="(?!none")[^"]+"/g, `fill="${colorPlaceholder}"`);
        svg = svg.replace(/stroke="(?!none")[^"]+"/g, `stroke="${colorPlaceholder}"`);

        // Convert data to URI string
        svgDataURI = svgConverter(svg);
        resolve(`  "${category}--${filename}": "${svgDataURI}",\n`);

      } else if (category == 'logo') {
        svgDataURI = svgConverter(svg.data);
        resolve(`  "${category}--${filename}": "${svgDataURI}",\n`);
      } else {
        resolve('');
      }
    })));

    for (let i = 0; i < svgStringsArr.length; i++) {
      icons += svgStringsArr[i];
    }

    icons += ');';

    FS.writeFile('./src/scss/_icons.scss', `${icons}\n${svgSassFn}`, (err) => {
      if (err) throw err;
    });
  });
})();
