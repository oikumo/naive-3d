import {TriangleBuffer} from '../geometry/triangleBuffer.js'
import {Quad} from '../geometry/quad.js'
import {Cube} from '../geometry/cube.js'
import {TextureFactory} from '../textures/textureFactory.js'
import {Pallete} from '../colors/pallete.js'
import { CubeBuffer } from '../geometry/cubesBuffer.js';

export class Scene {
    constructor() {
        this.sprites = []
        this.triangles = new TriangleBuffer()
        this.cubes = new CubeBuffer()

        const pallete = new Pallete()
        this.cube = new Cube({ x: 350, y: 350, z: 350}, 100)

        const tex =  new TextureFactory(100, 100).checker(pallete.color[1], pallete.color[0], 10, 10)
        this.quad = new Quad({ x: 50, y: 50}, 100, tex)
        this.cubeTexture = new TextureFactory(1000, 1000).checker(pallete.color[1], pallete.color[0], 10, 10)
    }
    addEntity(x, y, color) {
        this.triangles.add(x,y, color)
        this.cubes.add()
    }
    addSprite(sprite) {
        this.sprites.push(sprite)
    }
}