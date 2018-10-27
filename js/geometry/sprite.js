export class Sprite {
    constructor (center, texture) {
        this.texture = texture;
        this.center = center;
    }
    draw(data, width, height) {
        let i
        const texHeight = this.texture.height
        const centerX = this.center.x
        const centerY = this.center.y
        let col = 0 , row = 0, x = 0, y =0
        const len = this.texture.pixels.length
        const pixels = this.texture.pixels

        for (i = 0; i < len; i++) {         
            x = Math.floor(centerX + row)
            y = centerY + col

            if (x >= 0 && x < width && y >= 0 && y < height)
                data[x + Math.floor(y * width)] = pixels[i]
        
            if (col + 1 == texHeight) {
                col = 0
                row++
            } else {
                col++
            }
        }
    }
}