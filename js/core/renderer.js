export class Renderer {
    constructor() {
        this.lastRenderTime = 0.0;
        this.context2D;
        this.imageData;
    }

    init(canvas, width, height) {
        this.context2D = canvas.getContext("2d");
        this.imageData = this.context2D.createImageData(width, height);
        this.context2D.putImageData(this.imageData, 0, 0);
    }

    draw(data) {
        let i = 0, position = 0;
        let img = this.imageData.data;
        let n = img.length;
        let color;
        for (i = 0; i < n; i+=4) {
            color = data[position++];
            img[i] = color > 150 ? 255 : 0  // r
            img[i+1] = color == 100 ? 255 : 0; // g
            img[i+2] = color > 125 ? 12 :0; // b
            img[i+3] = 255; // a
        }    
        this.context2D.putImageData(this.imageData, 0, 0);
    }
}