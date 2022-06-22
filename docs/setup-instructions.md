# Setup instructions

> Firstly, you will need [Node](https://nodejs.org/en/) installed on your
> system. We recommended using [NVM](https://github.com/nvm-sh/nvm) to manage
> different versions and to use the version specified in the `~/.nvmrc` file.

---

1. Install dependencies

```shell
$ npm i
```

2. Set up package dependencies w/ Lerna

```shell
$ npx lerna bootstrap
```

## Depending on your operating system, you may encounter the following:

Using ```node 18``` and ```npm 8.12.2``` we encounterd ```node-gyp``` issues that required installation of ```x-code`` [see node-gyp instuctions](https://github.com/nodejs/node-gyp#on-macos).