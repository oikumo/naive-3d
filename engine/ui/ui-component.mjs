const UiComponent = function (rect, position, backgroundColor) {
    this.rect = rect
    this.position = position
    this.backgroundColor = () => backgroundColor
}

UiComponent.prototype.inside = function (point) {
    return point.y <= this.position.y + this.rect.bottomRight.y
        && point.y > this.position.y - this.rect.topLeft.y
        && point.x >= this.rect.topLeft.x + this.position.x
        && point.x <= this.rect.bottomRight.x + this.position.x
}

const createUiComponent = (rect, position, backgroundColor) => {
    return new UiComponent(rect, position, backgroundColor)
}

const drawUiComponent = (component, target, targetWidth) => {
    const color = component.backgroundColor
    const rect = component.rect
    const position = component.position

    const width = rect.width
    const size = rect.width * rect.height

    const dx = position.x
    const dy = position.y

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
    drawUiComponent
}