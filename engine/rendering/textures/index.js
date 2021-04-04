import { Texture } from "./texture";

export function createTexture(width, height, color) {
    const tex = new Texture(width, height);
    tex.fill(() => color);
    return tex;
}

export function createCheckerTexture(width, height, color, otherColor, tileWidth = 10, tileHeight = 10) {
    const tex = new Texture(width, height);
    tex.fill((col, row) => {
        const ratio = Math.floor(col / tileWidth) + Math.floor(row / tileHeight);
        return ratio % 2 == 0 ? color : otherColor;
    });
    return tex;
}