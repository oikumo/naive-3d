export class Viewport {
    constructor(screen, width, height) {        
        this.screen = screen;
        this.width = width;
        this.height = height;
        this.cursorU = 0;
        this.cursorV = 0;
    }
    cursorUpdate(event) {
        this.cursorU = Math.floor(clamp((event.x - this.screen.xOffset + this.screen.xOffsetWindow), 0, this.screen.xOffsetWidth) / this.screen.xOffsetWidth * this.width);
        this.cursorV = Math.floor(clamp((event.y - this.screen.yOffset + this.screen.yOffsetWindow), 0, this.screen.yOffsetHeight) / this.screen.yOffsetHeight * this.height);
    }
}