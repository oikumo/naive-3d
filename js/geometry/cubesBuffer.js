export class CubeBuffer {
    constructor() {
        this.buffer = new ArrayBuffer(1024);
        this.elementsCount = 0;
    }
    add() {
        if ((this.elementsCount + 2) * (24 + 3) == this.buffer.length)
            return
        const index = this.elementsCount * (24 + 3)
        const scale = 100

        // center
        this.buffer[index] = 0
        this.buffer[index + 1] = 0
        this.buffer[index + 2] = 0
        // a
        this.buffer[index + 3] = -1 * scale
        this.buffer[index + 4] =  1 * scale
        this.buffer[index + 5] = -1 * scale
        // b
        this.buffer[index + 6] =  1  * scale
        this.buffer[index + 7] =  1  * scale
        this.buffer[index + 8] = -1  * scale
        // c
        this.buffer[index + 9] =   1   * scale
        this.buffer[index + 10] =  1   * scale
        this.buffer[index + 11] =  1   * scale
        // d
        this.buffer[index + 12] = -1   * scale
        this.buffer[index + 13] =  1   * scale
        this.buffer[index + 14] =  1   * scale
        // e
        this.buffer[index + 15] = -1   * scale
        this.buffer[index + 16] = -1   * scale
        this.buffer[index + 17] = -1   * scale
        // f
        this.buffer[index + 18] =  1   * scale
        this.buffer[index + 19] = -1   * scale
        this.buffer[index + 20] = -1   * scale
        // g
        this.buffer[index + 21] =  1  * scale
        this.buffer[index + 22] = -1 * scale
        this.buffer[index + 23] =  1 * scale
        // h
        this.buffer[index + 24] = -1  * scale
        this.buffer[index + 25] = -1 * scale
        this.buffer[index + 26] =  1  * scale

        this.elementsCount++

        return index
    }
}