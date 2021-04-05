import { assert, test } from 'naive-tests';
import { textures } from '../../../index.js';

test('fill a squared texture with a solid color', () => {
    const tex = textures.createTexture(10, 10);
    const white = parseInt(0x00000000);
    const red = parseInt(0xFF0000FF);

    tex.pixels.forEach((pixel) => assert.equals(pixel, white));
    tex.fill(() => red);
    tex.pixels.forEach((pixel) => assert.equals(pixel, red));
});

test('paint texture into an a pixel array', () => {
    const red = parseInt(0xFF0000FF);
    const tex = textures.createTexture(2, 2);
    const target = new Uint32Array(4 * 4);
    tex.fill(() => red);
    tex.paintTo(target, 4);

    assert.equals(tex.pixels[0], target[0]);
    assert.equals(tex.pixels[1], target[1]);
    assert.equals(tex.pixels[2], target[4]);
    assert.equals(tex.pixels[3], target[5]);
    assert.equals(0, target[6]);
})

test('fill a rectangular texture with lines', () => {
    const tex = textures.createTexture(3, 5);
    const white = parseInt(0x00000000);
    const red = parseInt(0xFF0000FF);

    tex.pixels.forEach((pixel) => assert.equals(pixel, white));
    tex.fill((_, row) => row % 2 === 0 ? white : red);

    const expected = new Array(15)
        .fill(white, 0, 3)
        .fill(red, 3, 6)
        .fill(white, 6, 9)
        .fill(red, 9, 12)
        .fill(white, 12, 15);

    tex.pixels.forEach((pixel, i) => {
        assert.equals(pixel, expected[i]);
    });
})