const UiComponent = function (rect, backgroundColor) {
    this.rect = rect
    this.backgroundColor = () => backgroundColor
}

const createUiComponent = (rect, backgroundColor) => {
    return new UiComponent(rect, backgroundColor)
}

const drawUiComponent = (component, target, targetWidth) => {
    const width = component.width
    const size = component.width * component.height
    const topX = component.rect.topLeft.x
    const topY = component.rect.topLeft.y
    const color = component.backgroundColor
    let col = 0
    let row = 0
    for (let i = 0; i < size; i++) {
        target[Math.ceil(topX + col) + Math.ceil(topY + row) * targetWidth] = color()
        if (col + 1 == width) {
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