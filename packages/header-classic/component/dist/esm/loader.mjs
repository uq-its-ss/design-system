import { a as patchEsm, b as bootstrapLazy } from './core-6472e3d3.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["uq-global-menu-classic",[[4,"uq-global-menu-classic"]]],["uq-header-classic",[[4,"uq-header-classic",{"showGlobalMenu":[4,"show-global-menu"],"showSearch":[4,"show-search"],"value":[32]}]]]], options);
  });
};

export { defineCustomElements };
