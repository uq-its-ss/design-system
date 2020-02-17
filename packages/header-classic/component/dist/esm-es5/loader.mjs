import { a as patchEsm, b as bootstrapLazy } from './core-6472e3d3.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["uq-global-menu-classic", [[4, "uq-global-menu-classic"]]], ["uq-header-classic", [[4, "uq-header-classic", { "showGlobalMenu": [4, "show-global-menu"], "showSearch": [4, "show-search"], "value": [32] }]]]], options);
    });
};
export { defineCustomElements };
