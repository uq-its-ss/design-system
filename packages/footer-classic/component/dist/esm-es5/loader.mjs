import { a as patchEsm, b as bootstrapLazy } from './core-4c767693.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["uq-footer-classic", [[0, "uq-footer-classic"]]]], options);
    });
};
export { defineCustomElements };
