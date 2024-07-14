import { assert, test } from "naive-tests";
import { Entity } from "../../src/scene/entity.js";
import { vector3, vector3Zero } from "../../src/core/math/vector/vector3.js";

test('scene entity creation with default values',() => {
    const entity = new Entity();
    assert.equals(0, entity.position[0]);
    assert.equals(0, entity.position[1]);
    assert.equals(0, entity.position[2]);
});

test('scene entity creation with arguments',() => {
    const position = vector3Zero();
    const entity = new Entity(position);
    assert.equals(0, entity.position[0]);
    assert.equals(0, entity.position[1]);
    assert.equals(0, entity.position[2]);
});