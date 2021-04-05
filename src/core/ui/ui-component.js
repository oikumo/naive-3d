class UiComponent {
    constructor(rect, backgroundColor) {
        this.rect = rect;
        this.backgroundColor = () => backgroundColor;
    }

    inside(point) {
        return this.rect.inside(point);
    }
}

export function createUiComponent(rect, backgroundColor) {
    return new UiComponent(rect, backgroundColor);
}

export function drawUiComponent(component, target, targetWidth) {
    const color = component.backgroundColor;
    const rect = component.rect;
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const size = width * height;
    const dx = Math.floor(rect.topLeft.x);
    const dy = Math.floor(rect.topLeft.y);
    const targetWidthFloor = Math.floor(targetWidth);

    let col = 0;
    let row = 0;
    for (let i = 0; i < size; i++) {
        target[(col + dx) + ((row + dy) * targetWidthFloor)] = color();
        if (col + 1 === width) {
            col = 0;
            row++;
        }
        else {
            col++;
        }
    }
}