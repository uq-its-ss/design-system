'use strict';

const core = require('./core-8bde1c55.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["uq-footer-classic.cjs",[[0,"uq-footer-classic",{"pageUrl":[1,"page-url"],"pageLastUpdated":[1,"page-last-updated"]}]]]], options);
});
