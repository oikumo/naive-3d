export class Screen {
    constructor(canvas) {
        this.xOffset = canvas.offsetLeft
        this.yOffset = canvas.offsetTop
        this.xOffsetWidth = canvas.offsetWidth
        this.yOffsetHeight = canvas.offsetHeight
        this.xOffsetWindow = window.pageXOffset
        this.yOffsetWindow = window.pageYOffset
    }
}