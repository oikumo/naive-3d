export class Texture {
    constructor(width, height) {
        this.pixels = new Uint32Array(width * height)
        this.width = width
        this.height = height
    }
    fill(filler) {
        let i =0, row = 0, col = 0
        const rows = this.height
        const middleRows = this.height / 2
        const middleCols = this.width / 2
        const size = this.width * this.height

        for (i = 0; i < size; i++) {            
            this.pixels[col + rows * row] = filler.getColor(col, row, middleCols, middleRows)
            if (col + 1 == rows) {
                col = 0
                row++
            }
            else {
                col++
            }                        
        }

    }
}