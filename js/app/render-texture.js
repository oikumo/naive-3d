export function RenderTexture(size) {
    const buf = new ArrayBuffer(size)
    this.buf8 = new Uint8ClampedArray(buf)
    this.texture = new Uint32Array(buf)
}

RenderTexture.prototype.clear = function (bgColor) {
    this.texture.fill(bgColor)
}