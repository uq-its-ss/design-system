const { src, dest, parallel } = require("gulp");
const sass = require("gulp-dart-sass");
const babel = require("@rollup/plugin-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const rollup = require("@rollup/stream");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const cjs = require("@rollup/plugin-commonjs");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const fs = require("fs");
const path = require("path");

// SCSS include paths
const scssPaths = ["node_modules", "node_modules/@uqds"];

// Build and export SCSS
function compileSCSS() {
  return src("./src/scss/**/*.scss")
    .pipe(
      sass({
        includePaths: scssPaths,
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(dest("./dist/css"));
}

// Export resources
/*
function exportFontFiles() {
  return src([])
  .pipe(dest('./dist/fonts'));
}
*/

function exportImages() {
  return src(["./node_modules/@uqds/blockquote/src/images/**"]).pipe(
    dest("./dist/images")
  );
}

// Export favicon
function exportFavicon() {
  return src(["./src/favicon.ico"]).pipe(dest("./dist/"));
}

function exportExample() {
  return src("./src/example.html").pipe(dest("./dist"));
}

// Bundle Javascript modules
/**
 * TODO: Babel presets/targets need setting if clients have browser support
 * issues
 */
function bundleJS() {
  if (!fs.existsSync(`${process.cwd()}/src/js/main.js`)) {
    return new Promise((resolve) => {
      resolve();
    });
  }
  return rollup({
    input: "./src/js/main.js",
    output: {
      format: "iife",
      name: "uq",
    },
    plugins: [nodeResolve(), cjs(), babel()],
  })
    .pipe(source("uqds.js"))
    .pipe(buffer())
    .pipe(dest("./dist/js"))
    .pipe(rename("uqds.min.js"))
    .pipe(uglify())
    .pipe(dest("./dist/js"));
}

exports.compileSCSS = compileSCSS;
//exports.exportFontFiles = exportFontFiles;
exports.exportImages = exportImages;
exports.exportFavicon = exportFavicon;
exports.exportExample = exportExample;
exports.bundleJS = bundleJS;
exports.default = parallel(
  compileSCSS,
  exportImages,
  exportFavicon,
  exportExample,
  bundleJS,
  bundleMjs
);

exports.prepare = parallel(compileSCSS, bundleJS);
