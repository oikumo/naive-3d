import { test, assert } from 'naive-tests';
import { red, white } from '../../../../../src/core/colors/index.js';
import { Point2d } from '../../../../../src/core/geometry/primitives/points/point2d.js';
import { drawTriangle2dTexuredLeftToRight } from '../../../../../src/core/geometry/primitives/triangles/triangle-2d-textured.js';
import { Triangle2d } from '../../../../../src/core/geometry/primitives/triangles/triangle-2d.js';
import { createTexture } from '../../../../../src/core/textures/index.js';

test('triangle 2d textured - draw', () => {
    const a = new Point2d(0, 0);
    const b = new Point2d(0, 10);
    const c = new Point2d(20, 0);
    const triangle = new Triangle2d(a, b, c);
    const tex = createTexture(10, 10, red);

    const targetTex = createTexture(10, 10, white);
    const offset = new Point2d(0, 0);

    drawTriangle2dTexuredLeftToRight(targetTex, triangle, tex, offset);

    let col = 0, row = 0;

    for (let i = 0; i < targetTex.pixels.length; i++) {
        if (col + 1 === targetTex.width) {
            col = 0;
            row++;
        } else {
            col++;
        }
    }
});
