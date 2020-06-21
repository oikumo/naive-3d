import { test, assertions } from 'naive-tests'
import { createBmp } from '../../../../../engine/images/formats/bmp/bmp.mjs'
import { hex2bin } from '../../../../../engine/images/formats/bmp/bytes-utils.mjs'

const { sameArrayElements } = assertions

const red = 0xFF0000FF
const white = 0xFFFFFFFF
const green = 0xFF00FF00
const blue = 0xFFFF0000

/*
test('bmp dib header create', () => {
    const imageWidth = 2
    const imageHeight = 2
    const imageLength = imageWidth * imageHeight
    const imagePixels = new Uint32Array(imageLength)

    imagePixels[0] = red
    imagePixels[1] = white
    imagePixels[2] = blue
    imagePixels[3] = green

    const bmp = createBmp(imagePixels, imageWidth, imageHeight)
    const imageHex = '424D460000000000000036000000280000000200000002000000010018000000000010000000130B0000130B000000000000000000000000FFFFFFFF0000FF000000FF000000'
    const expected = hex2bin(imageHex)
    sameArrayElements(expected, bmp)
})
*/