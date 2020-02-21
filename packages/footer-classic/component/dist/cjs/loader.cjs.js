'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-ce424cd6.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["uq-footer-classic.cjs",[[0,"uq-footer-classic",{"pageUrl":[1,"page-url"],"pageLastUpdated":[1,"page-last-updated"],"showLogin":[4,"show-login"],"loginUrl":[1,"login-url"],"showLogout":[4,"show-logout"],"logoutUrl":[1,"logout-url"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
