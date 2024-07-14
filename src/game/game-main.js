import { HtmlRenderer } from "../managers/renderer/html-renderer.js";
import { HtmlCanvasInput } from "../managers/input/html-canvas-input.js";
import { Color } from "../core/colors/color.js";
import { GameManager } from "../managers/game/game-manager.js";
import { PlayerInput } from "../managers/input/player-input.js";
import { InputManager } from "../managers/input/input-manager.js";
import { Scene } from "../scene/scene.js";

export class GameMain {
    constructor(htmlWindow, htmlCanvas, maxFps = 60) {
        this.drawPeriod = GameMain.calculateDrawPeriod(maxFps);
        this.renderer = new HtmlRenderer(htmlCanvas);
        this.input = new InputManager(htmlWindow, htmlCanvas);
        this.game = new GameManager(this.renderer, this.input.playerInput);
   
        this.scene = new Scene();
        this.game.loadScene(this.scene);
    }

    run() {
        setInterval(() => {
            this.game.tick();
        }, this.drawPeriod);
    }

    static calculateDrawPeriod(fps) {
        return Math.ceil(1 / fps * 1000);
    }
}