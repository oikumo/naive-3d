import {Triangle, centerTriangleTo} from '../geometry/triangle.js'

export class Scene {
    constructor() {
        this.shapes = [];
        this.sprites = [];
    }
    addEntity(x, y) {
        let triangle = new Triangle()
        triangle.a = {x:20, y:20}
        triangle.b = {x:70, y:20}
        triangle.c = {x:45, y:70}
        triangle.center = { x: 45, y: 45 }
        triangle.color = 2
        centerTriangleTo(triangle, x, y)
        this.shapes.push(triangle)
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
}