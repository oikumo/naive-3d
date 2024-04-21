import { test, assert } from 'naive-tests';
import { hex2bin } from '../../../../../../../src/core/images/formats/bmp/utils/bytes-utils.js';
import { createDibHeader } from '../../../../../../../src/core/images/formats/bmp/headers/dib-header/dib-header-creator.js';
import { Color } from '../../../../../../../index.js';

test('bmp dib header create', () => {
    const imageWidth = 2;
    const imageHeight = 2;
    const imageLength = imageWidth * imageHeight;
    const imagePixels = new Uint32Array(imageLength);

    imagePixels[0] = Color.red;
    imagePixels[1] = Color.green;
    imagePixels[2] = Color.blue;
    imagePixels[3] = Color.yellow;

    const dibHeader = createDibHeader(imageWidth, imageHeight);
    const expected = hex2bin('280000000200000002000000010018000000000010000000130B0000130B00000000000000000000');

    assert.equalsArrayElements(expected, dibHeader);
});