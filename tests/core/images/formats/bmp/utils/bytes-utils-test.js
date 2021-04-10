import { test, assert } from 'naive-tests';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { abgr2bgr, bgr2abgr, ColorConverter, hex2bin, reversed2bytes, reversed4bytes, unreversebytes } from '../../../../../../src/core/images/formats/bmp/utils/bytes-utils.js';

test('reverse number 4 bytes', () => {
    const number = 2835;
    const reversed = reversed4bytes(number);
    const expected = parseInt('0x130B0000');
    const expectedBytes = new Uint8Array([
        255 & expected >> 24,
        255 & expected >> 16,
        255 & expected >> 8,
        255 & expected >> 0]);

    assert.sameArrayElements(expectedBytes, reversed);
});

test('un reverse number in bytes reversed', () => {
    const number = 2835;
    const reversedNumber = new Uint8Array([0x13, 0x0B, 0x00, 0x00]);
    const unreversed = unreversebytes(reversedNumber);
    assert.equals(number, unreversed);
});

test('reversenumber2 bytes', () => {
    const number = 32;
    const reversed = reversed2bytes(number);
    const expected = parseInt('0x2000');
    const expectedBytes = new Uint8Array([
        255 & expected >> 8,
        255 & expected >> 0]);

    assert.sameArrayElements(expectedBytes, reversed);
});

test('convert abgr to bgr color', () => {
    const abgrColor = parseInt('0x1a10120a');
    const noAlphaColor = abgr2bgr(abgrColor);
    const expected = parseInt('0x10120a');
    assert.equals(expected, noAlphaColor);
});

test('convert bgr to abgr color', () => {
    const bgrColor = parseInt('0x0000FF');
    const abgrColor = bgr2abgr(bgrColor);
    const expected = parseInt('0xFF0000FF');
    assert.equals(expected, abgrColor);
});

test('convert bgr to abgr color using converter', () => {
    const bgrColorYellow = parseInt('0xFFFF00');
    const bgrColorRed = parseInt('0x0000FF');
    const bgrColorWhite = parseInt('0xFFFFFF');
    const bgrColorBlue = parseInt('0xFF0000');

    const expectedColorYellow = parseInt('0xFFFFFF00');
    const expectedColorRed = parseInt('0xFF0000FF');
    const expectedColorWhite = parseInt('0xFFFFFFFF');
    const expectedColorBlue = parseInt('0xFFFF0000');

    const converter = new ColorConverter();
    assert.equals(expectedColorYellow, converter.bgr2abgr(bgrColorYellow));
    assert.equals(expectedColorRed, converter.bgr2abgr(expectedColorRed));
    assert.equals(expectedColorWhite, converter.bgr2abgr(expectedColorWhite));
    assert.equals(expectedColorBlue, converter.bgr2abgr(bgrColorBlue));
});


test('bmp converter - hex to binary', () => {
    const imageHex = '424D460000000000000036000000280000000200000002000000010018000000000010000000130B0000130B000000000000000000000000FFFFFFFF0000FF000000FF000000';
    const convertedBin = hex2bin(imageHex);
    const binFilePath = path.join(fileURLToPath(import.meta.url), '../../../../../../../', 'tests-resources/engine/images/formats/bmp/file-image-bin.bmp');
    const binFile = fs.readFileSync(binFilePath);
    assert.sameArrayElementsOnly(binFile, convertedBin);
});