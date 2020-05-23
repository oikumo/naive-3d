import { equals, test } from 'naive-tests'
import { Entity } from '../js/engine/world/entity.mjs'

test('entity movement', () => {
    const entity = new Entity(2, 2)
    equals(entity.center.posX, 2)
})