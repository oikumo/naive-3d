export class Renderer {
    constructor(width, height) {
        this.context2D = canvas.getContext("2d")
        this.imageData = this.context2D.createImageData(width, height)
        this.context2D.putImageData(this.imageData, 0, 0)

        const buf = new ArrayBuffer(this.imageData.data.length)
        this.buf8 = new Uint8ClampedArray(buf)
        this.texture = new Uint32Array(buf)
    }

    draw() {
       this.imageData.data.set(this.buf8)
       this.context2D.putImageData(this.imageData, 0, 0)
    }
}