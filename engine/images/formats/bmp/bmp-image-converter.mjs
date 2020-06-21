import { abgr2bgr } from './bytes-utils.mjs'
import { getPaddingBytesPerRow } from './bmp-utils.mjs'

const convertABGR2BGR = function (pixels, width, height) {
    const pixelsLength = width * height
    const padding = getPaddingBytesPerRow(width, 3)
    const bytesPerPixel = 4
    const dataLength = width * bytesPerPixel * height

    const data = new Uint8Array(dataLength)
    let dataIndex = 0
    let col = 0

    for (let i = pixelsLength - 1; i >= 0; --i) {
        const color3 = abgr2bgr(pixels[i])
        data[dataIndex++] = ((255) & (color3 >> 16))
        data[dataIndex++] = ((255) & (color3 >> 8))
        data[dataIndex++] = ((255) & (color3 >> 0))

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

    return data
}

export {
    convertABGR2BGR
}