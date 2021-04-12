import { Game } from "../core/game/game.js";
import { PlayerInput } from "../core/game/players/player-input.js";
import { HtmlRenderer } from "./renderer/html-renderer.js";
export { CanvasRenderer } from "./renderer/canvas-renderer.js";
export { HtmlCanvasInput } from "./player-input/html-canvas-input.js";

export class GameWeb {
    constructor(htmlWindow, htmlCanvas, maxFps = 60) {
        const intervalMilliSeconds = Math.ceil(1 / maxFps * 1000);
        const renderer = new HtmlRenderer(htmlCanvas);
        const screenInput = new HtmlCanvasInput(htmlCanvas);
        const playerInput = new PlayerInput();
        screenInput.register(playerInput);
        htmlWindow.onresize = () => { screenInput.update(); };
        this.game = new Game(renderer, playerInput);

        setInterval(() => game.tick(), intervalMilliSeconds);
    }
}