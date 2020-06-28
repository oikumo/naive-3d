import { assertions, test } from 'naive-tests'
import { ui } from '../../../index.mjs'
const { UiRect } = ui
const { equals, objAreEquals } = assertions

test('ui rect create', () => {
    const rect = new UiRect({ x: 45, y: 65 }, 10, 20)
    objAreEquals(rect, {
        width: 10,
        height: 20,
        topLeft: { x: 45, y: 65 },
        bottomRight: { x: 55, y: 85 },
    })
})

test('ui rect create claped to floor position and dimension', () => {
    const rect = new UiRect({ x: 45, y: 65.1 }, 10.11, 20.9)
    const clampedRect = UiRect.floor(rect)

    objAreEquals(clampedRect, {
        width: 10,
        height: 20,
        topLeft: { x: 45, y: 65 },
        bottomRight: { x: 55, y: 85 },
    })
})

test('ui rect translate', () => {
    const rect = new UiRect({ x: 45, y: 65 }, 10, 20)
    rect.translate({ x: 5, y: 1})
    objAreEquals(rect, {
        width: 10,
        height: 20,
        topLeft: { x: 50, y: 66 },
        bottomRight: { x: 60, y: 86 },
    })
})

test('ui rect check if a point is inside of it', () => {
    const rect = new UiRect({ x: 45, y: 65 }, 30, 20)
    equals(rect.inside({ x: 50, y: 65 }, rect), true)
    equals(rect.inside({ x: 0, y: 0 }, rect), false)
})