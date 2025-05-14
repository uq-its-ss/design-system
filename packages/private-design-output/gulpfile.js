const { src, dest, parallel } = require("gulp"); // eslint-disable-line

function exportImages() {
  return src(["./src/images/*.*"], {encoding: false}).pipe(dest("./dist/images"));
}

// Export favicon
function exportFavicon() {
  return src(["./src/favicon.ico"], {encoding: false}).pipe(dest("./dist/"));
}

function exportHtml() {
  return src("./src/*.html").pipe(dest("./dist"));
}

// Temporary slidemenu addition
function exportSlidemenu() {
  return src("./src/js/slide-menu.js").pipe(dest("./dist/js"));
}

exports.exportImages = exportImages;
exports.exportFavicon = exportFavicon;
exports.exportHtml = exportHtml;
exports.exportSlidmenu = exportSlidemenu;
exports.default = parallel(
  exportImages,
  exportFavicon,
  exportHtml,
  exportSlidemenu,
);

exports.prepare = parallel(
  exportImages,
  exportFavicon,
  exportHtml,
  exportSlidemenu,
);
