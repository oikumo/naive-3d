const UiRect = function (position, width, height) {
    this.width = width
    this.height = height
    this.topLeft = { x: position.x, y: position.y }
    this.bottomRight = { x: position.x + this.width, y: position.y + this.height }
}

UiRect.prototype.translate = function ({ x, y }) {
    this.topLeft.x += x
    this.topLeft.y += y
    this.bottomRight.x += x
    this.bottomRight.y += y
}

UiRect.prototype.inside = function (point) {
    return this.topLeft.y <= point.y && point.y < this.bottomRight.y
        && this.topLeft.x <= point.x && point.x < this.bottomRight.x
}

export {
    UiRect
}