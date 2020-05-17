export function CanvasRenderer(canvas) {    
    this.width = canvas.width
    this.height = canvas.height
    this.context2D = canvas.getContext("2d")
    this.imageData = this.context2D.createImageData(this.width, this.height)
}

CanvasRenderer.prototype.draw = function (renderTextureBuffer) {
    this.imageData.data.set(renderTextureBuffer)
    this.context2D.putImageData(this.imageData, 0, 0)
}

CanvasRenderer.prototype.imageSize = function () { 
    return this.imageData.data.length
}