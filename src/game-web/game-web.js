import { Game } from "../game-2d/game-2d.js";
import { PlayerInput } from "../game-2d/players/player-input.js";
import { HtmlRenderer } from "./renderer/html-renderer.js";
import { HtmlCanvasInput } from "./player-input/html-canvas-input.js";
import { Color } from "../core/colors/color.js";

export class GameWeb {
    constructor(htmlWindow, htmlCanvas, maxFps = 60) {
        const intervalMilliSeconds = Math.ceil(1 / maxFps * 1000);
        const renderer = new HtmlRenderer(htmlCanvas);
        const screenInput = new HtmlCanvasInput(htmlCanvas);
        const playerInput = new PlayerInput();
        screenInput.register(playerInput);
        htmlWindow.onresize = () => { screenInput.update(); };
        this.game = new Game(renderer, playerInput);

        renderer.clear(Color.yellow);

        setInterval(() => {
            // console.log(createUUID());
            renderer.draw();
        }, intervalMilliSeconds);
    }
}