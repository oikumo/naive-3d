import { equals, test } from 'naive-tests'
import { Entity } from '../../js/engine/world/entity.mjs'

test('entity dummy', () => {
    let entity = new Entity(2, 2, 100, 100)
    equals(entity.center.x, 2)
    equals(entity.center.y, 2)
    equals(entity.dim.width, 100)
    equals(entity.dim.height, 100)
})