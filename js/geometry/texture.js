export class Texture {
    constructor(width, height) {
        this.pixels = new Uint32Array(width * height)
        this.width = width
        this.height = height

        this.color = {
            0 : parseInt(0xFF0000FF), // red
            1 : parseInt(0xFFFF0000), // blue
            2 : parseInt(0xFF00FF00), // green
            3 : parseInt(0xFF00FFFF) // yellow
        }

        this.createProcedural()
    }
    sampleColor() {
        return this.color[Math.floor(Math.random() * 5)]
    }
    createProcedural() {
        let i =0, x = 0, y = 0
        const width = this.width
        const size = this.width * this.height

        for (i = 0; i < size; i++) {
            this.pixels[y + width * x ] = this.sampleColor()
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