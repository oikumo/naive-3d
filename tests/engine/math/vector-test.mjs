import { assertions, test } from 'naive-tests'
import { moveTo } from '../../../index.mjs'
const { equals } = assertions

test('move a point using interpolation', () => {
    const movement = moveTo({ x: 2, y: 2 }, { x: 3, y: 2 })
    let point
    for (let i = 0; i <= 1; i += 0.1) {
        point = movement(i)
    }
    equals(point.x, 3)
    equals(point.y, 3)
})