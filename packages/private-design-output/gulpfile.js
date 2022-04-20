const { src, dest, parallel } = require('gulp');
const sass = require('gulp-dart-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const rollup = require('@rollup/stream');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const cjs = require('@rollup/plugin-commonjs');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

// SCSS include paths
const scssPaths = [
  'node_modules',
  'node_modules/@uqds'
];

// Build and export SCSS
function compileSCSS() {
  return src('./src/scss/**/*.scss')
    .pipe(sass({
      includePaths: scssPaths,
      outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./dist/css'));
}

// Export resources
/*
function exportFontFiles() {
  return src([])
  .pipe(dest('./dist/fonts'));
}
*/

function exportImages() {
  return src([
    './src/images/*.*',
    './node_modules/@uqds/new-footer/src/images/**'
  ])
  .pipe(dest('./dist/images'));
}

// Export favicon
function exportFavicon() {
  return src([
    './src/favicon.ico'
  ])
  .pipe(dest('./dist/'));
}

function exportHtml() {
  return src('./src/*.html')
  .pipe(dest('./dist'));
}

// Temporary slidemenu addition
function exportSlidmenu() {
  return src('./src/js/slide-menu.js')
  .pipe(dest('./dist/js'));
}

// Bundle Javascript modules
/**
 * TODO: Babel presets/targets need setting if clients have browser support
 * issues
 */
function bundleJS() {
  return rollup({
    input: './src/js/main.js',
    output: {
      format: 'iife',
      name: 'uq'
    },
    plugins: [ nodeResolve(), cjs() ]
  })
  .pipe(source('uqds.js'))
  .pipe(buffer())
  .pipe(babel({
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties']
  }))
  .pipe(dest('./dist/js'))
  .pipe(rename('uqds.min.js'))
  .pipe(uglify())
  .pipe(dest('./dist/js'));
}

exports.compileSCSS = compileSCSS;
//exports.exportFontFiles = exportFontFiles;
exports.exportImages = exportImages;
exports.exportFavicon = exportFavicon;
exports.exportHtml = exportHtml;
// Temporary slidemenu addition
exports.exportSlidmenu = exportSlidmenu;
exports.bundleJS = bundleJS;
// Temporary slidemenu additiongit pull
exports.default = parallel(compileSCSS, exportImages, exportFavicon, exportHtml, exportSlidmenu, bundleJS);
