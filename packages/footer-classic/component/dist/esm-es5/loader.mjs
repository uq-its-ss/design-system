import { a as patchEsm, b as bootstrapLazy } from './core-ef6014e8.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["uq-footer-classic", [[0, "uq-footer-classic", { "pageUrl": [1, "page-url"], "pageLastUpdated": [1, "page-last-updated"], "showLogin": [4, "show-login"], "loginUrl": [1, "login-url"], "showLogout": [4, "show-logout"], "logoutUrl": [1, "logout-url"] }]]]], options);
    });
};
export { defineCustomElements };
