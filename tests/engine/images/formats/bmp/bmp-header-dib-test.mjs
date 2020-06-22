import { test, assertions } from 'naive-tests'
import { hex2bin } from '../../../../../engine/images/formats/bmp/utils/bytes-utils.mjs'
import { createDibHeader } from '../../../../../engine/images/formats/bmp/headers/bmp-header-dib.mjs'

const { sameArrayElements } = assertions

const red = 0xFF0000FF
const white = 0xFFFFFFFF
const green = 0xFF00FF00
const blue = 0xFFFF0000
const yellow = 0xFFFFFF00

test('bmp dib header create', () => {
    const imageWidth = 2
    const imageHeight = 2
    const imageLength = imageWidth * imageHeight
    const imagePixels = new Uint32Array(imageLength)

    imagePixels[0] = red
    imagePixels[1] = green
    imagePixels[2] = blue
    imagePixels[3] = yellow

    const dibHeader = createDibHeader(imageWidth, imageHeight)
    const expected = hex2bin('280000000200000002000000010018000000000010000000130B0000130B00000000000000000000')

    sameArrayElements(expected, dibHeader)
})