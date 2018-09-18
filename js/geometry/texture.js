export class Texture {
    constructor(width, height) {
        this.pixels = new Uint32Array(width * height)
        this.width = width
        this.height = height
        this.createProcedural()
    }
    createProcedural() {
        let i =0, x = 0, y = 0
        const width = this.width
        const size = this.width * this.height

        for (i = 0; i < size; i++) {
            this.pixels[y + width * x ] = Math.ceil(1111111111 * Math.random())
            if (x == width) {
                x = 0;
                y++;
            }
            else {
                x++;
            }            
        }
    }
}