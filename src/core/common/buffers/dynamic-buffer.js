class DynamicBuffer {
    constructor(blockSize = 100) {
        this.buffers = [];
        this.blockSize = blockSize;
        this.buffersCount = 0;
        this.floatBytes = 4;
    }
    addBuffer() {
        const buffer = new ArrayBuffer(this.blockSize * this.floatBytes);
        const bufferAccess = new Float32Array(buffer);
        this.buffers.push(bufferAccess);
    }
}