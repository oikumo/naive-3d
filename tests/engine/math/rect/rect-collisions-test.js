import { assertions, test } from 'naive-tests'
import { rectInOther, createRectFromCenter, createRectFromCorners } from '../../../../index.js'
const { equals } = assertions

test('rect point in other using Rect', () => {
    const container = createRectFromCenter({ x: 100, y: 100 }, 200, 200)
    const inside = createRectFromCenter({ x: 110, y: 110 }, 20, 20)
    const rect1rect2 = rectInOther(inside, container)
    equals(rect1rect2.length, 4)
    const rect2rect1 = rectInOther(container, inside)
    equals(rect2rect1.length, 0)
})

test('rect point in other and viceversa', () => {
    const rect1 = createRectFromCorners({ x: 10, y: 30 }, { x: 30, y: 10 })
    const rect2 = createRectFromCorners({ x: 15, y: 50 }, { x: 50, y: 20 })

    const rect1rect2 = rectInOther(rect1, rect2)
    equals(rect1rect2.length, 1)
    equals(rect1rect2[0].x, 30)
    equals(rect1rect2[0].y, 30)

    const rect2rect1 = rectInOther(rect2, rect1)
    equals(rect2rect1.length, 1)
    equals(rect2rect1[0].x, 15)
    equals(rect2rect1[0].y, 20)
})

test('rect points inside other rect', () => {
    const container = createRectFromCorners({ x: 10, y: 50 }, { x: 50, y: 0 })
    const inside = createRectFromCorners({ x: 20, y: 40 }, { x: 30, y: 25 })

    const pointsInside = rectInOther(inside, container)
    equals(pointsInside.length, 4)
    equals(pointsInside[0].x, 20)
    equals(pointsInside[0].y, 40)
    equals(pointsInside[1].x, 30)
    equals(pointsInside[1].y, 40)
    equals(pointsInside[2].x, 20)
    equals(pointsInside[2].y, 25)
    equals(pointsInside[3].x, 30)
    equals(pointsInside[3].y, 25)
})