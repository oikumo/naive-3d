export class Input {
    constructor(viewport, onMouseDown) {        
        canvas.onmousemove = this.onMouseMove.bind(this)
        canvas.onmousedown = onMouseDown
        this.viewport = viewport
    }
    onMouseMove(event) {
        this.viewport.cursorUpdate(event)
    }
}