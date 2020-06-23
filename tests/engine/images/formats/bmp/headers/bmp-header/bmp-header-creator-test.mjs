import { test, assertions } from 'naive-tests'
import { hex2bin } from '../../../../../../../engine/images/formats/bmp/utils/bytes-utils.mjs'
import { createBmpHeader } from '../../../../../../../engine/images/formats/bmp/headers/bmp-header/bmp-header-creator.mjs'

const { sameArrayElements } = assertions

test('bmp header create', () => {
    const expected = hex2bin('424D460000000000000036000000')
    const bytesPerPixel = 4
    const width = 2
    const height = 2
    const pixelsBytes = width * height * bytesPerPixel
    const dibHeaderBytes = 40

    const bmpHeader = createBmpHeader(pixelsBytes, dibHeaderBytes)
    sameArrayElements(expected, bmpHeader)
})