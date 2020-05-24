import { equals, test } from 'naive-tests'
import { Entity, moveTo } from '../../js/engine/world/entity.mjs'

test('entity movement', () => {
    let entity = new Entity(2, 2)
    equals(entity.center.x, 2)
    equals(entity.center.y, 2)

    const movement = moveTo(entity.center, { x: 3, y: 2 })

    for (let i = 0; i <= 1; i += 0.1) {
        entity.center = movement(i)
    }

    equals(entity.center.x, 3)
    equals(entity.center.y, 2)
})