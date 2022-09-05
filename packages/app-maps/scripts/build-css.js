var fs = require("fs"),
  sass = require("sass");

sass.render(
  {
    file: "./src/scss/_component.scss",
    includePaths: ["./node_modules", "./node_modules/@uqds/core/node_modules"],
  },
  (err, result) => {
    if (!err) {
      fs.mkdir("./dist/css/", { recursive: true }, function (err) {
        // @todo eslint solution needs to be reviewed
        // eslint-disable-next-line no-console
        console.error(err);
      });

      fs.writeFile("./dist/css/app-maps.css", result.css, function (err) {
        // @todo eslint solution needs to be reviewed
        // eslint-disable-next-line no-console
        console.error(err);
      });
    } else {
      // @todo eslint solution needs to be reviewed
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }
);
