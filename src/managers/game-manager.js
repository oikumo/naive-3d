import { Timer } from '../core/time/timer.js';
import { Renderer } from '../core/renderer/renderer.js';

export class GameManager {
    constructor(renderer, playerInput) {
        this.renderer = Renderer.create(renderer);
        this.playerInput = playerInput;
        this.scene = null;
        this.timer = new Timer();
    }

    loadScene(scene) {
        this.timer.start();
        this.scene = scene;
        this.scene.setPlayerInput(this.playerInput);
    }

    tick() {
        if (!this.scene) return;
        this.renderer.clear();
        this.timer.step();
        this.scene.tick(this.timer.deltaSeconds());
        this.renderer.draw();
    }
}