import { vector3 } from '../../../common/math/vector/vector3.js'
import { green, red, yellow } from '../../../common/colors.js';
import { drawCircleFillOnTexture } from '../../../engine/geometry/primitives/circle/circle-fill-on-texture.js';
import { drawCircleOnTexture } from '../../../engine/geometry/primitives/circle/circle-on-texture.js';

export function Enemy2d(width, height, tex) {
    this.tex = tex;
    this.offset = vector3(width * 0.5, height * 0.5, 0);
    this.it = 0.0;
}

Enemy2d.prototype.draw = function (position, tex, texWidth) {
    const color = Math.random() > 0.5 ? red : green;

    drawCircleOnTexture(this.tex, color, Math.abs(Math.sin(this.it)));
    drawCircleFillOnTexture(this.tex.pixels, this.tex.width, 150, 100, 50, red);
    drawCircleFillOnTexture(this.tex.pixels, this.tex.width, 50, 50, 20, yellow);
    drawCircleFillOnTexture(this.tex.pixels, this.tex.width, 250, 20, 20, color);

    this.it += Math.PI * 0.01;

    this.tex.paintTo(tex, texWidth,
        position[0] - this.offset[0],
        position[1] - this.offset[1]);
}