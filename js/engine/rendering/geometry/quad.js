export class Quad {
    constructor(center, dimension, texture) {
        this.center = center
        this.dimension = dimension
        this.texture = texture
    }
    draw(data, width, height, angle, scale) {
        let col = 0, row = 0
        let x = 0, y = 0
        let i = 0, tx = 0, ty = 0, color = 0

        const cos = Math.cos(angle)
        const sin = Math.sin(angle)

        const dimension = Math.ceil(this.dimension * scale)
        const len = Math.floor(dimension * dimension)
        const translation = dimension
        const dimDelta = dimension * .5

        const dx = this.center.x - dimension
        const dy = this.center.y - dimension
        const dz = this.center.z - dimension
        const pixels = this.texture.pixels

        const unscaledDimension = Math.floor(dimension / scale)

        for (i = len - 1; i >= 0; --i) {
            x = col + dimDelta
            y = row + dimDelta

            tx = x - translation
            ty = y - translation

            x = Math.ceil((cos * tx) - (sin * ty) + translation + dx)
            y = (sin * tx) + (cos * ty) + translation + dy

            if (x >= 0 && x < width
                && Math.floor(y) >= 0 && Math.floor(y) < height
                && Math.ceil(y) >= 0 && Math.ceil(y) < height) {
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