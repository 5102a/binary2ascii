![npm](https://img.shields.io/npm/v/binary2ascii) [![GitHub stars](https://img.shields.io/github/stars/5102a/binary2ascii)](https://github.com/5102a/binary2ascii/stargazers) [![GitHub issues](https://img.shields.io/github/issues/5102a/binary2ascii)](https://github.com/5102a/binary2ascii/issues) [![GitHub license](https://img.shields.io/github/license/5102a/binary2ascii)](https://github.com/5102a/binary2ascii/blob/main/LICENSE)[![CI via GitHub Actions](https://github.com/5102a/binary2ascii/actions/workflows/node.js.yml/badge.svg)](https://github.com/5102a/binary2ascii/actions/workflows/node.js.yml)

[English](README.md) | 简体中文

# binary2ascii

ArrayBuffer 直接转 Base64-string

## 安装

```shell
// npm
$ npm install --save binary2ascii

// yarn
$ yarn add binary2ascii

// pnpm
$ pnpm add binary2ascii
```

## 使用

### ES6 模块

```javascript
// 注意，没有默认导出
import { binary2ascii } from 'binary2ascii';
```

### node.js (commonjs) 模块

```javascript
// 注意，没有默认导出
const { binary2ascii } = require('binary2ascii')
```

### 用法

```javascript
const arrayBuffer = Uint8Array.from([65])

// 输入 ArrayBuffer
binary2ascii(arrayBuffer.buffer)

// 也支持输入 Uint8Array
binary2ascii(arrayBuffer)
```

图片数据转换（原始二进制数据转 base64）

```javascript
const fs = require('fs')

// ArrayBuffer 转 base64 字符串
binary2ascii(fs.readFileSync('./test/test.png').buffer)
```

### 开发与构建

安装依赖

```shell
$ pnpm install
```

重新打包

```shell
$ pnpm run build
```

### 测试

需先安装开发依赖

```shell
$ pnpm run test
```