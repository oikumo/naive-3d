import { createBufferUint8 } from './utils/bytes-utils.mjs'
import { convertBottomRightTexABGR2BGR } from './converters/bmp-image-bottom-right-tex.mjs'
import { convertTopRightTexABGR2BGR } from './converters/bmp-image-top-right-tex.mjs'
import { createBmpHeader } from './headers/bmp-header/bmp-header-creator.mjs'
import { createDibHeader } from './headers/dib-header/dib-header-creator.mjs'

const createBmp = (pixels, width, height, converter) => {
    const imageData = converter(pixels, width, height)
    const dibHeader = createDibHeader(width, height)
    const bmpHeader = createBmpHeader(imageData.length, dibHeader.length)
    return createBufferUint8(
        bmpHeader,
        dibHeader,
        imageData
    )
}

const BMPCreator = function () { }

BMPCreator.fromBottomRightTexAbgr = function (pixels, width, height) {
    return createBmp(pixels, width, height, convertBottomRightTexABGR2BGR)
}

BMPCreator.fromTopRightTexAbgr = function (pixels, width, height) {
    return createBmp(pixels, width, height, convertTopRightTexABGR2BGR)
}

export {
    BMPCreator
}