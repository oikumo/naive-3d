import { equals, objAreEquals, test } from 'naive-tests'
import { ui, createRectFromCorners } from '../../../index.mjs'
const { createUiComponent, drawUiComponent } = ui

test('create ui component', () => {
    const backgroundColor = 0xFF555555
    const rect = createRectFromCorners({ x: 45, y: 65 }, { x: 55, y: 35 })
    const component = createUiComponent(rect, backgroundColor)
    equals(component.backgroundColor(), backgroundColor)
    objAreEquals(component.rect, {
        center: { x: 50, y: 50 },
        width: 10,
        height: 30,
        topLeft: { x: 45, y: 65 },
        topRight: { x: 55, y: 65 },
        bottomLeft: { x: 45, y: 35 },
        bottomRight: { x: 55, y: 35 },
    })
})

const inComponent = (col, row, component) => {
    const xMin = component.rect.topLeft.x
    const xMax = component.rect.topRight.x

    const yMin = component.rect.bottomRight.y
    const yMax = component.rect.topLeft.y

    return xMin <= col && col < xMax
        && yMin <= row && row < yMax
}

test('draw ui component', () => {
    const rect = createRectFromCorners({ x: 2, y: 5 }, { x: 4, y: 1 })
    equals(rect.width, 2)
    equals(rect.height, 4)
    const backgroundColor = 0xFF555555
    const component = createUiComponent(rect, backgroundColor)

    const pixelsWidth = 6
    const pixelsHeight = 7
    const pixelsSize = pixelsWidth * pixelsHeight
    const pixles = new Uint32Array(pixelsSize)

    drawUiComponent(component, pixles, pixelsWidth)

    let paintedPixels = 0
    const componenentSize = rect.width * rect.height

    let col = 0
    let row = 0
    for (let i = 0; i < pixelsSize; i++) {
        if (inComponent(col, row, component)) {
            equals(pixles[i], backgroundColor)
            paintedPixels++
        }
        else {
            equals(pixles[i], 0)
        }

        if (col + 1 == pixelsWidth) {
            col = 0
            row++
        }
        else {
            col++
        }
    }

    equals(paintedPixels, componenentSize)
})