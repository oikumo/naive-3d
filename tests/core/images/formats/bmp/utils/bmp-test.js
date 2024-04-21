import { test, assert } from 'naive-tests';
import { Color } from '../../../../../../index.js';
import { BMPCreator } from '../../../../../../src/core/images/formats/bmp/bmp.js';
import { hex2bin } from '../../../../../../src/core/images/formats/bmp/utils/bytes-utils.js';

test('bmp creator from Bottom Right Tex Abgr', () => {
    const imageWidth = 2;
    const imageHeight = 2;
    const imagePixels = new Uint32Array([Color.red, Color.white, Color.blue, Color.green]);
    const bmp = BMPCreator.fromBottomRightTexAbgr(imagePixels, imageWidth, imageHeight);
    const imageHex = '424D460000000000000036000000280000000200000002000000010018000000000010000000130B0000130B000000000000000000000000FFFFFFFF0000FF000000FF000000';
    const expected = hex2bin(imageHex);
    assert.equalsArrayElements(expected, bmp);
});