import { test, assert } from 'naive-tests';
import { Color } from '../../../../../../index.js';
import { convertBottomRightTexABGR2BGR } from '../../../../../../src/core/images/formats/bmp/converters/bmp-image-bottom-right-tex.js';
import { abgr2bgr } from '../../../../../../src/core/images/formats/bmp/utils/bytes-utils.js';

test('convert texture bottom to right abgr to bgr no padding pixels', () => {
    const imageWidth = 4;
    const imageHeight = 2;

    const imagePixels = new Uint32Array([
        Color.red, Color.red, Color.red, Color.red,
        Color.red, Color.green, Color.red, Color.red
    ]);

    const expectedColors = [
        abgr2bgr(Color.red), abgr2bgr(Color.red), abgr2bgr(Color.red), abgr2bgr(Color.red),
        abgr2bgr(Color.red), abgr2bgr(Color.green), abgr2bgr(Color.red), abgr2bgr(Color.red)
    ];

    const data = convertBottomRightTexABGR2BGR(imagePixels, imageWidth, imageHeight);

    let dataIndex = 0;
    let colorIndex = 0;
    while (dataIndex < data.length) {
        let obtainedColor = 0;
        obtainedColor |= data[dataIndex++] << 16;
        obtainedColor |= data[dataIndex++] << 8;
        obtainedColor |= data[dataIndex++] << 0;
        assert.equals(expectedColors[colorIndex++], obtainedColor);
    }
});

test('convert texture bottom to right abgr to bgr with padding pixels', () => {
    const imageWidth = 2;
    const imageHeight = 2;
    const imagePixels = new Uint32Array([Color.red, Color.blue, Color.white, Color.green]);

    const expectedColors = [abgr2bgr(Color.red), abgr2bgr(Color.blue), abgr2bgr(Color.white), abgr2bgr(Color.green)];
    const data = convertBottomRightTexABGR2BGR(imagePixels, imageWidth, imageHeight);

    let col = 0;
    let dataIndex = 0;
    let colorIndex = 0;
    while (dataIndex < data.length) {
        let obtainedColor = 0;
        obtainedColor |= data[dataIndex++] << 16;
        obtainedColor |= data[dataIndex++] << 8;
        obtainedColor |= data[dataIndex++] << 0;
        assert.equals(expectedColors[colorIndex++], obtainedColor);

        if (col + 1 === imageWidth) {
            for (let paddingIndex = 0; paddingIndex < imageWidth; paddingIndex++) {
                assert.equals(0, data[dataIndex++]);
            }
            col = 0;
        }
        else {
            col++;
        }
    }
});