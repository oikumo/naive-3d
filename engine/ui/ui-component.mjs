const UiComponent = function (rect, backgroundColor) {
    this.rect = rect
    this.backgroundColor = () => backgroundColor
}

const createUiComponent = (rect, backgroundColor) => {
    return new UiComponent(rect, backgroundColor)
}

const drawUiComponent = (component, target, targetWidth) => {
    const color = component.backgroundColor
    const rect = component.rect
    const width = rect.width
    const size = rect.width * rect.height

    const dx = rect.bottomLeft.x
    const dy = rect.bottomLeft.y

    let col = 0
    let row = 0

    for (let i = 0; i < size; i++) {
        target[(dx + col) + (dy + row) * targetWidth] = color()
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