import { test, assert } from 'naive-tests';
import { Textures } from '../../../../../index.js';
import { Color } from '../../../../../index.js';
import { drawCircleOnTexture } from '../../../../../src/core/geometry/primitives/circle/circle-on-texture.js';

test('circle on texture draw', () => {
    const tex = Textures.createTexture(50, 50, Color.white);
    drawCircleOnTexture(tex, Color.red, 0.99);

    const pixelRadiusMaxError = 2;
    const len = tex.width * tex.height;
    const centerX = Math.floor(tex.width * 0.5);
    const centerY = Math.floor(tex.height * 0.5);
    const pixels = tex.pixels;
    const radius = centerX;

    let x = 0;
    let y = 0;
    let error = 0;
    let distance = 0;
    let acceptableRadiusLen = true;

    for (let i = 0; i < len; i++) {

        if (pixels[i] === Color.red) {
            distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            error = Math.abs(distance - radius);
            acceptableRadiusLen = error < pixelRadiusMaxError;
            assert.equals(acceptableRadiusLen, true, `Circle not draw properly at pixel x: ${x} y: ${y} err: ${error}`);
        }

        if (x + 1 === tex.width) {
            y++;
            x = 0;
        } else {
            x++;
        }
    }
});