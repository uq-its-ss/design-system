'use strict';

/**
 * Equaliser script extracted and modified from Equalizer
 * (https://github.com/skrajewski/Equalizer).
 * A simple way to keep elements at equal height!
 * 
 */
var gridMenuEqualiser = (function () {
  "use strict";

  /**
   * Initial equalizer
   *
   * @param {(String|NodeList)} [blocks="grid-menu--equalised"] - selector
   * string or list of DOM nodes.
   * @constructor
   */
  function gridMenuEqualiser(blocks) {
    if (!blocks) {
      blocks = ".grid-menu--equalised";
    }

    if (!(this instanceof gridMenuEqualiser)) {
      return new gridMenuEqualiser(blocks);
    }

    if (typeof blocks === "string") {
      this.blocks = document.querySelectorAll(blocks);
      return;
    }

    this.blocks = blocks;
  }

  /**
   * Recalculate height of blocks
   */
  gridMenuEqualiser.prototype.align = function () {
    var maxHeight = 0,
      max = this.blocks.length,
      i;

    for (i = 0; i < max; i++) {
      this.blocks[i].style.minHeight = "";
      maxHeight = Math.max(maxHeight, this.blocks[i].clientHeight);
    }

    for (i = 0; i < max; i++) {
      this.blocks[i].style.minHeight = maxHeight + "px";
    }
  };

  return gridMenuEqualiser;
}());

export {gridMenuEqualiser as default};
