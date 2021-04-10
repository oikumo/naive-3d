import { Color } from "../colors/index.js";
import { Texture } from "./texture.js";

export class Textures {
    static createTexture(width, height, color) {
        const fillColor = color | Color.white;
        const tex = new Texture(width, height);
        tex.fill(() => fillColor);
        return tex;
    }

    static createCheckerTexture(width, height, color, otherColor, tileWidth = 10, tileHeight = 10) {
        const tex = new Texture(width, height);
        tex.fill((col, row) => {
            const ratio = Math.floor(col / tileWidth) + Math.floor(row / tileHeight);
            return ratio % 2 == 0 ? color : otherColor;
        });
        return tex;
    }
}