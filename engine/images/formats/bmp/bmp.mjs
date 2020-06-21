import { createBufferUint8, reversed4bytes, reversed2bytes, as2bytes, abgr2bgr } from './bytes-utils.mjs'
import { convertABGR2BGR } from './bmp-image-converter.mjs'
import { createBmpHeader } from './bmp-header.mjs'
import { createDibHeader } from './bmp-header-dib.mjs'

const createBmp = (pixels, width, height) => {
    const imageData = convertABGR2BGR(pixels, width, height)
    const dibHeader = createDibHeader(width, height)
    const bmpHeader = createBmpHeader(imageData.length, dibHeader.length)
    return createBufferUint8(
        bmpHeader,
        dibHeader,
        imageData
    )
}

export {
    createBmp
}