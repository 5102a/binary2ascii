![npm](https://img.shields.io/npm/v/binary2ascii) [![GitHub stars](https://img.shields.io/github/stars/5102a/binary2ascii)](https://github.com/5102a/binary2ascii/stargazers) [![GitHub issues](https://img.shields.io/github/issues/5102a/binary2ascii)](https://github.com/5102a/binary2ascii/issues) [![GitHub license](https://img.shields.io/github/license/5102a/binary2ascii)](https://github.com/5102a/binary2ascii/blob/main/LICENSE)[![CI via GitHub Actions](https://github.com/5102a/binary2ascii/actions/workflows/node.js.yml/badge.svg)](https://github.com/5102a/binary2ascii/actions/workflows/node.js.yml)

English | [简体中文](README_ch.md)

# binary2ascii

ArrayBuffer to Base64-string

## Install

```shell
// npm
$ npm install --save binary2ascii

// yarn
$ yarn add binary2ascii

// pnpm
$ pnpm add binary2ascii
```

## Usage

### ES6 Module

```javascript
// Note that there is no default export
import { binary2ascii } from 'binary2ascii';
```

### node.js (commonjs)

```javascript
// Note that there is no default export
const { binary2ascii } = require('binary2ascii')
```

### Use

```javascript
const arrayBuffer = Uint8Array.from([65])

// Input ArrayBuffer
binary2ascii(arrayBuffer.buffer)

// Input Uint8Array also support
binary2ascii(arrayBuffer)
```

Convert Picture

```javascript
const fs = require('fs')

// Convert Picture data to base64
binary2ascii(fs.readFileSync('./test/test.png').buffer)
```

### Development and construction

Installation Dependencies

```shell
$ pnpm install
```

Repackage

```shell
$ pnpm run build
```

### Test

It is necessary to install the development software


```shell
$ pnpm run test
```