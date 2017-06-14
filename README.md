# a-jwk-generator

[![Travis](https://img.shields.io/travis/adorsys/npm-jwk-generator.svg?style=flat-square)](https://travis-ci.org/adorsys/npm-jwk-generator/builds/)
[![Codecov](https://img.shields.io/codecov/c/github/adorsys/npm-jwk-generator.svg?style=flat-square)](https://codecov.io/gh/adorsys/npm-jwk-generator)
[![npm](https://img.shields.io/npm/v/a-jwk-generator.svg?style=flat-square)](https://www.npmjs.com/package/a-jwk-generator)
[![npm](https://img.shields.io/npm/dm/a-jwk-generator.svg?style=flat-square)](https://www.npmjs.com/package/a-jwk-generator)
[![license](https://img.shields.io/github/license/adorsys/npm-jwk-generator.svg?style=flat-square)](https://github.com/adorsys/npm-jwk-generator/blob/master/LICENSE)

A generator for creating JSON web Keys.
Only 256 bit HMAC Keys are supported yet.
It uses the package 'node-jose'.

## Installation

````
npm install a-jwk-generator 
````

## Usage

``` js
const { generateHMACKey } = require('a-jwk-generator');

const jwk = generateHMACKey();
```

## Tests

Install dev dependencies with `npm install`, then `npm test`.

