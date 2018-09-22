export class CheckerFiller {
    constructor (color, otherColor) {
        this.color = color
        this.otherColor = otherColor
    }
    getColor(col, row, middleCols, middleRows) {
        return col < middleRows && row < middleCols 
            || col >= middleRows && row >= middleCols 
            ? this.color : this.otherColor
    }
}
