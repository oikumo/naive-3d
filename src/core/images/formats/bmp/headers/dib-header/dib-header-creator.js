import { createBufferUint8, reversed4bytes, reversed2bytes } from '../../utils/bytes-utils.js'
import { getPaddingBytesPerRow, getPixelsBytesPerRow } from '../../utils/bmp-utils.js'

const pixelDataByteCount = function (width, height) {
    const bytesPerPixel = 3
    const pixelsBytesPerRow = getPixelsBytesPerRow(width, bytesPerPixel)
    const paddingBytesPerRow = getPaddingBytesPerRow(width, bytesPerPixel)
    const bytesPerRow = pixelsBytesPerRow + paddingBytesPerRow
    return bytesPerRow * height
}

const createDibHeader = function (width, height) {
    const pixelsBytesCount = pixelDataByteCount(width, height)
    const dibSize = 40
    const dibHeaderBytes = reversed4bytes(dibSize)
    const bitMapWidth = reversed4bytes(width)
    const bitMapHeight = reversed4bytes(height)
    const colorPlanes = reversed2bytes(1)
    const bytesPerPixel = reversed2bytes(24)
    const pyxelCompression = reversed4bytes(0)
    const dataBitmapSize = reversed4bytes(pixelsBytesCount)
    const pixelPerMetreHorizontal = reversed4bytes(2835)
    const pixelPerMetreVertical = reversed4bytes(2835)
    const colorInPallete = reversed4bytes(0)
    const colorAreImportant = reversed4bytes(0)

    return createBufferUint8(
        dibHeaderBytes,
        bitMapWidth,
        bitMapHeight,
        colorPlanes,
        bytesPerPixel,
        pyxelCompression,
        dataBitmapSize,
        pixelPerMetreHorizontal,
        pixelPerMetreVertical,
        colorInPallete,
        colorAreImportant
    )
}

export {
    createDibHeader
}