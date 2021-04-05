import { getPaddingBytesPerRow } from "../utils/bmp-utils.js";
import { abgr2bgr } from "../utils/bytes-utils.js";

export function convertBottomRightTexABGR2BGR(pixels, width, height) {
    const pixelsLength = width * height;
    const padding = getPaddingBytesPerRow(width, 3);
    const bytesPerPixel = 3;
    const dataLength = width * bytesPerPixel * height + (padding * height);

    const data = new Uint8Array(dataLength);
    let dataIndex = 0;
    let col = 0;

    for (let i = 0; i < pixelsLength; i++) {
        const bgrColor = abgr2bgr(pixels[i]);
        data[dataIndex++] = ((255) & (bgrColor >> 16));
        data[dataIndex++] = ((255) & (bgrColor >> 8));
        data[dataIndex++] = ((255) & (bgrColor >> 0));

        if (padding > 0) {
            if (col + 1 === padding) {
                for (let paddingIndex = 0; paddingIndex < padding; paddingIndex++) {
                    data[dataIndex++] = 0;
                }
                col = 0;
            }
            else {
                col++;
            }
        }
    }

    return data;
}