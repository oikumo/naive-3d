import { ColorConverter } from '../../bmp/utils/bytes-utils.mjs'
import { getPaddingBytesPerRow, getPixelsBytesPerRow } from '../../bmp/utils/bmp-utils.mjs'

const ImageAbgr = function (pixels, width, height) {
    this.pixels = pixels
    this.width = width
    this.height = height
}

const bmpData2TopRightImage = function (data, dataOffset, width, height, bytesPerPixel) {
    const paddingPerRow = getPaddingBytesPerRow(width, bytesPerPixel)
    const bytesPerRow = paddingPerRow + (width * bytesPerPixel)

    const bytesPerPixelAbgr = 4
    const imageAbgrBytes = width * height * bytesPerPixelAbgr
    const pixels = new Uint32Array(new ArrayBuffer(imageAbgrBytes))
    const converter = new ColorConverter()

    let bytesReadedInRow = 0
    let pixelsIndex = 0
    let currentRow = height - 1
    let i = dataOffset
    const dataLength = data.length

    while (i < dataLength) {
        if (bytesReadedInRow + paddingPerRow === bytesPerRow) {
            i += paddingPerRow
            bytesReadedInRow = 0
            currentRow--
            pixelsIndex = 0
            continue
        }

        const abgr = converter.bgrBytes2abgr(data.slice(i, i + 3))
        pixels[pixelsIndex + (currentRow * width)] = abgr
        pixelsIndex++
        bytesReadedInRow += bytesPerPixel
        i += 3
    }
    return new ImageAbgr(pixels, width, height)
}

export {
    bmpData2TopRightImage
}