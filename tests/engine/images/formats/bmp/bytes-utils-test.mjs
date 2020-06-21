import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { test, assertions } from 'naive-tests'
import { hex2bin, abgr2bgr, reversed4bytes, reversed2bytes } from '../../../../../engine/images/formats/bmp/bytes-utils.mjs'

const { equals, sameArrayElements, sameArrayElementsOnly } = assertions

test('reverse number 4 bytes', () => {
    const number = 2835
    const reversed = reversed4bytes(number)
    const expected = parseInt('0x130B0000')
    const expectedBytes = new Uint8Array([
        255 & expected >> 24,
        255 & expected >> 16,
        255 & expected >> 8,
        255 & expected >> 0])

    sameArrayElements(expectedBytes, reversed)
})

test('reversenumber2 bytes', () => {
    const number = 32
    const reversed = reversed2bytes(number)
    const expected = parseInt('0x2000')
    const expectedBytes = new Uint8Array([
        255 & expected >> 8,
        255 & expected >> 0])

    sameArrayElements(expectedBytes, reversed)
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