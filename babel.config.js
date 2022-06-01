module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        bugfixes: true,
        useBuiltIns: "usage",
        corejs: "3.21",
      },
    ],
  ],
};
