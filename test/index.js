/**
 * mocha test
 */
const assert = require('assert')
const fs = require('fs')
const path = require('path')
const { binary2ascii } = require('../dist/index.cjs')

const eq = (a, e, m) => () => assert.equal(a, e, m)
const asciiStrToArrayBuffer = (b) => Uint8Array.from(b.split('').map((s) => s.charCodeAt(0))).buffer

const btoa = (s) => Buffer.from(s).toString('base64')

describe('binary2ascii', function () {

  describe('basic ascii str', function () {
    const testStrArr = [
      'a',
      'AA',
      'AAA',
      'AAAA',
      '0',
      '',
    ]

    // base ascii chars
    testStrArr.push(...(new Array(128).fill(0).map((_, i) => String.fromCharCode(i))))

    testStrArr.forEach((s) => {
      const arrayBuffer = asciiStrToArrayBuffer(s)
      it(s, eq(binary2ascii(arrayBuffer), btoa(s)));
    })
  });

  // raw binary data to base64
  describe('binary data', function () {
    const buff = fs.readFileSync(path.resolve(__dirname, './test.png'))

    it('png image to base64', eq(binary2ascii(buff.buffer), buff.toString('base64')));
  });
});