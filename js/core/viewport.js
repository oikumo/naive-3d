export class Viewport {
    constructor() {        
    }
    
    init(xOffset, yOffset, xOffsetWidth, yOffsetHeight, xOffsetWindow, yOffsetWindow, width, height){
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.xOffsetWidth = xOffsetWidth;
        this.yOffsetHeight = yOffsetHeight;
        this.xOffsetWindow = xOffsetWindow;
        this.yOffsetWindow = yOffsetWindow;
        this.width = width;
        this.height = height;
        this.cursorU = 0;
        this.cursorV = 0;
    }

    cursorUpdate(event) {
        this.cursorU = Math.floor(clamp((event.x - this.xOffset + this.xOffsetWindow), 0, this.xOffsetWidth) / this.xOffsetWidth * this.width);
        this.cursorV = Math.floor(clamp((event.y - this.yOffset + this.yOffsetWindow), 0, this.yOffsetHeight) / this.yOffsetHeight * this.height);
    }
}