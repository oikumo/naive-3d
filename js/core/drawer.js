import {drawLine2D} from '../rendering/brush.js'
import {Quad} from '../geometry/quad.js'
import {Cube} from '../geometry/cube.js'
import {TextureFactory} from '../geometry/textures/textureFactory.js'
import {Pallete} from '../geometry/pallete.js'
import {drawQuadTexture} from '../geometry/textures/drawers/textureDrawer.js'

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
        this.drawShapesBuffer(this.scene.buffer, this.angle)
        this.drawAim() 
        this.quad.center.x = this.viewport.cursorU
        this.quad.center.y = this.viewport.cursorV
        this.quad.center.z = 0 
        this.quad.draw(this.texture, this.width, this.height, this.angle,  Math.fround(this.angle / 10))
        this.cube.scale(1.000001)
        this.drawCubes()
        this.angle += 0.001 * deltaTime
    }
    drawAim() {
        drawLine2D(1111111111, 0, 0, this.cursorU, this.cursorV, this.texture, this.width)
        drawLine2D(1111111111, this.width - 1, this.height - 1, this.cursorU, this.cursorV, this.texture, this.width)
        drawLine2D(1111111111, 0, this.height - 1, this.cursorU, this.cursorV, this.texture, this.width)
        drawLine2D(1111111111, this.width - 1, 0, this.cursorU, this.cursorV, this.texture, this.width)
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
    drawShapesBuffer(buffer, angle) {
        const triangles = buffer.triangles
        const colors = buffer.colors
        const len = buffer.len
        let i, index, ax, ay, bx, by, cx, cy, px, py, centerX, centerY, cos, sin, color = 0

        for (i = len - 1; i >= 0; --i) {
            index = i * 8
            ax = triangles[index]
            ay = triangles[index + 1]
            bx = triangles[index + 2]
            by = triangles[index + 3]
            cx = triangles[index + 4]
            cy = triangles[index + 5]

            centerX = triangles[index + 6]
            centerY = triangles[index + 7]

            cos = Math.cos(angle)
            sin = Math.sin(angle)

            px = ax - centerX
            py = ay - centerY
            ax = (cos * px) - (sin * py) + centerX
            ay = (sin * px) + (cos * py) + centerY

            px = bx - centerX
            py = by - centerY
            bx = (cos * px) - (sin * py) + centerX
            by = (sin * px) + (cos * py) + centerY

            px = cx - centerX
            py = cy - centerY
            cx = (cos * px) - (sin * py) + centerX
            cy = (sin * px) + (cos * py) + centerY
            
            color = colors[i]

            drawLine2D(color, ax, ay, bx, by, this.texture, this.width)
            drawLine2D(color, bx, by, cx, cy, this.texture, this.width)
            drawLine2D(color, cx, cy, ax, ay, this.texture, this.width)
        }   
    }
    drawSprite(sprite, offset) {
        sprite.center.x = this.cursorU + i * offset
        sprite.center.y = this.cursorV - i * i + offset
        sprite.draw(this.texture, this.width, this.height)
    }
}