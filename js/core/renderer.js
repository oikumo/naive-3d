export class Renderer {
    constructor() {
        this.lastRenderTime = 0.0;
        this.context2D;
        this.imageData;
        this.colors = new Uint8Array([
            0 ,0 ,0,
            255,  0,   0,
            0,  255,   0,
            0,    0, 255,
            255, 125, 255
        ]);
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
            img[i] = this.colors[color * 3];        // r
            img[i+1] = this.colors[color * 3 + 1];  // g
            img[i+2] = this.colors[color * 3  + 2]; // b
            img[i+3] = 255; // a
        }
        this.context2D.putImageData(this.imageData, 0, 0);        
    }
}