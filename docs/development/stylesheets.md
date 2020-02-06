# Development of UIDF stylesheets

## SASS (SCSS)

### Development files

TODO: create a working build system.
The SASS development files are used to generate resources for the package user.

| @uq-uidf/[package]/src/scss |                                                              |
| --------------------------- | ------------------------------------------------------------ |
| ⤵️ _component.scss           | main stylesheet for the component                            |
| ⤵️ _globals.scss             | variables, mixins, documentation template, documentation of dependencies |
| ⤵️ _print.scss               | optional, print styles                                                             |
| ⤵️ _build.scss               | used to transpile from SCSS to CSS                           |

### Generated files

For build systems with SCSS support:  
| @uq-uidf/[package]/lib/scss |                                                              |
| --------------------------- | ------------------------------------------------------------ |
| ⤵️ _component.scss           | main stylesheet for the component                            |
| ⤵️ _globals.scss             | variables, mixins, versioned documentation, documentation of dependencies |
| ⤵️ _print.scss               |                                                              |

For the most basic use case, we have CSS files:  
| @uq-uidf/all/dist           |                                   |
| --------------------------- | --------------------------------- |
| ⤵️ uq-uidf-[package].css     | main stylesheet for the component |
| ⤵️ uq-uidf-[package].min.css | minified                          |

## PostCSS
> Watch this space.
