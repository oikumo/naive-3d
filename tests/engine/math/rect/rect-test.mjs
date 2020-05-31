import { equals, objAreEquals, test } from 'naive-tests'
import { createRectFromCenter, createRectFromCorners, inRect } from '../../../../engine/math/rect/rect.mjs'

test('rect creation from center and dimensions', () => {
    const rect = createRectFromCenter({ x: 50, y: 50 }, 10, 30)
    objAreEquals(rect, {
        center: { x: 50, y: 50 },
        width: 10,
        height: 30,
        topLeft: { x: 45, y: 65 },
        topRight: { x: 55, y: 65 },
        bottomLeft: { x: 45, y: 35 },
        bottomRight: { x: 55, y: 35 },
    })
})

test('rect creation from corner points', () => {
    const rect = createRectFromCorners({ x: 45, y: 65 }, { x: 55, y: 35 })
    objAreEquals(rect, {
        center: { x: 50, y: 50 },
        width: 10,
        height: 30,
        topLeft: { x: 45, y: 65 },
        topRight: { x: 55, y: 65 },
        bottomLeft: { x: 45, y: 35 },
        bottomRight: { x: 55, y: 35 },
    })
})

test('check if a point is inside a rect', () => {
    const rect = createRectFromCorners({ x: 45, y: 65 }, { x: 55, y: 35 })
    equals(inRect({ x: 50, y: 50 }, rect), true)
    equals(inRect({ x: 0, y: 0 }, rect), false)
})