import { test, assertions } from 'naive-tests'
import { hex2bin } from '../../../../../../../engine/images/formats/bmp/utils/bytes-utils.mjs'
import { parseBmpHeader } from '../../../../../../../engine/images/formats/bmp/headers/bmp-header/bmp-header-parser.mjs'

const { equals } = assertions

test('bmp header parse', () => {
    const imageHex = '424D460000000000000036000000280000000200000002000000010018000000000010000000130B0000130B000000000000000000000000FFFFFFFF0000FF000000FF000000'
    const bmpHeader = hex2bin(imageHex)
    const parsedHeader = parseBmpHeader(bmpHeader)
    equals('BM', parsedHeader.id)
    equals(70, parsedHeader.fileSize)
    equals(0, parsedHeader.unused0)
    equals(0, parsedHeader.unused1)
    equals(54, parsedHeader.pixelsDataOffset)
})