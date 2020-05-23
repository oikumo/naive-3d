export function Texture(width, height) {
    this.pixels = new Uint32Array(width * height)
    this.width = width
    this.height = height
}

Texture.prototype.fill = function (fillerColor) {
    let i = 0, row = 0, col = 0
    const cols = this.width
    const size = this.width * this.height

    for (i = 0; i < size; i++) {
        this.pixels[col + cols * row] = fillerColor(col, row)
        if (col + 1 == cols) {
            col = 0
            row++
        }
        else {
            col++
        }
    }
}