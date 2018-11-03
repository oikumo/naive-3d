import {Sprite} from '../../geometry/sprite.js'
import {TextureFactory} from '../../textures/textureFactory.js'
import {Pallete} from '../../colors/pallete.js'

export function create(x, y) {        
    const pallete = new Pallete()
    const texture = new TextureFactory(200,200).checker(pallete.color[0], pallete.color[4], 10, 10)   
    return new Sprite({x: x,y: y}, texture)
}