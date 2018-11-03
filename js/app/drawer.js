import {drawTrianglesBuffer} from '../drawing/triangles.js'
import {cubeBufferDrawer} from '../drawing/cube.js'

export class Drawer {    
    constructor(viewport, scene, renderer) {
        this.width = viewport.width
        this.height = viewport.height
        this.viewport = viewport
        this.scene = scene
        this.texture = renderer.texture
        this.angle = 0
    }
    update (deltaTime, speed) {
        this.cursorU = this.viewport.cursorU
        this.cursorV = this.viewport.cursorV
        this.texture.fill(0xFF555500)

        this.drawSprites(this.scene.sprites)
        drawTrianglesBuffer(this.texture, this.width, this.scene.buffer, this.angle)

        const quad = this.scene.quad
        quad.center.x = this.viewport.cursorU
        quad.center.y = this.viewport.cursorV
        quad.center.z = 0 
        quad.draw(this.texture, this.width, this.height, this.angle,  Math.fround(this.angle / 10))

        const cube = this.scene.cube
        cube.scale(1.000001)
        cube.transform()  
        cubeBufferDrawer(cube.vectors, this.texture, this.width, this.height)
        this.angle += 0.001 * deltaTime
    }
    drawSprites(sprites) {
        let i
        for (i = sprites.length - 1; i >= 0; --i) {
            sprites[i].draw(this.texture, this.width, this.height);
        }
    }
    drawSprite(sprite, offset) {
        sprite.center.x = this.cursorU + i * offset
        sprite.center.y = this.cursorV - i * i + offset
        sprite.draw(this.texture, this.width, this.height)
    }
}