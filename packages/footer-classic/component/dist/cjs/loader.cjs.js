'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-b42930d6.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["uq-footer-classic.cjs",[[0,"uq-footer-classic"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
