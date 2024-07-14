import { HtmlRenderer } from "../managers/renderer/html-renderer.js";
import { HtmlCanvasInput } from "../managers/player-input/html-canvas-input.js";
import { Color } from "../core/colors/color.js";
import { GameManager } from "../managers/game-manager.js";
import { PlayerInput } from "./players/player-input.js";

export class GameMain {
    constructor(htmlWindow, htmlCanvas, maxFps = 60) {
        const intervalMilliSeconds = Math.ceil(1 / maxFps * 1000);
        const renderer = new HtmlRenderer(htmlCanvas);
        const screenInput = new HtmlCanvasInput(htmlCanvas);
        const playerInput = new PlayerInput();
        screenInput.register(playerInput);
        htmlWindow.onresize = () => { screenInput.update(); };
        
        this.game = new GameManager(renderer, playerInput);

        renderer.clear(Color.yellow);

        setInterval(() => {
            renderer.draw();
        }, intervalMilliSeconds);
    }
}