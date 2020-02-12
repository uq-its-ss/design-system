'use strict';

const core = require('./core-b42930d6.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["uq-footer-classic.cjs",[[0,"uq-footer-classic"]]]], options);
});
