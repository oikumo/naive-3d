import {TriangleBuffer} from '../geometry/triangleBuffer.js'
import {Quad} from '../geometry/quad.js'
import {Cube} from '../geometry/cube.js'
import {TextureFactory} from '../textures/textureFactory.js'
import {Pallete} from '../colors/pallete.js'

export class Scene {
    constructor() {
        this.sprites = []
        this.buffer = new TriangleBuffer()

        const pallete = new Pallete()
        this.cube = new Cube({ x: 350, y: 350, z: 350}, 100)

        const tex =  new TextureFactory(100, 100).checker(pallete.color[1], pallete.color[0], 10, 10)
        this.quad = new Quad({ x: 50, y: 50}, 100, tex)
        this.cubeTexture = new TextureFactory(1000, 1000).checker(pallete.color[1], pallete.color[0], 10, 10)
    }
    addEntity(x, y, color) {
        this.buffer.add(x,y, color)
    }
    addSprite(sprite) {
        this.sprites.push(sprite)
    }
}