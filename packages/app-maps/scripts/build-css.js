var fs = require("fs"),
  sass = require("sass");

sass.render(
  {
    file: "./src/scss/_component.scss",
    includePaths: [
      "./node_modules",
      "../../node_modules", // Root node_modules for workspace dependencies
      "./node_modules/@uqds/core/node_modules",
    ],
  },
  (err, result) => {
    if (err) {
      // @todo eslint solution needs to be reviewed
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(1);
    }

    fs.mkdir("./dist/css/", { recursive: true }, function (mkdirErr) {
      if (mkdirErr) {
        // @todo eslint solution needs to be reviewed
        // eslint-disable-next-line no-console
        console.error("Error creating dist/css directory:", mkdirErr);
        process.exit(1);
      }

      fs.writeFile("./dist/css/app-maps.css", result.css, function (writeErr) {
        if (writeErr) {
          // @todo eslint solution needs to be reviewed
          // eslint-disable-next-line no-console
          console.error("Error writing CSS file:", writeErr);
          process.exit(1);
        }
        // eslint-disable-next-line no-console
        console.log("✓ CSS built successfully");
      });
    });
  },
);
