import {Texture} from './texture.js' 
import {CheckerFiller} from './fillers/checkerFiller.js'

export class TextureFactory {
    constructor(width, heigth) {
        this.width = width
        this.heigth = heigth
    }
    checker(color, otherColor, tileWidth, tileHeigth) {
        const texture = new Texture(this.width, this.heigth)        
        const filler = new CheckerFiller(color, otherColor, tileWidth, tileHeigth)        
        texture.fill(filler)
        return texture
    }
}