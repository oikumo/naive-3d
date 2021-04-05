import { test, assert } from 'naive-tests';
import { red, white } from '../../../../../src/core/colors/colors.js';
import { drawCircleFillOnTexture } from '../../../../../src/core/geometry/primitives/circle/circle-fill-on-texture.js';
import { createTexture } from '../../../../../src/core/textures/index.js';

test('circle fill on texture - draw', () => {
    const tex = createTexture(50, 50, white);
    const radius = tex.width / 2;
    const centerX = tex.width / 2;
    const centerY = tex.height / 2;

    drawCircleFillOnTexture(tex.pixels, tex.width, centerX, centerY, radius, red);

    const len = tex.width * tex.height;
    const pixels = tex.pixels;

    let x = 0;
    let y = 0;
    let error = 0;
    let distance = 0;

    for (let i = 0; i < len; i++) {

        if (pixels[i] === red) {
            distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            error = distance - radius;
            assert.equals(error <= 0, true, `Pixel x: ${x} y: ${y} exceeds radius in: ${error}, radius: ${radius}`);
        }

        if (x + 1 === tex.width) {
            y++;
            x = 0;
        } else {
            x++;
        }
    }
});