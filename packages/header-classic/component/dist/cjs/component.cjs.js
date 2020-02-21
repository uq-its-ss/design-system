'use strict';

const core = require('./core-f79c3606.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["uq-global-menu-classic.cjs",[[4,"uq-global-menu-classic"]]],["uq-header-classic.cjs",[[4,"uq-header-classic",{"showGlobalMenu":[4,"show-global-menu"],"showSearch":[4,"show-search"],"value":[32]}]]]], options);
});
