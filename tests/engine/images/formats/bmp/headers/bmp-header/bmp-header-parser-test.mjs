import { test, assertions } from 'naive-tests'
import { hex2bin } from '../../../../../../../engine/images/formats/bmp/utils/bytes-utils.mjs'
import { parseBmpHeader } from '../../../../../../../engine/images/formats/bmp/headers/bmp-header/bmp-header-parser.mjs'

const { equals } = assertions

test('bmp header parse', () => {
    const bmpHeader = hex2bin('424D460000000000000036000000')
    const parsedHeader = parseBmpHeader(bmpHeader)
    equals('BM', parsedHeader.id)
    equals(70, parsedHeader.fileSize)
    equals(0, parsedHeader.unused0)
    equals(0, parsedHeader.unused1)
    equals(54, parsedHeader.pixelsDataOffset)
})