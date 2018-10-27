import {drawLine2D} from '../rendering/brush.js'
import {Quad} from '../geometry/quad.js'
import {TextureFactory} from '../geometry/textures/textureFactory.js'
import {Pallete} from '../geometry/pallete.js'

export class Drawer {    
    constructor(viewport, scene, renderer) {
        this.width = viewport.width
        this.height = viewport.height
        this.viewport = viewport
        this.scene = scene
        this.texture = renderer.texture
        this.angle = 0
        const pallete = new Pallete()
        const tex =  new TextureFactory(100, 100).checker(pallete.color[1], pallete.color[0], 10, 10)
        this.quad = new Quad(50,50, 100, tex)
    }
    update (deltaTime, speed) {
        this.cursorU = this.viewport.cursorU
        this.cursorV = this.viewport.cursorV
        this.texture.fill(3333333333)
        this.drawSprites(this.scene.sprites)
        this.drawShapesBuffer(this.scene.buffer, this.angle)
        this.drawAim() 
        this.quad.centerX = this.viewport.cursorU
        this.quad.centerY = this.viewport.cursorV
        this.quad.draw(this.texture, this.width, this.height, this.angle,  Math.fround(this.angle / 10))
        this.angle += 0.01        
    }
    drawAim() {
        drawLine2D(1111111111, 0, 0, this.cursorU, this.cursorV, this.texture, this.width)
        drawLine2D(1111111111, this.width - 1, this.height - 1, this.cursorU, this.cursorV, this.texture, this.width)
        drawLine2D(1111111111, 0, this.height - 1, this.cursorU, this.cursorV, this.texture, this.width)
        drawLine2D(1111111111, this.width - 1, 0, this.cursorU, this.cursorV, this.texture, this.width)
    }    
    drawSprites(sprites) {
        let i;    
        for (i = sprites.length - 1; i >= 0; --i) {
            sprites[i].draw(this.texture, this.width, this.height);
            if (sprites[i].center.x > this.width)
                sprites[i].center.x = 0;
        }
    }
    drawShapesBuffer(buffer, angle) {
        const triangles = buffer.triangles
        const colors = buffer.colors
        const len = buffer.len
        let i, index, ax, ay, bx, by, cx, cy, px, py, centerX, centerY, cos, sin, color = 0

        for (i = 0; i < len; i++) {
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
        if (sprite.center.x > this.width)
            sprite.center.x = 0
    }
}