export class Renderer {
    static create(customRenderer) {
        this.customRenderer = customRenderer;
    }

    get tex() {
        return this.customRenderer.texture;
    }

    get width() {
        return this.customRenderer.width;
    }

    get height() {
        return this.customRenderer.height;
    }

    draw() {
        this.customRenderer.draw();
    }

    clear(color) {
        this.clear(color);
    }
}