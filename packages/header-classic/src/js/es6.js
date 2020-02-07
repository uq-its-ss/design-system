// How do we do this? Object literals, ES6 class, or a constructor?

/**
 * The header component (UQ branded)
 * 
 * @param {string}  title             - The title of the header
 * @param {string}  level             - The tag level (<h1/>, <h2/> etc.), default: 1
 * @param {string}  brandImage        - URL of brand image, default: ????
 * @param {object}  attributeOptions  - Any other attribute options
 */

class headerAsES6Class {

};

const headerAsConstructor = function (title, level, brandImage) {
  
};

const headerAsObjectLiteral = {
  // This is not a Web Component pattern
};

export {headerAsES6Class as default, headerAsConstructor, headerAsObjectLiteral};
