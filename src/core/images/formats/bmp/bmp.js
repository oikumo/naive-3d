import { createBufferUint8 } from './utils/bytes-utils.js';
import { convertBottomRightTexABGR2BGR } from './converters/bmp-image-bottom-right-tex.js';
import { convertTopRightTexABGR2BGR } from './converters/bmp-image-top-right-tex.js';
import { createBmpHeader } from './headers/bmp-header/bmp-header-creator.js';
import { createDibHeader } from './headers/dib-header/dib-header-creator.js';
import { parseBmpHeader } from './headers/bmp-header/bmp-header-parser.js';
import { parseDibHeader } from './headers/dib-header/dib-header-parser.js';
import { bmpData2TopRightImage } from './image-data/image-data-parser.js';

const createBmp = (pixels, width, height, converter) => {
    const imageData = converter(pixels, width, height);
    const dibHeader = createDibHeader(width, height);
    const bmpHeader = createBmpHeader(imageData.length, dibHeader.length);
    return createBufferUint8(
        bmpHeader,
        dibHeader,
        imageData
    );
};

export class BMPCreator {
    static fromBottomRightTexAbgr(pixels, width, height) {
        return createBmp(pixels, width, height, convertBottomRightTexABGR2BGR);
    }

    static fromTopRightTexAbgr(pixels, width, height) {
        return createBmp(pixels, width, height, convertTopRightTexABGR2BGR);
    }

    static fromImageBytes2TopRightImage(imageBytes) {
        const header = parseBmpHeader(imageBytes);
        const dibHeader = parseDibHeader(imageBytes);
        const dataOffset = header.pixelsDataOffset;
        const bytesPerPixel = dibHeader.bitsPerPixel / 8;
        const width = dibHeader.bitMapWidth;
        const height = dibHeader.bitMapHeight;
        return bmpData2TopRightImage(imageBytes, dataOffset, width, height, bytesPerPixel);
    }
}