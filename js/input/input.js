import {Sprite} from '../geometry/sprite.js'
import { TextureFactory } from '../geometry/textures/textureFactory.js';

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
        const texture = new TextureFactory(80,200).checker()   
        this.scene.addSprite(
            new Sprite({x: this.viewport.cursorU,y: this.viewport.cursorV},
            texture)
        )
    }
}