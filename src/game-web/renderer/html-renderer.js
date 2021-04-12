import { RenderTexture } from "../../core/renderer/render-texture.js";
import { CanvasRenderer } from "./canvas-renderer.js";

export class HtmlRenderer {
    constructor(canvas) {
        this.canvasRender = new CanvasRenderer(canvas);
        this.renderTex = new RenderTexture(this.canvasRender.imageSize());
    }

    get tex() {
        return this.renderTex.texture;
    }

    get width() {
        return this.canvasRender.width;
    }

    get height() {
        return this.canvasRender.height;
    }

    draw() {
        this.canvasRender.draw(this.renderTex.buf8);
    }

    clear(color) {
        this.renderTex.clear(color);
    }
}