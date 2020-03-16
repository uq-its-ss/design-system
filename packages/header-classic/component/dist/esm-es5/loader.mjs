import { a as patchEsm, b as bootstrapLazy } from './core-1f2da31f.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["uq-global-menu-classic_2", [[4, "uq-header-classic", { "showGlobalMenu": [4, "show-global-menu"], "showSearch": [4, "show-search"], "value": [32] }], [4, "uq-global-menu-classic"]]]], options);
    });
};
export { defineCustomElements };
