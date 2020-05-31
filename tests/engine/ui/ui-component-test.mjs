import { equals, test } from 'naive-tests'
import { ui, createRectFromCorners } from '../../../index.mjs'
const { createUiComponent, drawUiComponent } = ui

test('draw ui component', () => {
    const rect = createRectFromCorners({ x: 5, y: 5 }, { x: 5, y: 5 })
    const backgroundColor = 0xFF555555
    const component = createUiComponent(rect, backgroundColor)

    const targetTextureWidth = 10
    const targetTextureHeight = 20
    const targetTexture = new Uint32Array(targetTextureWidth * targetTextureHeight)

    drawUiComponent(component, targetTexture, targetTextureWidth)

    const componentTop = component.rect.topLeft
    const componentWidth = component.rect.width
    const componentHight = component.rect.height
    const targetTextureSize = targetTextureWidth * targetTextureHeight
    let col = 0
    let row = 0
    for (let i = 0; i < targetTextureSize; i++) {
        if (componentTop.x <= col && col < componentTop.x + componentWidth
            && componentTop.y <= row && row < componentTop.y + componentHight) {
            equals(targetTexture[i], backgroundColor)
        }
        else {
            equals(targetTexture[i], 0)
        }
        if (col + 1 == targetTextureWidth) {
            col = 0
            row++
        }
        else {
            col++
        }
    }
})