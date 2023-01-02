'use strict'

// Base64 character set (include extra '=')
const base64Chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

/**
 * binary to ascii (ArrayBuffer to base64 string)
 * @returns base64 string
 */
const binary2ascii = (bytes: ArrayBuffer) => {
  const uint8Arr = new Uint8Array(bytes)
  const len = uint8Arr.length
  const base64Arr = []
  const extraBytes = len % 3
  const end = len - extraBytes

  let i = -1
  while (++i < end) {
    const code1 = uint8Arr[i]
    const code2 = uint8Arr[++i]
    const code3 = uint8Arr[++i]

    base64Arr.push(
      base64Chars[code1 >>> 2], // First upper 6 bits
      base64Chars[((code1 & 0b11) << 4) | (code2 >>> 4)], // First lower 2 bits and second upper 4 bits
      base64Chars[((code2 & 0b1111) << 2) | (code3 >>> 6)], // Second lower 4 bits and third upper 2 bits
      base64Chars[code3 & 0b111111] // Third lower 6 bits
    )
  }

  if (extraBytes === 1) {
    const code = uint8Arr[i]

    base64Arr.push(
      base64Chars[code >>> 2],
      base64Chars[(code & 0b11) << 4], // Only one character needs to be converted for extra 1 byte
      '=',
      '='
    )
  } else if (extraBytes === 2) {
    const code1 = uint8Arr[i]
    const code2 = uint8Arr[++i]

    base64Arr.push(
      base64Chars[code1 >>> 2],
      base64Chars[((code1 & 0b11) << 4) | (code2 >>> 4)],
      base64Chars[(code2 & 0b1111) << 2], // Only two characters need to be converted for additional 2 bytes
      '='
    )
  }

  return base64Arr.join('')
}

export { binary2ascii }
