import { test, assertions } from 'naive-tests'
import { hex2bin } from '../../../../../../../engine/images/formats/bmp/utils/bytes-utils.mjs'
import { parseDibHeader } from '../../../../../../../engine/images/formats/bmp/headers/dib-header/dib-header-parser.mjs'

const { equals } = assertions

test('dib header parse', () => {
    const dibHeader = hex2bin('280000000200000002000000010018000000000010000000130B0000130B00000000000000000000')
    const parsedHeader = parseDibHeader(dibHeader)
    equals(40, parsedHeader.dibHeaderBytes)
    equals(2, parsedHeader.bitMapWidth)
    equals(2, parsedHeader.bitMapHeight)
    equals(1, parsedHeader.colorPlanes)
    equals(24, parsedHeader.bytesPerPixel)
    equals(0, parsedHeader.pyxelCompression)
    equals(16, parsedHeader.dataBitmapSize)
    equals(2835, parsedHeader.pixelPerMetreHorizontal)
    equals(2835, parsedHeader.pixelPerMetreVertical)
    equals(0, parsedHeader.colorInPallete)
    equals(0, parsedHeader.colorAreImportant)
})