import { Timer } from '../../core/time/timer.js';
import { Renderer } from '../../core/renderer/renderer.js';
import { Color } from '../../core/colors/color.js';

export class GameManager {
    constructor(renderer, playerInput) {
        this.renderer = renderer;
        this.playerInput = playerInput;
        this.scene = null;
        this.timer = new Timer();
    }

    loadScene(scene) {
        this.timer.start();
        this.scene = scene;
    }

    tick() {
        //this.renderer.clear(Color.black);
        this.timer.step();
        if (this.scene) {
            this.scene.draw(this.renderer, this.timer.deltaSeconds());
        }
        this.renderer.draw();
    }
}