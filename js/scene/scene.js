import {TriangleBuffer} from '../geometry/triangleBuffer.js'

export class Scene {
    constructor() {
        this.sprites = []
        this.buffer = new TriangleBuffer()
    }
    addEntity(x, y, color) {
        this.buffer.add(x,y, color)
    }
    addSprite(sprite) {
        this.sprites.push(sprite)
    }
}