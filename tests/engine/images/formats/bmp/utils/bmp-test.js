import { test, assert } from 'naive-tests';
import { BMPCreator } from '../../../../../../engine/images/formats/bmp/bmp.js'
import { hex2bin } from '../../../../../../engine/images/formats/bmp/utils/bytes-utils.js'

const red = 0xFF0000FF
const white = 0xFFFFFFFF
const green = 0xFF00FF00
const blue = 0xFFFF0000

test('bmp creator from Bottom Right Tex Abgr', () => {
    const imageWidth = 2
    const imageHeight = 2
    const imagePixels = new Uint32Array([
        red, white,
        blue, green
    ])
    const bmp = BMPCreator.fromBottomRightTexAbgr(imagePixels, imageWidth, imageHeight)
    const imageHex = '424D460000000000000036000000280000000200000002000000010018000000000010000000130B0000130B000000000000000000000000FFFFFFFF0000FF000000FF000000'
    const expected = hex2bin(imageHex)
    assert.sameArrayElements(expected, bmp)
})