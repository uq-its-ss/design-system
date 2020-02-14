'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-8bde1c55.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["uq-footer-classic.cjs",[[0,"uq-footer-classic",{"pageUrl":[1,"page-url"],"pageLastUpdated":[1,"page-last-updated"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
