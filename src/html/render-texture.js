export class RenderTexture {
    constructor(size) {
        const buf = new ArrayBuffer(size);
        this.buf8 = new Uint8ClampedArray(buf);
        this.texture = new Uint32Array(buf);
    }

    clear(bgColor) {
        this.texture.fill(bgColor);
    }
}