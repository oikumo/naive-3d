import { test, assert } from 'naive-tests';
import { bmpData2TopRightImage } from '../../../../../../src/core/images/formats/bmp/image-data/image-data-parser.js';
import { hex2bin } from '../../../../../../src/core/images/formats/bmp/utils/bytes-utils.js';

const blue = parseInt(0xFFFF0000);
const green = parseInt(0xFF00FF00);
const red = parseInt(0xFF0000FF);
const white = parseInt(0xFFFFFFFF);

test('bmp image data parse', () => {
    const imageHex = '424D460000000000000036000000280000000200000002000000010018000000000010000000130B0000130B000000000000000000000000FFFFFFFF0000FF000000FF000000'
    const data = hex2bin(imageHex);
    const width = 2;
    const height = 2;
    const bitsPerPixel = 24;
    const bytesPerPixel = bitsPerPixel / 8;
    const dataOffset = 54;
    const image = bmpData2TopRightImage(data, dataOffset, width, height, bytesPerPixel);
    assert.equals(width, image.width);
    assert.equals(height, image.height);
    assert.equals(width * height, image.pixels.length);
    assert.equals(blue, image.pixels[0]);
    assert.equals(green, image.pixels[1]);
    assert.equals(red, image.pixels[2]);
    assert.equals(white, image.pixels[3]);
});