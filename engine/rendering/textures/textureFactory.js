import { textures } from '../../../index.js';
import { CheckerFiller } from './fillers/checkerFiller.js';

export class TextureFactory {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    checker(color, otherColor, tileWidth, tileHeigth) {
        const texture = textures.createTexture(this.width, this.heigth);
        const filler = new CheckerFiller(color, otherColor, tileWidth, tileHeigth);
        texture.fill(filler);
        return texture;
    }
}