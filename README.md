System requirements
============

This simply setup require you to have node.js v6.0 or higher and `yarn` installed as global dependency

```
$ npm i -g yarn
```

Installation
============

Clone this repository, remove `.git` folder and run below commands to start work

```
$ yarn install
$ yarn run start
```

Development
============

Coding standards
--------------

Most of editors have support for `tslint`, if you want to run coding standard check on whole project
run `yarn run lint`

Fix coding standards
--------------

Typescript have coding standard formatter named `typescript-formatter` to fix coding standards for
whole project run `yarn run fix-lint`

Run tests
--------------

Command to run all tests: `yarn run test`
