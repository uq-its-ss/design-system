'use strict';

const core = require('./core-3f3fd861.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["uq-header-classic.cjs",[[0,"uq-header-classic",{"name":[1],"sticky":[4]}]]]], options);
});
