export class Quad {
    constructor(centerX, centerY, dimension, texture) {
        this.centerX = centerX
        this.centerY = centerY
        this.dimension = dimension    
        this.texture = texture        
    }
    draw(data, width, height, angle, scale) {        
        let col = 0, row = 0
        let x = 0, y = 0        
        let i = 0, tx = 0, ty = 0, color = 0

        const cos = Math.cos(angle)
        const sin = Math.sin(angle)

        const dimension = this.dimension * scale
        const len = Math.floor(dimension * dimension)
        const translation = dimension 
        const dimDelta = dimension * .5

        const dx = this.centerX - dimension
        const dy = this.centerY - dimension
        const pixels = this.texture.pixels

        const unscaledDimension = Math.floor(dimension / scale)

        for (i = 0; i < len; i++) {
            x = col + dimDelta
            y = row + dimDelta

            tx = x - translation
            ty = y - translation

            x = Math.ceil((cos * tx) - (sin * ty) + translation + dx)
            y = (sin * tx) + (cos * ty) + translation + dy
  
            if (x >= 0 && x < width && y >= 0 && y < height)
            {
                color = pixels[Math.floor(row / scale) + Math.floor(Math.floor(col / scale) * unscaledDimension)]
                data[x + Math.floor(y) * width] = color
                data[x + Math.ceil(y) * width] = color    
            }

            if (col + 1 >= dimension) {
                col = 0
                row++                
            }
            else {
                col++
            }
        }
    }
}