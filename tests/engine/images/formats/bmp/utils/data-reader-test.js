import { test, assert } from 'naive-tests';
import { DataReader } from '../../../../../../engine/images/formats/bmp/utils/data-reader.js';

test('data reader', () => {
    const data = new Uint8Array([
        0x42,
        0x4D,
        0x46,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x36,
        0x00,
        0x00,
        0x00
    ])

    const reader = new DataReader(data)
    assert.equals('BM', reader.nextString(2))
    assert.equals(70, reader.nextReversedNumber(4))
    assert.equals(0, reader.nextReversedNumber(2))
    assert.equals(0, reader.nextReversedNumber(2))
    assert.equals(54, reader.nextReversedNumber(4))
})

test('data reader seek', () => {
    const data = new Uint8Array([
        0x42,
        0x4D,
        0x46,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x36,
        0x00,
        0x00,
        0x00
    ])

    const reader = new DataReader(data)
    assert.equals('BM', reader.nextString(2));
    reader.seekFromCursor(8);
    assert.equals(54, reader.nextReversedNumber(4));
})