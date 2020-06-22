import { abgr2bgr } from '../utils/bytes-utils.mjs'
import { getPaddingBytesPerRow } from '../utils/bmp-utils.mjs'

const convertTopRightTexABGR2BGR = function (pixels, width, height) {
    const pixelsLength = width * height
    const padding = getPaddingBytesPerRow(width, 3)
    const bytesPerPixel = 3
    const dataLength = width * bytesPerPixel * height + (padding * height)
    const data = new Uint8Array(dataLength)
    let dataIndex = 0
    let pixelsPivot = width - 1
    let pixelsPivotOffset = 0
    let currentCol = 0
    let col = 0

    for (let i = 0; i < pixelsLength; i++) {
        const reversedIndex = pixelsLength - 1 - i
        const pixelIndex = reversedIndex - pixelsPivot + pixelsPivotOffset
        const bgrColor = abgr2bgr(pixels[pixelIndex])
        data[dataIndex++] = ((255) & (bgrColor >> 16))
        data[dataIndex++] = ((255) & (bgrColor >> 8))
        data[dataIndex++] = ((255) & (bgrColor >> 0))

        if (currentCol + 1 === width) {
            currentCol = 0
            pixelsPivotOffset = 0
        }
        else {
            currentCol++
            pixelsPivotOffset += 2
        }

        if (padding > 0) {
            if (col + 1 === padding) {
                for (let paddingIndex = 0; paddingIndex < padding; paddingIndex++) {
                    data[dataIndex++] = 0
                }
                col = 0
            }
            else {
                col++
            }
        }
    }
    return data
}

export {
    convertTopRightTexABGR2BGR
}