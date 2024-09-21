import { HtmlCanvasInput } from "./html-canvas-input.js";
import { PlayerInput } from "./player-input.js";

export class InputManager {
    constructor(htmlWindow, htmlCanvas){
        this.screenInput = new HtmlCanvasInput(htmlCanvas);
        this.playerInput = new PlayerInput();
        this.screenInput.register(this.playerInput);
        htmlWindow.onresize = () => { this.screenInput.update(); };
    }
}