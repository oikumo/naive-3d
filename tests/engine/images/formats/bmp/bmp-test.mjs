import { test, assertions } from 'naive-tests'
import { hex2bin, BMPImage, abgr2bgr } from '../../../../../engine/images/formats/bmp/bmp.mjs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const { equals, sameArrayElementsOnly, sameArrayElements} = assertions

const red = 0xFF0000FF
const green = 0xFF00FF00
const blue = 0xFFFF0000
const yellow = 0xFFFFFF00

test('create bmp image file no alpha data paylod from pixels array', () => {
    const imageWidth = 2
    const imageHeight = 2
    const imageLength = imageWidth * imageHeight
    const imagePixels = new Uint32Array(imageLength)

    imagePixels[0] = red
    imagePixels[1] = green
    imagePixels[2] = blue
    imagePixels[3] = yellow

    const data = BMPImage.abgr2bgrArray(imagePixels, imageHeight, imageWidth)        

    const expectedColors = [abgr2bgr(red),
        abgr2bgr(green),
        abgr2bgr(blue),
        abgr2bgr(yellow)
    ]

    let col = 0
    let dataIndex = 0
    let colorIndex = 0
    while (dataIndex < data.length) {         
        let obtainedColor = 0
        obtainedColor |= data[dataIndex++] << 0
        obtainedColor |= data[dataIndex++] << 8
        obtainedColor |= data[dataIndex++] << 16
        equals(expectedColors[colorIndex++], obtainedColor)

        if (col + 1 === imageWidth) {
            for (let paddingIndex = 0; paddingIndex < imageWidth; paddingIndex++) {
                equals(0, data[dataIndex++])
            }
            col = 0
        }
        else { 
            col++
        }        
    }
})

test('convert abgr to bgr color', () => { 
    const abgrColor = parseInt('0x1a10120a')
    const noAlphaColor = abgr2bgr(abgrColor)
    const expected = parseInt('0x10120a')
    equals(expected, noAlphaColor)
})

test('bmp converter - hex to binary', () => {
    const imageHex = '424D460000000000000036000000280000000200000002000000010018000000000010000000130B0000130B000000000000000000000000FFFFFFFF0000FF000000FF000000'
    const convertedBin = hex2bin(imageHex)
    const binFilePath = path.join(fileURLToPath(import.meta.url), '../../../../../../', 'tests-resources/engine/images/formats/bmp/file-image-bin')
    const binFile = fs.readFileSync(binFilePath)
    sameArrayElementsOnly(binFile, convertedBin)
})