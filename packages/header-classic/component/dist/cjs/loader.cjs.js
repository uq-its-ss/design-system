'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3f3fd861.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["uq-header-classic.cjs",[[0,"uq-header-classic",{"name":[1],"sticky":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
