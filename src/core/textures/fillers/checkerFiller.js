export class CheckerFiller {
    constructor(color, otherColor, tileWidth, tileHeight) {
        this.color = color;
        this.otherColor = otherColor;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }
    getColor(col, row) {
        const ratio = Math.floor(col / this.tileWidth) + Math.floor(row / this.tileHeight);
        return ratio % 2 == 0 ? this.color : this.otherColor;
    }
}