'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-57505874.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["uq-global-menu-classic_2.cjs",[[4,"uq-header-classic",{"showGlobalMenu":[4,"show-global-menu"],"showSearch":[4,"show-search"],"value":[32]}],[4,"uq-global-menu-classic"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
