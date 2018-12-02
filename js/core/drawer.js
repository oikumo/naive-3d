import {drawTrianglesBuffer} from './drawing/triangles.js'
import { drawCubes, translate, rotateY, rotateX } from './drawing/cubes.js';

export function draw(texture, texWidth, texHeight, triangles, cubes, sprites, angle) {
    for (let i = sprites.length - 1; i >= 0; --i)
        sprites[i].draw(texture, texWidth, texHeight)

    drawTrianglesBuffer(texture, texWidth, triangles, angle)
    translate(cubes.buffer, cubes.elementsCount, 5, 1, 1)
    rotateX(cubes.buffer, cubes.elementsCount)
    rotateY(cubes.buffer, cubes.elementsCount)
    drawCubes(texture, texWidth, texHeight, cubes.buffer, cubes.elementsCount)
}