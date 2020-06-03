const UiComponent = function (rect, backgroundColor) {
    this.rect = rect
    this.backgroundColor = () => backgroundColor
}

const UiRect = function (position, width, height) {
    this.width = width
    this.height = height
    this.topLeft = { x: position.x, y: position.y }
    this.bottomRight = { x: position.x + this.width, y: position.y + this.height}
}

UiRect.prototype.translate = function({x, y}) {    
    this.topLeft.x += x
    this.topLeft.y += y
    this.bottomRight.x += x
    this.bottomRight.y += y 
}

UiRect.prototype.inside = function(point) {
    return this.topLeft.y <= point.y && point.y <= this.bottomRight.y
    && this.topLeft.x <= point.x && point.x <= this.bottomRight.x
}

UiComponent.prototype.inside = function (point) {
    return this.rect.inside(point)
}

const createUiComponent = (rect, backgroundColor) => {
    return new UiComponent(rect, backgroundColor)
}

const drawUiComponent = (component, target, targetWidth) => {
    const color = component.backgroundColor
    const rect = component.rect
    const width = rect.width
    const size = rect.width * rect.height

    const dx = rect.topLeft.x
    const dy = rect.topLeft.y

    let col = 0
    let row = 0

    for (let i = 0; i < size; i++) {
        target[(col + dx) + (row + dy) * targetWidth] = color()
        if (col + 1 === width) {
            col = 0
            row++
        }
        else {
            col++
        }
    }
}

export {
    createUiComponent,
    drawUiComponent,
    UiRect
}