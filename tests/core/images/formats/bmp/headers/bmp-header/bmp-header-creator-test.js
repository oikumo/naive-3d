import { test, assert } from 'naive-tests';
import { createBmpHeader } from '../../../../../../../src/core/images/formats/bmp/headers/bmp-header/bmp-header-creator.js';
import { hex2bin } from '../../../../../../../src/core/images/formats/bmp/utils/bytes-utils.js';

test('bmp header create', () => {
    const expected = hex2bin('424D460000000000000036000000');
    const bytesPerPixel = 4;
    const width = 2;
    const height = 2;
    const pixelsBytes = width * height * bytesPerPixel;
    const dibHeaderBytes = 40;

    const bmpHeader = createBmpHeader(pixelsBytes, dibHeaderBytes);
    assert.sameArrayElements(expected, bmpHeader);
});