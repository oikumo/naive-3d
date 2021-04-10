import { assert, test } from 'naive-tests';
import { Textures } from '../../../index.js';
import { Color } from '../../../src/core/colors/index.js';

test('fill a squaColor.red texture with a solid color', () => {
    const tex = Textures.createTexture(10, 10);
    tex.pixels.forEach((pixel) => assert.equals(pixel, Color.white));
    tex.fill(() => Color.red);
    tex.pixels.forEach((pixel) => assert.equals(pixel, Color.red));
});

test('paint texture into an a pixel array', () => {
    const tex = Textures.createTexture(2, 2);
    const target = new Uint32Array(4 * 4);
    tex.fill(() => Color.red);
    tex.paintTo(target, 4);

    assert.equals(tex.pixels[0], target[0]);
    assert.equals(tex.pixels[1], target[1]);
    assert.equals(tex.pixels[2], target[4]);
    assert.equals(tex.pixels[3], target[5]);
    assert.equals(0, target[6]);
});

test('fill a rectangular texture with lines', () => {
    const tex = Textures.createTexture(3, 5);
    tex.pixels.forEach((pixel) => assert.equals(pixel, Color.white));
    tex.fill((_, row) => row % 2 === 0 ? Color.white : Color.red);

    const expected = new Array(15)
        .fill(Color.white, 0, 3)
        .fill(Color.red, 3, 6)
        .fill(Color.white, 6, 9)
        .fill(Color.red, 9, 12)
        .fill(Color.white, 12, 15);

    tex.pixels.forEach((pixel, i) => {
        assert.equals(pixel, expected[i]);
    });
});