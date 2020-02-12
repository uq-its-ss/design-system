import { a as patchEsm, b as bootstrapLazy } from './core-ca671b55.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["uq-header-classic", [[0, "uq-header-classic", { "name": [1], "sticky": [4] }]]]], options);
    });
};
export { defineCustomElements };
