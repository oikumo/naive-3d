import { test, assert } from 'naive-tests';
import { hex2bin } from '../../../../../../../engine/images/formats/bmp/utils/bytes-utils.js';
import { parseDibHeader } from '../../../../../../../engine/images/formats/bmp/headers/dib-header/dib-header-parser.js';

test('dib header parse', () => {
    const imageHex = '424D460000000000000036000000280000000200000002000000010018000000000010000000130B0000130B000000000000000000000000FFFFFFFF0000FF000000FF000000'
    const data = hex2bin(imageHex)
    const parsedHeader = parseDibHeader(data)
    assert.equals(40, parsedHeader.dibHeaderBytes)
    assert.equals(2, parsedHeader.bitMapWidth)
    assert.equals(2, parsedHeader.bitMapHeight)
    assert.equals(1, parsedHeader.colorPlanes)
    assert.equals(24, parsedHeader.bitsPerPixel)
    assert.equals(0, parsedHeader.pyxelCompression)
    assert.equals(16, parsedHeader.dataBitmapSize)
    assert.equals(2835, parsedHeader.pixelPerMetreHorizontal)
    assert.equals(2835, parsedHeader.pixelPerMetreVertical)
    assert.equals(0, parsedHeader.colorInPallete)
    assert.equals(0, parsedHeader.colorAreImportant)
})