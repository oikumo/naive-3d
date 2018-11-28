import {Scene} from '../scene/scene.js'
import {draw} from './drawer.js'
import {Viewport} from '../app/viewport.js'
import {TriangleBuffer} from './geometry/triangleBuffer.js'
import {Quad} from './geometry/quad.js'
import {Cube} from './geometry/cube.js'
import { CubeBuffer } from './geometry/cubesBuffer.js'
import {TextureFactory} from '../textures/textureFactory.js'
import {Pallete} from '../colors/pallete.js'

export class Core
{
    constructor(viewport, scene, renderer) {
        this.viewport = viewport
        this.scene = scene
        this.renderer = renderer     
        this.angle = 0.0
        this.sprites = []
        this.triangles = new TriangleBuffer()
        this.cubes = new CubeBuffer()
    }
    draw (deltaTime) {
        this.renderer.clear()
        draw(this.renderer.texture, this.viewport.width, this.viewport.height, this.triangles, this.cubes, this.angle);
        this.renderer.draw()
        this.angle = this.angle + (0.001 * deltaTime)
    }
    createCube() {
        const pallete = new Pallete()
        this.cube = new Cube({ x: 350, y: 350, z: 350}, 100)    
        this.cubeTexture = new TextureFactory(1000, 1000).checker(pallete.color[1], pallete.color[0], 10, 10)
    }
    createQuad() {
        const tex =  new TextureFactory(100, 100).checker(pallete.color[1], pallete.color[0], 10, 10)
        this.quad = new Quad({ x: 50, y: 50}, 100, tex)        
    }
    addTriangle(x,y, color) {
        this.triangles.add(x, y, color)
    }
    addCube() {
        this.cubes.add()
    }
    addSprite(sprite) {
        this.sprites.push(sprite)
    }
}