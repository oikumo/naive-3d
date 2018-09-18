import {Texture} from '../geometry/texture.js'
import {Sprite} from '../geometry/sprite.js'

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
        this.scene.addSprite(
            new Sprite({x: this.viewport.cursorU,y: this.viewport.cursorV},
            new Texture(100,100, 255))
        )
    }
}