import { test, assertions } from 'naive-tests'
import { abgr2bgr } from '../../../../../../engine/images/formats/bmp/utils/bytes-utils.js'
import { convertTopRightTexABGR2BGR } from '../../../../../../engine/images/formats/bmp/converters/bmp-image-top-right-tex.js'
const { equals } = assertions

const red = 0xFF0000FF
const white = 0xFFFFFFFF
const green = 0xFF00FF00
const blue = 0xFFFF0000
const yellow = 0xFFFFFF00

test('convert texture top to right abgr to bgr no padding pixels', () => {
    const imageWidth = 4
    const imageHeight = 2

    const imagePixels = new Uint32Array([
        red, red, red, red,
        red, green, red, red
    ])

    const expectedColors = [
        abgr2bgr(red), abgr2bgr(green), abgr2bgr(red), abgr2bgr(red),
        abgr2bgr(red), abgr2bgr(red), abgr2bgr(red), abgr2bgr(red)
    ]

    const data = convertTopRightTexABGR2BGR(imagePixels, imageWidth, imageHeight)

    let dataIndex = 0
    let colorIndex = 0
    while (dataIndex < data.length) {
        let obtainedColor = 0
        obtainedColor |= data[dataIndex++] << 16
        obtainedColor |= data[dataIndex++] << 8
        obtainedColor |= data[dataIndex++] << 0
        equals(expectedColors[colorIndex++], obtainedColor)
    }
})

test('convert texture top to right abgr to bgr with padding pixels', () => {
    const imageWidth = 2
    const imageHeight = 2

    const imagePixels = new Uint32Array([
        red, blue,
        white, green
    ])

    const expectedColors = [
        abgr2bgr(white), abgr2bgr(green),
        abgr2bgr(red), abgr2bgr(blue)
    ]

    const data = convertTopRightTexABGR2BGR(imagePixels, imageWidth, imageHeight)

    let col = 0
    let dataIndex = 0
    let colorIndex = 0
    while (dataIndex < data.length) {
        let obtainedColor = 0
        obtainedColor |= data[dataIndex++] << 16
        obtainedColor |= data[dataIndex++] << 8
        obtainedColor |= data[dataIndex++] << 0
        equals(expectedColors[colorIndex++], obtainedColor)

        if (col + 1 === imageWidth) {
            for (let paddingIndex = 0; paddingIndex < imageWidth; paddingIndex++) {
                equals(0, data[dataIndex++])
            }
            col = 0
        }
        else {
            col++
        }
    }
})