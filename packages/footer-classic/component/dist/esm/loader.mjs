import { a as patchEsm, b as bootstrapLazy } from './core-4c767693.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["uq-footer-classic",[[0,"uq-footer-classic"]]]], options);
  });
};

export { defineCustomElements };
