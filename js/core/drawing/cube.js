import {drawLine2D} from './brush.js'

export function cubeBufferDrawer(vectors, texture, textureWidth, textureHeight) {
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

    drawLine2D(red, a.x, a.y, b.x, b.y, texture, textureWidth)
    drawLine2D(red, b.x, b.y, c.x, c.y, texture, textureWidth)
    drawLine2D(red, c.x, c.y, d.x, d.y, texture, textureWidth)
    drawLine2D(red, d.x, d.y, a.x, a.y, texture, textureWidth)

    //const quadVectors = [a.x, a.y, b.x, b.y, d.x, d.y, d.x, d.y]
    //drawQuadTexture(this.texture, this.cubeTexture.pixels, this.width, this.height, quadVectors)

    drawLine2D(green, e.x, e.y, f.x, f.y, texture, textureWidth)
    drawLine2D(green, f.x, f.y, g.x, g.y, texture, textureWidth)
    drawLine2D(green, g.x, g.y, h.x, h.y, texture, textureWidth)        
    drawLine2D(green, h.x, h.y, e.x, e.y, texture, textureWidth)

    drawLine2D(blue, a.x, a.y, e.x, e.y, texture, textureWidth)
    drawLine2D(blue, b.x, b.y, f.x, f.y, texture, textureWidth)
    drawLine2D(blue, c.x, c.y, g.x, g.y, texture, textureWidth)
    drawLine2D(blue, d.x, d.y, h.x, h.y, texture, textureWidth)
}