import {Texture} from './texture.js' 
import {CheckerFiller} from './fillers/checkerFiller.js'
import {Pallete} from '../pallete.js'

export class TextureFactory {
    constructor(width, heigth) {
        this.width = width
        this.heigth = heigth
    }
    checker() {
        const texture = new Texture(this.width, this.heigth, 255)    
        const pallete = new Pallete()     
        const filler = new CheckerFiller(pallete.color[0], pallete.color[4])        
        texture.fill(filler)
        return texture
    }
}