export class ColorRandomizer {
    constructor() {
        const lastRandom = new Uint32Array(new ArrayBuffer(4));
        this.random = function () {
            const blue = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const red = Math.floor(Math.random() * 255);
            lastRandom[0] = (255) << 24 | (green << 16) | (blue << 8) | (red << 0);
            return lastRandom[0];
        };
    }
}