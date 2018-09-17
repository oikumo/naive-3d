import {Texture} from '../geometry/texture.js'
import {Sprite} from '../geometry/sprite.js'

export class Input {
    constructor(viewport, scene) {        
        let canvas = document.getElementById("canvas");
        canvas.onmousemove = (event) => this.onMouseMove(event);
        canvas.onmousedown = this.onMouseDown.bind(this);
        this.scene = scene;
        this.viewport = viewport;
    }
    onMouseMove(event) {
        this.viewport.cursorUpdate(event);
    }
    onMouseDown () {    
        this.scene.addEntity(this.viewport.cursorU, this.viewport.cursorV);
        console.log(this.scene.shapes[0]);

        let tex2 = new Texture(100,100, 255);
        this.scene.addSprite(new Sprite({x: this.viewport.cursorU,y: this.viewport.cursorV}, tex2));
    }
}