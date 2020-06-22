import { createBufferUint8, reversed4bytes, as2bytes } from '../utils/bytes-utils.mjs'

const createBmpHeader = function (imageDataBytesSize, dibBytesSize) {
    const bmpHeaderBytesSize = 14
    const fileSize = bmpHeaderBytesSize + dibBytesSize + imageDataBytesSize
    const id = new Uint8Array([parseInt('0x42'), parseInt('0x4D')])
    const reversedFileSize = reversed4bytes(fileSize)
    const unused0 = as2bytes(0)
    const unused1 = as2bytes(0)
    const pixelDataOffset = reversed4bytes(bmpHeaderBytesSize + dibBytesSize)

    return createBufferUint8(
        id,
        reversedFileSize,
        unused0,
        unused1,
        pixelDataOffset
    )
}

export {
    createBmpHeader
}