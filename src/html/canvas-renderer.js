export class CanvasRenderer {
    constructor(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.context2D = canvas.getContext("2d");
        this.imageData = this.context2D.createImageData(this.width, this.height);
    }

    draw(renderTextureBuffer) {
        this.imageData.data.set(renderTextureBuffer);
        this.context2D.putImageData(this.imageData, 0, 0);
    }

    imageSize() {
        return this.imageData.data.length;
    }
}