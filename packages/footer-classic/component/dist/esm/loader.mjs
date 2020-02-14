import { a as patchEsm, b as bootstrapLazy } from './core-d7d91b34.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["uq-footer-classic",[[0,"uq-footer-classic",{"pageUrl":[1,"page-url"],"pageLastUpdated":[1,"page-last-updated"]}]]]], options);
  });
};

export { defineCustomElements };
