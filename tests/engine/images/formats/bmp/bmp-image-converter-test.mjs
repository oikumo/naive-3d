import { test, assertions } from 'naive-tests'
import { abgr2bgr } from '../../../../../engine/images/formats/bmp/bytes-utils.mjs'
import { convertABGR2BGR } from '../../../../../engine/images/formats/bmp/bmp-image-converter.mjs'
const { equals } = assertions

const red = 0xFF0000FF
const white = 0xFFFFFFFF
const green = 0xFF00FF00
const blue = 0xFFFF0000
const yellow = 0xFFFFFF00
/*
test('create bmp image file no alpha data paylod from pixels array', () => {
    const imageWidth = 2
    const imageHeight = 2
    const imageLength = imageWidth * imageHeight
    const imagePixels = new Uint32Array(imageLength)

    imagePixels[0] = red
    imagePixels[1] = green
    imagePixels[2] = blue
    imagePixels[3] = yellow

    const data = convertABGR2BGR(imagePixels, imageHeight, imageWidth)

    const expectedColors = [
        abgr2bgr(red),
        abgr2bgr(green),
        abgr2bgr(blue),
        abgr2bgr(yellow)
    ]

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
*/