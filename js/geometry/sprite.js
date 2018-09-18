export class Sprite {
    constructor (center, texture) {
        this.texture = texture;
        this.center = center;
    }
    draw(data, width) {
        let i
        const texWidth = this.texture.width
        const centerX = this.center.x
        const centerY = this.center.y
        let x = 0 , y = 0
        const len = this.texture.pixels.length
        const pixels = this.texture.pixels

        for (i = 0; i < len; i++) {            
            data[(centerY + x) * width + (centerX + y)] = pixels[i]                        
            if (x == texWidth) {
                x = 0
                y++
            } else {
                x++
            }
        }
    }
}