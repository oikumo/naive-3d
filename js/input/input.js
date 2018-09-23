import {Sprite} from '../geometry/sprite.js'
import {TextureFactory} from '../geometry/textures/textureFactory.js'
import {Pallete} from '../geometry/pallete.js'

export class Input {
    constructor(viewport, scene) {        
        let canvas = document.getElementById("canvas")
        canvas.onmousemove = this.onMouseMove.bind(this)
        canvas.onmousedown = this.onMouseDown.bind(this)
        this.scene = scene
        this.viewport = viewport
    }
    onMouseMove(event) {
        this.viewport.cursorUpdate(event)
    }
    onMouseDown () {    
        this.scene.addEntity(this.viewport.cursorU, this.viewport.cursorV, 444444444)
        const pallete = new Pallete()
        const texture = new TextureFactory(200,200).checker(pallete.color[0], pallete.color[4], 10, 10)   
        this.scene.addSprite(
            new Sprite({x: this.viewport.cursorU,y: this.viewport.cursorV},
            texture)
        )
    }
}