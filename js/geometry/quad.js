export class Quad {
    constructor(centerX, centerY, dimension, texture) {
        this.centerX = centerX
        this.centerY = centerY
        this.dimension = dimension    
        this.texture = texture        
    }
    draw(data, width, angle) {        
        const dimension = this.dimension
        const len = dimension * dimension
        const dx = this.centerX - dimension
        const dy = this.centerY - dimension
        const pixels = this.texture.pixels

        let col = 0, row = 0
        let x = 0, y = 0        
        let i = 0, tx = 0, ty = 0, color = 0

        const translation = dimension 
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        const dimDelta = dimension * .5

        for (i = 0; i < len; i++) {
            x = col + dimDelta
            y = row + dimDelta
            
            tx = x - translation
            ty = y - translation

            x = Math.ceil((cos * tx) - (sin * ty) + translation + dx)
            y = (sin * tx) + (cos * ty) + translation + dy

            color = pixels[row + col * dimension]

            data[x + Math.floor(y) * width] = color
            data[x + Math.ceil(y) * width] = color

            if (col + 1 == dimension) {
                col = 0
                row++                
            }
            else {
                col++
            }
        }
    }
}