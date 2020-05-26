const Fiber = require('fibers');
const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');

// Set SCSS compiler to Dart Sass (`sass`)
sass.compiler = require('sass');

// SCSS include paths
const scssPaths = [
  './node_modules/@uq-uidf',
  './node_modules'
];

// Build and export SCSS
function buildSCSS() {
  return src('./src/scss/**/*.scss')
    .pipe(sass({
      fiber: Fiber,
      includePaths: scssPaths,
      outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./dist/css'));
}

// Export resources
function exportFontFiles() {
  return src([
    './node_modules/font-awesome/fonts/**',
    './node_modules/@uq-uidf/core/src/fonts/uq-icons/font/**'
  ])
  .pipe(dest('./dist/fonts'))
}

function exportImages() {
  return src([
    './node_modules/@uq-uidf/core/src/images/**',
    './node_modules/@uq-uidf/blockquote/src/images/**'
  ])
  .pipe(dest('./dist/images'))
}

// Export Javascript
function exportJS() {
  return src(['./node_modules/@uq-uidf/accordion/src/js/accordion.es6.js'])
  .pipe(dest('./dist/js'))
}

exports.buildSCSS = buildSCSS;
exports.exportFontFiles = exportFontFiles;
exports.exportImages = exportImages;
exports.exportJS = exportJS;
exports.default = parallel(buildSCSS, exportFontFiles, exportImages, exportJS);
