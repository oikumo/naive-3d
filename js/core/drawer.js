import {drawLine2D} from '../rendering/brush.js'
import {Quad} from '../geometry/quad.js'
import {Cube} from '../geometry/cube.js'
import {TextureFactory} from '../geometry/textures/textureFactory.js'
import {Pallete} from '../geometry/pallete.js'
import {drawQuadTexture} from '../geometry/textures/drawers/textureDrawer.js'
import {drawTrianglesBuffer} from '../geometry/drawers/triangleBufferDrawer.js'

export class Drawer {    
    constructor(viewport, scene, renderer) {
        this.width = viewport.width
        this.height = viewport.height
        this.viewport = viewport
        this.scene = scene
        this.texture = renderer.texture
        this.angle = 0
        const pallete = new Pallete()
        this.cube = new Cube({ x: 350, y: 350, z: 350}, 100)
        const tex =  new TextureFactory(100, 100).checker(pallete.color[1], pallete.color[0], 10, 10)
        this.quad = new Quad({ x: 50, y: 50}, 100, tex)
        this.cubeTexture = new TextureFactory(1000, 1000).checker(pallete.color[1], pallete.color[0], 10, 10)
    }
    update (deltaTime, speed) {
        this.cursorU = this.viewport.cursorU
        this.cursorV = this.viewport.cursorV
        this.texture.fill(0xFF555500)        
        this.drawSprites(this.scene.sprites)
        drawTrianglesBuffer(this.texture, this.width, this.scene.buffer, this.angle)
        this.quad.center.x = this.viewport.cursorU
        this.quad.center.y = this.viewport.cursorV
        this.quad.center.z = 0 
        this.quad.draw(this.texture, this.width, this.height, this.angle,  Math.fround(this.angle / 10))
        this.cube.scale(1.000001)
        this.drawCubes()
        this.angle += 0.001 * deltaTime
    }
    drawSprites(sprites) {
        let i
        for (i = sprites.length - 1; i >= 0; --i) {
            sprites[i].draw(this.texture, this.width, this.height);
        }
    }
    drawCubes() {
        this.cube.transform()
        const vectors = this.cube.vectors
        const width = this.width
        const red = 0xFF0000FF
        const blue = 0xFFFF0000
        const green = 0xFF00FF00

        const a = vectors[0]
        const b = vectors[1]
        const c = vectors[2]
        const d = vectors[3]
        const e = vectors[4]
        const f = vectors[5]
        const g = vectors[6]
        const h = vectors[7]

        drawLine2D(red, a.x, a.y, b.x, b.y, this.texture, width)
        drawLine2D(red, b.x, b.y, c.x, c.y, this.texture, width)
        drawLine2D(red, c.x, c.y, d.x, d.y, this.texture, width)
        drawLine2D(red, d.x, d.y, a.x, a.y, this.texture, width)

        const quadVectors = [a.x, a.y, b.x, b.y, d.x, d.y, d.x, d.y]
        drawQuadTexture(this.texture, this.cubeTexture.pixels, this.width, this.height, quadVectors)

        drawLine2D(green, e.x, e.y, f.x, f.y, this.texture, width)
        drawLine2D(green, f.x, f.y, g.x, g.y, this.texture, width)
        drawLine2D(green, g.x, g.y, h.x, h.y, this.texture, width)        
        drawLine2D(green, h.x, h.y, e.x, e.y, this.texture, width)

        drawLine2D(blue, a.x, a.y, e.x, e.y, this.texture, width)
        drawLine2D(blue, b.x, b.y, f.x, f.y, this.texture, width)
        drawLine2D(blue, c.x, c.y, g.x, g.y, this.texture, width)
        drawLine2D(blue, d.x, d.y, h.x, h.y, this.texture, width)
    }
    drawSprite(sprite, offset) {
        sprite.center.x = this.cursorU + i * offset
        sprite.center.y = this.cursorV - i * i + offset
        sprite.draw(this.texture, this.width, this.height)
    }
}