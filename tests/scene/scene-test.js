import { assert, test } from "naive-tests";
import { Scene } from "../../src/scene/scene.js";
import { Entity } from "../../src/scene/entity.js";

test('scene adding entities',() => {
    const scene = new Scene();
    assert.equals(0, scene.id);
    assert.equals(0, scene.entities.size);

    const entity = new Entity();
    assert.objAreEquals(entity ,scene.addEntity(entity));
    assert.equals(1, scene.entities.size);
});

test('scene adding not valid entities',() => {
    const scene = new Scene();
    assert.equals(0, scene.id);
    assert.equals(0, scene.entities.size);

    assert.equals(null, scene.addEntity({}));
    assert.isNull(scene.addEntity({}));
    assert.equals(0, scene.entities.size);
});