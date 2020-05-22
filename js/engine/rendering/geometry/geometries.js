import { TextureFactory } from "./rendering/textures/textureFactory.js";
import { Pallete } from "./rendering/colors/pallete.js";
import { Quad } from "./rendering/geometry/quad.js";
import { Cube } from "./rendering/geometry/cube.js";

export function createCube() {
    const pallete = new Pallete();
    this.cube = new Cube({ x: 400, y: 400, z: 400 }, 100);
    this.cubeTexture = new TextureFactory(256, 256).checker(
        pallete.color[1],
        pallete.color[0],
        10,
        10
    );
}

export function createQuad() {
    const pallete = new Pallete();
    const tex = new TextureFactory(100, 100).checker(
        pallete.color[1],
        pallete.color[0],
        10,
        10
    );
    return new Quad({ x: 50, y: 50 }, 100, tex);
}

export function createSprite(x, y) {
    const pallete = new Pallete();
    const texture = new TextureFactory(200, 200).checker(
        pallete.color[0],
        pallete.color[4],
        10,
        10
    );
    return new Sprite({ x: x, y: y }, texture);
}