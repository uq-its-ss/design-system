# Using Storybook as a styleguide for component development

1. Change to the `storybook-html` package directory

```shell
$ cd packages/storybook-html
```

2. Run Storybook to launch the application at localhost:6006

```shell
$ npm run storybook
```

## importing static HTML into sotrybook stories 

make sure to import .html files with the `?raw` which helps the VITE bundler 
Normally, if you import an HTML file without ?raw, the bundler might try to process it as a module or throw an error because it doesn't know how to "execute" HTML.

* *Without* ?raw: The bundler might ignore the file or give you a URL path to the file.
* *With* ?raw: The bundler reads the file’s content and gives it to you as a plain JavaScript string.



```
import HeaderInterimHTML from "./header-interim.html?raw";
import HeaderHTML from "./header.html?raw";
```