export class Renderer {
    constructor() {
        this.lastRenderTime = 0.0;
        this.context2D;
        this.imageData;
    }

    init(canvas) {
        this.context2D = canvas.getContext("2d");
        this.imageData = this.context2D.createImageData(canvas.width, canvas.height);
        this.context2D.putImageData(this.imageData, 0, 0);
    }

    draw(data) {
        let i, dataIndex = 0;
        let img = this.imageData.data;
        let n = img.length;
    
        for (i=0; i < n; i+=4) {
          img[i] = data[dataIndex++]// r
          img[i+1] = 0; // g
          img[i+2] = 0; // b
          img[i+3] = 255; // a
        }
    
        this.context2D.putImageData(this.imageData, 0, 0);
    }
}